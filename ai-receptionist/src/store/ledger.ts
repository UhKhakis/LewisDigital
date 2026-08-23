// Usage ledger: running request + token counts per client, keyed by month.
// Used to meter usage and protect the >=45% margin on the $199/mo line.
//
// Key: `ledger:<client_id>` -> JSON LedgerRecord.
//
// NOTE: KV has no atomic increment. This read-modify-write is acceptable for a
// single, low-concurrency client. The documented upgrade path is a D1 table
// with an atomic `UPDATE ... SET requests = requests + 1` (see README).

import type { KVLike, LedgerRecord, LLMUsage, ClientRecord } from '../types';

const PREFIX = 'ledger:';

function ledgerKey(clientId: string): string {
  return `${PREFIX}${clientId}`;
}

function currentMonth(): string {
  return new Date().toISOString().slice(0, 7); // YYYY-MM
}

export async function getLedger(kv: KVLike, clientId: string): Promise<LedgerRecord> {
  const raw = await kv.get(ledgerKey(clientId), 'json');
  if (raw) return raw as LedgerRecord;
  return {
    client_id: clientId,
    requests: 0,
    prompt_tokens: 0,
    completion_tokens: 0,
    total_tokens: 0,
    month_start: currentMonth(),
    updated_at: new Date().toISOString(),
  };
}

export async function addUsage(
  kv: KVLike,
  clientId: string,
  usage: LLMUsage,
): Promise<LedgerRecord> {
  const current = await getLedger(kv, clientId);
  const month = currentMonth();
  const reset = current.month_start !== month;
  const prompt = usage.promptTokens ?? 0;
  const completion = usage.completionTokens ?? 0;
  const next: LedgerRecord = {
    client_id: clientId,
    requests: (reset ? 0 : current.requests) + 1,
    prompt_tokens: (reset ? 0 : current.prompt_tokens) + prompt,
    completion_tokens: (reset ? 0 : current.completion_tokens) + completion,
    total_tokens: (reset ? 0 : current.total_tokens) + prompt + completion,
    month_start: month,
    updated_at: new Date().toISOString(),
  };
  await kv.put(ledgerKey(clientId), JSON.stringify(next));
  return next;
}

/** True when the client has exceeded an optional monthly cap. */
export function isOverLimit(record: ClientRecord, ledger: LedgerRecord): boolean {
  const l = record.limits;
  if (!l) return false;
  if (typeof l.max_monthly_requests === 'number' && ledger.requests >= l.max_monthly_requests) {
    return true;
  }
  if (typeof l.max_monthly_tokens === 'number' && ledger.total_tokens >= l.max_monthly_tokens) {
    return true;
  }
  return false;
}