# Skyes View Window Cleaning — Demo Site (Batch 4, 2026-09-03)

One-page demo website for **Skyes View Window Cleaning** ((936) 870-7966 —
Window cleaning service, Navasota area / Grimes County, TX). This is one of
five demos in an owner-authorized batch build (Next Plumbing & Heating,
B&B Electric Co, Andy's Auto Repair, All American Septic) — the normal "no
demo until the client confirms interest" gate does not apply here (Lead
instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/Skyes+View+Window+Cleaning`

- **5.0 stars, 3 reviews** on Google. Category: Window cleaning service.
- Read all 3 available review texts for tone (per `client-demo-site` §1).
  Repeated language: "family oriented," "conscientious," "courteous,"
  "on time," "professional," attention to detail. One reviewer specifically
  mentions the crew cleaning "barndominium windows which were 10' high" —
  a strong signal this business regularly works rural/acreage properties
  with unusually tall glass, not standard suburban homes. Short excerpts,
  read for internal tone research only, never published on the page:
  "Amazing job from start to finish! The windows made the whole house feel
  brighter." / "Wonderful, family oriented company that takes pride in
  their work."
- No street address on the listing (a mobile/local service business, not
  an address to guess at) and no hours published.
- No business website found — Google listing shows an "Add website"
  prompt. Per the Lead's brief, the only social presence is a Facebook
  page.
- Per the Lead's brief, Skyes View serves the **Navasota area and Grimes
  County**, adjacent to but distinct from Bryan/College Station — this
  page states that honestly rather than implying it's centrally
  Bryan/CS-based.
- No usable brand-color source (no site, no visible truck/uniform photos)
  — palette below is derived from the reviewer language itself ("brighter,"
  a homestead/barndominium setting) rather than the trade category, and is
  disclosed as derived.

## Design direction

**A homestead, not a storefront.** Where Maxey Way Window Cleaning (the
other window cleaner in this gallery) reads as bright, minimal, urban
glass-and-sky, Skyes View leans into its actual customer base — rural
Grimes County properties, barndominiums, referral-only trust — with a
warm barnwood-brown + dawn-blush palette, a literary serif (Lora, set in
italic for the headline) paired with a clean geometric sans (Jost), and a
slower, single-column storytelling layout instead of card grids. The
"brighter" language from real reviews directly seeded the choice of a
sunlit-glass hero image and the warm dawn-blush accent color.

**Signature elements (all unique to this demo in the gallery):**
1. A **full-bleed, bottom-anchored hero** — headline and CTA sit at the
   bottom third of a full-height photo with a dark-to-transparent scrim,
   rather than being docked beside or centered over the photo.
2. A **photo-break** — a second full-width photograph (a rural Texas barn)
   dropped between the story and services sections purely as a visual
   pause, with no accompanying card or grid.
3. **Tilted note cards** in the reviews section — the rating card sits next
   to two slightly-rotated "note" cards (honest disclosure text, no
   fabricated quotes) rather than a single rating-card-plus-copy pairing.

## Structural distinctness vs. Maxey Way Window Cleaning (required diff)

Per the Lead's brief, this table is the explicit before-you-build check
against `demos/maxey-way-window-cleaning/`, read in full before designing
this demo:

| | Skyes View (this demo) | Maxey Way Window Cleaning (existing) |
|---|---|---|
| Hero | Full-bleed photo, text anchored at the **bottom**, dark-to-clear scrim | Minimalist, mostly white/glass space, photo **docked to one side** of a split layout |
| Header | Plain text wordmark, non-sticky, no boxed monogram | Boxed two-letter monogram ("MW") in a sticky header |
| Section order | Hero → single-column story → full-width photo break → what-we-clean list → tilted-card reviews → area → contact | Hero → diagonal streak divider → honesty/trust strip → services (photo-in-grid) → about → rating-card reviews → service area → contact |
| Signature element | Bottom-anchored hero + photo-break + tilted note cards | Diagonal squeegee-streak divider between hero and body |
| "What we clean" layout | Simple bulleted list beside a tilted photo, no card grid | 4-item card grid |
| Reviews layout | Rating card + two independent tilted note cards | Rating card + single copy block, side by side |
| Palette | Warm barnwood-brown + dawn-blush + cream | Bright sky-blue + glass-white + sun-yellow |
| Type pairing | Lora (italic serif) + Jost | Schibsted Grotesk + Plus Jakarta Sans + Spline Sans Mono |
| Mood | Rural, homestead, literary, slower pace | Urban-adjacent, minimal, bright, fast |
| Service-area framing | Explicitly Navasota/Grimes County, distinct from Bryan/CS | Explicitly Brazos County/Bryan |

No hero treatment, section order, signature element, palette, or type
pairing is shared between the two demos.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, story, photo break, what-we-clean, reviews, service area, contact, footer) |
| `styles.css` | All styling — derived client brand (barnwood-brown/dawn-blush/cream, Lora/Jost) |
| `assets/hero-farmhouse-window.jpg` | Hero photo — free-license stock photo |
| `assets/grimes-county-barn.jpg` | Photo-break image — free-license stock photo |
| `assets/window-detail.jpg` | What-we-clean section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

All three are real, free-license Pexels stock photos — **not** photos of
Skyes View or its actual work:

- **Hero** (`assets/hero-farmhouse-window.jpg`): [pexels.com/photo/13025313](https://www.pexels.com/photo/13025313/)
  ("A serene view through a glass pane window of a lush green garden on a
  clear day" — chosen specifically for clean, bright glass rather than a
  weathered/cobwebbed window, to match the "brighter" review language).
- **Photo break** (`assets/grimes-county-barn.jpg`): [pexels.com/photo/18579042](https://www.pexels.com/photo/18579042/)
  ("Charming red barn on a grassy hill, surrounded by trees in rural Allen,
  Texas" — representing the rural Grimes County service area generally,
  not a specific client property).
- **What-we-clean section** (`assets/window-detail.jpg`): [pexels.com/photo/6195105](https://www.pexels.com/photo/6195105/)
  ("A modern cleaning tool used to clean a large glass window with a clear
  outdoor view").

All licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/skyes-view-window-cleaning
python -m http.server 8234 --bind 127.0.0.1   # preview on localhost:8234
```

Verified locally 2026-09-03: all three images render correctly, no console
errors, content renders correctly at desktop and mobile widths.

## What is REAL (verified & traceable)

- Business name: **Skyes View Window Cleaning**
- Phone: **(936) 870-7966**
- Service area: **Navasota area and Grimes County, TX** — per the Lead's
  pre-verified business record, distinct from Bryan/College Station.
- Category: **Window cleaning service**
- **Google rating: 5.0 out of 5, from 3 reviews** — verified 2026-09-03.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **No street address**: none is published on the listing — the page
  never guesses one.
- **Hours**: none published at all — the page tells visitors to call or
  text rather than presenting a guessed schedule.
- **What-we-clean list items**: generic categories of window-cleaning work
  (informed by the "barndominium windows 10' high" detail from real
  reviews, read for internal research only) — the page states these are
  general categories and asks visitors to confirm by phone/text.
- **All three photos**: real stock photos, explicitly not photos of Skyes
  View's own work, crew, or a real client property.
- **Reviews section**: only the real 5.0/3 rating is shown — actual review
  text (including the "barndominium" and "brighter" details used for
  internal design research) stays internal to this README, per
  `client-demo-site` §1/§3. The two "note cards" on the page contain only
  honest disclosure copy, never fabricated quotes.
- **Story-section narrative**: original copy informed by the real rating,
  review tone, and the Navasota/Grimes County service area — not a direct
  quote or invented testimonial.
- **Color palette**: no usable brand-color source (no site, no visible
  truck/uniform photos on the listing) — the barnwood-brown/dawn-blush
  system is derived from the reviewer language and rural setting,
  disclosed here as derived rather than sourced from an existing visual
  identity.

## Brand-rule compliance

- Client-facing page uses ONLY the derived client-brand colors
  (barnwood-brown, dawn-blush, cream) and fonts (Lora, Jost). **Zero Lewis
  Digital gold (`#C9A227` family), zero Lewis charcoal `#16130e`, zero
  Lewis cream `#fbf8f1`** anywhere in `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- **Explicitly checked against `demos/maxey-way-window-cleaning/`** per the
  Lead's brief — see the required diff table above. No shared hero
  treatment, section order, signature element, palette, or type pairing.
- Also checked against the other four demos in this same batch (Next
  Plumbing & Heating's full-bleed dark hero + trade panels, B&B Electric's
  split-photo hero + timeline, Andy's Auto Repair's banner/badge hero +
  decades ribbon, All American Septic's plain image-right hero + process
  strip) — no collision.

## Notes for outreach

- The referral-based, family-owned framing is itself the pitch: this is a
  business that has grown entirely on word of mouth, and a real web
  presence gives those referrals somewhere to land and verify before they
  call.
- The honest Navasota/Grimes County service-area framing matters for
  outreach — don't imply this is a Bryan/CS-centered business when
  reaching out.
- No existing website means no migration friction — a clean first web
  presence beyond Facebook and the bare Google listing.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
