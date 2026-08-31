# Sanchez Landscaping & Construction, Inc. — Demo Site

One-page demo website for **Sanchez Landscaping & Construction, Inc.** (1102
Groesbeck St, Bryan, TX 77803 · (979) 775-6263), built as part of an
**owner-authorized HubSpot-sourced batch build** — this demo was built without
a prior client-confirmed-interest gate, per explicit Lead instruction for this
batch.

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Disambiguation (important — read before treating any fact here as verified)

The Bryan/College Station area has several unrelated businesses with
"Sanchez" + "landscaping" in the name — a common surname paired with a common
trade. The Lead confirmed **this specific business** by matching the exact
address (1102 Groesbeck St) and phone number ((979) 775-6263) from the
HubSpot CRM lead record against the correct Google Maps listing, live on
**2026-08-30**. This is a different, separately-listed business from
"Sanchez and Sons Lawn & Landscaping LLC," "Sanchez lawncare llc," "Sanchez
Landscape," or "Sanchez Landscaping LLC" — none of that other business's
facts, reviews, or photos are used anywhere on this page.

## Research: what was found, and how it shaped the design

Per `client-demo-site` §1, the seed for this design is this specific
business's own material — not "landscaping company" as a category default.

**Google category:** listed as **Contractor**, not purely "Landscaper" — the
full legal name includes "& Construction," and one review is tagged
"Repair water fixtures." That combination (landscaping + construction +
repair) is why the page frames the business as a full-service outfit doing
hardscape and planting work, not a mow-and-blow lawn service — see the
"Two Trades, One Crew" section.

**Reviews — read, but honestly thin.** The listing shows **3.8 stars from 4
Google reviews**, verified live 2026-08-30. This rating is a real,
citable fact. The review *text*, however, is thin — most of the four carry
no written review at all:

1. Randy Reyes (Local Guide, 11 reviews/2 photos, 4 years ago): "Excellent
   Service!" — the only review with any actual prose, and it's four words.
2. Shilo Saint James (9 months ago): no written text, tagged by Google with
   "Services: Repair water fixtures."
3. Bequi McMillon (Local Guide, 47 reviews/1 photo, 6 years ago): no written
   text.
4. A fourth review exists on the listing but was not opened/read by the Lead.

