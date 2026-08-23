// End-to-end test of the chat route using the network-free `stub` provider,
// an in-memory KV, and a stub master secret. Exercises the full path:
// validate -> load client -> decrypt key -> agent core -> ledger -> forward.

import { describe, it, expect } from 'vitest';
import { MemoryKV } from './kvMock';
import { handleChat } from '../src/routes/chat';
import { registerClient } from '../src/store/clientStore';
import { getLedger } from '../src/store/ledger';
import { readForwardQueue } from '../src/store/forward';
import type { Env } from '../src/env';
import { TEST_MASTER_SECRET, sampleInput } from './fixtures';

function makeEnv(kv: MemoryKV): Env {
  return {
    RECEPTIONIST_KV: kv,
    RECEPTIONIST_MASTER_SECRET: TEST_MASTER_SECRET,
    ADMIN_TOKEN: 'admin',
  } as unknown as Env;
}

function post(body: unknown): Request {
  return new Request('http://localhost/chat', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('handleChat (end-to-end, stub provider)', () => {
  it('answers an in-scope question and records usage', async () => {
    const kv = new MemoryKV();
    await registerClient(kv, sampleInput, TEST_MASTER_SECRET);
    const env = makeEnv(kv);

    const res = await handleChat(
      post({ client_id: 'bos-garage', message: 'What are your hours?' }),
      env,
    );
    const data = (await res.json()) as { answer: string; forward: boolean };
    expect(res.status).toBe(200);
    expect(data.forward).toBe(false);
    expect(data.answer.length).toBeGreaterThan(0);

    const ledger = await getLedger(kv, 'bos-garage');
    expect(ledger.requests).toBe(1);
    expect(ledger.total_tokens).toBeGreaterThan(0);
  });

  it('forwards an out-of-scope question and queues it', async () => {
    const kv = new MemoryKV();
    await registerClient(kv, sampleInput, TEST_MASTER_SECRET);
    const env = makeEnv(kv);

    const res = await handleChat(
      post({ client_id: 'bos-garage', message: 'How much is an oil change?' }),
      env,
    );
    const data = (await res.json()) as { answer: string; forward: boolean };
    expect(data.forward).toBe(true);
    expect(data.answer).toBe("I'll have someone get back to you.");

    const queue = await readForwardQueue(kv, 'bos-garage');
    expect(queue).toContain('How much is an oil change?');
  });

  it('rejects a missing client_id', async () => {
    const kv = new MemoryKV();
    const res = await handleChat(post({ message: 'hi' }), makeEnv(kv));
    expect(res.status).toBe(400);
  });

  it('rejects an unknown client', async () => {
    const kv = new MemoryKV();
    const res = await handleChat(
      post({ client_id: 'nope', message: 'hi' }),
      makeEnv(kv),
    );
    expect(res.status).toBe(404);
  });
});
