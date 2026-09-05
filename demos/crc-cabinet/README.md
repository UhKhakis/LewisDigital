# CRC Cabinet — Demo Site

One-page demo website for **CRC Cabinet** (Bryan, TX), a custom cabinet
maker in business since 1988. Built as part of Batch 5 ("trades" round) —
owner-authorized batch build, per the Lead's brief; no individual client
confirmation was sought before building, consistent with that
authorization.

## Why this business

Nearly 40 years in business with a strong, real 4.9-star rating and a
notable review from an architect praising cabinets still holding up ten
years later — real evidence of durability and craftsmanship. Not a
tile/flooring/countertop business, so no cross-trade distinctness diff
applies, but it still needed a fully bespoke identity distinct from every
other demo in the repo.

## Research (2026-09-05)

**Source:** [google.com/maps/search/CRC+Cabinet+Bryan+TX](https://www.google.com/maps/search/CRC+Cabinet+Bryan+TX)
— live Google Maps listing, checked 2026-09-05.

- **Category:** Cabinet maker. **Rating:** 4.9★ from **9 reviews**.
- **Address:** 165 Marino Rd, Bryan, TX 77808. **Phone:** (979) 778-1684.
- **Hours (partial, verified):** "Closed · Opens 8 AM Mon" shown live at
  check time.
- **No independent website** — per the Lead's pre-verified brief, a claimed
  domain does not resolve.
- **Real review text read** (internal research only, per the
  `client-demo-site` skill — never published verbatim as page copy):
  - Lori Pfeffer (7 years ago): "After 10 years I still love all of my
    cabinets. As an architect, I asked for several things that were a
    little different here and there. CRC made all of them just the way I
    wanted them." — the strongest single signal in this batch: a design
    professional, a decade later, still satisfied with custom requests
    executed exactly as asked.
  - Maurice Lantier (4 years ago): "Great cabinets and doors! I'm happy I
    found them!"
  - Joe White (3 years ago): "Very good workers and product."
  - **Vocabulary/tone takeaway:** durability ("10 years"), precision on
    custom requests, and general satisfaction with product and workmanship.
    Per the batch brief's explicit instruction, this design uses **only the
    real rating/review count** as a page fact — the architect anecdote
    informs the "built to outlast the kitchen around it" positioning and
    the durability-focused copy, but no review text or attributed quote is
    published on the live page itself, consistent with `client-demo-site`
    §1/§3's internal-research-only rule for review content.

## Brand system

| Token | Value | Rationale |
|---|---|---|
| `--cream` | `#f2e9d8` | Warm parchment base |
| `--walnut` / `--walnut-deep` | `#4a3423` / `#2e2013` | Rich wood tones — the material itself |
| `--pewter` | `#8a8f7e` | Cool brushed-hardware accent — distinct from every brass/gold accent used elsewhere in `demos/` |

**Typography:** Prata (display — refined, literary, "custom, built to
last") + Livvic (body) + Cutive Mono (mono — a typewriter face nodding to a
shop that's been writing job tickets since 1988). None of these three
families are used by any other demo in the repo.

## Layout notes

Distinct from every other demo in `demos/` in hero style (full-bleed
craftsman/hand-plane photo), signature element (a real **1988 → Today
two-point timeline** — legitimate here because it's genuine chronology, not
a decorative numbered sequence), a dovetail-joint icon as the nav mark
(original graphic, not any specific brand's mark), and type pairing (Prata +
Livvic + Cutive Mono, none reused elsewhere).

## Verified facts vs. placeholders

**What is REAL** (source: Google Maps listing, checked 2026-09-05, and the
Lead's pre-verified batch brief):

- Business name: **CRC Cabinet**
- Category: **Cabinet maker** (custom cabinetry, in business since 1988)
- Address: **165 Marino Rd, Bryan, TX 77808**
- Phone: **(979) 778-1684**
- Google rating: **4.9 stars, 9 reviews**
- Partial hours: **opens 8 AM Monday** (only data point shown live)
- No independent website (confirmed: a claimed domain does not resolve)

**What is PLACEHOLDER / ILLUSTRATIVE:**

- **Hero photo** (`assets/hero-woodworking.jpg`) and **craft-section photo**
  (`assets/finished-kitchen.jpg`): free-license Pexels stock photos, not
  photos of CRC Cabinet's own shop, crew, or installed work. See "Photos"
  below.
- **Service list** (Custom Kitchen Cabinetry, Bathroom Vanities, Built-ins &
  Shelving, Cabinet Refacing, Custom Doors & Drawers, Design Consultation):
  generic examples for a custom cabinet shop, explicitly labeled "confirm
  by phone."
- **"37+ years" heritage timeline label**: a straightforward calculation
  from the verified 1988 founding date to the current year — not an
  invented figure.
- **Full weekly hours**: not published beyond the single "opens 8 AM Monday"
  data point; page says "call for full weekly hours" rather than guessing.
- **Reviews section**: only the real 4.9★/9-review count is shown; the
  review card is an explicit "reviews will appear here once connected"
  placeholder. Per the batch brief's explicit instruction, the architect's
  real review anecdote is used only as internal design rationale (this
  README), never as invented quote text on the live page.

## Photos

Both free-license, no attribution required (credited here anyway), from
[Pexels](https://www.pexels.com/license/):

- **Hero** (`assets/hero-woodworking.jpg`): [pexels.com/photo/6790097](https://www.pexels.com/photo/a-person-doing-carpentry-6790097/)
  ("A Person Doing Carpentry"), photographer **Tima Miroshnichenko** — a
  close-up of hands using a hand plane on wood, matching the "joinery that
  holds up" craftsmanship direction without claiming to depict CRC's own
  crew.
- **Craft section** (`assets/finished-kitchen.jpg`): [pexels.com/photo/4030055](https://www.pexels.com/photo/photo-of-kitchen-with-appliances-4030055/)
  ("Photo of Kitchen with Appliances"), photographer **Curtis Adams** — a
  real kitchen with custom-style cabinetry in context, not a photo of CRC's
  own installed work.

## Brand-rule compliance

- No "Lewis Digital" anywhere on the client-facing page. Footer reads
  exactly **"Designed by Lewis Tech"**, linked to
  **https://lewistechservices.com/**.
- `pitch-sheet.html` carries Lewis Digital's own gold/charcoal/cream brand
  (the one allowed exception) — untouched from the reference template
  pattern (`demos/petes-trees/pitch-sheet.html`), facts swapped in.
- Palette, fonts and layout are bespoke to this business and not reused
  from any of the ~42 existing demos.
- Real stock photos used for hero + one supporting section, sourced from
  Pexels; neither claims to depict CRC's own shop, crew, or installed work.
- Real review text (including the architect anecdote) used only as internal
  design research — never published as page copy or invented quote text,
  per the batch brief's explicit instruction and the skill's
  internal-research-only rule.
