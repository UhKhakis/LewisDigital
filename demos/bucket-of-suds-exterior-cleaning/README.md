# Bucket of Suds Exterior Cleaning — Demo Site (owner-authorized batch, 2026-09-03)

One-page demo website for **Bucket of Suds Exterior Cleaning** (901 Esther
Blvd, Bryan, TX 77802 &middot; (830) 708-2692 &middot; Pressure washing
service). This is one of five demos in an owner-authorized batch build
(Bush's Appliance Repair, 95 Locksmith LLC, Larry's Handyman Service, and DC
Custom Seamless Gutters) — the normal "no demo until the client confirms
interest" gate does not apply here (Lead instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/Bucket+of+Suds+Exterior+Cleaning+Bryan+TX`

- **5.0 stars, 28 reviews** — the strongest review count of any business in
  this five-lead batch. Reviews were read for tone/vocabulary research —
  quoted here for internal design research only, per `client-demo-site`
  §1/§3; none of this text appears verbatim as review-card content on the
  page itself (three Google-selected highlight lines are shown, see below —
  these are Google's own featured excerpts, not ones we chose or wrote).
- Google features three of its own highlight lines directly on the listing
  (a structured feature, not a quote we selected): **"Great quality and
  great prices!"**, **"Great customer service, communication was square
  on!"**, **"Good hard working guys that do quality work."** These are shown
  on the page's Reviews section exactly as Google surfaces them.
- Full reviews read for research: "made our roof look so amazing... their
  soft pressure washing... made our driveway look amazing as well" (Sabrina
  Joy Grundei), "**Hayden Dubois** and his crew did an outstanding job on
  our home today 6/2/21! We needed our home professionally cleaned to prep
  for painting... found his business... on Facebook with rave reviews"
  (Denise Carroll — this is where the owner's name and a founding-era date
  come from), "**Hayden** was very polite and professional, and had all of
  his equipment ready to go. I've had other contractors come over and
  borrow tools and ladders, but he did not require anything" (Jessica Halm,
  re: gutter cleaning).
- Google's own review-tag summary (a structured feature of the listing
  itself, not an invented category): **professional staff ×8, business
  cleaning ×2, affordable ×2, sidewalk cleaning ×2.** These exact
  tags/counts are shown on the page's Reviews section.
- Live status read "Open · Closes 9 PM" when checked.
- Address and category confirmed directly on the listing: 901 Esther Blvd,
  Bryan, TX 77802 · Pressure washing service.
- Cover photo on the listing shows a worker on a roof, red shirt, cleaning
  a brick house — informed the choice of hero photo (a similar real,
  free-license stock photo was sourced rather than reusing Google's own
  photo, which isn't licensed for this use).
- No business website found; a Facebook page and a BBB profile exist per
  the Lead's lead sheet (not independently re-opened in this pass beyond
  the one Facebook reference inside a 2021 review).
- "Since 2020" is corroborated by a 2021-dated review already describing
  Hayden and "his crew" as an established operation with "rave reviews" on
  Facebook at that point.

## Design direction

**Bright, literal, and confident about being the biggest review count in
town.** Twenty-eight straight 5-star reviews with "professional staff" as
the single most-repeated tag (×8, more than any other business in this
batch) reads as a crew that's scaled past a one-man operation without
losing quality. The design leans into the literal subject matter — suds and
water — with a bright sudsy sky-blue + sunny bubble-yellow + crisp white
palette, Baloo 2 (a rounded, bubble-shaped display face) for headings, and
Rubik for body copy. Wave-shaped section dividers and bubble-dot service
icons carry the "exterior cleaning" idea visually without resorting to a
literal cartoon bubble illustration.

**Signature element:** Google's three self-selected highlight quotes
("Great quality and great prices!", "Great customer service, communication
was square on!", "Good hard working guys that do quality work.") shown as
styled blockquotes directly beside the tag-cloud data — an honest way to
surface Google's own curated review excerpts (a real listing feature, not
an editorial choice we made) alongside the numeric rating.

## Structural distinctness vs. other demos

No other demo in `demos/` is a pressure-washing business, so the main risk
is colliding with the *general* design language of the gallery — especially
any other bright, full-bleed-photo hero design:

| | Bucket of Suds (this demo) |
|---|---|
| Hero | Full-bleed square photo (roof cleaning), wave-shaped divider transitioning into the next section |
| Signature element | Google's own three highlight-quote blockquotes shown alongside real tag-cloud data |
| Palette | Sudsy sky-blue + sunny yellow + white (no other demo uses this blue/yellow combination; distinct from Sanchez Landscaping's and Static Heating's cooler teal-based systems) |
| Type pairing | Baloo 2 (rounded display) + Rubik — none used elsewhere in `demos/` |
| Section order | Hero → Services (bubble-dot cards) → Recent Work (photo + Hayden's story, split layout) → Reviews (quotes + tags) → Hours/Find us → Contact |
| Divider motif | Wave-shaped SVG dividers (not used by any other demo) |

No leaf dividers (Pete's Trees), no diagonal clip-paths (Bush's Appliance
Repair), no dot-grid pattern (95 Locksmith) — the wave motif and bubble
icons are unique to this demo.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, recent work, reviews, hours/find us, contact, footer) |
| `styles.css` | All styling — sourced client brand (sky-blue/sunny-yellow/white, Baloo 2/Rubik) |
| `assets/hero-roof-cleaning.jpg` | Hero photo — free-license stock photo |
| `assets/house-wash.jpg` | Recent-work-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos of general exterior-
cleaning work — **not** photos of Bucket of Suds, Hayden Dubois, or his
crew:

- **Hero** (`assets/hero-roof-cleaning.jpg`):
  [pexels.com/photo/38867780](https://www.pexels.com/photo/professional-roof-cleaning-in-action-capture-38867780/)
  ("Professional Roof Cleaning in Action Capture"), photographer **Toon
  Machiels** — chosen specifically because it echoes the real cover photo
  on Bucket of Suds' own Google listing (a worker cleaning a roof).
- **Recent Work section** (`assets/house-wash.jpg`):
  [pexels.com/photo/5652626](https://www.pexels.com/photo/back-view-of-a-person-pressure-washing-a-house-5652626/)
  ("Back View of a Person Pressure Washing a House"), photographer
  **Caitlin Whealy**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/bucket-of-suds-exterior-cleaning
python -m http.server 8212 --bind 127.0.0.1   # preview on localhost:8212
```

Verified locally 2026-09-03: both images render correctly, wave dividers
render correctly at desktop and mobile widths, no console errors.

## What is REAL (verified & traceable)

- Business name: **Bucket of Suds Exterior Cleaning**
- Owner: **Hayden Dubois** — confirmed by name from two separate review
  texts on the public Google Maps listing.
- Address: **901 Esther Blvd, Bryan, TX 77802**
- Phone: **(830) 708-2692**
- Category: **Pressure washing service**
- **Google rating: 5.0 out of 5, from 28 reviews** — verified 2026-09-03.
- **Google's three self-selected highlight quotes** ("Great quality and
  great prices!", "Great customer service, communication was square on!",
  "Good hard working guys that do quality work.") — a structured feature
  Google surfaces on the listing itself, not review text we chose.
- **Review-tag data and counts** (professional staff ×8, business cleaning
  ×2, affordable ×2, sidewalk cleaning ×2) — Google's own structured
  summary feature on the same listing, same date.
- **Hours**: only the single verified live-status fact ("Open · Closes 9
  PM," read 2026-09-03) is shown, attributed and dated — not a full
  schedule.
- "See us on Google" / directions links point to the real, exact source
  URL given for this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **"Since 2020"**: from the Lead's pre-verified lead sheet, corroborated
  (not independently proven) by a 2021 review describing Hayden as already
  running an established crew with "rave reviews" on Facebook at that
  point — shown on the page as a stated fact per the Lead's brief.
- **Service tiles** (roof soft washing, house washing, driveway & concrete,
  gutter cleaning, fence & deck cleaning, business exteriors): generic
  examples of exterior-cleaning work, informed by the real review content
  (roof cleaning, gutter cleaning, house-wash prep for painting) but not an
  itemized, owner-confirmed service menu. The page states this directly.
- **Both hero and recent-work photos**: real stock photos, explicitly not
  photos of Bucket of Suds, Hayden Dubois, or his crew.
- **Reviews section**: the real 5.0/28 rating, Google's own three highlight
  quotes, and Google's own tag/count data are shown — no other review text
  and no named customers beyond what Google itself surfaces appear on the
  page. The additional full review texts read during research (Sabrina Joy
  Grundei, Denise Carroll, Jessica Halm) stayed internal to this README, per
  `client-demo-site` §1/§3.
- **About/Recent-Work narrative** ("built this on repeat calls," "the
  strongest record of any pressure-washing outfit in the Bryan area"):
  original marketing language informed by the real review vocabulary above
  — not a direct quote, not an invented testimonial or statistic beyond the
  real 28-review count itself.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced client-brand colors (sky-blue,
  sunny yellow, white/foam) and fonts (Baloo 2, Rubik). **Zero Lewis
  Digital gold (`#C9A227` family), zero Lewis charcoal `#16130e`, zero
  Lewis cream `#fbf8f1`** anywhere in `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- No other demo in `demos/` is a pressure-washing business; checked against
  the full gallery for general design-language collision (palette, hero
  shape, type pairing, divider motif) — see table above.

## Notes for outreach

- Twenty-eight reviews at a perfect 5.0 is the single strongest review
  count in this batch of five leads — a very strong, ready-to-use pitch
  point, especially paired with Google's own "professional staff" tag
  appearing eight times.
- No existing website means there's no migration friction — a clean first
  web presence beyond Facebook and a BBB profile.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
