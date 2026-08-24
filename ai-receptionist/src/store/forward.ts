// Forwarding of messages the bot cannot answer from verified facts.
// Unanswerable items are queued in KV (never lost) and, if a webhook is
// configured, POSTed there so they can be emailed to the business.
//
// Keys:
//   forward_queue:<client_id>           -> newline-delimited JSONL history
//   forward_queue:<client_id>:<ts>      -> a timestamped copy of each item

import type { KVLike, ClientRecord, ForwardPayload } from '../types';
import type { Env } from '../env';

const PREFIX = 'forward_queue:';

export async function recordForward(kv: KVLike, payload: ForwardPayload): Promise<void> {
  const queueKey = `${PREFIX}${payload.client_id}`;
  const itemKey = `${PREFIX}${payload.client_id}:${Date.now()}`;
  const line = JSON.stringify(payload) + '\n';
  const existing = await kv.get(queueKey, 'text');
  await kv.put(queueKey, (typeof existing === 'string' ? existing : '') + line);
  await kv.put(itemKey, JSON.stringify(payload));
}

export async function readForwardQueue(kv: KVLike, clientId: string): Promise<string> {
  const raw = await kv.get(`${PREFIX}${clientId}`, 'text');
  return typeof raw === 'string' ? raw : '';
}

/**
 * Remove a client's entire forward queue: the aggregate `forward_queue:<id>`
 * key plus every timestamped `forward_queue:<id>:<ts>` copy. Used by full
 * client cleanup.
 */
export async function deleteForwardQueue(kv: KVLike, clientId: string): Promise<void> {
  const deletes: Promise<void>[] = [kv.delete(`${PREFIX}${clientId}`)];
  if (kv.list) {
    for (const key of await listAllKeys(kv, `${PREFIX}${clientId}:`)) {
      deletes.push(kv.delete(key));
    }
  }
  await Promise.all(deletes);
}

async function listAllKeys(kv: KVLike, prefix: string): Promise<string[]> {
  if (!kv.list) return [];
  const names: string[] = [];
  let cursor: string | undefined;
  do {
    const result = (await kv.list({ prefix, cursor })) as {
      keys?: { name: string }[];
      list_complete?: boolean;
      cursor?: string;
    };
    for (const k of result.keys ?? []) names.push(k.name);
    cursor = result.list_complete === false ? result.cursor : undefined;
  } while (cursor);
  return names;
}

/** POST a forwarded item to the client-specific or global webhook (best effort). */
export async function notifyForward(
  env: Env,
  record: ClientRecord,
  payload: ForwardPayload,
): Promise<void> {
  const url = record.forwarding?.webhook_url ?? env.FORWARD_WEBHOOK_URL;
  if (!url) return;
  const body = {
    ...payload,
    business_name: record.business_name,
    email: record.forwarding?.email,
  };
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch {
    // Non-fatal: the item remains in the KV queue for later retrieval.
  }
}