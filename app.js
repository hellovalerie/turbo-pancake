// ─── DATA ───────────────────────────────────────────────────────────────────

const FOOD_OPTIONS = {
  carb: [
    { name: 'Chia Pudding', emoji: '🥣', unit: 'bowl', baseQty: 0.5, cal: 150, protein: 5, fibre: 5 },
    { name: 'Noodles', emoji: '🍜', unit: 'bowl', baseQty: 0.5, cal: 80, protein: 3, fibre: 1 },
    { name: 'None', emoji: '🚫', unit: 'none', baseQty: 0.5, cal: 0, protein: 0, fibre: 0 },
    { name: 'Pasta', emoji: '🍝', unit: 'bowl', baseQty: 0.5, cal: 100, protein: 3.5, fibre: 1.5 },
    { name: 'Potato', emoji: '🥔', unit: 'none', baseQty: 0.5, cal: 65, protein: 1.5, fibre: 1.5 },
    { name: 'Rice', emoji: '🍚', unit: 'bowl', baseQty: 0.5, cal: 100, protein: 2, fibre: 0.4 },
    { name: 'Sourdough', emoji: '🍞', unit: 'slice', baseQty: 0.5, cal: 60, protein: 2, fibre: 0.5 }
  ],
  protein_m1: [
    { name: 'Beef', emoji: '🥩', unit: 'grams', baseQty: 50, cal: 110, protein: 13, fibre: 0 },
    { name: 'Chicken', emoji: '🍗', unit: 'grams', baseQty: 50, cal: 82, protein: 15.5, fibre: 0 },
    { name: 'Edamame', emoji: '🫛', unit: 'serving', baseQty: 0.5, cal: 60, protein: 6, fibre: 3 },
    { name: 'Egg', emoji: '🥚', unit: 'none', baseQty: 0.5, cal: 36, protein: 3.1, fibre: 0 },
    { name: 'Fish', emoji: '🐟', unit: 'grams', baseQty: 50, cal: 70, protein: 11, fibre: 0 },
    { name: 'Greek Yogurt', emoji: '🥛', unit: 'cup', baseQty: 0.5, cal: 65, protein: 11, fibre: 0 },
    { name: 'None', emoji: '🚫', unit: 'none', baseQty: 0.5, cal: 0, protein: 0, fibre: 0 },
    { name: 'Pork', emoji: '🍖', unit: 'grams', baseQty: 50, cal: 105, protein: 13, fibre: 0 },
    { name: 'Sardines', emoji: '🐟', unit: 'can', baseQty: 0.5, cal: 95, protein: 11, fibre: 0 },
    { name: 'Tofu', emoji: '🟨', unit: 'block', baseQty: 0.5, cal: 80, protein: 9, fibre: 1 }
  ],
  protein_m2: [
    { name: 'Beef', emoji: '🥩', unit: 'grams', baseQty: 50, cal: 110, protein: 13, fibre: 0 },
    { name: 'Chicken', emoji: '🍗', unit: 'grams', baseQty: 50, cal: 82, protein: 15.5, fibre: 0 },
    { name: 'Egg', emoji: '🥚', unit: 'none', baseQty: 0.5, cal: 36, protein: 3.1, fibre: 0 },
    { name: 'Fish', emoji: '🐟', unit: 'grams', baseQty: 50, cal: 70, protein: 11, fibre: 0 },
    { name: 'None', emoji: '🚫', unit: 'none', baseQty: 0.5, cal: 0, protein: 0, fibre: 0 },
    { name: 'Pork', emoji: '🍖', unit: 'grams', baseQty: 50, cal: 105, protein: 13, fibre: 0 },
    { name: 'Sardines', emoji: '🐟', unit: 'can', baseQty: 0.5, cal: 95, protein: 11, fibre: 0 },
    { name: 'Tofu', emoji: '🟨', unit: 'block', baseQty: 0.5, cal: 80, protein: 9, fibre: 1 }
  ],
  veg: [
    { name: 'Bok Choy', emoji: '🥬', unit: 'serving', baseQty: 0.5, cal: 8, protein: 0.8, fibre: 0.8 },
    { name: 'Broccoli', emoji: '🥦', unit: 'serving', baseQty: 0.5, cal: 18, protein: 1.5, fibre: 1.7 },
    { name: 'Cucumber + Tomato', emoji: '🥒', unit: 'serving', baseQty: 0.5, cal: 12, protein: 0.5, fibre: 0.7 },
    { name: 'Mixed Greens', emoji: '🥬', unit: 'serving', baseQty: 0.5, cal: 7, protein: 0.6, fibre: 0.6 },
    { name: 'Mushrooms', emoji: '🍄', unit: 'serving', baseQty: 0.5, cal: 11, protein: 1.5, fibre: 0.5 },
    { name: 'None', emoji: '🚫', unit: 'none', baseQty: 0.5, cal: 0, protein: 0, fibre: 0 },
    { name: 'Spinach', emoji: '🍃', unit: 'serving', baseQty: 0.5, cal: 12, protein: 1.4, fibre: 1.1 }
  ],
  fruit: [
    { name: 'Apple', emoji: '🍎', unit: 'none', baseQty: 0.5, cal: 47, protein: 0.2, fibre: 2.2 },
    { name: 'Banana', emoji: '🍌', unit: 'none', baseQty: 0.5, cal: 53, protein: 0.6, fibre: 1.5 },
    { name: 'Berries', emoji: '🫐', unit: 'none', baseQty: 0.5, cal: 35, protein: 0.5, fibre: 3 },
    { name: 'None', emoji: '🚫', unit: 'none', baseQty: 0.5, cal: 0, protein: 0, fibre: 0 },
    { name: 'Orange', emoji: '🍊', unit: 'none', baseQty: 0.5, cal: 31, protein: 0.6, fibre: 1.6 }
  ],
  fat: [
    { name: 'Almonds', emoji: '🌰', unit: 'serving', baseQty: 0.5, cal: 82, protein: 3, fibre: 1.7 },
    { name: 'Avocado', emoji: '🥑', unit: 'serving', baseQty: 0.5, cal: 80, protein: 1, fibre: 3.4 },
    { name: 'Butter', emoji: '🧈', unit: 'tbsp', baseQty: 0.5, cal: 51, protein: 0.1, fibre: 0 },
    { name: 'None', emoji: '🚫', unit: 'none', baseQty: 0.5, cal: 0, protein: 0, fibre: 0 },
    { name: 'Olive Oil', emoji: '🫒', unit: 'tbsp', baseQty: 0.5, cal: 60, protein: 0, fibre: 0 },
    { name: 'Sesame Oil', emoji: '🌾', unit: 'tbsp', baseQty: 0.5, cal: 60, protein: 0, fibre: 0 }
  ]
};

