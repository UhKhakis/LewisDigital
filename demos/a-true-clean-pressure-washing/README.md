# A True Clean Pressure Washing — Demo Site

One-page demo website for **A True Clean Pressure Washing** (College Station,
TX), built in its own bespoke brand — and **deliberately structurally
distinct** from `demos/bucket-of-suds-exterior-cleaning/`, the other
pressure-washing demo in this gallery (both required per this batch's
brief). Part of round 2, batch 4 (the final batch) of Lewis Digital's demo
campaign. Static HTML/CSS, no framework, no build step.

## Research (before any design decision)

**Google Business listing** — `https://www.google.com/maps/search/A+True+Clean+Pressure+Washing+College+Station+TX`,
independently loaded and read live by the Builder, **2026-09-05**:

- Name: **A True Clean Pressure Washing**. Google's own category:
  **Pressure washing service**.
- No public address — a **service-area business** (matches the brief).
  Phone: **(903) 245-2232**.
- Rating: **5.0 stars, 4 reviews** — a small, thin, but perfect record,
  consistent with the brief's note that this business's real online
  presence is thin.
- Website field on the listing: none — only "Add website" was offered,
  confirming no independent site exists (Facebook is the only other
  presence, per the brief).
- Hours: listing showed **"Open · Closes 8 PM"** at check time — one data
  point, not a full published week.
- **No Google-generated highlighted review quotes appear on this listing**
  (unlike the other three businesses in this batch) — with only 4 reviews,
  Google does not surface auto-highlighted lines here, so none are shown on
  the page; only the aggregate rating is used, per the honesty rule.
- **Individual reviews read for internal design research** (not published
  as page copy, per the `client-demo-site` skill's internal-research-only
  rule): Shelby Sanchez (5★, 5 years ago) — "A True Clean did a wonderful
  job cleaning the driveway, front porch, and back patio of one of my
  rental properties... extremely satisfied... Ben is very knowledgeable,"
  with an owner reply thanking her and her property-management contact
  ("Boxwood") by name; Marcos Delgado (5★, 5 years ago) — "Ben was very
  respectful and had attention to detail. Did a great job power washing the
  driveway and cleaned spots along the house"; Kartik Sharma (5★, 4 years
  ago) — a tag-only positive review citing Responsiveness, Quality,
  Professionalism, Value. A 4th review exists but was not opened in full.
- Owner name **Ben Sanchez**, in business since **January 2021**, and
  **sole proprietorship** status are per the brief's pre-verified facts —
  consistent with what these reviews independently show (a single named
  "Ben" doing the work personally, with owner replies written in first
  person).

**Vocabulary/theme takeaway**: small, personal, one-man operation;
reviewers praise attention to detail and direct knowledge of the job, not a
big crew or a big brand. This is the seed for the "no crew, no dispatcher,
just Ben" direction below — not a generic "pressure washing" trade
template, and not a reskin of Bucket of Suds' larger-crew, higher-review-
count identity.

**`ui-ux-pro-max` query**: `search.py "residential pressure washing
driveway patio service" --design-system -p "A True Clean"` returned only
the database's generic fallback (Hero+Features+CTA, "Minimalism & Swiss
Style") — no niche-specific match, same generic fallback as the other three
businesses in this batch. Final direction below comes from the Builder's
own judgment, per `frontend-design`'s brainstorm → critique process.

## Structural distinctness vs. `demos/bucket-of-suds-exterior-cleaning/`

| Element | Bucket of Suds | A True Clean (this demo) |
|---|---|---|
| Header | Sticky, circular logo mark + wordmark, pill CTA button | Static (non-sticky), text-only wordmark, no logo mark, rectangular CTA |
| Hero | Full-bleed square photo with dark gradient scrim, centered text overlay | Solid navy color-block split, no photo scrim, offset **rotated** photo card (2.5°) with a white border, left-aligned text |
| Section dividers | Curved SVG "wave" dividers between sections | None — flat section boundaries |
| Section order | Hero → Services → Recent Work/About → Reviews → Visit → Contact | Hero → **About-first** ("no crew, no dispatcher") → Services → Reviews → Service area → Contact |
| Services layout | 3-column card grid with circular "bubble" icons and shadows | Plain 2-column checklist with checkmark glyphs, no cards, no shadows |
| Reviews layout | Dark sky-blue panel, tag-cloud of review topics, 3 real highlighted Google quotes | Light stone-panel section, dashed-border "work order" style rating card, no quotes shown (this listing has none) |
| Palette | Sky-blue + sun-yellow + white/foam | Navy-charcoal + citrus-lime + stone (no blue, no yellow) |
| Typography | Baloo 2 (rounded display) + Rubik — 2 fonts, rounded/friendly mood | Space Grotesk + Public Sans — 2 fonts, sharp/modern mood |
| Buttons | Fully rounded pills | Rounded rectangles (10px radius) |

