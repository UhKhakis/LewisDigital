# Lopez Roofing — Demo Site (owner-authorized batch, 2026-09-05)

One-page demo website for **Lopez Roofing** ((979) 823-0825 &middot;
Roofing contractor, 2916 Old Hearne Rd, Bryan, TX 77803). This is one of
four demos in an owner-authorized batch build (Feral Junk Removal and
Hauling LLC, Danomite Pest Control, A&amp;A Handyman Service) — the normal
"no demo until the client confirms interest" gate does not apply here
(Lead instruction, batch 3 of round 2, 2026-09-05).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Required distinctness check

This batch already includes a second roofing business, so per the Lead's
brief this demo was built **after** re-reading `demos/all-tex-roofing/`
in full (index.html + styles.css), and after glancing at the disqualified
`demos/bcs-roofing/` as well. See "Structural distinctness" below for the
specific comparison against both.

## Research (Google Maps, live via Chrome browser, verified 2026-09-05)

Source: `https://www.google.com/maps/search/Lopez+Roofing+Bryan+TX`

- **5.0 stars, 8 reviews.** All review text visible without further
  pagination was read for tone/vocabulary research:
  - Margaret "MnM 2018" Reynolds: "Sending out thanks to Lopez Roofing.
    They replaced our roof after the tornado in 2016 and just replaced it
    again due to hail storm last month." — a real, named, repeat-customer
    review matching the Lead's brief exactly (tornado 2016 + recent
    hailstorm, same home).
  - J. Pate: "We have had horrible luck with roofers in the past, but
    these guys were the best!"
  - Gilbert Becerra: "Very informative."
- Both the Margaret Reynolds and J. Pate quotes are used verbatim, with
  attribution, on the page's Reviews section — real, sourced testimonials,
  not invented.
- Category: Roofing contractor. Address and phone confirmed on the public
  listing. Hours show a 7:30 AM opening.
- Owner **Raul Lopez**, in business since 1975 (50 years), BBB A+
  accredited — per the Lead's pre-verified lead sheet, consistent with the
  long-tenure, repeat-trust story in the reviews above.
- No business website found.

## Design direction

