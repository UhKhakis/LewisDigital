# A&amp;A Handyman Service — Demo Site (owner-authorized batch, 2026-09-05)

One-page demo website for **A&amp;A Handyman Service** ((979) 250-2580
&middot; Handyman, 1304 Antone St, Bryan, TX). This is one of four demos in
an owner-authorized batch build (Feral Junk Removal and Hauling LLC,
Danomite Pest Control, Lopez Roofing) — the normal "no demo until the
client confirms interest" gate does not apply here (Lead instruction,
batch 3 of round 2, 2026-09-05).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Required distinctness check

This batch already includes a second handyman business, so per the Lead's
brief this demo was built **after** re-reading
`demos/larrys-handyman-service/` in full (index.html + styles.css). See
"Structural distinctness" below for the specific comparison.

## Research (Google Maps, live via Chrome browser, verified 2026-09-05)

Source: `https://www.google.com/maps/search/A%26A+Handyman+Service+Bryan+TX`

- **3.7 stars, 3 reviews** — a thin, mixed record, shown honestly rather
  than rounded up or cherry-picked. All three reviews were read for
  research:
  - Justin Litz (positive): "I have used Adam for multiple services
    ranging from minor fence repair, to major demo and plumbing work.
    Adam's work is always done with quality and the homeowner in mind."
  - Emiley Rheney (negative, a real scheduling complaint about missed
    call-backs around an appointment) — read for internal research only,
    per `client-demo-site` §1/§3; **not** quoted or referenced by content
    on the page. Its existence is why the page includes an honest
    "confirm scheduling by phone" note rather than presenting a
    frictionless picture.
  - Mark Ruisinger: rating only, no review text.
- Category: Handyman/Handywoman/Handyperson. Address and phone confirmed
  on the public listing.
- Owner **Adam**, roughly 10 years in business, offering tile, painting,
  drywall, pressure washing, fencing, decks, and framing — per the Lead's
  pre-verified lead sheet, consistent with the real review's description
  of a wide service range.
- No business website found.

## Design direction

**A genuinely broad skill range, shown honestly alongside a thin,
mixed-star record.** The one substantive real review specifically praises
range ("fence repair" to "major demo and plumbing work") and quality — so
the design's hook is the trade range itself, made visible as a badge row,
rather than a personality angle like Larry's "text a photo" honesty hook.
Palette is warm espresso-brown + ochre/amber + a small sage-green accent —
no blue anywhere, unlike Larry's denim. Typography is Zilla Slab (a
sturdier slab-serif, reads practical/trade rather than Larry's soft
rounded Quicksand) + Mulish for body copy.

**Signature element:** a **"Trade Badge Row"** — seven patch-style circular
icon badges (Tile, Paint, Drywall, Pressure Wash, Fence, Deck, Framing)
displayed as a horizontal strip directly under the hero, visually founded
on the real review's description of Adam's range. Nothing like this
exists elsewhere in `demos/`.

## Structural distinctness vs. Larry's Handyman Service (required)

| | Larry's Handyman Service | A&amp;A Handyman Service (this demo) |
|---|---|---|
| Hero shape | Casual side-by-side split (chip row + copy left, boxed photo right) | Full-width stacked photo banner on top, centered copy below — no split, no side-by-side layout |
| Signature element | Mocked chat-bubble text exchange ("Text Larry") | Trade Badge Row — seven patch-style skill icons in a horizontal strip |
| Palette | Denim blue + coral + cream | Espresso brown + ochre/amber + sage green + cream (no blue at all) |
| Type pairing | Quicksand + Nunito Sans + Kalam (soft, rounded, casual) | Zilla Slab + Mulish (sturdy slab-serif, practical) |
| Reviews framing | Perfect 5.0/5, "on Google" tag-cloud with a real work-quality tag | Honest 3.7/5 from 3 reviews, explicit "thin record, confirm by phone" note — no tag cloud |
| Section order | Hero → Services → Text Larry (chat) → Reviews → Service area/Hours → Contact | Hero → Trade Badge Row → Services → About → Reviews (honest) → Location/Hours → Contact |