// Both meals now share the same groups
const MEAL_GROUPS = ['carb', 'protein', 'veg', 'fruit', 'fat'];

const TARGETS = { cal: 1450, protein: 95, fibre: 30 };
const LOGS_KEY = 'nourishLogs';
const ESTIMATE_CACHE_KEY = 'turboPancakeCustomEstimates';

// Monthly view: fixed range Apr–Dec 2026
const APP_START = { year: 2026, month: 3 }; // month is 0-indexed (3 = April)

let currentDate = new Date();
let currentDateStr = dateStr(currentDate);
let logs = JSON.parse(localStorage.getItem(LOGS_KEY) || '{}');
let selectedItems = {};
let estimateCache = JSON.parse(localStorage.getItem(ESTIMATE_CACHE_KEY) || '{}');

// Monthly page state: absolute { year, month }
const _now = new Date();
let selectedMonthYear = {
  year: 2026,
  month: Math.max(_now.getMonth(), APP_START.month)
};

// ─── UTILS ──────────────────────────────────────────────────────────────────

function dateStr(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function friendlyDate(d) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
}

function getWeekDates(weekOffset = 0) {
  const now = new Date();
  const day = now.getDay();
  const monday = new Date(now);
  monday.setDate(now.getDate() - (day === 0 ? 6 : day - 1) + weekOffset * 7);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  setTimeout(() => (t.style.display = 'none'), 2000);
}

function ensureDaySelection(dateKey) {
  if (!selectedItems[dateKey]) selectedItems[dateKey] = { m1: {}, m2: {} };
  if (!selectedItems[dateKey].m1) selectedItems[dateKey].m1 = {};
  if (!selectedItems[dateKey].m2) selectedItems[dateKey].m2 = {};
}

function normalizeItem(item) {
  if (!item || typeof item !== 'object') return item;
  const baseQty = Number(item.baseQty) || (item.unit === 'grams' ? 50 : 0.5);
  const rawQty = Number(item.qty);
  // Preserve qty=0 (deselected custom pill). Only fall back to baseQty when qty is missing/NaN.
  const qty = (rawQty === 0) ? 0 : (Number.isFinite(rawQty) && rawQty > 0 ? rawQty : baseQty);
  // Ensure label is always consistent with getDisplayLabel so matching never silently fails.
  const label = item.label || (item.emoji && item.name ? `${item.emoji} ${item.name}` : undefined);
  return { ...item, baseQty, qty, ...(label ? { label } : {}) };
}

function normalizeMealSelection(mealSelection) {
  const normalized = {};
  Object.entries(mealSelection || {}).forEach(([group, value]) => {
    if (Array.isArray(value)) {
      normalized[group] = value.map(normalizeItem).filter(Boolean);
    } else if (value && typeof value === 'object') {
      normalized[group] = [normalizeItem(value)].filter(Boolean);
    } else {
      normalized[group] = [];
    }
  });
  return normalized;
}

function normalizeSelected(selected) {
  return {
    m1: normalizeMealSelection(selected?.m1 || {}),
    m2: normalizeMealSelection(selected?.m2 || {})
  };
}

function getSelectedForGroup(dateKey, meal, group) {
  ensureDaySelection(dateKey);
  if (!Array.isArray(selectedItems[dateKey][meal][group])) selectedItems[dateKey][meal][group] = [];
  return selectedItems[dateKey][meal][group];
}

function persistEstimateCache() {
  localStorage.setItem(ESTIMATE_CACHE_KEY, JSON.stringify(estimateCache));
}

function cleanEstimate(n, fallback) {
  return Number.isFinite(n) && n >= 0 ? Math.round(n * 10) / 10 : fallback;
}

function estimateFromKeywords(label) {
  const txt = label.toLowerCase().trim();

  const groups = [
    {
      keys: ['chicken', 'beef', 'pork', 'fish', 'salmon', 'mackerel', 'tuna', 'shrimp', 'prawn', 'egg', 'eggs', 'tofu', 'sardine', 'sardines', 'turkey'],
      values: { cal: 90, protein: 12, fibre: 0, source: 'protein-estimate' }
    },
    {
      keys: ['beans', 'bean', 'lentils', 'lentil', 'chickpeas', 'chickpea', 'edamame', 'black beans', 'kidney beans'],
      values: { cal: 80, protein: 6, fibre: 3, source: 'plant-protein-estimate' }
    },
    {
      keys: ['rice', 'noodles', 'noodle', 'pasta', 'bread', 'wrap', 'wraps', 'toast', 'bun'],
      values: { cal: 100, protein: 3, fibre: 1, source: 'carb-estimate' }
    },
    {
      keys: ['potato', 'potatoes', 'sweet potato', 'sweet potatoes', 'oats', 'oatmeal', 'quinoa', 'barley'],
      values: { cal: 80, protein: 2, fibre: 2, source: 'starchy-carb-estimate' }
    },
    {
      keys: [
        'broccoli', 'spinach', 'bok choy', 'greens', 'mixed greens', 'lettuce',
        'mushroom', 'mushrooms', 'cucumber', 'tomato', 'tomatoes', 'zucchini',
        'capsicum', 'pepper', 'peppers', 'cauliflower', 'cabbage', 'kale',
        'asparagus', 'eggplant', 'aubergine', 'okra', 'carrot', 'carrots'
      ],
      values: { cal: 12, protein: 1, fibre: 1, source: 'veg-estimate' }
    },
    {
      keys: ['apple', 'banana', 'berries', 'berry', 'orange', 'pear', 'grapes', 'melon', 'kiwi', 'mango', 'pineapple'],
      values: { cal: 40, protein: 0.5, fibre: 2, source: 'fruit-estimate' }
    },
    {
      keys: ['olive oil', 'sesame oil', 'avocado', 'almonds', 'nuts', 'nut', 'walnuts', 'peanuts', 'cashews', 'butter', 'peanut butter'],
      values: { cal: 80, protein: 1, fibre: 1.5, source: 'fat-estimate' }
    },
    {
      keys: ['yogurt', 'yoghurt', 'milk', 'cottage cheese', 'cheese', 'skyr'],
      values: { cal: 70, protein: 8, fibre: 0, source: 'dairy-estimate' }
    }
  ];

  for (const group of groups) {
    if (group.keys.some(k => txt.includes(k))) {
      return { ...group.values };
    }
  }

  return { cal: 80, protein: 5, fibre: 1, source: 'fallback-estimate' };
}

