// Symmetric encryption for client LLM API keys at rest.
// Uses Web Crypto AES-256-GCM, deriving a key from the master secret via
// SHA-256. The raw client key is NEVER stored — only `base64(iv || ciphertext)`.
//
// Works in both Cloudflare Workers and Node 18+ (both expose Web Crypto).

const enc = new TextEncoder();
const dec = new TextDecoder();

function bytesToBase64(bytes: Uint8Array): string {
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

function base64ToBytes(b64: string): Uint8Array {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function deriveKey(masterSecret: string): Promise<CryptoKey> {
  const digest = await crypto.subtle.digest('SHA-256', enc.encode(masterSecret));
  return crypto.subtle.importKey(
    'raw',
    digest,
    { name: 'AES-GCM' },
    false,
    ['encrypt', 'decrypt'],
  );
}

const IV_LENGTH = 12; // AES-GCM recommended IV size.

export async function encryptSecret(plaintext: string, masterSecret: string): Promise<string> {
  const key = await deriveKey(masterSecret);
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    enc.encode(plaintext),
  );
  const combined = new Uint8Array(IV_LENGTH + ciphertext.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(ciphertext), IV_LENGTH);
  return bytesToBase64(combined);
}

export async function decryptSecret(ciphertextB64: string, masterSecret: string): Promise<string> {
  const key = await deriveKey(masterSecret);
  const combined = base64ToBytes(ciphertextB64);
  if (combined.length < IV_LENGTH) {
    throw new Error('Ciphertext too short to decrypt.');
  }
  const iv = combined.slice(0, IV_LENGTH);
  const data = combined.slice(IV_LENGTH);
  const plaintext = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, data);
  return dec.decode(plaintext);
}