**Design decision on the reviews:** unlike richer-review demos in this repo
(e.g. Neff's Majestic, which had 5-10+ real review quotes to draw
vocabulary/tone from), there simply isn't enough review *text* here to
extract voice or theme from. Rather than stretch four words ("Excellent
Service!") into a design direction, this demo leans on the **real photo
evidence** instead (see below), which is a legitimate substitute per
`client-demo-site` §1's fallback guidance ("if the client genuinely has no
derivable brand signal [...] note that no reviews/photos were found to draw
from" — here photos *were* found, so that's the primary signal used). The
on-page reviews section states the real 3.8/4 rating plus an honest note
that there isn't much written review content behind it yet — never invented
quotes, never the thin review text presented as page copy.

**Photo evidence — the real design seed.** The Lead found real project
photos on the business's own Google Business Profile, viewed 2026-08-30:

- A wooden pergola/arbor built over a patio area, backed by a lush lawn kept
  tight enough to resemble a small putting green.
- A garden bed finished in **black mulch**, with stone pavers as a walkway,
  and mixed colorful plantings (yellow marigolds, red blooms), bordered by a
  wooden privacy fence.
- A small rectangular business sign mounted on that fence — **teal/blue-green
  background, white lettering** (text not fully legible at the viewed
  resolution, but the color is clear and distinctive).

These three details — the teal sign, the black mulch, and the built wood
structures/stone pavers — are the actual brand seed for this page's palette
and its signature "Two Trades, One Crew" section. This is disclosed as
**designer-observed from real photos**, not a pixel-extraction-script output:
the hex values below are a reasoned match to what was seen, not measured
pixel-by-pixel from a downloaded image (no image files of the real Sanchez
photos were saved or reproduced on this page — see "What is PLACEHOLDER"
below).

**No existing web presence** — the listing shows no website and no linked
socials; the Google Maps listing is the only public presence found.

## Design plan (per `frontend-design`)

**Color** — named, sourced to the evidence above, and deliberately distinct
from "generic lawn-mower green":

| Token | Hex | Source |
|---|---|---|
| `--teal` / `--teal-deep` | `#1c6e63` / `#124a42` | The real business sign color on the fence |
| `--mulch` / `--mulch-soft` | `#211c17` / `#2c2620` | The real black-mulch garden beds |
| `--wood` / `--wood-deep` | `#a9793f` / `#7c5a2e` | The real pergola/privacy-fence wood tone |
| `--lawn` / `--lawn-deep` | `#4b7a43` / `#395c33` | The real tight, putting-green-style lawn |
| `--paper` | `#f2f4ee` | Pale sage-white base — deliberately cooler/greener than the warm creams used by other demos in this repo (bos-garage `#f6efe2`, brazos-valley `#f1efe6`, neffs `#fffdfa`), so this page doesn't converge on the same "warm cream base" look |

**Type** — Fraunces (display, an organic/soft-curved serif with a wonky
optical-size axis — evokes something grown rather than manufactured, fits a
planting-and-building trade) + Inter (body, clean and legible) + Space Mono
(small data labels/tags — used sparingly to evoke a stamped plant-nursery
tag). This trio doesn't repeat any pairing already used in this repo: Bitter
+ Work Sans (bos-garage), Roboto Slab + Work Sans (brazos-valley), Alfa Slab
One + Archivo + IBM Plex Mono (bryan-muffler), Barlow Condensed + Barlow +
Share Tech Mono (limitless-diesel), Cormorant Garamond + Jost (neffs).

**Signature element — "Two Trades, One Crew."** A full-bleed dark
split-panel section (mulch-dark background) with two textured columns:
*Hardscape* (pergola, lawn, pavers — warm wood-grain hairline texture) and
*Planting & Beds* (mulch, flowers, fence signage — soft green dot texture).
This directly encodes the two real photo categories found on the listing —
content-driven structure, not decoration — and is captioned with the source
and date on the page itself. No comic-book-logo-style copying of the actual
sign or photos occurs; only original CSS textures and plain-language
description are used.

**A die-cut "fact tag."** The verified-facts strip (address / phone / Google
rating) is shaped as a plant-tag/price-tag clip-path in the real sign teal,
overlapping the bottom of the hero photo — a small structural nod to a
nursery plant tag, tying the verified-facts convention used elsewhere in this
repo's demos to something specific to this trade.

`ui-ux-pro-max` was queried (`"landscaping hardscape contractor full service"
--design-system`, `"teal green earthy outdoor natural" --domain color`, and
`"organic natural warm outdoor craft" --domain typography`) before finalizing
this plan. None of the matches fit: the design-system query returned a
generic dark portfolio/SaaS match with no landscaping-specific product type;
the color query's closest hits were a florist palette (too pink/floral) and
two teal medical/SaaS palettes with no earthy grounding; the typography
query's top result (Amatic SC + Cabin) reads as twee handwritten-craft,
mismatched to a business that does structural hardscape and general
contracting. This is stated plainly rather than forcing an unrelated match —
the final direction is the Builder's own judgment applied to the real photo
research above, per `frontend-design`'s brainstorm → critique process.

## Structural distinctness — diffed against every other demo in `demos/`

Checked against every built demo folder as of 2026-08-30:

| Demo | Nav class | Section order | Signature element |
|---|---|---|---|
| `bos-garage` | `.site-header` / `.site-nav` | hero → trust → story → services → hours → reviews → contact | warm cream + barn-red, script accents |
| `brazos-valley-automotive` | `.masthead` / `.mainnav` | hero → trust → services → about → visit → reviews → contact | corrugated-steel texture, signboard tan/green |
| `bryan-muffler-performance` | `.site-header` / `.site-nav` | hero → specplate → about → craft → services → hours → reviews → contact | near-black asphalt theme, chunky slab display type |
| `limitless-diesel-offroad` | `.hud-nav` | hero → work → about → console(hours) → reviews → contact | full dark theme, neon cyan/magenta HUD styling |
| `neffs-majestic-hair-studio` | `.header` / `.nav` | hero → highlights → services → about(hours) → reviews → contact | plum/lavender, halftone-dot dark band |
| **`sanchez-landscaping` (this demo)** | **`.yard-header` / `.yard-nav`** | **hero(+die-cut fact tag) → about → "Two Trades" split-panel → services → hours/visit → reviews → contact** | **teal/mulch/wood earthy palette, die-cut plant-tag facts strip, dark split-panel hardscape/planting showcase** |

No shared nav class name, no shared section order, no shared signature
device, and no shared type pairing with any built demo above.

**On the sibling landscaping-trade demo:** `demos/bernados-landscaping-dirtworks/`
exists in this repo (owner instruction specifically flagged it for extra
scrutiny, as the other landscaping-trade business in this same batch) but as
of this build **only its `assets/hero-dirtwork.jpg` file exists — no
`index.html`/`styles.css` have been built yet**, so there is nothing to
structurally diff against yet. Whoever builds Bernado's next should diff its
nav treatment, section order, palette, and signature element against this
page (`.yard-header`/`.yard-nav`, teal/mulch/wood palette, "Two Trades"
split-panel, Fraunces/Inter/Space Mono) the same way the auto-repair sibling
demos above had to diff against each other, since both are landscaping-trade
businesses in the same HubSpot batch.

## Files

| File | Purpose |
|---|---|
| `index.html` | Complete one-page site: header/nav, hero + fact tag, about/positioning, "Two Trades" split-panel showcase, services, hours/visit, reviews, contact, footer |
| `styles.css` | All styling — Sanchez's own teal/mulch/wood/lawn brand, sourced from real photo evidence (see above). Zero Lewis Digital gold/charcoal/cream. |
| `assets/hero-landscaper.jpg` | Hero photo — free-license stock photo (see "Photo" below), not a photo of Sanchez's real crew |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's outreach — Lewis Digital's own gold/charcoal/cream brand, untouched |
| `README.md` | This file |

## Preview

```bash
cd demos/sanchez-landscaping
python3 -m http.server 8099 --bind 127.0.0.1   # preview on localhost:8099
```

Do NOT use port 3000 — that serves the agency site. Pick a port not already
in use by another running preview.

## Photo (hero)

`assets/hero-landscaper.jpg`: [pexels.com/photo/11534117](https://www.pexels.com/photo/man-in-blue-long-sleeve-shirt-planting-a-tree-11534117/)
("Man in Blue Long Sleeve Shirt Planting a Tree"), photographer **Alfo
Medeiros**, [Pexels License](https://www.pexels.com/license/) (free
commercial use, no attribution required, credited here anyway). Shows a
landscaper in a blue long-sleeve work shirt (echoing the real teal sign
color) kneeling to plant a tree into black mulch (matching the real garden
beds' mulch color), with a lawn and trees behind. This is a **free-license
stock photo, not a photo of Sanchez Landscaping or its staff** — labeled as
such in the image's `alt` text and this README. It was pre-selected and
placed at this path before the Builder pass began; not moved or renamed.

## What is REAL (verified & traceable)

Source: `business/leads/leads.csv` (Sanchez row) + the business's own public
Google Maps listing, verified live by the Lead on **2026-08-30**
(https://www.google.com/maps/search/Sanchez+Lawn+%26+Landscaping+1102+Groesbeck+St+Bryan+TX,
confirmed against the exact address/phone match described in
"Disambiguation" above):

- Business name: **Sanchez Landscaping & Construction, Inc.**
- Category on Google: **Contractor** (shown on the page as "Landscaping &
  Construction," matching the business's own legal name — not restated as
  something narrower like "Landscaper")
- Address: **1102 Groesbeck St, Bryan, TX 77803**
- Phone: **(979) 775-6263**
- No independent website found; Google Maps listing is the only public
  presence.
- **Google rating: 3.8 stars, 4 reviews.** Real and citable — but the
  written review content behind it is thin (see "Research" above); this is
  disclosed honestly on the page itself, not glossed over.
- Real photo evidence (teal/blue-green sign color, black mulch beds, wood
  pergola/fence, stone pavers, mixed flower plantings) — from the business's
  own Google Business Profile photos, viewed 2026-08-30. Used as the color
  and signature-element seed; described in original language on the page,
  never reproduced as an actual image.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Hero photo** (`assets/hero-landscaper.jpg`): free-license stock photo —
  not a photo of the real business, its crew, or its projects. See "Photo"
  above.
- **Service list** (Lawn & Turf Care, Garden Beds & Mulching, Paver Patios &
  Walkways, Pergolas & Fencing, Water Fixture Repair, General Contractor
  Repairs): generic examples for a full-service landscaping + construction
  outfit, informed by the real category ("Contractor") and the one review
  tag mentioning water-fixture repair — **not** Sanchez's confirmed service
  menu or price list. The page carries an explicit "confirm by phone" note.
- **Hours**: not published on the Google listing as of 2026-08-30 — shown as
  "Call or message for current hours," not invented.
- **Google reviews section**: only the real 3.8/4 rating is shown; review
  cards/text remain an explicit placeholder ("Google reviews will appear
  here once connected") with an honest note about how little written review
  content currently exists — no invented quotes, no stretching the four-word
  "Excellent Service!" review into fabricated testimonial copy.
- **"Two Trades, One Crew" descriptions**: original prose paraphrasing what
  the real Google Business Profile photos show — not a reproduction of the
  photos themselves, and not literal captions copied from Google.
- **Teal/mulch/wood/lawn color values**: designer-observed hex values
  reasoned from the real photos' described colors, not a pixel-extraction
  script run against a saved image file (no image file of the real Sanchez
  photos was obtained or is stored in this repo).

## Brand-rule compliance (owner spot-check)

- Client-facing `index.html`/`styles.css` use ONLY Sanchez's own
  teal/mulch/wood/lawn palette (`--teal`, `--mulch`, `--wood`, `--lawn`, and
  the pale-sage `--paper` base, all disclosed above). **Zero Lewis Digital
  gold (`#c9a227` family), zero Lewis charcoal `#16130e`, zero Lewis cream
  `#fbf8f1`** anywhere in `index.html` or `styles.css`.
- Footer reads exactly: "Designed by Lewis Tech," linking to
  `https://lewistechservices.com/` — never "Lewis Digital" on the
  client-facing page, per standing owner instruction.
- `pitch-sheet.html` keeps Lewis Digital's own gold/charcoal/cream brand,
  untouched, as our sales tool.
- Layout, nav class names, section order, and signature element are unique
  within `demos/` — see the diff table above. `bernados-landscaping-dirtworks`
  (the other landscaping-trade sibling in this batch) has no `index.html`
  built yet to diff against; flagged above for whoever builds it next.

## Notes for the close call with the owner

- Lead with the real 3.8★ Google rating and the fact that the business's own
  photos already show hardscape (pergola, pavers) and planting work — this
  demo simply makes that visible on a real website, which the business
  doesn't currently have.
- Be upfront that the review *count* is small (4) if asked — the honesty
  note on the page already says so; don't oversell review social proof this
  business doesn't yet have.
- If the owner provides real service pricing, real hours, or real project
  photos (with permission to publish), swap them into `index.html`/`assets/`
  — the placeholder sections are marked by comment and by this README.
- This folder is a standalone deliverable on a feature branch
  (`demos/sanchez-landscaping-new`); nothing has been pushed to the
  `LewisDigital` repo's default branch or GitHub Pages from this pass — the
  Lead reviews and pushes/opens the PR.
