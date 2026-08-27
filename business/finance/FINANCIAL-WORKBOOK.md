# Lewis Digital — Financial Workbook

**Purpose:** Live source-of-truth for client-level revenue. Every client signing **must** update this file FIRST (before any invoice), on the plan owner's instruction — the Sales & Negotiation Policy requires it. Projections are clearly labeled as targets; only recorded invoices/payments (`get_finance_overview`) count as actuals.

**Source of truth for money:** `get_finance_overview` (Stripe) — the only real balance/transaction data. Quote it exactly.
**Plan reference:** See "Financial Targets & Projections" and "Financial Workbook" in the business plan.

---

## 1. Product & Pricing Reference (earnable offers)

| Product | One-time setup | Monthly (MRR) | Term | Notes |
|---|---|---|---|---|
| Basic Website | $299 | $25 hosting & care | 12-mo | then month-to-month, 30 days' notice |
| Bundle (Website + hosting & care) | $399 | $149 | 12-mo | then month-to-month, 30 days' notice |
| AI Receptionist *(standalone add-on)* | — | $199 | month-to-month | sold separately AFTER website; ≥45% margin |
| Domain registration | pass-through (actual GoDaddy cost, no markup) | — | 1–2 yr client term | renewal added to monthly invoice when due |
| Requested site changes | — | $75/hr, 1-hr min | per request | not part of hosting/care |

> Note: old Stripe product "Bundle (Website + AI Receptionist)" by mistake existed in catalog — do NOT use; use "Website + hosting & care" $399 (`price_1U7p6HDBWr7CvH0ElkDKxd2s`). Owner can archive the old product in Stripe dashboard.

---

## 2. The Target: $5,000 MRR

This is the **goal**. It is a projection/target — not current revenue (currently **$0 balance, no transactions**).

**Working target: ~20–30 recurring clients.** Client counts by mix:

| Scenario | AI attach | Blended MRR/client | Clients needed for $5k |
|---|---|---|---|
| All Bundle-only | 0% | $149 | ~34 |
| Realistic mix | ~40% | ~$230 | ~22 |
| Aggressive AI attach | ~60% | ~$280 | ~18 |

**ROI / payback:** a Bundle + AI client repays the month's labor via its setup fee in ~1 month, then produces ~$348/mo recurring (and the AI line must hold ≥45% margin). At ~22 clients → ~$4.5–5.5k/mo (~$55–60k/yr) with near-zero running cost. The real investment is owner time and close rate, not capital.

---

## 3. Ramp Projection (targets — NOT actuals)

| Phase | Months | Projected MRR | Projected clients | Notes |
|---|---|---|---|---|
| Launch | 0–1 | $0–350 | 1–2 | needs phone/in-person outreach (16/18 leads have no email) |
| BCS wave | 2–4 | $700–1,300 | 4–6 | assumes 15–25% close rate; reveals true close rate |
| Expansion | 4–8 | $2,000–3,000 | ~10–15 | next cities/niches + AI attach |
| Scale | 8–14 | **$5,000** | 20–25 | consistent pipeline + retention |

**Realistic horizon to $5k MRR: 6–14 months** at a disciplined solo-local pace.

---

## 4. Client Ledger (CLIENT SIGNINGS)

> **Update this first, before any invoice.** One row per signing.

| # | Date signed | Client | Product sold | One-time setup | MRR/mo | Agreement term | Start/go-live | Domain pass-through | Projected revenue over full term | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| — | — | *(none yet — $0 MRR, 0 deals as of 2026-08-24)* | — | — | — | — | — | — | — | — |

**Projected-revenue-over-term formula (filled automatically on signing):**
- Basic = $299 + ($25 × term months) + (domain × renewals in term)
- Bundle = $399 + ($149 × term months) + (domain)
- + AI Receptionist = + ($199 × months the add-on is active)

---

## 5. Monthly Actuals vs. Projection

> Each calendar month, fill the actual column from `get_finance_overview` / invoices **only**. Projection = the ramp above. Keep MRR as a running number.

| Month | Projected MRR (target) | Actual MRR (realized) | Actual one-time (realized) | # clients | Variance vs target | Notes |
|---|---|---|---|---|---|---|
| 2026-08 (launch) | $0–350 | **$0** (no transactions) | **$0** | 0 | — | Stripe connected, payouts enabled, $0 balance |
| 2026-09 | $0–350 | — | — | — | — | — |
| 2026-10 | $700–1,300 | — | — | — | — | — |
| 2026-11 | $700–1,300 | — | — | — | — | — |
| 2026-12 | $2,000–3,000 | — | — | — | — | — |
| 2027-01 | $2,000–3,000 | — | — | — | — | — |
| 2027-02 | $2,000–3,000 | — | — | — | — | — |
| 2027-03 | $2,000–3,000 | — | — | — | — | — |
| 2027-04 | $5,000 | — | — | — | — | — |
| 2027-05 | $5,000 | — | — | — | — | — |
| 2027-06 | $5,000 | — | — | — | — | — |
| 2027-07 | $5,000 | — | — | — | — | — |
| 2027-08 | $5,000 | — | — | — | — | — |

---

## 6. Open Items / Maintainers
- **Reachability gap:** 16 of 18 leads have no published business email — the ramp needs phone outreach (kit ready at `/home/team/shared/outreach/PHONE-KIT.md`) or in-person pitch. Awaiting owner authorization.
- **Channels:** AI Receptionist SMS/voice/social-DM code complete but not live — needs Twilio + Meta credentials (business secrets).
- **Test LLM key:** current AI test key is a test key — swap before real client use.
- **Old Stripe product** ("Bundle (Website + AI Receptionist)") — owner to archive in Stripe dashboard.

*Last updated: 2026-08-24 (lead).*
