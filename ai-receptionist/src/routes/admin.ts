// Admin routes — register/update a client's facts + LLM key, and inspect the
// usage ledger / forward queue. Protected by ADMIN_TOKEN (Bearer).
//
// Endpoints:
//   POST   /admin/client        register or update a client (upsert)
//   GET    /admin/client/:id    read a client (key shown as has_api_key only)
//   DELETE /admin/client/:id    remove a client
//   GET    /admin/ledger/:id    read the usage ledger
//   GET    /admin/queue/:id     read the forward (unanswered) queue

import { registerClient, getClient, deleteClient, sanitizeClient } from '../store/clientStore';
import type { ClientInput } from '../store/clientStore';
import { getLedger } from '../store/ledger';
import { readForwardQueue } from '../store/forward';
import { getMasterSecret, isAdminAuthorized } from '../env';
import { json, validateClientId } from '../http';
import type { Env } from '../env';

const PROVIDERS = ['openai', 'anthropic', 'gemini', 'stub'];

export async function handleAdmin(request: Request, env: Env, url: URL): Promise<Response> {
  if (!isAdminAuthorized(env, request.headers.get('authorization'))) {
    return json({ error: 'Unauthorized — provide a valid Bearer ADMIN_TOKEN' }, 401);
  }

  const parts = url.pathname.replace(/^\/admin\/?/, '').split('/').filter(Boolean);
  const resource = parts[0];
  const id = parts[1] ? validateClientId(parts[1]) : null;

  if (resource === 'client' && request.method === 'POST' && !id) {
    return upsertClient(request, env);
  }
  if (resource === 'client' && request.method === 'GET' && id) {
    return readClient(env, id);
  }
  if (resource === 'client' && request.method === 'DELETE' && id) {
    await deleteClient(env.RECEPTIONIST_KV, id);
    return json({ ok: true, deleted: id });
  }
  if (resource === 'ledger' && request.method === 'GET' && id) {
    return json(await getLedger(env.RECEPTIONIST_KV, id));
  }
  if (resource === 'queue' && request.method === 'GET' && id) {
    return json({ client_id: id, items: await readForwardQueue(env.RECEPTIONIST_KV, id) });
  }
  return json({ error: 'Not found' }, 404);
}

async function upsertClient(request: Request, env: Env): Promise<Response> {
  let body: Partial<ClientInput>;
  try {
    body = (await request.json()) as Partial<ClientInput>;
  } catch {
    return json({ error: 'Invalid JSON body' }, 400);
  }

  const clientId = validateClientId(body.client_id);
  if (!clientId) return json({ error: 'client_id is required (lowercase letters, digits, hyphens)' }, 400);
  if (typeof body.business_name !== 'string' || !body.business_name.trim()) {
    return json({ error: 'business_name is required' }, 400);
  }
  if (!body.provider || !PROVIDERS.includes(body.provider)) {
    return json({ error: `provider must be one of: ${PROVIDERS.join(', ')}` }, 400);
  }
  if (typeof body.model !== 'string' || !body.model.trim()) {
    return json({ error: 'model is required' }, 400);
  }
  if (typeof body.api_key !== 'string' || !body.api_key.trim()) {
    return json({ error: 'api_key is required (the client\u2019s own LLM key, encrypted at rest)' }, 400);
  }
  if (!body.facts || typeof body.facts !== 'object' || typeof body.facts.business_name !== 'string') {
    return json({ error: 'facts.business_name is required' }, 400);
  }

  const masterSecret = getMasterSecret(env);
  const input: ClientInput = {
    client_id: clientId,
    business_name: body.business_name.trim(),
    provider: body.provider,
    model: body.model.trim(),
    api_key: body.api_key.trim(),
    facts: body.facts,
    forwarding: body.forwarding,
    limits: body.limits,
    theme: body.theme,
    active: body.active ?? true,
  };

  const record = await registerClient(env.RECEPTIONIST_KV, input, masterSecret);
  return json({ ok: true, client: sanitizeClient(record) });
}

async function readClient(env: Env, id: string): Promise<Response> {
  const record = await getClient(env.RECEPTIONIST_KV, id);
  if (!record) return json({ error: 'Client not found' }, 404);
  return json(sanitizeClient(record));
}