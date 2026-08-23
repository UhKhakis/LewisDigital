import { describe, it, expect } from 'vitest';
import { MemoryKV } from './kvMock';
import { registerClient, getClient, decryptClientKey, sanitizeClient } from '../src/store/clientStore';
import { getLedger, addUsage, isOverLimit } from '../src/store/ledger';
import { recordForward, readForwardQueue } from '../src/store/forward';
import { TEST_MASTER_SECRET, sampleInput } from './fixtures';

describe('client store', () => {
  it('encrypts the LLM key at rest and decrypts it back', async () => {
    const kv = new MemoryKV();
    const record = await registerClient(kv, sampleInput, TEST_MASTER_SECRET);
    expect(record.encrypted_api_key).not.toContain(sampleInput.api_key);

    const stored = await getClient(kv, sampleInput.client_id);
    expect(stored?.encrypted_api_key).toBe(record.encrypted_api_key);

    const key = await decryptClientKey(record, TEST_MASTER_SECRET);
    expect(key).toBe(sampleInput.api_key);
  });

  it('sanitizes the record so the key is never returned to a browser/admin read', async () => {
    const kv = new MemoryKV();
    const record = await registerClient(kv, sampleInput, TEST_MASTER_SECRET);
    const safe = sanitizeClient(record);
    expect('encrypted_api_key' in safe).toBe(false);
    expect(safe.has_api_key).toBe(true);
  });
});

describe('usage ledger', () => {
  it('increments request + token counts', async () => {
    const kv = new MemoryKV();
    await addUsage(kv, 'bos-garage', { promptTokens: 100, completionTokens: 25 });
    await addUsage(kv, 'bos-garage', { promptTokens: 100, completionTokens: 25 });
    const l = await getLedger(kv, 'bos-garage');
    expect(l.requests).toBe(2);
    expect(l.prompt_tokens).toBe(200);
    expect(l.completion_tokens).toBe(50);
    expect(l.total_tokens).toBe(250);
  });

  it('respects optional monthly caps', async () => {
    const kv = new MemoryKV();
    const record = await registerClient(
      kv,
      { ...sampleInput, limits: { max_monthly_requests: 1 } },
      TEST_MASTER_SECRET,
    );
    await addUsage(kv, 'bos-garage', { promptTokens: 1, completionTokens: 1 });
    const l = await getLedger(kv, 'bos-garage');
    expect(isOverLimit(record, l)).toBe(true);
  });
});

describe('forwarding', () => {
  it('queues unanswerable messages', async () => {
    const kv = new MemoryKV();
    await recordForward(kv, {
      client_id: 'bos-garage',
      message: 'How much is an oil change?',
      reason: 'out_of_scope',
      at: new Date().toISOString(),
    });
    const q = await readForwardQueue(kv, 'bos-garage');
    expect(q).toContain('How much is an oil change?');
    expect(q).toContain('out_of_scope');
  });
});
