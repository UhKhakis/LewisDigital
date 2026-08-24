// Shared types for the Lewis Digital AI Receptionist.
// These are the single source of truth for the shapes of client records,
// verified facts, the usage ledger, and agent I/O.

export type ProviderName = 'openai' | 'anthropic' | 'gemini' | 'stub';

/**
 * The client's VERIFIED fact set. Everything the bot is allowed to state must
 * live here. Fields left absent are treated as "unknown" — the bot must
 * forward (not guess) when asked about them.
 */
export interface VerifiedFacts {
  business_name: string;
  category?: string;
  address?: string;
  phone?: string;
  hours?: string[];
  services?: string[];
  prices?: string[];
  booking?: { url?: string; note?: string };
  faqs?: { q: string; a: string }[];
  notes?: string[];
}

export interface Forwarding {
  /** Business email — where forwarded messages should ultimately go. */
  email?: string;
  /** Optional webhook that receives forwarded messages (e.g. email sender). */
  webhook_url?: string;
}

export interface ClientLimits {
  /** Optional monthly caps so the line never drops below 45% margin. */
  max_monthly_requests?: number;
  max_monthly_tokens?: number;
}

export interface ClientTheme {
  /** The client's OWN brand color — never a hardcoded vendor palette. */
  primary?: string;
  accent?: string;
  position?: 'bottom-right' | 'bottom-left';
  title?: string;
  greeting?: string;
  launcher_label?: string;
}

/**
 * Optional per-client channel wiring for the non-widget channels. Phone numbers
 * and page IDs are not secrets (they're public-facing); the Meta page access
 * token IS a secret and is stored AES-256-GCM encrypted at rest (like the LLM
 * key — see `crypto.ts`).
 */
export interface ChannelConfig {
  /** Client's Twilio phone number (E.164, e.g. +19795550123). Inbound SMS/voice
   *  arrive at this number ("To"); outbound replies come from it ("From"). */
  twilio_phone_number?: string;
  /** Optional Twilio Messaging Service SID (overrides a single From number). */
  twilio_messaging_service_sid?: string;
  /** Client's Meta page ID (Messenger). Inbound DM events carry this id. */
  meta_page_id?: string;
  /** Client's Instagram business account ID (Instagram DMs). */
  meta_instagram_id?: string;
  /** Client's Meta page access token — AES-256-GCM ENCRYPTED at rest. */
  meta_page_access_token?: string;
}

export interface ClientRecord {
  client_id: string;
  business_name: string;
  provider: ProviderName;
  model: string;
  /** AES-256-GCM encrypted client LLM key (base64(iv || ciphertext)). */
  encrypted_api_key: string;
  facts: VerifiedFacts;
  forwarding?: Forwarding;
  limits?: ClientLimits;
  theme?: ClientTheme;
  channels?: ChannelConfig;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface LedgerRecord {
  client_id: string;
  requests: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  /** YYYY-MM the current counters apply to (reset on month rollover). */
  month_start: string;
  updated_at: string;
}

export interface LLMUsage {
  promptTokens: number;
  completionTokens: number;
}

export interface LLMResult {
  text: string;
  usage: LLMUsage;
}

export interface AgentReply {
  answer: string;
  forward: boolean;
  grounded: boolean;
  usage: LLMUsage;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatRequest {
  client_id: string;
  message: string;
  session_id?: string;
  history?: ChatMessage[];
}

/**
 * Minimal KV surface used by the store modules. Decoupled from the
 * `KVNamespace` type so the logic can be unit-tested with an in-memory mock
 * and so tests never depend on the Workers runtime.
 */
export interface KVLike {
  get(key: string, type?: 'json' | 'text'): Promise<unknown>;
  put(key: string, value: string): Promise<void>;
  delete(key: string): Promise<void>;
  list?(options?: unknown): Promise<unknown>;
}

export interface ForwardPayload {
  client_id: string;
  business_name?: string;
  email?: string;
  message: string;
  session_id?: string;
  reason: 'out_of_scope' | 'llm_error' | 'guard' | 'over_limit' | 'delivery_pending';
  at: string;
}