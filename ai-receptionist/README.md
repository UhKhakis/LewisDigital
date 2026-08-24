# Lewis Digital AI Receptionist

A standalone, multi-channel AI receptionist running on **Cloudflare Workers**
(free tier). All four channels — **website chat, SMS, voice, and social DMs** —
are implemented against one shared agent core. SMS/voice (Twilio) and social
DMs (Meta) are fully wired in code but **require live provider credentials to
send/receive real messages**; those are provisioned separately (see below).

> **Product context (owner-set):** the AI Receptionist is a **standalone
> add-on** ($199/mo) — never bundled into or offered during the website
> contract. One shared brain covers website chat, SMS, voice calls, and social
> DMs. It answers only from a client's **verified facts**; anything else is
> forwarded to the business. Nothing is invented.

## What's built vs. scaffolded

| Piece | Status | Location |
| --- | --- | --- |
| Cloudflare Worker entry + router | ✅ | `src/index.ts` |
| Chat endpoint (`POST /chat`) | ✅ | `src/routes/chat.ts` |
| Shared agent core + honesty guard | ✅ | `src/agent/core.ts`, `src/agent/prompt.ts` |
| LLM providers (OpenAI / Anthropic / Gemini) + stub | ✅ | `src/agent/providers.ts` |
| Per-client KV store (facts + **encrypted** LLM key) | ✅ | `src/store/clientStore.ts`, `src/store/crypto.ts` |
| Usage ledger (requests + tokens, metered per month) | ✅ | `src/store/ledger.ts` |
| Forward queue (unanswerable → email the business) | ✅ | `src/store/forward.ts` |
| Admin routes (register/update client, read ledger) | ✅ | `src/routes/admin.ts` |
| Embeddable chat widget (brand-agnostic) | ✅ | `public/widget.js`, `public/widget.css` |
| SMS channel (Twilio webhook → shared core) | ✅ code; needs Twilio creds | `src/routes/channels.ts`, `src/channels/twilio.ts` |
| Voice channel (TwiML `<Gather speech>` → shared core) | ✅ code; needs Twilio creds | `src/routes/channels.ts`, `src/channels/twilio.ts` |
| Social DM channel (Meta webhook → shared core) | ✅ code; needs Meta app | `src/routes/channels.ts`, `src/channels/meta.ts` |
| Full client cleanup (ledger + forward keys removed on delete) | ✅ | `src/store/clientStore.ts`, `ledger.ts`, `forward.ts` |
| Unit + end-to-end tests (stub key, no network) | ✅ | `test/` |

## Honesty / guard model (non-negotiable)

The bot may state **only** facts present in the client's `facts` record. The
guard is layered so a hallucination can never leak to a customer:

1. **Prompt layer** — the system prompt lists the verified facts and instructs
   the model to answer only from them and to return strict JSON
   `{"answer","grounded","forward"}`.
2. **Structured output** — the model must set `grounded:true` **and**
   `forward:false` or the reply is discarded.
3. **Deterministic backstop** — an answer that asserts a **price** (no `$` in
   facts) or a **time** (no `hours` in facts) is treated as ungrounded.
4. **Safe default** — any LLM error, unparseable output, or ungrounded reply
   becomes `"I'll have someone get back to you."` and the message is queued to
   be emailed to the business (KV queue + optional `FORWARD_WEBHOOK_URL`).

There is no path where the core invents an answer: on doubt, it forwards.

## Security model

- Each **client provides their own LLM API key** (Model A) — we never pay for
  client LLM usage. The key is used **server-side only** and is never exposed
  to any browser.
- The raw key is **never stored**. At registration it is encrypted with
  AES-256-GCM using `RECEPTIONIST_MASTER_SECRET` and stored in KV as
  `base64(iv || ciphertext)`.
- All secrets are provided as **Cloudflare secrets** (or `.dev.vars` locally).
  **Nothing is committed.** Credentials are business secrets.

---

## Prerequisites

- Node.js 18+ and npm.
- A Cloudflare account (the owner is setting this up). You need:
  - **`CLOUDFLARE_ACCOUNT_ID`** — from the Cloudflare dashboard (Workers → Overview).
  - **`CLOUDFLARE_API_TOKEN`** — a scoped API token with **Workers edit** + **KV edit**
    permissions (My Profile → API Tokens).