function getDefaultUnit(label) {
  const txt = label.toLowerCase();
  if (txt.includes('rice') || txt.includes('noodle') || txt.includes('pasta') || txt.includes('pudding')) return 'bowl';
  if (txt.includes('sourdough') || txt.includes('bread')) return 'slice';
  if (txt.includes('yogurt')) return 'cup';
  if (txt.includes('sardine')) return 'can';
  if (txt.includes('edamame') || txt.includes('broccoli') || txt.includes('bok choy') || txt.includes('spinach') || txt.includes('greens') || txt.includes('mushroom') || txt.includes('cucumber') || txt.includes('tomato')) return 'serving';
  if (txt.includes('chicken') || txt.includes('pork') || txt.includes('beef') || txt.includes('fish') || txt.includes('salmon') || txt.includes('mackerel')) return 'grams';
  if (txt.includes('tofu')) return 'block';
  return 'none';
}

function getStepForUnit(unit) {
  return unit === 'grams' ? 50 : 0.5;
}

function formatQtyDisplay(qty, unit) {
  if (unit === 'grams') return `${qty}g`;
  if (unit === 'tbsp') return `${qty} tbsp`;
  return `${qty}`;
}

function getDisplayLabel(item) {
  if (item.label && !item.name) return item.label;
  const emoji = item.emoji || '🍽️';
  const name = item.name || item.label || 'Custom';
  return `${emoji} ${name}`;
}

function isNoneOption(item) {
  return (item.name || '').toLowerCase() === 'none';
}

function sortOptionsAlphabetically(options) {
  return [...options].sort((a, b) => {
    if (isNoneOption(a) && !isNoneOption(b)) return 1;
    if (!isNoneOption(a) && isNoneOption(b)) return -1;
    return (a.name || '').localeCompare(b.name || '');
  });
}

function sortPillsInContainer(container) {
  const pills = Array.from(container.querySelectorAll('.food-pill'));
  const normalize = (txt) => txt.replace(/^\s*[^A-Za-z0-9]+\s*/g, '').toLowerCase();
  pills.sort((a, b) => {
    const aNone = a.classList.contains('none-pill');
    const bNone = b.classList.contains('none-pill');
    if (aNone && !bNone) return 1;
    if (!aNone && bNone) return -1;
    return normalize(getLabelFromBtn(a)).localeCompare(normalize(getLabelFromBtn(b)));
  });
  pills.forEach(p => container.appendChild(p));
}

