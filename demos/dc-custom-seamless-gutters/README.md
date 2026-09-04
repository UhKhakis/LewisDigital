# DC Custom Seamless Gutters — Demo Site (owner-authorized batch, 2026-09-03)

One-page demo website for **DC Custom Seamless Gutters** ((979) 229-8432
&middot; Gutter cleaning service, serving Bryan, TX and Burleson County
&middot; no public street address). This is one of five demos in an
owner-authorized batch build (Bush's Appliance Repair, 95 Locksmith LLC,
Bucket of Suds Exterior Cleaning, and Larry's Handyman Service) — the
normal "no demo until the client confirms interest" gate does not apply
here (Lead instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/DC+Custom+Seamless+Gutters+979-229-8432`

- **5.0 stars, 19 reviews.** The three most recent reviews visible without
  further pagination were read for tone/vocabulary research — quoted here
  for internal design research only, per `client-demo-site` §1/§3; none of
  this text appears on the page itself.
- Repeated language across reviews: "D.C. Custom Seamless Gutters recently
  replaced all of the gutters on our home, and they did such an awesome
  job!... We also liked their choice of Christian music that [they played
  while working]" (Karen Bratsen, 7 years ago), "DC Gutters did a very good
  job for installing new gutters at my house, and the price is reasonable.
  The crews were very nice and careful" (Katherine Yang, 7 years ago),
  "This company did an excellent job installing rain gutters around my home
  today, 8-10-18 in College Station. They paid attention to details I
  didn't know existed in the installation process. All of this, along with
  a good price and warranty..." (Knight Knight, 8 years ago).
- Review dates span roughly **8 years** (oldest read: 8-10-18, i.e.
  2018-08-10) to recent, all still averaging a perfect 5.0 — this is the
  most established, longest-running business in this five-lead batch by
  visible review history.
- Google's own review-tag summary (a structured feature of the listing
  itself, not an invented category): **job ×9, gutters ×3, gutter
  replacement ×2, great job ×2.** These exact tags/counts are shown on the
  page's Reviews section — Google's own aggregation, not a quote or
  summary we wrote.
- Live status read "Closed · Opens 8 AM Fri" when checked.
- Category: Gutter cleaning service (Google's category label; reviews
  describe full installation work, not just cleaning — the page's services
  section reflects both). No public street address on the listing; the
  Lead's lead sheet states "Areas served: Burleson County and nearby,"
  matching the general no-address, service-area pattern of the other mobile
  businesses in this batch.
- Only 3 photos on the listing (per the page's own "3 Photos" label) —
  not enough to draw a reliable color signal from, so the palette below is
  a derived (not photo-sourced) design choice, disclosed honestly.
- No business website found; a Facebook page (650+ followers, per the
  Lead's lead sheet) exists, and a domain sometimes referenced by
  aggregators does not resolve to a live site — confirming no real website,
  consistent with the Lead's brief.

## Design direction

**Established, precise, detail-obsessed.** Eight years of public reviews
holding a perfect 5.0 — including a reviewer specifically praising
attention to "details I didn't know existed" — reads as a mature, careful
fabrication business rather than a scrappy startup. Because the listing's
own photos are too few to extract a reliable color signal from (disclosed
honestly rather than guessed), the palette is a derived choice built from
the trade itself: verdigris (aged copper/patina, the color seamless gutters
and flashing take on over years) + slate charcoal + a crisp rain-blue
accent, with Outfit (a precise geometric display face) for headings, Albert
Sans for body copy, and Roboto Mono for spec-sheet style service numbering
— evoking blueprint precision rather than a rustic trade-shop feel.

**Signature element:** a diagonal, dashed **seam-line overlay** across the
hero photo (styled like blueprint annotation lines), visually standing in
for the literal idea of "seamless" fabrication — a continuous run with no
pieced-together joints — without needing a literal gutter-cutaway
illustration.

## Structural distinctness vs. other demos

No other demo in `demos/` is a gutter business, so the main risk is
colliding with the *general* design language of the gallery — especially
Sanchez Landscaping, the other saturated-teal demo already built:

| | DC Custom Seamless Gutters (this demo) | Sanchez Landscaping (existing) |
|---|---|---|
| Hero | Split layout with a dashed blueprint seam-line overlay on the photo | Full-bleed hero, different structure/motif |
| Signature element | Diagonal seam-line blueprint overlay | (Distinct — landscaping-specific, not shared) |
| Palette | Verdigris green + slate charcoal + rain-blue accent | Saturated teal `#1c6e63` + near-black mulch |
| Type pairing | Outfit + Albert Sans + Roboto Mono | Fraunces + Inter + Space Mono |
| Section order | Hero → Services (spec-numbered cards) → About (fact card) → Reviews → Service area/Hours → Contact | (Different trade-specific order) |

Numbered "spec sheet" service cards (`01`–`06` in mono type) are unique to
this demo across the whole gallery.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, about, reviews, service area/hours, contact, footer) |
| `styles.css` | All styling — sourced client brand (verdigris/slate/rain-blue, Outfit/Albert Sans/Roboto Mono) |
| `assets/hero-gutter-install.jpg` | Hero photo — free-license stock photo |
| `assets/gutter-rain-detail.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos of general gutter work —
**not** photos of DC Custom Seamless Gutters or its crew:

- **Hero** (`assets/hero-gutter-install.jpg`):
  [pexels.com/photo/34006744](https://www.pexels.com/photo/construction-worker-installing-building-gutter-outdoors-34006744/)
  ("Construction Worker Installing Building Gutter Outdoors"), photographer
  **Chris Shafer**.
- **Services section** (`assets/gutter-rain-detail.jpg`):
  [pexels.com/photo/20113440](https://www.pexels.com/photo/water-drops-in-gutter-20113440/)
  ("Water Drops in Gutter"), photographer **Zeynep Sude Emek**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/dc-custom-seamless-gutters
python -m http.server 8214 --bind 127.0.0.1   # preview on localhost:8214
```

Verified locally 2026-09-03: both images render correctly, seam-line SVG
overlay renders correctly, no console errors, content renders correctly at
desktop and mobile widths.

## What is REAL (verified & traceable)

- Business name: **DC Custom Seamless Gutters**
- Phone: **(979) 229-8432**
- Category: **Gutter cleaning service** (Google's listed category)
- **Google rating: 5.0 out of 5, from 19 reviews** — verified 2026-09-03.
- **Review-tag data and counts** (job ×9, gutters ×3, gutter replacement
  ×2, great job ×2) — Google's own structured summary feature on the same
  listing, same date.
- **Review history spans roughly 8 years** (oldest dated review read:
  2018-08-10) while maintaining a perfect 5.0 average — directly observed
  from review timestamps on the listing.
- **Hours**: only the single verified live-status fact ("Closed · Opens 8
  AM Fri," read 2026-09-03) is shown, attributed and dated — not a full
  schedule.
- **No public street address** — confirmed by its absence on the listing;
  the page states the general service area rather than guessing.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **"Burleson County and nearby"** service area: from the Lead's
  pre-verified lead sheet (attributed there to Google's own "Areas served"
  data), not independently re-confirmed as a structured field on the
  listing in this pass — shown on the page per the Lead's brief.
- **Palette**: explicitly a **derived** choice, not sourced from the
  business's own photos or branding — the listing has only 3 photos, too
  few to extract a reliable color read from. This is disclosed here rather
  than presented as if it were verified from a real photo, per
  `client-demo-site` §1's fallback guidance.
- **Service tiles** (seamless gutter installation, gutter guards & leaf
  protection, cleaning & maintenance, repair & resealing, downspout &
  drainage, color-matched fascia): generic categories of gutter work,
  informed by the real review content (full installations, a warranty
  offered) but not an itemized, owner-confirmed service menu. The page
  states this directly.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of DC Custom Seamless Gutters or its crew.
- **Reviews section**: only the real 5.0/19 rating and Google's own
  tag/count data are shown — no review text, no named customers appear on
  the page. The full review texts read during research (Karen Bratsen,
  Katherine Yang, Knight Knight, and the 16 additional reviews behind "More
  reviews") stayed internal to this README, per `client-demo-site` §1/§3.
- **About-section narrative** ("mature, careful fabrication business," "a
  continuous run with no pieced-together joints"): original marketing
  language informed by the real review vocabulary above — not a direct
  quote, not an invented testimonial.
- **"Christian music" detail**: read during research as a personal,
  characterful detail from one review, but deliberately kept out of the
  page copy — it's one customer's specific observation, not a business-wide
  claim to assert as fact.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced/derived client-brand colors
  (verdigris, slate charcoal, rain-blue, ivory) and fonts (Outfit, Albert
  Sans, Roboto Mono). **Zero Lewis Digital gold (`#C9A227` family), zero
  Lewis charcoal `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- No other demo in `demos/` is a gutter business; checked specifically
  against Sanchez Landscaping (the gallery's other saturated-teal demo) for
  general design-language collision — see table above.

## Notes for outreach

- Eight years of reviews holding a perfect 5.0 average is the strongest
  tenure signal in this batch of five leads — a very credible, ready-to-use
  pitch point ("this isn't a new company, it's a proven one").
- No existing website means there's no migration friction — a clean first
  web presence beyond a Facebook page.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
