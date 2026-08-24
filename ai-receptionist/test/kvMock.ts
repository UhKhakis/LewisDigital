// In-memory KV mock for unit tests. Implements the KVLike subset used by the
// store modules (including `list`, used by the full-cleanup path) so tests
// never depend on the Workers runtime.

import type { KVLike } from '../src/types';

export interface KVListOptions {
  prefix?: string;
  cursor?: string;
}

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

  async list(options?: KVListOptions): Promise<{ keys: { name: string }[]; list_complete: boolean }> {
    const prefix = options?.prefix ?? '';
    const keys = [...this.map.keys()]
      .filter((k) => k.startsWith(prefix))
      .sort()
      .map((name) => ({ name }));
    return { keys, list_complete: true };
  }

  /** Test helper: all keys currently in the store. */
  keys(): string[] {
    return [...this.map.keys()].sort();
  }
}