- A KV namespace (create it in step 2 below).

## 1. Install

```bash
cd ai-receptionist
npm install
```

## 2. Create the KV namespace (one-time)

```bash
npx wrangler kv namespace create RECEPTIONIST_KV
```

Copy the returned `id` into `wrangler.toml` under
`[[kv_namespaces]].id = "..."` (replace the `0000…` placeholder).

## 3. Set secrets

Production secrets (set once):

```bash
npx wrangler secret put RECEPTIONIST_MASTER_SECRET   # 32+ random characters
npx wrangler secret put ADMIN_TOKEN                   # any strong random string
# optional — endpoint that receives forwarded messages (e.g. your email sender):
npx wrangler secret put FORWARD_WEBHOOK_URL
```

For **local** dev, copy `.dev.vars.example` → `.dev.vars` and edit the values.

## 4. Configure the account

Either uncomment `account_id` in `wrangler.toml`, or export it in the shell
before every deploy:

```bash
export CLOUDFLARE_ACCOUNT_ID=<your account id>
export CLOUDFLARE_API_TOKEN=<your scoped token>
```

The API token is a business secret — never put it in `wrangler.toml` or commit it.

## 5. Run locally

```bash
npx wrangler dev
```

`wrangler dev` simulates KV locally. With `.dev.vars` set, you can register a
client and exercise `/chat` end-to-end using the built-in `stub` provider (no
network, no real LLM key needed) — see "Local test" below.

## 6. Deploy

```bash
npx wrangler deploy
```

Deployment requires `CLOUDFLARE_ACCOUNT_ID` + `CLOUDFLARE_API_TOKEN` (or an
authenticated `wrangler login`). **This step waits on the owner's Cloudflare
credentials — do not deploy before they arrive.**

---

## Adding / updating a client (admin route)

Admin routes require `Authorization: Bearer <ADMIN_TOKEN>`.

```bash
curl -X POST https://<your-worker>/admin/client \
  -H "Authorization: Bearer $ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "client_id": "bos-garage",
    "business_name": "Bos Garage",
    "provider": "openai",                 // openai | anthropic | gemini | stub
    "model": "gpt-4o-mini",
    "api_key": "sk-...",                  // client-owned key — encrypted at rest
    "facts": {
      "business_name": "Bos Garage",
      "category": "Auto repair",
      "address": "123 Main St, Bryan, TX",
      "phone": "(979) 555-0123",
      "hours": ["Mon–Fri: 8 AM–5 PM", "Sat: 9 AM–12 PM"],
      "services": ["Oil changes", "Brake repair", "Diagnostics"],
      "faqs": [{ "q": "Do you take walk-ins?", "a": "Yes, during business hours." }]
    },
    "forwarding": { "email": "owner@bosgarage.com" },
    "limits": { "max_monthly_requests": 5000 },
    "theme": { "primary": "#0b3d2e", "title": "Chat with Bos Garage" },
    "channels": {
      "twilio_phone_number": "+19795550123",
      "meta_page_id": "112233445566",
      "meta_page_access_token": "EAAG..."   // encrypted at rest
    }
  }'
```

- `provider` + `model` + `api_key` are the client's own LLM credentials.
- `facts` is the **verified fact set** — only what the bot may say. Leave fields
  absent when unknown; the bot forwards those questions instead of guessing.
- `theme.primary` is the **client's own** brand color (never Lewis Digital gold).
- `channels` (optional) wires the SMS/voice/social connectors: the client's
  Twilio number, Meta page ID, and (optionally) their Meta page access token —
  which is **encrypted at rest** like the LLM key. See "The four channels"
  below.

Other admin routes:

```bash
curl -H "Authorization: Bearer $ADMIN_TOKEN" https://<worker>/admin/client/bos-garage
curl -H "Authorization: Bearer $ADMIN_TOKEN" https://<worker>/admin/ledger/bos-garage
curl -H "Authorization: Bearer $ADMIN_TOKEN" https://<worker>/admin/queue/bos-garage
curl -X DELETE -H "Authorization: Bearer $ADMIN_TOKEN" https://<worker>/admin/client/bos-garage
```

