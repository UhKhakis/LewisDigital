// In-memory KV mock for unit tests. Implements the KVLike subset used by the
// store modules so tests never depend on the Workers runtime.

import type { KVLike } from '../src/types';

export class MemoryKV implements KVLike {
  private map = new Map<string, string>();

  async get(key: string, type?: 'json' | 'text'): Promise<unknown> {
    const v = this.map.get(key);
    if (v === undefined) return null;
    if (type === 'json') return JSON.parse(v);
    return v;
  }

  async put(key: string, value: string): Promise<void> {
    this.map.set(key, value);
  }

  async delete(key: string): Promise<void> {
    this.map.delete(key);
  }
}
