# Turbo Pancake Tracker — CLAUDE.md

## Project overview

A single-page food tracking web app. No build step, no framework, no bundler — plain HTML/CSS/JS served as a static site. State is persisted to both `localStorage` (local cache) and a cloud API backed by PostgreSQL (source of truth on load).

## File structure

```
index.html   — HTML structure only, no inline CSS or JS
styles.css   — all visual styles
app.js       — all application logic
```

Never consolidate back into a single file.

## Architecture

### Data flow

```
FOOD_OPTIONS (static)
    └─► buildAllButtons() → DOM pills
         └─► renderCustomButtons() → appends custom pills from selectedItems
              └─► refreshSelectedVisuals() → applies .selected / qty display
                   └─► updateProgress() → reads selectedItems → updates progress bars
```

### State

| Variable | Type | Purpose |
|---|---|---|
| `selectedItems` | `{ [dateKey]: { m1: { [group]: Item[] }, m2: { [group]: Item[] } } }` | live in-session state |
| `logs` | `{ [dateKey]: { selected, notes, savedAt } }` | persisted to localStorage |
| `estimateCache` | `{ [labelKey]: { cal, protein, fibre } }` | nutrition lookup cache |
| `selectedMonthYear` | `{ year, month }` | monthly page tab state |

`selectedItems` is the live working copy. `logs` is what gets written to `localStorage.nourishLogs`.

### Meal / group structure

Both Meal 1 and Meal 2 share identical groups: **carb → protein → veg → fruit → fat**

`protein_m1` and `protein_m2` in `FOOD_OPTIONS` are separate arrays (M1 has Edamame + Greek Yogurt; M2 does not). All other groups are shared references.

### Custom pills

- Created from the textarea inputs (`m1-protein-custom`, etc.) on Enter or blur
- Stored in `selectedItems[date][meal][group]` with `isCustom: true`
- Identified by `getDisplayLabel(item)` — always `${emoji} ${name}`, never rely on `item.label` alone
- Custom pills with `qty = 0` stay in the data list (deselected, not deleted) until the user taps ×
- `removeCustomPill(meal, group, opt, pillElement)` — removes from data AND removes the DOM element directly; does NOT call `buildAllButtons()`

### Label identity rule

**Always use `getDisplayLabel(item)` as the canonical label**, not `item.label`. The `exists` check in `renderCustomButtons` and the match in `refreshSelectedVisuals` both use `getDisplayLabel`. Mixing `item.label` with `getDisplayLabel` causes silent mismatches and pills disappearing.

### None pill behaviour

- Tapping 🚫 None **clears the entire group list** then adds None
- Tapping None again deselects it (toggles off)
- Implementation: `list.splice(0, list.length)` then `list.push(noneItem)` in `createFoodButton`

## Key functions

| Function | What it does |
|---|---|
| `buildAllButtons()` | Wipes all 10 containers and rebuilds from `FOOD_OPTIONS` |
| `renderCustomButtons(dateKey)` | Appends any `isCustom` items from `selectedItems` that aren't already in the DOM |
| `refreshSelectedVisuals(dateKey)` | Resets all pill state then re-applies `.selected` + qty text from `selectedItems` |
| `updateProgress()` | Recalculates totals from `selectedItems` and updates progress bars + meal badges |
| `loadDay(dateKey)` | Full reload: `buildAllButtons` → restore from `logs` → `renderCustomButtons` → `refreshSelectedVisuals` → `updateProgress` |
| `normalizeItem(item)` | Normalises `baseQty`/`qty` for a single item; preserves `qty = 0`; repairs missing `label` |
| `toggleSection(headerEl)` | Collapses/expands the sibling `.meal-body` or `.food-group-body`; toggles chevron |

## Nutrition targets

```js
TARGETS = { cal: 1450, protein: 95, fibre: 30 }
```

Progress bars cap at 100%. Stored in-code — edit `TARGETS` in `app.js` to change.

## Data range

- Tracking starts **1 April 2026** (`APP_START = { year: 2026, month: 3 }`)
- Monthly tabs show **April–December 2026** only, skipping future months
- No restriction on day navigation in the Today tab

## CSS design tokens

```css
--coral:    #f91616   /* primary accent, Meal 1 */
--teal:     #00fff2c9 /* Meal 2 accent */
--orange:   #fb923c
--bg:       #081f42   /* page background */
--card:     #1e2e46   /* card background */
--input-bg: #111826   /* pill / input background */
--muted:    #9eaac0   /* secondary text */
--border:   #2a3444
```

Font stack: `Source Code Pro` (body), `Bungee` (nav title + save button).

## Hosting & deployment

- **Server:** EC2 instance, `ssh ec2`
- **URL:** `https://turbopancake.hellovalerie.com`
- **Stack:** Traefik (SSL + routing) → nginx container (static files + `/api/` proxy) → Node.js API container → shared PostgreSQL
- **Static files:** served from `/data/turbopancake/` on the EC2 host
- **Docker config:** `/srv/turbopancake/` — `docker-compose.yml`, `nginx.conf`, `api/` (Dockerfile + api.js)
- **Database:** `turbopancake` database on `shared-postgres` container, `logs` table (`date TEXT PRIMARY KEY, entry JSONB`)

### Deploy static files

```bash
rsync -av app.js styles.css index.html ec2:/data/turbopancake/
```

### After changing nginx.conf

```bash
docker exec turbopancake nginx -s reload
```

### Rebuild API after changing api/api.js

```bash
ssh ec2 "cd /srv/turbopancake && docker build -t turbopancake-api ./api && docker compose up -d turbopancake-api"
```

## API

`GET /api/logs` — returns all logs as `{ [YYYY-MM-DD]: { selected, notes, savedAt } }`  
`POST /api/logs` — body `{ date, entry }`, upserts by date

On page load, `loadAllFromCloud()` fetches all logs and merges into `localStorage`, preferring whichever copy has a newer `savedAt`. On save, `saveToCloud()` POSTs the day's entry in the background (failures are silent — localStorage is the fallback).

## localStorage keys

| Key | Contents |
|---|---|
| `nourishLogs` | `{ [YYYY-MM-DD]: { selected, notes, savedAt } }` |
| `turboPancakeCustomEstimates` | `{ [labelKey]: { cal, protein, fibre, source } }` |

## Common mistakes to avoid

- **Do not** call `buildAllButtons()` inside `removeCustomPill` — it's a full rebuild that's unnecessary and previously caused cross-section contamination. Remove the pill from DOM directly.
- **Do not** use `Number(item.qty) || baseQty` — this erases `qty = 0`. Use `normalizeItem()` or an explicit zero-check.
- **Do not** match items by `item.label` directly — use `getDisplayLabel(item)`.
- **Do not** use `Object.values(mealData)` when you need the group key — use `Object.entries`.
- `refreshSelectedVisuals` must check **both** `data-meal` and `data-group` attributes, not just `data-meal`, to prevent cross-group highlight bleed.
- The `estimateFromKeywords` function was rewritten by the user with a grouped structure — do not revert to the old flat `map` array.

## Collapsible UI

- `.meal-header` → `onclick="toggleSection(this)"` → toggles `.meal-body.collapsed`
- `.food-group-label` → `onclick="toggleSection(this)"` → toggles `.food-group-body.collapsed`
- Chevron text: `▾` (open) / `▸` (collapsed)

## Sticky progress bar

`.card.sticky-progress` is full-width (breaks out of page padding via `margin: 0 -16px`) with no border radius. Background: `rgba(35, 68, 100, 1)`. Sticks below the nav at `top: 100px`.