The two demos share only the fact that both are handyman businesses —
layout skeleton, signature element, palette, type pairing, and reviews
framing are all different.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, trade badge row, services, about, reviews, location/hours, contact, footer) |
| `styles.css` | All styling — bespoke client brand (espresso/ochre/sage/cream, Zilla Slab/Mulish) |
| `assets/hero-deck-framing.jpg` | Hero photo — free-license stock photo |
| `assets/services-painting.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos of general handyman/trade
work — **not** photos of Adam or A&amp;A's own jobs:

- **Hero** (`assets/hero-deck-framing.jpg`):
  [pexels.com/photo/12172496](https://www.pexels.com/photo/pneumatic-nail-gun-on-the-boards-of-the-terrace-under-construction-12172496/)
  ("Pneumatic Nail Gun on the Boards of the Terrace Under Construction"),
  photographer **Sadie Burnell**.
- **Services section** (`assets/services-painting.jpg`):
  [pexels.com/photo/6474483](https://www.pexels.com/photo/man-painting-the-wall-6474483/)
  ("Man Painting the Wall"), photographer **Tima Miroshnichenko**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page
credit lines.

## Preview

```bash
cd demos/aa-handyman-service
python -m http.server 8216 --bind 127.0.0.1   # preview on localhost:8216
```

Verified locally 2026-09-05: both images render correctly, the trade
badge row wraps correctly at mobile/tablet/desktop widths, no console
errors.

## What is REAL (verified &amp; traceable)

- Business name: **A&amp;A Handyman Service**
- Owner: **Adam** (first name only — no surname appears on the public
  listing or in any review text read).
- Phone: **(979) 250-2580**
- Address: **1304 Antone St, Bryan, TX**
- Category: **Handyman/Handywoman/Handyperson**
- **Google rating: 3.7 out of 5, from 3 reviews** — verified 2026-09-05,
  shown honestly rather than rounded up.
- Real review excerpt used on-page: "ranging from minor fence repair, to
  major demo and plumbing work... always done with quality and the
  homeowner in mind" (Justin Litz) — quoted directly, attributed by first
  name only as it appears on the public listing.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **"~10 years in the trade"**: from the Lead's pre-verified lead sheet,
  not independently re-confirmed against a second public source in this
  research pass — shown on the page as a stated fact per the Lead's brief.
- **Trade badges and service tiles** (tile, paint, drywall, pressure
  washing, fence, deck, framing): the trade *categories* are per the
  Lead's brief and consistent with the real review's range description,
  but the specific service tiles are generic descriptions, not an
  itemized, owner-confirmed service menu. The page states this directly.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of Adam or A&amp;A's actual jobs.
- **Emiley Rheney's negative review**: read for internal research only,
  per `client-demo-site` §1/§3 — never quoted or summarized on the page.
  Its existence is reflected only indirectly, through the honest "confirm
  scheduling by phone" note and by showing the real 3.7/5 average rather
  than omitting or reframing it.
- **Hero/about narrative** ("one guy, seven trades, no need to call
  around"): original marketing language derived from the real review's
  range description — not a direct quote, not an invented testimonial.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced client-brand colors (espresso
  brown, ochre/amber, sage green, cream) and fonts (Zilla Slab, Mulish).
  **Zero Lewis Digital gold (`#C9A227` family), zero Lewis charcoal
  `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- Structurally distinct from `demos/larrys-handyman-service/` (the
  gallery's other handyman demo) — see comparison table above; checked
  against the rest of the gallery for general design-language collision as
  well (espresso/ochre/sage palette and Zilla Slab/Mulish type pairing are
  both unique in `demos/`).
- **"See us on Google" link confirmed present** in `index.html`'s Reviews
  section, pointing to the exact source URL:
  `https://www.google.com/maps/search/A%26A+Handyman+Service+Bryan+TX`.

## Notes for outreach

- The genuinely wide trade range (tile through framing) is a real
  differentiator worth leading with.
- The 3.7/3-review record is thin — worth setting expectations with the
  owner that a demo alone won't fix a sparse review count; the real path
  there is asking recent happy customers to leave a review.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