async function fetchNutritionEstimateOnline(label) {
  const cacheKey = label.trim().toLowerCase();
  if (estimateCache[cacheKey]) return estimateCache[cacheKey];

  const fallback = estimateFromKeywords(label);
  try {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 4500);
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(label)}&search_simple=1&action=process&json=1&page_size=6`;
    const res = await fetch(url, { signal: ctrl.signal });
    clearTimeout(timeout);
    if (!res.ok) throw new Error('lookup-failed');

    const data = await res.json();
    const products = Array.isArray(data.products) ? data.products : [];
    let best = null;

    products.forEach(p => {
      const n = p.nutriments || {};
      const cal100 = Number(n['energy-kcal_100g']);
      const protein100 = Number(n.proteins_100g);
      const fibre100 = Number(n.fiber_100g);
      if (!Number.isFinite(cal100) || !Number.isFinite(protein100)) return;

      const servingFactor = 0.8;
      const candidate = {
        cal: cleanEstimate(cal100 * servingFactor, fallback.cal),
        protein: cleanEstimate(protein100 * servingFactor, fallback.protein),
        fibre: cleanEstimate((Number.isFinite(fibre100) ? fibre100 : fallback.fibre) * servingFactor, fallback.fibre),
        source: 'openfoodfacts-estimate'
      };
      if (!best || candidate.protein > best.protein) best = candidate;
    });

    const estimate = best || fallback;
    estimateCache[cacheKey] = estimate;
    persistEstimateCache();
    return estimate;
  } catch (_err) {
    estimateCache[cacheKey] = fallback;
    persistEstimateCache();
    return fallback;
  }
}

// ─── COLLAPSE TOGGLES ────────────────────────────────────────────────────────

function toggleSection(headerEl) {
  const body = headerEl.nextElementSibling;
  if (!body) return;
  body.classList.toggle('collapsed');
  const chevron = headerEl.querySelector('.collapse-chevron');
  if (chevron) chevron.textContent = body.classList.contains('collapsed') ? '▸' : '▾';
}

// ─── BUTTON SETUP ───────────────────────────────────────────────────────────

function createFoodButton(opt, meal, group) {
  const pill = document.createElement('div');
  pill.className = 'food-pill';
  if (opt.isCustom) pill.classList.add('custom-pill');
  if (isNoneOption(opt)) pill.classList.add('none-pill');
  pill.dataset.label = getDisplayLabel(opt);
  pill.dataset.meal = meal;
  pill.dataset.group = group;
  pill.dataset.unit = opt.unit || 'none';

  const labelBtn = document.createElement('button');
  labelBtn.className = 'pill-label';
  labelBtn.textContent = getDisplayLabel(opt);

  // None pills: selecting clears all other choices in the group; re-tapping deselects
  if (isNoneOption(opt)) {
    labelBtn.onclick = () => {
      const list = getSelectedForGroup(currentDateStr, meal, group);
      const displayLabel = getDisplayLabel(opt);
      const idx = list.findIndex(x => getDisplayLabel(x) === displayLabel);
      if (idx >= 0) {
        // Already selected → deselect None
        list.splice(idx, 1);
      } else {
        // Selecting None → wipe everything in this group, then add None
        list.splice(0, list.length);
        list.push({ ...opt, label: displayLabel, qty: getMinQty(opt), baseQty: opt.baseQty || getMinQty(opt) });
      }
      refreshSelectedVisuals(currentDateStr);
      updateProgress();
    };
  } else {
    labelBtn.onclick = () => setItemQty(meal, group, opt, getMinQty(opt));
  }

  const controls = document.createElement('div');
  controls.className = 'pill-controls';

  if (!isNoneOption(opt)) {
    const minus = document.createElement('button');
    minus.className = 'pill-step-btn';
    minus.textContent = '-';
    minus.onclick = () => adjustItemQty(meal, group, opt, -getStepForOption(opt));

    const qtySpan = document.createElement('span');
    qtySpan.className = 'pill-qty';
    qtySpan.textContent = formatQtyDisplay(0, opt.unit || 'none');

    const plus = document.createElement('button');
    plus.className = 'pill-step-btn';
    plus.textContent = '+';
    plus.onclick = () => adjustItemQty(meal, group, opt, getStepForOption(opt));

    controls.appendChild(minus);
    controls.appendChild(qtySpan);
    controls.appendChild(plus);
  }

  if (opt.isCustom) {
    const removeCustom = document.createElement('button');
    removeCustom.className = 'pill-delete-custom';
    removeCustom.textContent = '×';
    removeCustom.title = 'Delete custom pill';
    removeCustom.onclick = () => removeCustomPill(meal, group, opt, pill);
    controls.appendChild(removeCustom);
  }

  pill.appendChild(labelBtn);
  pill.appendChild(controls);
  return pill;
}

function buildFoodButtons(containerId, options, meal, group) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  sortOptionsAlphabetically(options).forEach(opt => {
    container.appendChild(createFoodButton(opt, meal, group));
  });
}

function getLabelFromBtn(btn) {
  return btn.dataset.label || btn.querySelector('.pill-label')?.textContent || btn.textContent;
}

function getStepForOption(opt) {
  return getStepForUnit(opt.unit || 'none');
}

function getMinQty(opt) {
  if (isNoneOption(opt)) return 0.5;
  return getStepForOption(opt);
}

function findItemByLabel(list, displayLabel) {
  return list.find(x => getDisplayLabel(x) === displayLabel);
}

function setItemQty(meal, group, opt, qty) {
  const key = currentDateStr;
  const list = getSelectedForGroup(key, meal, group);
  const displayLabel = getDisplayLabel(opt);
  const existing = findItemByLabel(list, displayLabel);
  const minQty = getMinQty(opt);
  const safeQty = Math.round(qty * 100) / 100;

  if (safeQty < minQty) {
    const idx = list.findIndex(x => getDisplayLabel(x) === displayLabel);
    if (idx >= 0) {
      if (list[idx].isCustom) {
        list[idx].qty = 0;
      } else {
        list.splice(idx, 1);
      }
    }
  } else if (existing) {
    existing.qty = safeQty;
  } else {
    list.push({ ...opt, label: displayLabel, qty: safeQty, baseQty: opt.baseQty || minQty });
  }

  refreshSelectedVisuals(key);
  updateProgress();
}

function adjustItemQty(meal, group, opt, delta) {
  const key = currentDateStr;
  const list = getSelectedForGroup(key, meal, group);
  const displayLabel = getDisplayLabel(opt);
  const existing = findItemByLabel(list, displayLabel);
  const currentQty = existing ? Number(existing.qty) || getMinQty(opt) : getMinQty(opt);
  setItemQty(meal, group, opt, currentQty + delta);
}

function removeCustomPill(meal, group, opt, pillElement) {
  const key = currentDateStr;
  const list = getSelectedForGroup(key, meal, group);
  const displayLabel = getDisplayLabel(opt);
  const idx = list.findIndex(x => getDisplayLabel(x) === displayLabel);
  if (idx >= 0) list.splice(idx, 1);

  if (pillElement && pillElement.parentNode) {
    pillElement.remove();
  } else {
    const container = document.getElementById(getContainerId(meal, group));
    if (container) {
      const found = Array.from(container.querySelectorAll('.food-pill'))
        .find(btn => getLabelFromBtn(btn) === displayLabel);
      if (found) found.remove();
    }
  }

  updateProgress();
}

function buildAllButtons() {
  // M1: carb, protein, veg, fruit, fat
  buildFoodButtons('m1-carb-opts',     FOOD_OPTIONS.carb,       'm1', 'carb');
  buildFoodButtons('m1-protein-opts',  FOOD_OPTIONS.protein_m1, 'm1', 'protein');
  buildFoodButtons('m1-veg-opts',      FOOD_OPTIONS.veg,        'm1', 'veg');
  buildFoodButtons('m1-fruit-opts',    FOOD_OPTIONS.fruit,      'm1', 'fruit');
  buildFoodButtons('m1-fat-opts',      FOOD_OPTIONS.fat,        'm1', 'fat');
  // M2: carb, protein, veg, fruit, fat
  buildFoodButtons('m2-carb-opts',     FOOD_OPTIONS.carb,       'm2', 'carb');
  buildFoodButtons('m2-protein-opts',  FOOD_OPTIONS.protein_m2, 'm2', 'protein');
  buildFoodButtons('m2-veg-opts',      FOOD_OPTIONS.veg,        'm2', 'veg');
  buildFoodButtons('m2-fruit-opts',    FOOD_OPTIONS.fruit,      'm2', 'fruit');
  buildFoodButtons('m2-fat-opts',      FOOD_OPTIONS.fat,        'm2', 'fat');
}

function getContainerId(meal, group) {
  return `${meal}-${group}-opts`;
}

function renderCustomButtons(dateKey) {
  ['m1', 'm2'].forEach(meal => {
    const mealData = selectedItems[dateKey]?.[meal] || {};
    Object.entries(mealData).forEach(([group, items]) => {
      const container = document.getElementById(getContainerId(meal, group));
      if (!container || !Array.isArray(items)) return;
      items.filter(item => item?.isCustom).forEach(item => {
        // Use getDisplayLabel as single source of truth — avoids stale item.label mismatches
        const displayLabel = getDisplayLabel(item);
        const exists = Array.from(container.querySelectorAll('.food-pill'))
          .some(btn => getLabelFromBtn(btn) === displayLabel);
        if (!exists) container.appendChild(createFoodButton(item, meal, group));
      });
      sortPillsInContainer(container);
    });
  });
}

function refreshSelectedVisuals(dateKey) {
  document.querySelectorAll('.food-pill').forEach(btn => {
    btn.classList.remove('selected', 'meal2-pill');
    const qtyEl = btn.querySelector('.pill-qty');
    if (qtyEl) qtyEl.textContent = formatQtyDisplay(0, btn.dataset.unit || 'none');
  });

  ['m1', 'm2'].forEach(meal => {
    const mealData = selectedItems[dateKey]?.[meal] || {};
    Object.entries(mealData).forEach(([group, items]) => {
      (Array.isArray(items) ? items : []).forEach(item => {
        if (!item || (Number(item.qty) || 0) <= 0) return;
        const qty = Number(item.qty || item.baseQty || 0);
        const unit = item.unit || 'none';
        // Use getDisplayLabel as single source of truth — avoids stale item.label mismatches
        const displayLabel = getDisplayLabel(item);
        document.querySelectorAll('.food-pill').forEach(btn => {
          if (
            btn.dataset.meal === meal &&
            btn.dataset.group === group &&
            getLabelFromBtn(btn) === displayLabel
          ) {
            btn.classList.add('selected');
            if (meal === 'm2') btn.classList.add('meal2-pill');
            const qtyEl = btn.querySelector('.pill-qty');
            if (qtyEl) qtyEl.textContent = formatQtyDisplay(qty, unit);
          }
        });
      });
    });
  });
}

function parseCustomInputId(inputId) {
  const m = inputId.match(/^(m[12])-(carb|protein|veg|fruit|fat)-custom$/);
  if (!m) return null;
  return { meal: m[1], group: m[2] };
}

function addCustomPillFromInput(inputId) {
  const el = document.getElementById(inputId);
  const value = el.value.trim();
  if (!value) return;

  const parsed = parseCustomInputId(inputId);
  if (!parsed) return;

  const { meal, group } = parsed;
  const key = currentDateStr;
  const estimate = estimateFromKeywords(value);
  const unit = getDefaultUnit(value);
  const step = getStepForUnit(unit);
  const item = {
    name: value,
    emoji: '🆕',
    label: `🆕 ${value}`,
    cal: estimate.cal,
    protein: estimate.protein,
    fibre: estimate.fibre,
    unit,
    baseQty: step,
    qty: step,
    isCustom: true,
    needsLookup: true,
    source: estimate.source
  };

  const list = getSelectedForGroup(key, meal, group);
  if (!list.some(x => (x.name || x.label || '').toLowerCase() === value.toLowerCase())) {
    list.push(item);
  }
  el.value = '';

  renderCustomButtons(key);
  refreshSelectedVisuals(key);
  updateProgress();
}

function setupCustomInputs() {
  const ids = [
    'm1-carb-custom', 'm1-protein-custom', 'm1-veg-custom', 'm1-fruit-custom', 'm1-fat-custom',
    'm2-carb-custom', 'm2-protein-custom', 'm2-veg-custom', 'm2-fruit-custom', 'm2-fat-custom'
  ];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        addCustomPillFromInput(id);
      }
    });
    el.addEventListener('blur', () => addCustomPillFromInput(id));
  });
}

// ─── PROGRESS/TOTALS ────────────────────────────────────────────────────────

function sumItems(items, totals) {
  (Array.isArray(items) ? items : []).forEach(item => {
    if (!item) return;
    const qty = Number(item.qty);
    const baseQty = Number(item.baseQty);
    const factor = Number.isFinite(qty) && Number.isFinite(baseQty) && baseQty > 0 ? qty / baseQty : 1;
    totals.cal += (Number(item.cal) || 0) * factor;
    totals.protein += (Number(item.protein) || 0) * factor;
    totals.fibre += (Number(item.fibre) || 0) * factor;
  });
}

function calcTotalsFromSelected(selected) {
  const totals = { cal: 0, protein: 0, fibre: 0 };
  ['m1', 'm2'].forEach(meal => {
    const mealData = selected?.[meal] || {};
    Object.values(mealData).forEach(groupItems => sumItems(groupItems, totals));
  });
  return totals;
}

function calcTotals(dateKey) {
  const current = selectedItems[dateKey];
  if (current) return calcTotalsFromSelected(current);

  const saved = logs[dateKey];
  if (!saved) return { cal: 0, protein: 0, fibre: 0 };
  return calcTotalsFromSelected(normalizeSelected(saved.selected || {}));
}

function updateProgress() {
  const { cal, protein, fibre } = calcTotals(currentDateStr);

  const pRawPct = Math.round((protein / TARGETS.protein) * 100);
  const cRawPct = Math.round((cal / TARGETS.cal) * 100);
  const fRawPct = Math.round((fibre / TARGETS.fibre) * 100);

  document.getElementById('prog-protein').style.width = `${Math.min(100, pRawPct)}%`;
  document.getElementById('prog-cal').style.width = `${Math.min(100, cRawPct)}%`;
  document.getElementById('prog-fibre').style.width = `${Math.min(100, fRawPct)}%`;

  document.getElementById('prog-protein-val').textContent = `${Math.round(protein)}/${TARGETS.protein}g`;
  document.getElementById('prog-cal-val').textContent = `${Math.round(cal)}/${TARGETS.cal}`;
  document.getElementById('prog-fibre-val').textContent = `${Math.round(fibre)}/${TARGETS.fibre}g`;

  document.getElementById('prog-protein-pct').textContent = `${pRawPct}%`;
  document.getElementById('prog-cal-pct').textContent = `${cRawPct}%`;
  document.getElementById('prog-fibre-pct').textContent = `${fRawPct}%`;

  const m1 = selectedItems[currentDateStr]?.m1 || {};
  const m2 = selectedItems[currentDateStr]?.m2 || {};
  const m1Count = Object.values(m1).reduce((acc, arr) => acc + (Array.isArray(arr) ? arr.filter(x => (Number(x.qty) || 0) > 0).length : 0), 0);
  const m2Count = Object.values(m2).reduce((acc, arr) => acc + (Array.isArray(arr) ? arr.filter(x => (Number(x.qty) || 0) > 0).length : 0), 0);
  document.getElementById('m1-complete').textContent = m1Count >= 3 ? '✅ Looking good!' : '';
  document.getElementById('m2-complete').textContent = m2Count >= 3 ? '✅ Looking good!' : '';
}

// ─── SAVE/LOAD DAY ──────────────────────────────────────────────────────────

async function hydrateCustomItemsWithOnlineEstimates(dateKey) {
  const day = selectedItems[dateKey];
  if (!day) return 0;
  const pending = [];

  ['m1', 'm2'].forEach(meal => {
    Object.values(day[meal] || {}).forEach(items => {
      (Array.isArray(items) ? items : []).forEach(item => {
        if (item?.isCustom && item.needsLookup) pending.push(item);
      });
    });
  });

  if (!pending.length) return 0;

  for (const item of pending) {
    const est = await fetchNutritionEstimateOnline(item.label);
    item.cal = est.cal;
    item.protein = est.protein;
    item.fibre = est.fibre;
    item.needsLookup = false;
    item.source = est.source;
  }
  return pending.length;
}

async function saveToCloud(dateKey, entry) {
  try {
    await fetch('/api/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: dateKey, entry })
    });
  } catch (err) {
    console.warn('Cloud save failed (offline?)', err);
  }
}

async function loadAllFromCloud() {
  try {
    const res = await fetch('/api/logs');
    if (!res.ok) return;
    const cloudLogs = await res.json();
    let changed = false;
    for (const [date, entry] of Object.entries(cloudLogs)) {
      const localSaved = logs[date]?.savedAt;
      const cloudSaved = entry?.savedAt;
      if (!localSaved || (cloudSaved && cloudSaved > localSaved)) {
        logs[date] = entry;
        changed = true;
      }
    }
    if (changed) {
      localStorage.setItem(LOGS_KEY, JSON.stringify(logs));
      loadDay(currentDateStr);
    }
  } catch (err) {
    console.warn('Cloud load failed (offline?)', err);
  }
}

async function saveDay() {
  const key = currentDateStr;
  ensureDaySelection(key);
  const lookedUp = await hydrateCustomItemsWithOnlineEstimates(key);

  logs[key] = {
    selected: selectedItems[key],
    notes: document.getElementById('daily-notes').value,
    savedAt: new Date().toISOString()
  };

  localStorage.setItem(LOGS_KEY, JSON.stringify(logs));
  saveToCloud(key, logs[key]);
  refreshSelectedVisuals(key);
  updateProgress();
  showToast(lookedUp > 0 ? `✅ Saved + estimated ${lookedUp} custom pill(s)` : '✅ Day saved!');
}

function buildDayPrompt(dateKey) {
  const { cal, protein, fibre } = calcTotals(dateKey);
  const pPct = Math.round((protein / TARGETS.protein) * 100);
  const cPct = Math.round((cal / TARGETS.cal) * 100);
  const fPct = Math.round((fibre / TARGETS.fibre) * 100);

  const MEAL_LABELS = { m1: 'Meal 1 🌅', m2: 'Meal 2 🌙' };
  const GROUP_LABELS = { carb: '🌾 Carb', protein: '🥚 Protein', veg: '🥦 Vegetable', fruit: '🍊 Fruit', fat: '🧈 Fat' };

  const dayData = selectedItems[dateKey] || logs[dateKey]?.selected || {};

  let lines = [];
  lines.push(`📋 Food Log — ${dateKey}`);
  lines.push('');

  for (const [meal, mealLabel] of Object.entries(MEAL_LABELS)) {
    lines.push(`## ${mealLabel}`);
    const mealData = dayData[meal] || {};
    for (const group of MEAL_GROUPS) {
      const items = (mealData[group] || []).filter(x => Number(x.qty) > 0);
      if (items.length === 0) {
        lines.push(`  ${GROUP_LABELS[group]}: No logs found`);
      } else {
        const itemStrs = items.map(item => {
          const label = getDisplayLabel(item);
          const qty = Number(item.qty);
          const baseQty = Number(item.baseQty) || 1;
          const unit = item.unit || '';
          if (unit === 'grams') return `${label} (${Math.round(qty)}g)`;
          if (unit === 'tbsp') return `${label} (${qty} tbsp)`;
          if (unit === 'none' || !unit) return qty === 1 ? label : `${label} ×${qty}`;
          return `${label} (${qty} ${unit})`;
        });
        lines.push(`  ${GROUP_LABELS[group]}: ${itemStrs.join(', ')}`);
      }
    }
    lines.push('');
  }

  lines.push(`## 📊 Nutrition Totals`);
  lines.push(`  Protein: ${Math.round(protein)}g / ${TARGETS.protein}g (${pPct}%)`);
  lines.push(`  Calories: ${Math.round(cal)} / ${TARGETS.cal} (${cPct}%)`);
  lines.push(`  Fibre: ${Math.round(fibre)}g / ${TARGETS.fibre}g (${fPct}%)`);

  const notes = (logs[dateKey]?.notes || document.getElementById('daily-notes')?.value || '').trim();
  if (notes) {
    lines.push('');
    lines.push(`## 📝 Daily Notes`);
    lines.push(`  ${notes}`);
  }

  return lines.join('\n');
}