> `DELETE /admin/client/:id` performs a **full cleanup**: it removes the client
> record, its usage `ledger:<id>` key, its `forward_queue:<id>` key **and** every
> timestamped `forward_queue:<id>:<ts>` copy, plus any Twilio/Meta reverse-index
> keys. (This was the client-cleanup bug — previously only the client record was
> removed.)

---

## The four channels (one brain)

All four channels call the **same shared agent core**
(`src/agent/core.ts` → `answerQuestion`) and the same channel glue
(`src/channels/shared.ts` → `runChannelTurn`), which enforces the honesty guard,
the forward queue, and the usage ledger identically across channels. Each
connector only differs in transport + how the client is resolved.

| Channel | Endpoint | Client resolved by |
| --- | --- | --- |
| Website chat | `POST /chat` | `client_id` in the JSON body |
| SMS | `POST /channels/sms` | inbound `To` number → `twilio:<digits>` index |
| Voice | `POST /channels/voice` | inbound `To` number → `twilio:<digits>` index |
| Social DMs | `GET`/`POST /channels/social` | page/IG id → `meta_page:<id>` / `meta_ig:<id>` index |

Reverse indexes are maintained by `src/store/clientStore.ts` when a client is
registered (and removed on delete). Each client's channel wiring lives in the
`channels` field of its KV record.

### SMS — `POST /channels/sms`

