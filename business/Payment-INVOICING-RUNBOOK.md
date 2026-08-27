# Lewis Digital — Payment & Invoicing Runbook (for Payment Agent + lead)

Purpose: be ready to collect payment and issue monthly invoices the moment a client says yes.
Status: working doc. All prices must stay consistent with the owner-approved plan
(`update_business_plan`) and the agreements in `/home/team/shared/agreements/`.

## The offer (source of truth: business plan + agreements)
| Item | One-time setup | Recurring | Term / notes |
|---|---|---|---|
| Basic Website | **$299** | **$25/mo** hosting & care | 12-month hosting term; then month-to-month |
| Bundle (Website + hosting & care) | **$399** | **$149/mo** (hosting incl.) | 12-month hosting term; then month-to-month |
| AI Receptionist (STANDALONE add-on) | — | **$199/mo** | SOLD SEPARATELY — never bundled into / offered during the website contract |
| Domain | actual registrar cost (pass-through, no markup) | — | Client owns the domain; charged separately at setup; renewal added to a monthly invoice when due (client's 1–2 yr term), with advance notice |
| Requested website changes | — | **$75/hr** (1-hr min) | Per-request, separate from hosting/care upkeep |

## When to charge what
1. **One-time setup fee** (Basic $299 or Bundle $399) + **domain pass-through** (actual cost)
   → collect via Stripe **payment link** BEFORE production build / domain purchase. Price is
   per `list_products` (use the correct price_id).
2. **Monthly service** (hosting & care $25/mo, Bundle $149/mo, AI Receptionist $199/mo standalone)
   → **invoice** via `create_invoice` to the client's billing email. Start monthly invoicing ONLY
   after the agreed service has gone live, unless a written exception is agreed.
3. **Domain renewal** → when due on the client's real renewal cycle, add the actual registrar cost
   to that month's normal invoice (with advance notice). Never a Lewis Digital markup.
4. **Requested changes** → invoice at $75/hr (1-hr minimum) only after written client approval;
   keep a log of time worked per request.

## 12-month term & early cancellation
- Hosting & care (Basic & Bundle) carry a **12-month initial term** from go-live. If the client
  cancels during that term, the **remaining balance of the selected recurring commitment remains due**.
- After the initial term, service is **month-to-month with 30 days' written notice** to cancel.
- The AI Receptionist is a separate product; its cancellation/terms follow the agreement for it.

## Confirming payment
- After any payment or invoice, confirm with `get_finance_overview` / `list_products` before
  reporting a sale. Never claim money arrived or a product went live unless the tool confirms it.
- When a payment is received, notify the owner (and route the client's next step: build/deliver).

## Catalog state (updated 2026-08-24, owner-approved)
- **Basic Website** — one-time $299 (price price_1U5mBXDBWr7CvH0Ephqs3X57). Monthly $25/mo billed by invoice.
- **Website + hosting & care** (the Bundle) — one-time $399 (product prod_V85GmqaZHNf5dD, price
  price_1U7p6HDBWr7CvH0ElkDKxd2s). Monthly $149/mo billed by invoice. This is the corrected
  Bundle product — created to replace the mislabeled "Bundle (Website + AI Receptionist)".
- **AI Receptionist** — STANDALONE add-on, $199/mo. No one-time setup fee, so it is billed by
  monthly invoice (NOT a one-time catalog product). It is de-coupled from the Bundle.
- NOTE: the OLD "Bundle (Website + AI Receptionist)" product (prod_V5y7O1Hrf4Cl9G) may still be
  present in the shared catalog (it cannot be renamed/archived via the team's tools). Do NOT use
  its price (price_1U5mBYDBWr7CvH0Emo1s1fmM) for new Bundle sales — use the corrected one above.

## What the lead needs from the owner to fire this up on a real client
- Confirm the line items above are what we invoice (mirror the plan).
- Approve fixing the stale Bundle product name/description (or state a different intent).
- Provide at close time, per client: **client billing email**, the single-time setup + the domain
  actual cost, and preferred start-of-monthly date (default = go-live).
