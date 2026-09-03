# Mike's Complete Tree Services and Landscaping — Demo Site (owner-authorized batch, 2026-09-03)

One-page demo website for **Mike's Complete Tree Services and Landscaping**
(7124 Old Goodson Bend Rd, Bryan, TX 77807 · (979) 587-2064 · Tree service).
Part of the same owner-authorized five-demo batch as `petes-trees`,
`static-heating-air-conditioning`, `castillos-fence`, and
`mk-fencing-construction` — the normal "no demo until the client confirms
interest" gate does not apply here (Lead instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Why the review signal is thin, and how that shaped the design

Source: `https://www.google.com/maps/search/Mike%27s+Complete+Tree+Services+and+Landscaping+Bryan+TX`
(live via Chrome browser, verified 2026-09-03).

- **5.0 stars, but from exactly 1 review** — Johnny Cooper (Local Guide, 2
  reviews), left about 5 years ago, star-only with **no written comment**.
  There is no review vocabulary to draw tone from, unlike `petes-trees`
  (9 reviews with rich text) or `static-heating-air-conditioning` (69
  reviews).
- The listing's cover photo shows a rural residential property with a
  large mature tree and a yellow bucket/crane truck parked on the grass —
  a genuinely rural, working-property feel (Old Goodson Bend Rd sits
  outside the denser part of Bryan), which informed the earthier, cooler
  palette below.
- No website found anywhere; only aggregator/directory pages
  (findtreeservice.com, Cybo) reference the business.
- The business's own name — "**Complete** Tree Services **and**
  Landscaping" — is a real, verifiable fact in itself: this is a
  dual-trade outfit, not a single-service tree crew. That dual scope is
  the one strong, genuine differentiator this listing offers, and it
  became the page's main structural idea (see below).

This sits in a similar honesty position to `dean-plumbing-repair` from an
earlier batch (a real, verifiable rating with zero written text behind
it) — the Reviews section uses the same "show the honest small sample,
don't dress it up" approach, adapted to a single-review count instead of
two.

## Design direction

**Rural, dual-trade, honestly small.** Cooler pine green + clay/soil
orange-brown + muted sky blue + a straw-tan base — a rural earth-tone
system, deliberately cooler and muddier than Pete's Trees' warmer amber/
forest-green system. Bitter (a rugged slab serif) + Nunito (a rounded,
approachable sans) for type — neither face is used by any sibling in this
batch.

**Signature element:** a circular tree-ring/growth-ring motif used as a
recurring section divider — a different device from Pete's Trees' tag-
cloud and from the pipe-union/rail motifs used in other trades in this
repo.

**Section architecture:** the hero is a split grid (copy left, boxed photo
right) rather than Pete's full-bleed centered hero. Immediately below the
hero, a two-panel split section (Trees | Landscaping, on two different
background shades of pine green) makes the dual-trade scope visually
explicit and structural — not just a bullet list buried in an About
paragraph.

## Structural distinctness vs. Pete's Trees

See the comparison table in `demos/petes-trees/README.md` for the full
side-by-side — summary: different hero shape (split vs. full-bleed),
different services architecture (two-panel dual-trade split vs. single
3-column tile grid), different signature element (growth rings vs. tag
cloud), different honesty device (one-review disclosure card vs. n/a —
Pete's has 9 real reviews to show), different palette family and type
pairing, different section order.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, trees/landscaping split, about, honest review card, hours/find us, contact, footer) |
| `styles.css` | All styling — sourced client brand (pine green/clay/sky/straw, Bitter/Nunito) |
| `assets/hero-bucket-truck.jpg` | Hero photo — free-license stock photo |
| `assets/landscaping-yard.jpg` | Split-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both real, free-license Pexels stock photos — **not** photos of Mike's
Complete Tree Services and Landscaping, its crew, or its equipment:

- **Hero** (`assets/hero-bucket-truck.jpg`):
  [pexels.com/photo/6174457](https://www.pexels.com/photo/a-person-wearing-a-harness-while-on-a-bucket-truck-6174457/)
  ("A Person Wearing a Harness While on a Bucket Truck"), photographer
  **Nelson Axigoth** — chosen for the pine-forest backdrop, echoing the
  real listing's rural, wooded property setting.
- **Split section** (`assets/landscaping-yard.jpg`):
  [pexels.com/photo/9620213](https://www.pexels.com/photo/man-working-with-blower-in-village-9620213/)
  ("Man Working with Blower in Village"), photographer **Paris Lopez** —
  a rural yard with a modest house, matching the Old Goodson Bend Rd
  setting and representing the "landscaping" half of the business.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page
credit lines.

## Preview

```bash
cd demos/mikes-complete-tree-services
python -m http.server 8202 --bind 127.0.0.1   # preview on localhost:8202
```

Verified locally 2026-09-03: all images return HTTP 200, no console errors,
content renders correctly at desktop and mobile widths.

## What is REAL (verified & traceable)

- Business name: **Mike's Complete Tree Services and Landscaping**
- Address: **7124 Old Goodson Bend Rd, Bryan, TX 77807**
- Phone: **(979) 587-2064**
- Category: **Tree service** (with landscaping as a second, name-verified
  scope of work)
- **Google rating: 5.0 out of 5, from exactly 1 review** — the business's
  public Google Maps listing, verified 2026-09-03. That single review
  (Johnny Cooper) has no written text — stated plainly on the page.
- **Hours**: only a general "runs into the early evening" note is shown,
  attributed and dated — not a precise, guessed schedule.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service lists** (tree removal, trimming, dead limb removal, stump
  work / lawn mowing, yard cleanup, brush clearing, mulch & bed
  maintenance): generic examples for each half of the business — not an
  itemized, owner-confirmed menu. The page states this directly under
  each panel.
- **Both hero and split-section photos**: real stock photos, explicitly
  not photos of Mike's Complete Tree Services and Landscaping, its crew,
  or its equipment.
- **Reviews section**: only the real 5.0/1 rating is shown, with plain-
  language copy stating directly that the single review has no written
  text. Nothing is invented to fill the gap.
- **About-section copy** ("one owner-operated crew," "no marketing push,"
  "word of mouth and repeat calls"): reasonable, generically-supported
  marketing language inferred from the thin online footprint itself (no
  website, one review, a residential-looking cover photo) — not a quote,
  not an invented statistic.
- **Owner name**: not asserted. The business name references "Mike," used
  generically to match; no additional identity claim is made.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced/derived client-brand colors
  (pine green, clay/soil brown, muted sky, straw-tan) and fonts (Bitter,
  Nunito). **Zero Lewis Digital gold (`#C9A227` family), zero Lewis
  charcoal `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream
  brand (it's our sales tool) — per `client-demo-site` §4.
- Structurally and visually distinct from `demos/petes-trees/` (its
  direct sibling in this batch) — see comparison table above and in that
  demo's README.

## Notes for outreach

- The honest pitch here is straightforward: "you're already a two-trade
  business — trees and landscaping — but your only online presence is a
  single unclaimed-feeling rating. A real site plus more reviews coming
  in would show that dual scope clearly."
- If the owner can confirm a service list, hours, or share real job
  photos, swap them into `index.html`/`assets/` and re-publish.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
