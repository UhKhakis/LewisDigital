# M&A Flooring — Demo Site

One-page demo website for **M&A Flooring** (College Station, TX), a
one-person LVP and carpet installation business run by Anthony. Built as
part of Batch 5 ("trades" round) — owner-authorized batch build, per the
Lead's brief; no individual client confirmation was sought before building,
consistent with that authorization.

## Why this business

A real, verified local flooring installer with a genuine (if very thin)
Google presence, no independent website, and a real named owner (Anthony)
praised directly in the one review with text. Small enough that honesty
about the thin review count matters more than usual.

## Research (2026-09-05)

**Source:** [google.com/maps/search/M%26A+Flooring+College+Station+TX](https://www.google.com/maps/search/M%26A+Flooring+College+Station+TX)
— live Google Maps listing, checked 2026-09-05.

- **Category:** Flooring contractor. **Rating:** 5.0★ from **2 reviews**
  (thin — disclosed honestly on the page itself, not hidden).
- **Address:** 2151 Harvey Mitchell Pkwy S, Suite 319, College Station, TX
  77840 (located in Town & Country Center). **Phone:** (979) 450-5646.
- **Hours (partial, verified):** "Closed · Opens 10 AM" shown live at check
  time.
- **No independent website** — per the Lead's pre-verified brief, a claimed
  domain does not resolve; the listing has no website link.
- **Photos:** the listing's "See photos" link resolves only to a Google
  Street View shot of the shopping plaza's parking lot (an unrelated
  delivery van is the most prominent subject) — no business-owned interior,
  work, or branding photo exists to extract a real palette from. Disclosed
  honestly below.
- **Real review text read** (internal research only, per the
  `client-demo-site` skill — never published verbatim as page copy):
  - Michael Neal (Local Guide, a year ago): "Anthony is a specialist in his
    craft, great LVP and Carpet selection, and easy to work with. If you
    are in need of new flooring, reach out to M&A Flooring!"
  - siloY (Local Guide, edited 7 years ago): star rating only, no text.
  - **Vocabulary/tone takeaway:** personal, specific to Anthony by name,
    emphasizes selection and ease of working together — a solo operator
    who handles the whole job himself. That's the seed for the "one person,
    start to finish" design direction and the legitimate 3-step process
    section below (a real installer's real sequence, not a generic
    "01/02/03" decoration).

## Brand system (derived from the material itself — disclosed, not photo-sourced)

No usable business photo exists (see above), so the palette is deliberately
grounded in the product itself — warm driftwood/oak plank tones, which is
literally what LVP flooring looks like — plus a muted denim-blue accent used
sparingly for calls to action. Disclosed here as a designer choice, per
`client-demo-site` §1's fallback guidance.

| Token | Value | Rationale |
|---|---|---|
| `--parchment` | `#f6efe0` | Warm neutral base |
| `--oak` | `#cbb08a` | Driftwood/plank tone — the product itself |
| `--walnut` | `#3a2a1c` | Deep walnut ink — dark sections, headlines |
| `--denim` | `#3f5a78` | Muted accent for CTAs/links — distinct from the wine accent used by Capitol Custom Tile and the blush accent used by M&C Countertops elsewhere in this batch |

**Typography:** Anton (display — bold condensed, direct and unfussy, matches
the plain-spoken review tone) + DM Sans (body) + PT Mono (small labels).
None of these three families are used by any other demo in the repo.

## Structural distinctness vs. the other 2 tile/flooring/countertop demos in this batch

See the full three-way diff table in `demos/capitol-custom-tile/README.md`.
Summary of what makes M&A Flooring distinct:

- **Hero:** split-screen (copy left / framed install photo right) — not
  Capitol's full-bleed photo, not M&C's full-bleed minimal-editorial photo.
- **Signature element:** a **numbered 3-step install process** (Measure &
  Quote → Pick Your Material → Install & Walk On It) — legitimate here
  because installing a floor genuinely is a real sequence, unlike a decorative
  01/02/03 used just for style. Capitol uses a swatch wall instead; M&C uses
  a seam motif.
- **Nav:** left-aligned wordmark with a plank-style rule under the header —
  no chip/monogram like Capitol, no centered minimal wordmark like M&C.
- **Type pairing:** Anton + DM Sans + PT Mono — a bold condensed display
  face, unlike Capitol's classic serif or M&C's editorial serif.
- **Tone:** personal, plain-spoken, one-man-shop — vs. Capitol's veteran
  "let the selection speak" tone and M&C's "new listing, honest about it"
  editorial tone.

## Verified facts vs. placeholders

**What is REAL** (source: Google Maps listing, checked 2026-09-05, and the
Lead's pre-verified batch brief):

- Business name: **M&A Flooring**
- Category: **Flooring contractor** (LVP/carpet installer, run by Anthony)
- Address: **2151 Harvey Mitchell Pkwy S, Suite 319, College Station, TX
  77840** (Town & Country Center)
- Phone: **(979) 450-5646**
- Google rating: **5.0 stars, 2 reviews**
- Partial hours: **opens 10 AM** (only data point shown live)
- No independent website (confirmed: a claimed domain does not resolve)

**What is PLACEHOLDER / ILLUSTRATIVE:**

- **Hero photo** (`assets/hero-lvp-install.jpg`) and **craft-section photo**
  (`assets/prep-room.jpg`): free-license Pexels stock photos, not photos of
  M&A Flooring's own jobs or Anthony himself. See "Photos" below.
- **Service list** (LVP Flooring, Carpet, Floor Repairs, Room Prep &
  Haul-Away): generic examples for a flooring installer, explicitly labeled
  "confirm by phone."
- **Full weekly hours**: not published beyond the single "opens 10 AM" data
  point; page says "call for current hours" rather than guessing.
- **Reviews section**: only the real 5.0★/2-review count is shown, plus an
  honest on-page note that the listing is still building up reviews. The
  review card itself is an explicit "reviews will appear here once
  connected" placeholder — no real review text is published as page copy.

## Photos

Both free-license, no attribution required (credited here anyway), from
[Pexels](https://www.pexels.com/license/):

- **Hero** (`assets/hero-lvp-install.jpg`): [pexels.com/photo/4263067](https://www.pexels.com/photo/4263067/)
  ("Crop man installing laminate flooring"), photographer **Kelly**
  (@kelly) — a faceless installer laying plank flooring, matching Anthony's
  real, hands-on, one-person installation work without claiming to depict
  him specifically.
- **Craft section** (`assets/prep-room.jpg`): [pexels.com/photo/3616756](https://www.pexels.com/photo/3616756/)
  ("Wood Planks and Floor Brush"), photographer **La Miko** — an empty room
  prepped for flooring, tying to the honest "measure → prep → install"
  process described on the page.

## Brand-rule compliance

- No "Lewis Digital" anywhere on the client-facing page. Footer reads
  exactly **"Designed by Lewis Tech"**, linked to
  **https://lewistechservices.com/**.
- `pitch-sheet.html` carries Lewis Digital's own gold/charcoal/cream brand
  (the one allowed exception) — untouched from the reference template
  pattern (`demos/petes-trees/pitch-sheet.html`), facts swapped in.
- Palette, fonts and layout are bespoke to this business — not reused from
  any of the ~42 existing demos, and structurally distinct from the other
  two tile/flooring/countertop businesses in this batch (see diff above).
- Real stock photos used for hero + one supporting section, sourced from
  Pexels; neither photo claims to depict Anthony or his real job sites.
- Thin review count (2) disclosed honestly both here and directly on the
  page itself, not hidden or inflated.