async function copyLog() {
  const prompt = buildDayPrompt(currentDateStr);
  try {
    await navigator.clipboard.writeText(prompt);
    showToast('📋 Log copied to clipboard!');
  } catch {
    showToast('⚠️ Could not copy — try again');
  }
}

function loadDay(dateKey) {
  buildAllButtons();
  ensureDaySelection(dateKey);

  const inputIds = [
    'm1-carb-custom', 'm1-protein-custom', 'm1-veg-custom', 'm1-fruit-custom', 'm1-fat-custom',
    'm2-carb-custom', 'm2-protein-custom', 'm2-veg-custom', 'm2-fruit-custom', 'm2-fat-custom',
    'daily-notes'
  ];
  inputIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  if (logs[dateKey]) {
    selectedItems[dateKey] = normalizeSelected(logs[dateKey].selected || {});
    if (logs[dateKey].notes) document.getElementById('daily-notes').value = logs[dateKey].notes;
  } else if (!selectedItems[dateKey]) {
    selectedItems[dateKey] = { m1: {}, m2: {} };
  }

  renderCustomButtons(dateKey);
  refreshSelectedVisuals(dateKey);
  updateProgress();
}

// ─── DAY NAVIGATION ─────────────────────────────────────────────────────────

function changeDay(delta) {
  currentDate.setDate(currentDate.getDate() + delta);
  currentDateStr = dateStr(currentDate);
  renderDayHeader();
  loadDay(currentDateStr);
}

