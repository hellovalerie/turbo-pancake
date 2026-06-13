import { getStore } from '@netlify/blobs';

export default async (req, context) => {
  const store = getStore({ name: 'logs', consistency: 'strong' });

  if (req.method === 'GET') {
    const { blobs } = await store.list();
    const result = {};
    await Promise.all(
      blobs.map(async ({ key }) => {
        const entry = await store.get(key, { type: 'json' });
        if (entry) result[key] = entry;
      })
    );
    return Response.json(result);
  }

  if (req.method === 'POST') {
    const { date, entry } = await req.json();
    if (!date || !entry) {
      return new Response('Missing date or entry', { status: 400 });
    }
    await store.setJSON(date, entry);
    return Response.json({ ok: true });
  }

  return new Response('Method not allowed', { status: 405 });
};

export const config = { path: '/api/logs' };