**A 50-year legacy proven by a real repeat customer.** The standout real
signal isn't a specialty (like All-Tex's insurance-claim focus) or a
small-crew personal touch (like BCS's home-based-in-Franklin story) — it's
raw longevity plus a customer who came back twice across a decade. The
design leans fully into that: deep patina green (aged copper/weathered
longevity) + aged brass/gold (the BBB A+ trust signal) + warm parchment —
deliberately with **no red or rust anywhere**, unlike both other roofing
demos in the gallery. Typography is Crimson Pro (warm heritage serif) +
Epilogue (body) + Courier Prime (a typewriter mono used only for the
timeline's year-stamps, evoking an old paper record).

**Signature element:** a **"50 Years, Two Storms" horizontal timeline** —
four stops (1975 founding &rarr; 2016 tornado re-roof &rarr; recent
hailstorm re-roof &rarr; 50 years/BBB A+ today), built directly from the
real Margaret Reynolds review and the Lead's verified founding year.
Nothing like this exists elsewhere in `demos/`.

## Structural distinctness vs. All-Tex Roofing and BCS Roofing (required)

| | All-Tex Roofing | BCS Roofing | Lopez Roofing (this demo) |
|---|---|---|---|
| Hero shape | Dark steel hero, angular `clip-path` photo, roofline-pitch zigzag divider | Full-bleed photo with dark scrim, hanging job-tag rotated overlay | Plain two-column split, soft rounded-corner photo panel in a white frame — no angular clips, no full-bleed, no scrim |
| Signature element | Angular stats strip + fact-card, insurance-claim narrative | Shingle-course tab nav + 4-stage process list + hanging job-tag | Horizontal "50 Years, Two Storms" timeline with typewriter year-stamps |
| Palette | Cool steel-gray/navy + Texas red | Warm sand/tan + rust/terracotta + walnut + flashing blue-gray | Deep patina green + aged brass/gold + parchment — **no red/rust at all** |
| Type pairing | League Spartan + Lexend + Red Hat Mono | Oswald + Karla + Space Mono | Crimson Pro + Epilogue + Courier Prime |
| Reviews framing | Tag-cloud of Google's own topic counts | Star badge + honest "coming soon" placeholder | Two full, named, verbatim review quotes displayed as pull-quotes |

All three demos share only the fact that they're roofing contractors —
hero construction, signature element, palette, type pairing, and reviews
presentation are all different.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, 50-years timeline, services, about, reviews, location/hours, contact, footer) |
| `styles.css` | All styling — sourced client brand (patina green/brass/parchment, Crimson Pro/Epilogue/Courier Prime) |
| `assets/hero-shingle-install.jpg` | Hero photo — free-license stock photo |
| `assets/services-roof-repair.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos of general roofing work —
**not** photos of Raul Lopez or Lopez Roofing's own crew:

- **Hero** (`assets/hero-shingle-install.jpg`):
  [pexels.com/photo/9431615](https://www.pexels.com/photo/handyman-putting-roof-tiles-on-roof-9431615/)
  ("Handyman putting Roof Tiles on Roof"), photographer **Keith**.
- **Services section** (`assets/services-roof-repair.jpg`):
  [pexels.com/photo/37623613](https://www.pexels.com/photo/construction-worker-repairing-roof-in-daylight-37623613/)
  ("Construction Worker Repairing Roof in Daylight"), photographer
  **Bulat843**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page
credit lines.

## Preview

```bash
cd demos/lopez-roofing
python -m http.server 8217 --bind 127.0.0.1   # preview on localhost:8217
```

Verified locally 2026-09-05: both images render correctly, the timeline
row collapses correctly at mobile/tablet/desktop widths, no console
errors.

## What is REAL (verified &amp; traceable)

- Business name: **Lopez Roofing**
- Owner: **Raul Lopez**
- Phone: **(979) 823-0825**
- Address: **2916 Old Hearne Rd, Bryan, TX 77803**
- Category: **Roofing contractor**
- **Google rating: 5.0 out of 5, from 8 reviews** — verified 2026-09-05.
- **Two real, named review quotes used verbatim**: Margaret Reynolds'
  tornado/hailstorm repeat-customer story, and J. Pate's "these guys were
  the best" quote — both directly attributed as they appear on the public
  listing.
- **In business since 1975 (50 years), BBB A+ accredited** — per the
  Lead's pre-verified lead sheet.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service tiles** (full roof replacement, storm &amp; hail damage repair,
  tornado damage repair, roof leak repair, shingle &amp; composition
  roofing, roof inspections &amp; estimates): generic categories of
  roofing work, directly informed by the real reviews and founding
  history, but not an itemized, owner-confirmed service menu. The page
  states this directly.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of Raul Lopez or Lopez Roofing's actual crew or job sites.
- **Gilbert Becerra's "Very informative" review**: read for internal
  research only, per `client-demo-site` §1/§3 — not quoted on the page
  (too short to stand alone as a pull-quote; the two longer reviews were
  used instead).
- **Timeline year-badges (75/16/26/50)**: an original illustrative design
  treatment of real dates/events (1975 founding, 2016 tornado, a recent
  hailstorm, 50 years total) — the numbers are stylized two-digit tags on
  circular badges, not a claim of any additional unverified fact.
- **Hero/about narrative** ("fifty years, same family, same roof, twice"):
  original marketing language built directly from the real Margaret
  Reynolds review and founding year — not an invented testimonial.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced client-brand colors (patina
  green, brass/gold, parchment) and fonts (Crimson Pro, Epilogue, Courier
  Prime). **Zero Lewis Digital gold (`#C9A227` family), zero Lewis
  charcoal `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- Structurally distinct from both `demos/all-tex-roofing/` and
  `demos/bcs-roofing/` (the gallery's other roofing demos) — see
  comparison table above; checked against the rest of the gallery for
  general design-language collision as well (patina-green/brass palette
  and Crimson Pro/Epilogue/Courier Prime type pairing are both unique in
  `demos/`).
- **"See us on Google" link confirmed present** in `index.html`'s Reviews
  section, pointing to the exact source URL:
  `https://www.google.com/maps/search/Lopez+Roofing+Bryan+TX`.

## Notes for outreach

- The 50-year record plus a real, named repeat-customer story (tornado,
  then hailstorm, same home) is a genuinely strong, differentiated pitch —
  lead with it.
- BBB A+ accreditation is a real trust signal worth highlighting alongside
  the perfect 5.0 rating.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