function renderDayHeader() {
  const today = dateStr(new Date());
  const isToday = currentDateStr === today;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const isYest = currentDateStr === dateStr(yesterday);

  document.getElementById('dayLabel').textContent = isToday ? 'Today' : isYest ? 'Yesterday' : friendlyDate(currentDate);
  document.getElementById('daySubLabel').textContent = isToday ? friendlyDate(currentDate) : currentDateStr;
  document.getElementById('todayLabel').textContent = friendlyDate(new Date());
}

// ─── WEEKLY PAGE ─────────────────────────────────────────────────────────────

let currentWeekOffset = 0;

function renderWeekSelector() {
  const sel = document.getElementById('week-selector');
  sel.innerHTML = '';
  for (let i = -2; i <= 0; i++) {
    const btn = document.createElement('button');
    btn.className = 'week-btn' + (i === currentWeekOffset ? ' active' : '');
    btn.textContent = i === 0 ? 'This week' : i === -1 ? 'Last week' : '2 weeks ago';
    btn.onclick = () => {
      currentWeekOffset = i;
      renderWeekSelector();
      renderWeekly();
    };
    sel.appendChild(btn);
  }
}

function calcTotalsFromLog(dateKey) {
  const saved = logs[dateKey];
  if (!saved) return { cal: 0, protein: 0, fibre: 0 };
  return calcTotalsFromSelected(normalizeSelected(saved.selected || {}));
}

