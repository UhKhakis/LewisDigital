# A&L Tire Shop — Demo Site

## Why this business

A&L Tire Shop is a small, family-owned tire shop on Finfeather Rd in Bryan
that's served the Brazos Valley for over 10 years. It's a strong
proof-point lead: 4.8 stars from 63 Google reviews describing a "hometown
vibe" and staff who know repeat customers by name — one employee, Leo, gets
specific, repeated praise for honest, knowledgeable service. No existing
website was found. It also shares its exact street address, 1312
Finfeather Rd, with `demos/sotos-mufflers/` (a neighboring, unrelated
business built in an earlier batch), which made structural distinctness
against that specific sibling a hard requirement for this build.

## Research citations

- **Lead source (facts + initial verification):** `business/leads/leads.csv`
  row 76 — "Independent, small family-owned tire shop serving the Brazos
  Valley for over 10 years; 4.8(63) Google reviews describing a 'hometown
  vibe' and staff who know repeat customers by name; no website found;
  verified 2026-09-05."
- **Listing URL:** https://www.google.com/maps/search/A%26L+Tire+Shop+Bryan+TX
- **Independent review-mining pass (this build):** conducted 2026-09-21 via
  the business's public Google Maps listing. Read the review summary
  (2 highlighted excerpts) plus 3 full review texts (Priscilla, Ryan Lund,
  Chris Spalding) and the review-topic tag list (used tires — 8, tire
  replacement — 11, affordable — 4, great deals — 2).
- **What the research surfaced:** the employee name "Leo," specifically
  praised for walking a customer through tire options honestly and
  confidently; the "hometown vibe" and "small family owned business" phrases
  used directly by reviewers; staff who "remember me and ask about my
  family"; and competitive pricing on used tires as a specific draw. No
  existing website, Facebook page, or Instagram was found to pull color
  signals from — the palette below is honestly derived, not sourced from
  client photography.

## Brand system

| Element | Choice | Rationale |
|---|---|---|
| Palette | Warm terracotta (`#c1613c`) + sun-worn denim (`#2c4a5e`) + sandy tan (`#f2e4cf`) | A light, warm "neighborhood corner shop" system — deliberately NOT the dark gunmetal + rust + chrome + caution-mustard "industrial toolbox" palette used next door by Soto's Mufflers, which shares this exact building address. |
| Display font | Fredoka (rounded, warm) | Friendly and approachable, matching the "they know my name" community tone — nothing like Soto's condensed Khand. |
| Body font | Nunito | Warm, rounded, easy to read. |
| Mono/accent font | Red Hat Mono | Used sparingly for chips/labels — distinct from Soto's JetBrains Mono and Mansel's IBM Plex Mono. |
| Structural signature | A "Meet Leo" named-staff spotlight card and a new-vs-used tire comparison panel | Neither has any equivalent on Soto's page, which runs a shop-rules chalkboard and a cash-only ticket stub instead — A&L's signature elements are built around a *named individual* and *product choice*, not shop rules or payment logistics. |

## Structural distinctness (especially vs. Soto's Mufflers)

Soto's Mufflers, which shares A&L's exact street address (1312 Finfeather
Rd, Bryan), runs: a dark gunmetal/rust/chrome/caution palette, a sticky
dark header, condensed Khand display type, a 3-item dark facts strip, a
services list with monospace markers, a "shop rules" chalkboard graphic
next to a photo, an about section, an hours section built around a
cash-only "ticket stub" graphic, and a split reviews grid. A&L Tire Shop
differs on every one of those points: a **light** sand/terracotta/denim
palette, a rounded Fredoka display face, a "Meet Leo" personal spotlight
card (no equivalent on Soto's page at all), a new-vs-used tire comparison
panel instead of a chalkboard, and no ticket-stub motif anywhere. The two
pages would not be mistaken for siblings even with the shared address
called out on both. Also checked against Mansel's Wheel Alignment (navy/
burgundy heritage system, also built in this batch) — no palette or
structural overlap.

## Verified vs. placeholder

| Field | Status | Source |
|---|---|---|
| Business name, category, town, phone | Verified | `business/leads/leads.csv`, verified 2026-09-05 |
| Rating (4.8) / review count (63) | Verified | Google Business Profile, re-verified 2026-09-21 |
| "10+ years serving the Brazos Valley" | Verified | `business/leads/leads.csv`, verified 2026-09-05 |
| Employee name "Leo" | Verified | Real review by Priscilla on the Google Business Profile, read 2026-09-21 — summarized, not quoted |
| "Hometown vibe" / family-owned framing | Verified (summarized, not quoted) | Real reviews (Ryan Lund and the profile's own review-summary excerpt), read 2026-09-21 |
| Service list (used/new tires, replacement, damage inspection) | Verified topics, generic descriptions | Built from real Google review-topic tags and review summaries; page explicitly states "confirm exactly what's in stock by calling" |
| Hours | Placeholder | Opening time (8:30 AM) shown per listing; full weekly hours not published, page says to confirm |
| Website | Placeholder / disclosed absence | "No independent website is listed... per its Google Business Profile" |
| Hero + supporting photos | Placeholder (illustrative stock) | Pexels — hero: photographer Enis Yavuz; supporting: photographer Erik Mclean — both captioned as illustrative, not photos of the real business |
| Reviews section (on-page cards) | Placeholder | "Google reviews will appear here once connected" — real numeric rating shown, no invented quotes |

## Brand-rule compliance

- No "Lewis Digital" text anywhere on `index.html`. ✅
- Footer reads exactly "Designed by Lewis Tech" linking to
  `https://lewistechservices.com/`. ✅
- Palette/fonts are unique to this business — not Lewis Digital's
  gold/charcoal/cream, not reused from any other demo in `demos/`. ✅
- **Google link confirmed present and correct:** `index.html` contains five
  `<a href="https://www.google.com/maps/search/A%26L+Tire+Shop+Bryan+TX">`
  links (hero, reviews section, find-us address, contact CTA, directions),
  all using the exact `source_url` from the lead brief. ✅
- `pitch-sheet.html` carries Lewis Digital's own gold/charcoal/cream brand,
  as intended — the one page exempted from the client-brand rule. ✅
