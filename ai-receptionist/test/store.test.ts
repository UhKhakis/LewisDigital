import { describe, it, expect } from 'vitest';
import { MemoryKV } from './kvMock';
import {
  registerClient,
  getClient,
  deleteClient,
  decryptClientKey,
  decryptMetaPageToken,
  findClientByTwilio,
  findClientByMetaPage,
  sanitizeClient,
} from '../src/store/clientStore';
import { getLedger, addUsage, isOverLimit } from '../src/store/ledger';
import { recordForward, readForwardQueue } from '../src/store/forward';
import { TEST_MASTER_SECRET, sampleInput, sampleChannels } from './fixtures';

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

describe('channel wiring + full client cleanup (bug fix)', () => {
  it('maintains reverse indexes and encrypts the Meta page token', async () => {
    const kv = new MemoryKV();
    const record = await registerClient(
      kv,
      { ...sampleInput, channels: sampleChannels },
      TEST_MASTER_SECRET,
    );
    expect(record.channels?.meta_page_access_token).not.toContain(sampleChannels.meta_page_access_token);

    expect(await findClientByTwilio(kv, '+1 (979) 555-0123')).toMatchObject({ client_id: 'bos-garage' });
    expect(await findClientByMetaPage(kv, '112233445566')).toMatchObject({ client_id: 'bos-garage' });
    expect(await decryptMetaPageToken(record, TEST_MASTER_SECRET)).toBe(sampleChannels.meta_page_access_token);

    const safe = sanitizeClient(record);
    expect('meta_page_access_token' in (safe.channels ?? {})).toBe(false);
    expect(safe.channels?.has_meta_page_access_token).toBe(true);
  });

  it('deleteClient removes the client, ledger, forward queue, and timestamped copies', async () => {
    const kv = new MemoryKV();
    await registerClient(kv, { ...sampleInput, channels: sampleChannels }, TEST_MASTER_SECRET);

    // Produce ledger + forward state (including timestamped copies).
    await addUsage(kv, 'bos-garage', { promptTokens: 10, completionTokens: 5 });
    await recordForward(kv, {
      client_id: 'bos-garage',
      message: 'How much is an oil change?',
      reason: 'out_of_scope',
      at: new Date().toISOString(),
    });
    await recordForward(kv, {
      client_id: 'bos-garage',
      message: 'Do you do engine swaps?',
      reason: 'out_of_scope',
      at: new Date().toISOString(),
    });

    // Sanity: keys exist before cleanup.
    expect((await getLedger(kv, 'bos-garage')).requests).toBe(1);
    expect(await readForwardQueue(kv, 'bos-garage')).toContain('oil change');
    expect(await findClientByTwilio(kv, '+19795550123')).not.toBeNull();

    await deleteClient(kv, 'bos-garage');

    // Client record gone.
    expect(await getClient(kv, 'bos-garage')).toBeNull();
    // Ledger reset (key removed -> fresh zeroed record).
    expect(await getLedger(kv, 'bos-garage')).toMatchObject({ requests: 0 });
    // Forward queue emptied.
    expect(await readForwardQueue(kv, 'bos-garage')).toBe('');
    // Reverse indexes gone.
    expect(await findClientByTwilio(kv, '+19795550123')).toBeNull();
    expect(await findClientByMetaPage(kv, '112233445566')).toBeNull();

    // No leftover keys for this client at all (incl. timestamped copies).
    const leftover = kv.keys().filter((k) => k.includes('bos-garage'));
    expect(leftover).toEqual([]);
  });
});