- Twilio posts form-encoded `From` (customer), `To` (client's number), `Body`.
- The worker verifies `X-Twilio-Signature` (HMAC-SHA1) when `TWILIO_AUTH_TOKEN`
  is set, resolves the client from `To`, runs `runChannelTurn`, and replies.
- **Reply path:** primary is the Twilio **Messages API** (`sendTwilioSms`,
  Basic-auth, wired to `TWILIO_ACCOUNT_SID`/`TWILIO_AUTH_TOKEN` and the client's
  number / a Messaging Service SID); if outbound creds are missing the handler
  falls back to a synchronous TwiML `<Message>` reply so the customer still gets
  the answer.
- Out-of-scope items forward (fallback message to the customer + email to the
  business via `FORWARD_WEBHOOK_URL`), and every interaction is ledged.

### Voice — `POST /channels/voice`

A TwiML state machine (Twilio sends the transcript back via `<Gather input="speech">`):

1. `?step=greet` (default) — greet and `<Gather>` the caller's question.
2. `?step=answer` — the `SpeechResult` transcript goes through `runChannelTurn`;
   a grounded answer is spoken with `<Say>`. An out-of-scope item is answered
   with "I'll have someone get back to you" and the caller is prompted for a
   name/number.
3. `?step=callback` — the collected name/number is queued for the business.

Twilio handles speech-to-text and telephony (metered per-minute on Twilio's
side — pass-through, not in our KV ledger); the LLM interaction is ledged like
any other channel. `GET /channels/voice` returns an empty ack for Twilio's URL
validation.

### Social DMs — `GET` / `POST /channels/social`

- `GET` verifies the Meta webhook (`hub.mode`/`hub.verify_token`/`hub.challenge`)
  against `META_WEBHOOK_VERIFY_TOKEN`.
- `POST` receives message events (Messenger `object:"page"` or Instagram
  `object:"instagram"`), verifies `X-Hub-Signature-256` when `META_APP_SECRET`
  is set, resolves the client from the page/IG id, runs `runChannelTurn`, and
  replies via the Meta Send API (`POST /me/messages`) using the client's
  (decrypted) page token or the global `META_PAGE_ACCESS_TOKEN` fallback.
- Replies that cannot be delivered yet (no token / send failed) are **queued**
  (`reason: "delivery_pending"`) so nothing is lost; they can be replayed once
  Meta credentials are provisioned. Echoed messages (our own sends) are ignored.

### What is fully working vs. what still needs provider credentials

**Fully working now (no external creds):** the chat channel; the shared agent
core + honesty guard; per-client encrypted config; the ledger; the forward
queue; admin routes incl. full cleanup; and the complete code paths for SMS,
voice, and social DMs (verified by unit tests that mock the shared core and
external HTTP).

**Needs live credentials to activate (code is correct + wiring-based, but
cannot be end-to-end tested without them):**

- **SMS / Voice** — a Twilio account + a phone number per client. Set
  `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, and (optionally)
  `TWILIO_PHONE_NUMBER` / `TWILIO_MESSAGING_SERVICE_SID` / `VOICE_FROM_NUMBER`.
  Point the Twilio number's **Messaging webhook** at
  `https://<worker>/channels/sms` and its **Voice webhook** at
  `https://<worker>/channels/voice` (HTTP POST).
- **Social DMs** — a Meta developer app (see below). Real DM delivery requires
  Meta **business verification** and the `pages_messaging` (and, for Instagram,
  `instagram_manage_messages`) permissions, plus a page access token. This is
  gated by Meta policy and is the slowest to activate.

### Provider setup steps

**Twilio**
1. Create a Twilio account and buy a number (one per client, or a Messaging
   Service).
2. Put `TWILIO_ACCOUNT_SID` / `TWILIO_AUTH_TOKEN` (and the fallback numbers) in
   as Cloudflare secrets.
3. Configure the number's webhook URLs to point at the worker (above).

**Meta (Messenger / Instagram)**
1. Create a Meta app in the developers console (`META_APP_ID` + `META_APP_SECRET`).
2. Add the **Messenger** product, connect the client's Facebook page, and
   subscribe to the `messages` webhook field. Generate a page access token
   (`pages_messaging` permission) — store it per-client in the KV `channels`
   field (encrypted) or set the global `META_PAGE_ACCESS_TOKEN`.
3. For Instagram DMs, connect the Instagram business account and request
   `instagram_manage_messages`; the webhook `object` will be `"instagram"` and
   the entry id is the IG business account id (map via `channels.meta_instagram_id`).
4. Set `META_WEBHOOK_VERIFY_TOKEN` to any random string and use the same value
   when Meta verifies the webhook; point the webhook at
   `https://<worker>/channels/social`.
5. Complete Meta **business verification** (required for production messaging).

> None of these credentials are committed or hardcoded — they are Cloudflare
> secrets (or `.dev.vars` locally) and per-client KV fields. Do not fabricate
> tokens.

## Embedding the widget on a client's site

The widget is brand-agnostic (neutral slate/white by default). Apply the
client's own colors via `data-primary`/`data-accent`:

```html
<script src="https://<your-worker>/widget.js"
        data-client-id="bos-garage"
        data-primary="#0b3d2e"
        data-title="Chat with Bos Garage"
        async></script>
```

Config is read from `data-*` attributes or from
`window.LewisReceptionistConfig` set before the script. `widget.js` is
self-contained; `widget.css` is an optional standalone stylesheet. The widget
POSTs to `<worker>/chat` and renders `"I'll have someone get back to you."` for
forwarded items.

---

## Local test (no credentials required)

**Unit + end-to-end tests** run with a stub master secret and an in-memory KV —
no Cloudflare account and no real LLM key needed:

```bash
npm test          # vitest: crypto, guard, core, store/ledger, chat + SMS/voice/social + cleanup
npm run typecheck # tsc --noEmit
```

**Manual smoke test** with `wrangler dev` (local, no deployment):

```bash
cp .dev.vars.example .dev.vars
npx wrangler dev   # leave running
```

In another shell, register a stub client and chat with it:

```bash
export ADMIN_TOKEN=dev-only-admin-token-change-me

curl -s -X POST http://localhost:8787/admin/client \
  -H "Authorization: Bearer $ADMIN_TOKEN" -H "Content-Type: application/json" \
  -d '{"client_id":"test-shop","business_name":"Test Shop","provider":"stub","model":"stub",
       "api_key":"stub","facts":{"business_name":"Test Shop","hours":["Mon–Fri: 9 AM–5 PM"]}}'

curl -s -X POST http://localhost:8787/chat -H "Content-Type: application/json" \
  -d '{"client_id":"test-shop","message":"What are your hours?"}'
# → {"answer":"...","forward":false,...}

curl -s -X POST http://localhost:8787/chat -H "Content-Type: application/json" \
  -d '{"client_id":"test-shop","message":"How much does it cost?"}'
# → {"answer":"I'll have someone get back to you.","forward":true,...}
```

`provider:"stub"` is a deterministic, network-free stand-in for local dev. Real
clients use their own `openai` / `anthropic` / `gemini` key.

## Secrets the owner must provide (business secrets, never committed)

| Name | Required | Purpose |
| --- | --- | --- |
| `CLOUDFLARE_ACCOUNT_ID` | deploy | Cloudflare account |
| `CLOUDFLARE_API_TOKEN` | deploy | scoped token (Workers + KV edit) |
| `RECEPTIONIST_MASTER_SECRET` | runtime | encrypts/decrypts client LLM keys (and Meta page tokens) at rest |
| `ADMIN_TOKEN` | runtime | protects `/admin/*` |
| `FORWARD_WEBHOOK_URL` | optional | endpoint to email forwarded messages |
| `TWILIO_ACCOUNT_SID` | SMS/voice | Twilio account |
| `TWILIO_AUTH_TOKEN` | SMS/voice | signs/verifies webhooks + outbound API auth |
| `TWILIO_PHONE_NUMBER` | optional | fallback outbound From number |
| `TWILIO_MESSAGING_SERVICE_SID` | optional | outbound Messaging Service SID |
| `VOICE_FROM_NUMBER` | optional | fallback voice caller ID |
| `META_APP_ID` | social | Meta app id |
| `META_APP_SECRET` | social | verifies `X-Hub-Signature-256` |
| `META_PAGE_ACCESS_TOKEN` | optional | global fallback page token (per-client tokens in KV win) |
| `META_WEBHOOK_VERIFY_TOKEN` | social | matches `hub.verify_token` on subscription |

Per-client LLM keys and Meta page tokens are **not** our secrets — each client
supplies their own, stored encrypted in KV.

## Usage ledger & margin

Every chat records `requests`, `prompt_tokens`, `completion_tokens`, and
`total_tokens` per client per month (KV key `ledger:<id>`, reset on month
rollover). Optional `limits` (`max_monthly_requests` / `max_monthly_tokens`)
forward instead of answering once exceeded, so the $199/mo line can't be eaten
by a heavy client. KV's read-modify-write is fine for one low-concurrency
client; the documented upgrade path is an atomic D1 `UPDATE` (schema in
`wrangler.toml` comments).

## Project layout

```
ai-receptionist/
  src/
    index.ts               # Worker entry + router
    env.ts                 # Env bindings + secret helpers
    http.ts                # JSON/CORS/validation helpers
    types.ts               # shared shapes (facts, record, ledger, …)
    agent/core.ts          # shared agent core + honesty guard
    agent/prompt.ts        # system-prompt builder
    agent/providers.ts     # OpenAI/Anthropic/Gemini/stub adapters
    store/crypto.ts        # AES-256-GCM for client keys
    store/clientStore.ts   # per-client KV record + channel reverse indexes
    store/ledger.ts        # usage ledger (+ deleteLedger)
    store/forward.ts       # forward queue + webhook (+ deleteForwardQueue)
    channels/shared.ts     # runChannelTurn — shared glue for non-widget channels
    channels/twilio.ts     # Twilio signature verify + TwiML + Messages API
    channels/meta.ts       # Meta signature verify + Send API
    channels/util.ts       # timing-safe compare, base64/hex, XML escape
    routes/chat.ts         # POST /chat
    routes/admin.ts        # /admin/* (register/update, ledger, queue, delete)
    routes/channels.ts     # SMS/voice/social handlers
    widget/constants.ts    # GENERATED (from public/) — run `npm run sync:widget`
  public/widget.js         # canonical embed script (served at /widget.js)
  public/widget.css        # optional standalone stylesheet
  scripts/sync-widget.mjs  # regenerates src/widget/constants.ts
  test/                    # vitest suites (no network/creds)
```

If you edit `public/widget.js` or `public/widget.css`, run `npm run sync:widget`
to regenerate the embedded copy before deploying.