function renderWeekly() {
  const dates = getWeekDates(currentWeekOffset);
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const todayStr = dateStr(new Date());

  let totalCal = 0, totalProtein = 0, totalFibre = 0;
  let loggedDays = 0, proteinDays = 0, fibreDays = 0;

  const dayData = dates.map((d, i) => {
    const key = dateStr(d);
    const logged = !!logs[key];
    if (logged) {
      loggedDays++;
      const t = calcTotalsFromLog(key);
      totalCal += t.cal;
      totalProtein += t.protein;
      totalFibre += t.fibre;
      if (t.protein >= TARGETS.protein * 0.8) proteinDays++;
      if (t.fibre >= TARGETS.fibre * 0.7) fibreDays++;
    }
    return { dayName: dayNames[i], logged, isToday: key === todayStr };
  });

  const avgCal = loggedDays > 0 ? Math.round(totalCal / loggedDays) : 0;
  const avgProtein = loggedDays > 0 ? Math.round(totalProtein / loggedDays) : 0;
  const avgFibre = loggedDays > 0 ? Math.round(totalFibre / loggedDays) : 0;
  const consistency = Math.round((loggedDays / 7) * 100);

  let html = '';
  html += '<div class="card"><div class="card-title">📆 Days Logged</div><div class="streak-row">';
  dayData.forEach(({ dayName, logged, isToday }) => {
    const cls = `streak-day ${logged ? 'logged' : 'empty'}${isToday ? ' today' : ''}`;
    html += `<div class="${cls}">${dayName}</div>`;
  });
  html += '</div></div>';

  html += `<div class="stat-grid">
    <div class="stat-card"><div class="stat-num" style="color:var(--coral)">${loggedDays}/7</div><div class="stat-label">Days logged</div><div class="stat-sub" style="color:${consistency >= 70 ? 'var(--green)' : 'var(--orange)'}">${consistency}% consistency</div></div>
    <div class="stat-card"><div class="stat-num" style="color:#60a5fa">${avgProtein}g</div><div class="stat-label">Avg protein/day</div><div class="stat-sub">Target: ${TARGETS.protein}g</div></div>
    <div class="stat-card"><div class="stat-num" style="color:#84cc16">${avgFibre}g</div><div class="stat-label">Avg fibre/day</div><div class="stat-sub">Target: ${TARGETS.fibre}g</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--orange)">${avgCal}</div><div class="stat-label">Avg calories/day</div><div class="stat-sub">Target: ${TARGETS.cal}</div></div>
  </div>`;

  if (loggedDays === 0) {
    html += '<div class="empty-state"><div class="empty-emoji">📋</div><p>No days logged this week yet.<br>Start tracking on the Today tab!</p></div>';
  } else {
    html += generateWeeklyInsights(loggedDays, avgProtein, avgFibre, avgCal, consistency, proteinDays, fibreDays);
  }

  document.getElementById('weekly-content').innerHTML = html;
}

function generateWeeklyInsights(loggedDays, avgProtein, avgFibre, avgCal, consistency, proteinDays, fibreDays) {
  let html = '<div class="section-title">💡 Weekly Analysis</div>';

  if (consistency >= 70) html += `<div class="insight good"><div class="insight-title">✅ Consistency</div>You logged ${loggedDays} of 7 days. Excellent tracking momentum.</div>`;
  if (avgProtein >= 80) html += `<div class="insight good"><div class="insight-title">✅ Protein trend</div>Average protein is ${avgProtein}g/day. Solid support for muscle maintenance.</div>`;
  if (avgFibre >= 20) html += `<div class="insight good"><div class="insight-title">✅ Fibre support</div>Average fibre is ${avgFibre}g/day, which is helping gut health and satiety.</div>`;

  if (avgProtein < 70) html += `<div class="insight warn"><div class="insight-title">⚠️ Protein needs attention</div>Average is ${avgProtein}g/day. Add an extra egg, sardines, tofu, or chicken to close the gap.</div>`;
  if (avgFibre < 18) html += `<div class="insight warn"><div class="insight-title">⚠️ Fibre is low</div>Average is ${avgFibre}g/day. Add berries, lentils, oats, broccoli, or avocado more often.</div>`;
  if (avgCal < 1100) html += `<div class="insight warn"><div class="insight-title">⚠️ Under-fuelling</div>Average ${avgCal} calories/day is very low. Consider adding olive oil, nuts, or an extra carb portion.</div>`;

  if (proteinDays < 4) html += `<div class="insight tip"><div class="insight-title">💡 Protein consistency tip</div>You hit 80% protein target on ${proteinDays} day(s). Try locking one high-protein option in each meal.</div>`;
  if (fibreDays < 4) html += `<div class="insight tip"><div class="insight-title">💡 Fibre consistency tip</div>You hit 70% fibre target on ${fibreDays} day(s). A fruit + veg + legume combo each day helps quickly.</div>`;

  return html;
}

// ─── MONTHLY PAGE ────────────────────────────────────────────────────────────

// Tabs span April–December 2026 only; future months beyond today are omitted.
function renderMonthTabs() {
  const tabs = document.getElementById('month-tabs');
  tabs.innerHTML = '';
  const now = new Date();
  const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  for (let m = APP_START.month; m <= 11; m++) {
    const year = 2026;
    // Skip months that haven't started yet
    if (year > now.getFullYear() || (year === now.getFullYear() && m > now.getMonth())) continue;

    const isActive = selectedMonthYear.year === year && selectedMonthYear.month === m;
    const btn = document.createElement('button');
    btn.className = 'month-tab' + (isActive ? ' active' : '');
    btn.textContent = `${MONTH_NAMES[m]} ${year}`;
    btn.onclick = () => {
      selectedMonthYear = { year, month: m };
      renderMonthTabs();
      renderMonthly();
    };
    tabs.appendChild(btn);
  }
}

