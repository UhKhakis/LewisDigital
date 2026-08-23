// Website chat widget endpoint: POST /chat.
// Validates input, loads the client record + decrypts its LLM key, calls the
// shared agent core, forwards unanswerable items, and records usage.

import { answerQuestion } from '../agent/core';
import { getClient, decryptClientKey } from '../store/clientStore';
import { getLedger, addUsage, isOverLimit } from '../store/ledger';
import { recordForward, notifyForward } from '../store/forward';
import { getMasterSecret } from '../env';
import { json, corsHeaders, validateClientId, validateMessage } from '../http';
import type { Env } from '../env';
import type { ChatRequest, ForwardPayload } from '../types';

const FALLBACK = "I'll have someone get back to you.";

export async function handleChat(request: Request, env: Env): Promise<Response> {
  const cors = corsHeaders();
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405, cors);

  let body: ChatRequest;
  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return json({ error: 'Invalid JSON body' }, 400, cors);
  }

  const clientId = validateClientId(body.client_id);
  if (!clientId) {
    return json(
      { error: 'client_id is required (lowercase letters, digits, hyphens)' },
      400,
      cors,
    );
  }
  const message = validateMessage(body.message);
  if (!message) {
    return json({ error: 'message is required (1–2000 characters)' }, 400, cors);
  }

  const masterSecret = getMasterSecret(env);
  const record = await getClient(env.RECEPTIONIST_KV, clientId);
  if (!record || !record.active) {
    return json({ error: 'Unknown or inactive client' }, 404, cors);
  }

  const ledger = await getLedger(env.RECEPTIONIST_KV, clientId);
  if (isOverLimit(record, ledger)) {
    const payload: ForwardPayload = {
      client_id: clientId,
      message,
      session_id: body.session_id,
      reason: 'over_limit',
      at: new Date().toISOString(),
    };
    await recordForward(env.RECEPTIONIST_KV, payload);
    await notifyForward(env, record, payload);
    return json({ answer: FALLBACK, forward: true, session_id: body.session_id ?? null }, 200, cors);
  }

  let apiKey: string;
  try {
    apiKey = await decryptClientKey(record, masterSecret);
  } catch {
    return json(
      { error: 'Client key unavailable (re-encrypt with the current master secret)' },
      500,
      cors,
    );
  }

  const reply = await answerQuestion(record, apiKey, message, body.history);

  if (reply.forward) {
    const payload: ForwardPayload = {
      client_id: clientId,
      message,
      session_id: body.session_id,
      reason: 'out_of_scope',
      at: new Date().toISOString(),
    };
    await recordForward(env.RECEPTIONIST_KV, payload);
    await notifyForward(env, record, payload);
  }

  await addUsage(env.RECEPTIONIST_KV, clientId, reply.usage);

  return json(
    { answer: reply.answer, forward: reply.forward, session_id: body.session_id ?? null },
    200,
    cors,
  );
}