## Brand system

| Signal | Source |
|---|---|
| Navy-charcoal + citrus-lime palette | Designer judgment: no usable brand photos exist for a service-area sole proprietor with only a Facebook presence, so the palette is honestly derived (not photo-extracted) from the "crisp, no-frills, one-man" review tone — chosen specifically to avoid Bucket of Suds' blue/yellow family and All American Septic's olive/rust family |
| Space Grotesk + Public Sans (2 fonts only, no mono accent) | A deliberately minimal type system — reflects a one-man shop rather than a larger, more elaborate operation; pairing not used elsewhere in this gallery |
| Rotated "offset photo card" hero, work-order-style reviews card | Original signature elements, chosen specifically to differ from every full-bleed/scrim hero and every dark tag-cloud reviews panel already in this gallery |

## Files

| File | Purpose |
|---|---|
| `index.html` | One-page site: hero, about-first intro, services checklist, Google reviews, service area/hours, contact, footer |
| `styles.css` | Client brand system (navy/lime/stone), Space Grotesk/Public Sans |
| `assets/hero-stairs-wash.jpg` | Hero photo: Pexels, ["Man Cleaning Stairs on Street"](https://www.pexels.com/photo/man-cleaning-stairs-on-street-14965464/), photographer **Antonio Lorenzana Bermejo** — illustrative, not A True Clean's own crew |
| `assets/sidewalk-wash.jpg` | Unused in this pass — reserved supporting photo: Pexels, ["Gardener Cleaning Sidewalk"](https://www.pexels.com/photo/gardener-cleaning-sidewalk-20296972/), photographer **Shivansh Sharma** |
| `README.md` | This file |
| `pitch-sheet.html` | Lewis-Digital-branded printable pitch sheet (our sales tool, gold/charcoal/cream untouched) |

Both photos are free-to-use under the [Pexels License](https://www.pexels.com/license/)
(no attribution legally required, credited here anyway) and are labeled as
illustrative stock photos in their `alt`/`figcaption` text — not photos of
A True Clean's real crew or job sites.

## Preview

```bash
cd demos/a-true-clean-pressure-washing
python3 -m http.server 8302 --bind 127.0.0.1
```

## What is REAL (verified & traceable)

- Business name, category ("Pressure washing service"), phone, service-area
  status (no public address) — Google Business listing, verified 2026-09-05.
- 5.0-star rating, 4-review count — same listing, same date.
- No independent website — same listing, same date.
- Owner name (Ben Sanchez), founding date (Jan 2021), sole-proprietor status
  — per the brief's pre-verified facts.

## What is PLACEHOLDER / ILLUSTRATIVE

- **Full weekly hours**: only "Open · Closes 8 PM" is verified at one point
  in time; the page states this explicitly and asks customers to call to
  confirm.
- **Service list** (driveways, porches, patios, siding, sidewalks, rental
  properties): generic categories informed by real review text (driveway,
  porch, patio, house spots were specifically named in reviews) but not a
  confirmed price/service menu — page carries an explicit "confirm by
  phone" note.
- **Hero photo**: free-license Pexels stock photo of a generic pressure-
  washing scene, not A True Clean's real crew or job site — disclosed in
  `alt` text, figcaption, and this README.
- **Reviews section**: only the real 5.0/4 rating is shown; individual
  review text stays internal research per the skill's rule — the page
  shows an honest "full written reviews will appear here once connected"
  placeholder.

## Brand-rule compliance

- Client-facing page uses only this business's own brand colors/fonts
  (navy-charcoal, citrus-lime, stone; Space Grotesk/Public Sans) — **no
  Lewis Digital gold/charcoal/cream** anywhere in `index.html`/`styles.css`.
- Footer reads exactly **"Designed by Lewis Tech"**, linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on the
  client-facing page.
- **"See us on Google" link confirmed present and correct**: `index.html`
  contains `<a href="https://www.google.com/maps/search/A+True+Clean+Pressure+Washing+College+Station+TX" target="_blank" rel="noopener">See us on Google</a>`
  in the reviews section — the exact `source_url` given in the brief.
- `pitch-sheet.html` intentionally keeps the Lewis Digital gold/charcoal/cream
  brand (our own sales tool) with this business's real facts substituted in.
- Structurally distinct from `demos/bucket-of-suds-exterior-cleaning/` per
  the diff table above — confirmed before finishing this demo.
