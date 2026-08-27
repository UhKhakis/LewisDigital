# AI Receptionist — Design & Hosting Plan (working note)

Status: OWNER-APPROVED 2026-08-23 — Build active.
- Runtime: Cloudflare Workers (owner approved, 2026-08-23).
- LLM keys: Model A — each client provides/pays for their own LLM API key (client-owned),
  so our direct LLM cost ~ $0 and margin stays highest. Build/test may use a temporary
  test key; client contracts require the client's own key.
- Build order: chat widget (now) -> SMS -> voice -> social DMs, one shared agent core.
- Channel scope (owner-set): website chat, SMS, voice calls, social DMs — standalone
  add-on, never offered during the website contract.

## Owner-set scope (2026-08-21)
- **AI Receptionist is a STANDALONE ADD-ON** covering the FULL channel set:
  **website chat widget, SMS, voice calls, and social DMs** (Facebook/Instagram).
- **It is NOT offered during / bundled into the website contract.** Website deals stay
  clean; the Receptionist is sold/added separately afterward as its own product.
- Open to any hosting. Prefer ~$0 spend, but willing to spend a little if the line keeps
  **at least a 45% profit margin** at the $199/mo price.

## What the product is
One agent core that answers common, factual customer questions (hours, address, phone,
services, booking/contact, FAQs) across four channels, and forwards anything it can't
handle to the business. It is a helpful tool, not a guarantee, and answers only from the
client's verified facts (same honesty rules as our sites). No spoofing, no invented claims.

## Recommended architecture (lead proposal, pending owner approval)

### Hosting: serverless agent backend, NOT cPanel/PHP
- cPanel shared hosting is batch-friendly (great for the website's contact form) but a poor
  fit for an always-on, async, multi-channel agent: it needs long-lived webhooks for
  SMS/voice/DM and clean per-tenant secrets — shared hosting is weak there.
- **Recommendation: Cloudflare Workers** as the agent runtime. Free tier is generous,
  has first-class environment secrets, a KV/D1 store for per-client config + usage ledger,
  webhook support, global edge latency, and near-$0 marginal cost. Vercel/Netlify serverless
  are good alternatives if preferred.
- **"Run it in GitHub under this project": YES for the code and CI/CD.** The agent code lives
  in the UhKhakis/LewisDigital repo, and a GitHub Actions workflow auto-deploys it to
  Cloudflare. But the live agents do NOT run on GitHub Pages — Pages is static-only and cannot
  hold secrets or run a backend. GitHub = source + deploy pipeline; Cloudflare = runtime.
- The website chat widget itself is a tiny JS launcher embedded on the client's own site
  (their brand, on their domain), which talks to the agent backend. No new website vendor.

### Per-client LLM keys — build & track
- **Never put any client's API key in the repo or in browser-visible JS.** Server-side only.
- Per-client record (in Cloudflare KV/D1, keyed by `client_id`):
  - provider + model, prompt / knowledge-base reference (the verified facts),
  - an **encrypted** reference to the API key (never the raw key at rest),
  - a **usage ledger**: running count of requests + tokens per client, so we can meter,
    invoice overage if needed, and protect the margin.
- Two key models (owner to choose):
  - **A) Client-owned key** — each client provides/pays for their own LLM key (OpenAI /
    Anthropic / Gemini). Our direct LLM cost ≈ $0 → highest margin. Slight client friction.
  - **B) We hold keys & absorb usage** — one redirect account, we meter per client and either
    absorb it (fine if usage is low) or pass through overage. Lower client friction, more
    cost risk for us; needs metering to hold >45%.

### Channels — delivery order (all four are the product)
Shared agent core; channel connectors layered on:
1. **Website chat widget** (fast, $0) + **email intake** of unanswered items.
2. **SMS** (Twilio: phone number ~$1–2/mo + per-message fee; webhook in/out).
3. **Voice calls** (Twilio voice + speech-to-text; metered per minute).
4. **Social DMs** (Meta Messenger/Instagram API: needs a Meta app + business verification —
   slowest, gated by Meta policy; lowest cost once approved).

## Margin reality-check at $199/mo (target ≥45%)
- Hosting: ~$0 (Cloudflare free tier + cPanel already owned).
- Telephony (SMS/calls): small, metered — a few dollars per month at typical volumes.
- LLM: with **client-owned keys** ≈ $0 to us; with our keys, pennies per 1000 interactions on
  a cheap/fast model.
- Worst case (our keys + high usage + telco): still typically well under ~$50/mo direct cost on
  a busy client, so >45% holds at $199. If a client is unusually heavy, meter and pass through
  overage. Final per-message prices to be confirmed live at build time before quoting.

## Open decisions for owner
1. Approve **Cloudflare Workers** (vs Vercel/Netlify) as the agent runtime?
2. **Key model: A) client-owned keys, or B) we hold keys + meter/pass-through?**
3. Approve build order: chat → SMS → voice → social DMs (share one core)?
4. Set a **usage cap / pass-through trigger** so the line never drops below 45% margin.
