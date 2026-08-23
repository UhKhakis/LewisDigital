import { describe, it, expect } from 'vitest';
import { encryptSecret, decryptSecret } from '../src/store/crypto';

describe('crypto (client LLM key encryption at rest)', () => {
  it('round-trips a secret with the same master secret', async () => {
    const secret = 'sk-client-abc123';
    const master = 'master-secret-abcdef';
    const ct = await encryptSecret(secret, master);
    expect(ct).not.toContain(secret);
    expect(await decryptSecret(ct, master)).toBe(secret);
  });

  it('produces different ciphertext for the same input (random IV)', async () => {
    const c1 = await encryptSecret('x', 'm');
    const c2 = await encryptSecret('x', 'm');
    expect(c1).not.toBe(c2);
  });

  it('fails to decrypt with the wrong master secret', async () => {
    const ct = await encryptSecret('x', 'master-a');
    await expect(decryptSecret(ct, 'master-b')).rejects.toThrow();
  });
});
