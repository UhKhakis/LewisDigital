# All-Tex Roofing — Demo Site (Batch 3, 2026-09-03)

One-page demo website for **All-Tex Roofing** ((979) 557-2020 — Roofing
contractor, Box 255, 3515-B Longmire Dr, College Station, TX 77845, located
in Rock Prairie Crossing). This is one of five demos in an owner-authorized
batch build (1st Choice Steam Cleaning, Maxey Way Window Cleaning, Sunrise
Pool & Spa Services, Smart Water Irrigation Repair) — the normal "no demo
until the client confirms interest" gate does not apply here (Lead
instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/All-Tex+Roofing+979-557-2020`

- **5.0 stars, 26 reviews.** Category: Roofing contractor. Address
  confirmed on listing: **Box 255, 3515-B Longmire Dr, College Station, TX
  77845**, located in **Rock Prairie Crossing**.
- Google's own review-tag summary (structured listing feature, not
  invented): **hail damage repair ×4, insurance process ×4, quick job ×2,
  timeline ×2**, plus 6 more untitled tags not individually opened.
- Google's own pull-quote snippets on the listing itself: "Overall great
  company with awesome customer service!", "I can highly recommend him as
  a quality contractor..", "Matt replaced the roof of my home and did an
  excellent job." — read for tone research only; per `client-demo-site`
  §1/§3 no review text (even Google's own real snippets) is reproduced on
  the page itself, only the rating and tag data.
- Named reviews read for research: Terri Hooper ("Matt was so helpful
  after hail damaged the roof of the house I was selling... he came out,
  determined the damage and reassured me he would do everything he could
  to meet the new closing [deadline]"), H McCaghren ("companies who stand
  by their product and are willing to work with customers even AFTER the
  invoice has been paid... selected All-Tex Roofing after seeing
  recommendations on Nextdoor"), Dawn Selix ("Matt was very helpful in
  walking me through the roof claim process... His workers were very
  polite and left my yard very clean afterwards").
- Owner **Matt** confirmed by name directly from multiple reviews.
- No business website found; per the Lead's brief, only directory
  listings exist otherwise. The Lead's brief also confirms same-named
  businesses in Midland/Houston/San Antonio, TX are independently verified
  as unrelated companies — not a chain or the same business.

## Design direction

**Storm-damage specialist who handles the insurance side too.** What sets
this record apart from a generic roofing shop isn't shingle quality — it's
that reviewer after reviewer specifically credits Matt for walking them
through the insurance claims process, hitting tight closing-date timelines
after hail damage, and standing behind the work after the invoice is paid.
That's a sharper, more procedural story than "we install roofs," so the
design leans structural and precise rather than warm/earthy: cool steel-
gray and navy with a single Texas-red accent, and literal roofline-pitch
angles (clip-path chevrons and diagonal cuts) used throughout as the
structural motif — not just in the hero, but in buttons, cards, and section
edges. League Spartan (a bold structural grotesque) carries headings,
Lexend carries body copy, Red Hat Mono marks data/tag elements — a fresh
three-font pairing not reused from any existing demo.

**Signature element:** a jagged **roofline-cut divider** directly under the
hero (a zigzag clip-path resembling a row of roof peaks) plus angled
clip-path corners on every card, button, and photo throughout the page —
no other demo in the gallery uses roofline-pitch geometry as a repeating
structural motif.

## Structural distinctness vs. BCS Roofing (existing roofing demo)

BCS Roofing is the only other roofing demo in `demos/`. It's warm and
earthy (rust/terracotta/cream, Oswald/Karla/Space Mono) with a full-bleed
photo hero and rounded cards — deliberately the opposite direction here:

| | All-Tex Roofing (this demo) | BCS Roofing (existing) |
|---|---|---|
| Hero | Split copy/photo with angular clip-path edges, zigzag roofline-cut divider below | Full-bleed photo hero, bottom-aligned copy, gradient scrim |
| Palette | Cool steel-gray/navy + Texas-red accent | Warm rust/terracotta + cream |
| Type pairing | League Spartan + Lexend + Red Hat Mono | Oswald + Karla + Space Mono |
| Shape language | Angular clip-path cuts on every card/button/photo | Rounded corners throughout |
| Section order | Hero → roofline-cut → stats → services → about → reviews → area → contact | About → Services → Process → Area → Reviews → Contact |
| Core positioning | Insurance-claim + hail-damage specialist | (General roofing positioning) |

The angular clip-path shape language applied consistently across every
component (not just the hero) is unique to this demo — no other demo in
the gallery, roofing or otherwise, uses diagonal-cut geometry this
pervasively.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, roofline-cut divider, stats, services, about, reviews, service area, contact, footer) |
| `styles.css` | All styling — sourced client brand (steel-gray/navy/red, League Spartan/Lexend/Red Hat Mono) |
| `assets/hero-shingle-install.jpg` | Hero photo — free-license stock photo |
| `assets/roof-install-detail.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos, both by the same
photographer (chosen for visual consistency, same as the 95 Locksmith demo
did) — **not** photos of All-Tex Roofing or Matt's own crew:

- **Hero** (`assets/hero-shingle-install.jpg`):
  [pexels.com/photo/33404248](https://www.pexels.com/photo/professional-roofer-installing-shingles-on-new-roof-33404248/)
  ("Professional Roofer Installing Shingles on New Roof," shot in The
  Colony, TX), photographer **Ryan Stephens**.
- **Services section** (`assets/roof-install-detail.jpg`):
  [pexels.com/photo/38028508](https://www.pexels.com/photo/roofer-installing-shingles-on-a-sunny-day-38028508/)
  ("Roofer Installing Shingles on a Sunny Day," shot in Fort Worth, TX),
  photographer **Ryan Stephens**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/all-tex-roofing
python -m http.server 8225 --bind 127.0.0.1   # preview on localhost:8225
```

Verified locally 2026-09-03: both images render correctly, angular
clip-path shapes render correctly across sections, no console errors,
content renders correctly at desktop and mobile widths.

## What is REAL (verified & traceable)

- Business name: **All-Tex Roofing**
- Owner: **Matt** — first name confirmed directly from multiple reviews on
  the public listing.
- Phone: **(979) 557-2020**
- Address: **Box 255, 3515-B Longmire Dr, College Station, TX 77845**,
  located in **Rock Prairie Crossing**.
- Category: **Roofing contractor**
- **Google rating: 5.0 out of 5, from 26 reviews** — verified 2026-09-03.
- **Review-tag data and counts** (hail damage repair ×4, insurance process
  ×4, quick job ×2, timeline ×2) — Google's own structured summary feature
  on the same listing, same date.
- "See us on Google" link points to the real, exact source URL given for
  this business.
- Independence from same-named businesses in Midland/Houston/San Antonio,
  TX — per the Lead's pre-verified lead sheet.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Full weekly hours**: only a Friday ~7 AM opening appears as a
  point-in-time listing status; the page tells visitors to call or message
  to confirm hours rather than presenting a guessed schedule.
- **Service tiles** (hail damage repair, full roof replacement, insurance
  claim assistance, leak repair, timeline-sensitive jobs, post-invoice
  support): informed directly by review vocabulary and Google's own tags,
  but not an itemized, owner-confirmed service menu. The page states this
  directly.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of All-Tex Roofing or Matt's own crew.
- **Reviews section**: only the real 5.0/26 rating and Google's own
  tag/count data are shown — no review text, no named customers appear on
  the page, even though real quotes exist on the public listing. Full
  review texts and Google's own pull-quotes read during research stayed
  internal to this README, per `client-demo-site` §1/§3.
- **About-section narrative** ("Matt walks them through the insurance
  claim process step by step," "the crew still stands behind the work
  after the invoice is paid"): original marketing language directly
  informed by real review vocabulary above — not a direct quote, not an
  invented testimonial.
- **Color palette**: no usable brand-color source (no website, no vehicle
  or signage photos found) was found — the steel-gray/navy/red system is
  derived from a "storm-damage specialist" positioning, disclosed here as
  derived rather than sourced from an existing visual identity.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced/derived client-brand colors
  (steel-gray, navy, Texas-red) and fonts (League Spartan, Lexend, Red Hat
  Mono). **Zero Lewis Digital gold (`#C9A227` family), zero Lewis charcoal
  `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- BCS Roofing is the only other roofing demo in `demos/`; checked directly
  against it for palette, type, hero treatment, shape language, and
  section-order collision — see table above. No collision found.

## Notes for outreach

- A 5.0-star, 26-review record built specifically around hail-damage and
  insurance-claim handling is a strong differentiator against generic
  roofing competitors, especially after any local storm event.
- No existing website means there's no migration friction — a clean first
  web presence beyond Google and directory listings.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