function renderMonthly() {
  const { year, month } = selectedMonthYear;
  const now = new Date();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthStart = new Date(year, month, 1);

  let totalCal = 0, totalProtein = 0, totalFibre = 0;
  let loggedDays = 0, proteinDays = 0, fibreDays = 0;

  for (let day = 1; day <= daysInMonth; day++) {
    const d = new Date(year, month, day);
    if (d > now) continue;
    const key = dateStr(d);
    if (logs[key]) {
      loggedDays++;
      const t = calcTotalsFromLog(key);
      totalCal += t.cal;
      totalProtein += t.protein;
      totalFibre += t.fibre;
      if (t.protein >= TARGETS.protein * 0.8) proteinDays++;
      if (t.fibre >= TARGETS.fibre * 0.7) fibreDays++;
    }
  }

  const possibleDays = Math.min(daysInMonth, Math.ceil((now - monthStart) / 86400000) + 1);
  const avgCal = loggedDays > 0 ? Math.round(totalCal / loggedDays) : 0;
  const avgProtein = loggedDays > 0 ? Math.round(totalProtein / loggedDays) : 0;
  const avgFibre = loggedDays > 0 ? Math.round(totalFibre / loggedDays) : 0;
  const consistency = possibleDays > 0 ? Math.round((loggedDays / possibleDays) * 100) : 0;

  const MONTH_NAMES_FULL = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  let html = `<div class="section-title">📅 ${MONTH_NAMES_FULL[month]} ${year} Summary</div>`;

  html += `<div class="protein-highlight">
    <div class="ph-title">Average daily protein</div>
    <div class="ph-num">${avgProtein}g</div>
    <div class="ph-target">Protein target: ${TARGETS.protein}g/day · Fibre target: ${TARGETS.fibre}g/day</div>
  </div>`;

  html += `<div class="stat-grid">
    <div class="stat-card"><div class="stat-num" style="color:var(--coral)">${loggedDays}</div><div class="stat-label">Days logged</div><div class="stat-sub">${consistency}% tracked</div></div>
    <div class="stat-card"><div class="stat-num" style="color:#60a5fa">${avgProtein}g</div><div class="stat-label">Avg protein</div><div class="stat-sub">${proteinDays} days at 80%+</div></div>
    <div class="stat-card"><div class="stat-num" style="color:#84cc16">${avgFibre}g</div><div class="stat-label">Avg fibre</div><div class="stat-sub">${fibreDays} days at 70%+</div></div>
    <div class="stat-card"><div class="stat-num" style="color:var(--orange)">${avgCal}</div><div class="stat-label">Avg calories</div><div class="stat-sub">Target: ${TARGETS.cal}</div></div>
  </div>`;

  if (loggedDays === 0) {
    html += '<div class="empty-state"><div class="empty-emoji">📭</div><p>No data logged this month yet.</p></div>';
  } else {
    html += generateMonthlyInsights(loggedDays, avgProtein, avgFibre, avgCal, consistency, proteinDays, fibreDays, possibleDays);
  }

  document.getElementById('monthly-content').innerHTML = html;
}

function generateMonthlyInsights(loggedDays, avgProtein, avgFibre, avgCal, consistency, proteinDays, fibreDays, possibleDays) {
  let html = '<div class="section-title">🔍 Monthly Analysis</div>';

  let score = 0;
  if (consistency >= 60) score++;
  if (avgProtein >= 80) score++;
  if (avgFibre >= 20) score++;
  if (avgCal >= 1200 && avgCal <= 1700) score++;

  const grades = ['Needs work', 'Getting there', 'Good progress', 'Really good', 'Excellent'];
  html += `<div class="card" style="text-align:center;background:linear-gradient(135deg,#2563eb,#0ea5e9);color:white">
    <div style="font-size:13px;opacity:0.8;margin-bottom:4px">This month's overall rating</div>
    <div style="font-size:28px;font-weight:800">${grades[score]}</div>
    <div style="font-size:12px;opacity:0.7;margin-top:4px">${score}/4 targets on track</div>
  </div>`;

  if (avgProtein < 70) html += `<div class="insight warn"><div class="insight-title">⚠️ Protein gap</div>Monthly protein average is ${avgProtein}g/day. Prioritize protein in both meals.</div>`;
  if (avgFibre < 18) html += `<div class="insight warn"><div class="insight-title">⚠️ Fibre gap</div>Monthly fibre average is ${avgFibre}g/day. Add oats, lentils, berries, and more vegetables.</div>`;
  if (consistency < 40) html += `<div class="insight warn"><div class="insight-title">⚠️ Tracking gaps</div>Only ${loggedDays} of ${possibleDays} days logged. Logging imperfect days still improves trend visibility.</div>`;

  if (proteinDays >= Math.ceil(possibleDays * 0.4)) html += `<div class="insight good"><div class="insight-title">✅ Protein consistency</div>You reached 80% protein target on ${proteinDays} day(s).</div>`;
  if (fibreDays >= Math.ceil(possibleDays * 0.4)) html += `<div class="insight good"><div class="insight-title">✅ Fibre consistency</div>You reached 70% fibre target on ${fibreDays} day(s).</div>`;

  html += `<div class="insight tip"><div class="insight-title">💡 Next month focus</div>${avgProtein < 80 ? 'Hit 90g+ protein daily first, then optimise calories.' : avgFibre < 22 ? 'Raise fibre with one extra legume/fruit serving daily.' : 'Maintain current rhythm and keep custom-pill logging for accuracy.'}</div>`;

  return html;
}

// ─── PAGE NAV ────────────────────────────────────────────────────────────────

function showPage(name, tabEl) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  if (tabEl) tabEl.classList.add('active');

  if (name === 'weekly') { renderWeekSelector(); renderWeekly(); }
  if (name === 'monthly') { renderMonthTabs(); renderMonthly(); }
}

// ─── INIT ────────────────────────────────────────────────────────────────────

function migrateExistingLogs() {
  let changed = false;
  Object.keys(logs).forEach(key => {
    const oldSelected = logs[key]?.selected;
    if (oldSelected) {
      logs[key].selected = normalizeSelected(oldSelected);
      changed = true;
    }
  });
  if (changed) localStorage.setItem(LOGS_KEY, JSON.stringify(logs));
}

migrateExistingLogs();
buildAllButtons();
setupCustomInputs();
renderDayHeader();
loadDay(currentDateStr);
loadAllFromCloud();
