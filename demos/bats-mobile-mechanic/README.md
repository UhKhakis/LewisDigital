# Bats Mobile Mechanic — Demo Site

## Why this business

Bats Mobile Mechanic is a one-man mobile auto repair operation in College
Station, run by owner Tony (formerly "Batmobile Mobile Mechanic"). It's a
strong proof-point lead: a 4.6-star rating from 36 Google reviews, no
existing website, and a genuinely distinctive service model — Tony drives to
the customer rather than running a fixed shop. One review describes him
rescuing a kitten stuck in a customer's engine bay while still completing
the repair, which is the kind of specific, memorable detail this campaign's
research step exists to surface.

## Research citations

- **Lead source (facts + initial verification):** `business/leads/leads.csv`
  row 69 — "Independent mobile mechanic business run by owner Tony (formerly
  known as Batmobile Mobile Mechanic); 4.6(36) Google reviews; no website
  found; verified 2026-09-05."
- **Listing URL:** https://www.google.com/maps/search/Bats+Mobile+Mechanic+College+Station+TX
- **Independent review-mining pass (this build):** conducted 2026-09-21 via
  the business's public Google Maps listing. Read the review summary
  (2 highlighted excerpts) plus 3 full review texts (Hector Chapa, Tyson
  Cannon, Halley Graham) and the review-topic tag list (battery replacement,
  mobile mechanic, tire change, reasonable pricing, punctuality, problem
  diagnosis, jump start, alternator check, tires, efficiency).
- **What the research surfaced:** quick response time, a mechanic who
  troubleshoots down to the actual root cause (a review specifically
  describes diagnosing a bad fuel pump rather than guessing), willingness to
  pick up parts mid-job (an AC part from AutoZone), and the kitten-rescue
  story. No existing website, Facebook page, or Instagram was found to pull
  color signals from — the palette below is honestly derived, not sourced
  from client photography.

## Brand system

| Element | Choice | Rationale |
|---|---|---|
| Palette | Cream/paper base (`#f7f4ec`) + deep dusk-indigo (`#2f3b63`) + headlight amber (`#e8a23d`) + ember coral (`#d9614a`) | A **light** system — the deliberate inverse of the dark-gunmetal "toolbox" palette used by nearly every fixed-shop demo in this trade. No signage/photo brand exists to source from, so this is honestly a derived palette chosen to evoke "dusk," the hour a breakdown call is likeliest and when a mobile dispatch actually happens. |
| Display font | Fraunces (variable, warm serif) | Personable rather than condensed-industrial — matches a one-man operation known for going out of his way (the kitten), not a bay full of lifts. |
| Body font | Manrope | Clean, modern, legible at small sizes for the dispatch-step copy. |
| Mono/accent font | Azeret Mono | Used sparingly for dispatch-ticket figures, distinct from JetBrains Mono (Soto's Mufflers) and Space Mono (AK Transmission). |
| Structural signature | A 3-step "dispatch flow" (call → Tony drives to you → fixed on site) plus a service-area chip list and a dashed-border "dispatch ticket" card | There is no shop to visit, so the page never uses a shop-info chalkboard, hours ticket-stub, or "find us" address block the way fixed-shop demos do — the structure itself reflects the mobile business model. |

## Structural distinctness

Checked against the existing auto-repair demos in `demos/` before finalizing
layout: Soto's Mufflers, Exhaust Works, AK Transmission, Siegert Radiator,
Andy's Auto Repair, Bos Garage, Bryan Muffler & Performance, Limitless
Diesel & Offroad. All of those are **dark-background, fixed-shop** sites
built around a shop-info element (chalkboard, ticket stub, console) and a
condensed-industrial display face (Khand, Oswald, Bebas Neue, Righteous,
Space Grotesk). Bats Mobile Mechanic differs in every one of those axes: a
**light**, cream-paper background; a warm serif display face; and a
dispatch/service-area structure built around "we come to you" instead of
shop hours and a physical address to visit.

## Verified vs. placeholder

| Field | Status | Source |
|---|---|---|
| Business name, category, town, phone | Verified | `business/leads/leads.csv`, verified 2026-09-05 |
| Rating (4.6) / review count (36) | Verified | Google Business Profile, re-verified 2026-09-21 |
| Owner name "Tony" | Verified | Google Business Profile owner responses, re-verified 2026-09-21 |
| Kitten-rescue anecdote | Verified (summarized, not quoted) | Real review by Halley Graham on the Google Business Profile, read 2026-09-21 — summarized in original wording on-page, never republished as a direct quote |
| Service list (battery, alternator, fuel pump, A/C, tire change, diagnostics) | Verified topics, generic descriptions | Built from real Google review-topic tags; page explicitly states "confirm exactly what's needed by calling" |
| Hours | Placeholder | "Call or message for hours" — no hours published on the listing at verification |
| Website | Placeholder / disclosed absence | "No independent website is listed... per its Google Business Profile" |
| Hero + supporting photos | Placeholder (illustrative stock) | Pexels — hero: photographer Mykola Volkov; supporting: photographer alameen .ng — both captioned as illustrative, not photos of the real business |
| Reviews section (on-page cards) | Placeholder | "Google reviews will appear here once connected" — real numeric rating shown, no invented quotes |

## Brand-rule compliance

- No "Lewis Digital" text anywhere on `index.html`. ✅
- Footer reads exactly "Designed by Lewis Tech" linking to
  `https://lewistechservices.com/`. ✅
- Palette/fonts are unique to this business — not Lewis Digital's
  gold/charcoal/cream, not reused from any other demo in `demos/`. ✅
- **Google link confirmed present and correct:** `index.html` contains three
  `<a href="https://www.google.com/maps/search/Bats+Mobile+Mechanic+College+Station+TX">`
  links (hero, reviews section, footer CTA), all using the exact
  `source_url` from the lead brief. ✅
- `pitch-sheet.html` carries Lewis Digital's own gold/charcoal/cream brand,
  as intended — the one page exempted from the client-brand rule. ✅
