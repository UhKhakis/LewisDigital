# Capitol Custom Tile — Demo Site

One-page demo website for **Capitol Custom Tile** (Bryan, TX), a tile, stone
and flooring contractor established in 1996. Built as part of Batch 5
("trades" round) — owner-authorized batch build, per the Lead's brief; no
individual client confirmation was sought before building, consistent with
that authorization.

## Why this business

Capitol Custom Tile is a 30-year-old, no-frills local tile shop with a real
(if thin) Google presence and no independent website — exactly the kind of
established-but-invisible-online business this campaign targets.

## Research (2026-09-05)

**Source:** [google.com/maps/search/Capitol+Custom+Tile+Bryan+TX](https://www.google.com/maps/search/Capitol+Custom+Tile+Bryan+TX)
— live Google Maps listing, checked 2026-09-05.

- **Category:** Flooring contractor. **Rating:** 4.6★ from **5 reviews**.
- **Address:** 100 E 32nd St, Bryan, TX 77803. **Phone:** (979) 775-9444.
- **Hours (partial, verified):** "Closed · Opens 9 AM Mon" shown live on the
  listing at check time — only this one data point is published; full
  weekly hours are not shown, so the site says "call for full weekly hours."
- **No independent website** — a claimed domain for this business does not
  resolve (per the Lead's pre-verified brief); the listing itself has no
  website link and no "Add website" has been filled in.
- **No photos on the listing** — "Photos & videos" shows only an "Add
  photos & videos" prompt; there is no business-owned photo to extract a
  color palette from. This is disclosed honestly below rather than inventing
  a photo-sourced palette.
- **Real review text read** (internal research only, per the
  `client-demo-site` skill — never published as page copy):
  - Melinda Loggins (Local Guide, 9 years ago): "Selection good but not
    overwhelming."
  - Edgar Juarez (7 years ago, translated from Spanish): "A great place to
    find the best finishes."
  - Manuel Guerrero (5 years ago, translated from Spanish): "Excellent
    company."
  - Two further reviews (Kassy Marie, Marco Iran De la Fuente) carry star
    ratings only, no text.
  - **Vocabulary/tone takeaway:** terse, practical, focused on *selection*
    and *finishes* — not chatty. This read as a veteran materials shop that
    lets the product speak for itself, not a business that leans on
    personality-driven marketing. That's the seed for the "showroom /
    finish wall" design direction below, not the tile trade in general.

## Brand system (designer-derived — disclosed, not photo-sourced)

Because no business-owned photo exists to extract a real palette from, the
system below is a deliberate designer choice grounded in the real research
above (a veteran materials showroom, terse/practical tone) — disclosed here
as derived, per `client-demo-site` §1's fallback guidance, not presented as
pixel-sourced the way a photo-extraction would be.

| Token | Value | Rationale |
|---|---|---|
| `--parchment` | `#f4ede0` | Warm neutral base, evokes a showroom's stone/putty flooring |
| `--stone` | `#d8c9ab` | Travertine/putty mid-tone, used in the heritage strip and swatch section |
| `--espresso` | `#2b241d` | Near-black warm ink — dark sections, body text |
| `--wine` | `#6b2f3f` | Deep wine/berry-glaze accent — CTA color, distinct from every other palette in this batch and not otherwise used in `demos/` |

**Typography:** Marcellus (display serif — monumental, restrained, "custom"
feel) + Cabin (body sans — quiet workhorse) + Source Code Pro (mono — small
spec-style labels). None of these three families are used by any other demo
in the repo.

**`ui-ux-pro-max` query:** `python .claude/skills/ui-ux-pro-max/scripts/search.py
"tile flooring showroom custom craftsman" --design-system -p "Capitol Custom
Tile"` returned a generic "Hero + Features + CTA" SaaS pattern (trust-blue +
orange, Outfit/Work Sans) with no tile/showroom-specific match — noted here
per `builder.md`'s instruction to say so rather than force an unrelated
match. The final direction came from the Builder's own judgment applied to
the real review-tone research above.

## Structural distinctness vs. the other 2 tile/flooring/countertop demos in this batch

This batch has three tile/flooring/countertop-adjacent businesses
(Capitol Custom Tile, M&A Flooring, M&C Countertops). Diff:

| | **Capitol Custom Tile** | M&A Flooring | M&C Countertops |
|---|---|---|---|
| Hero | Full-bleed warm patterned-tile photo, centered classic headline | Split-screen: copy left, install photo right, framed panel | Full-bleed single marble-slab photo, minimal editorial, no framing chrome |
| Signature element | Horizontal **"finish wall" swatch strip** (6 CSS-drawn material swatches: travertine, slate, marble, subway, mosaic, plank-look) | **Numbered 3-step install process** (legitimate — installation is a real sequence) | Diagonal **"seam" motif** simulating two slabs joined; honest "new listing" framing band |
| Section order | Hero → heritage strip (1996/30yr/rating/address) → services → swatch wall → craft photo → reviews → contact | Hero → services → numbered process → craft photo → reviews → contact | Hero → honest-positioning band → services → craft photo → reviews → contact |
| Nav | Sticky bar, square material-chip monogram | Left-aligned wordmark, plank-style underline | Centered minimal wordmark, no chip/mark |
| Type pairing | Marcellus + Cabin + Source Code Pro | Anton + DM Sans + PT Mono | Newsreader (italic) + Assistant + Ubuntu Mono |
| Palette | Stone/putty + espresso + wine-berry | Driftwood-oak + walnut + muted denim-blue | Cool quartz-white + charcoal + blush-quartz-vein |
| Tone | Terse, veteran, "the selection speaks" | Personal, one-man-shop, plain-spoken | Editorial, "let the stone speak," honest about being new |

## Verified facts vs. placeholders

**What is REAL** (source: Google Maps listing, checked 2026-09-05, and the
Lead's pre-verified batch brief):

- Business name: **Capitol Custom Tile**
- Category: **Flooring contractor** (tile/stone/flooring installer)
- Address: **100 E 32nd St, Bryan, TX 77803**
- Phone: **(979) 775-9444**
- Google rating: **4.6 stars, 5 reviews**
- Partial hours: **opens 9 AM Monday** (only data point shown live)
- Established **1996** (30 years in the trade) — per the Lead's pre-verified
  brief
- No independent website (confirmed: a claimed domain does not resolve)

**What is PLACEHOLDER / ILLUSTRATIVE:**

- **Hero photo** (`assets/hero-tile-floor.jpg`) and **craft-section photo**
  (`assets/installer-leveling.jpg`): free-license Pexels stock photos, not
  photos of Capitol Custom Tile's own crew, showroom or work. See "Photos"
  below.
- **Service list** (Custom Tile Installation, Stone & Porcelain, Flooring,
  Showers & Backsplashes, Repairs & Regrouting, Design Consultation):
  generic examples for a full-service tile contractor, explicitly labeled
  "confirm by phone."
- **Swatch-wall material names** (Travertine, Slate, Marble, Subway, Mosaic,
  Plank-look): illustrative finish categories, not Capitol's actual in-stock
  inventory.
- **Full weekly hours**: not published on the listing; page says "call for
  full weekly hours" rather than guessing.
- **Reviews section**: only the real 4.6★/5-review count is shown; the
  review card is an explicit "reviews will appear here once connected"
  placeholder — no real review text is published as page copy.

## Photos

Both free-license, no attribution required (credited here anyway), from
[Pexels](https://www.pexels.com/license/):

- **Hero** (`assets/hero-tile-floor.jpg`): [pexels.com/photo/30992346](https://www.pexels.com/photo/intricate-mosaic-pattern-reflecting-water-ripples-30992346/)
  ("Intricate Patterned Tiled Floor in Sunlight"), photographer **Sueda
  Dilli** — a real, warm-toned patterned tile floor, matching the
  materials-forward, understated direction the real review vocabulary
  ("selection," "finishes") supports.
- **Craft section** (`assets/installer-leveling.jpg`): [pexels.com/photo/11806476](https://www.pexels.com/photo/hand-in-a-glove-using-a-tile-levelling-tool-11806476/)
  ("Hand in a Glove Using a Tile Levelling Tool"), photographer **Vladimir
  Srajber** — hands-only, no face or identity claimed as Capitol's own crew.

## Brand-rule compliance

- No "Lewis Digital" anywhere on the client-facing page. Footer reads
  exactly **"Designed by Lewis Tech"**, linked to
  **https://lewistechservices.com/**.
- `pitch-sheet.html` carries Lewis Digital's own gold/charcoal/cream brand
  (the one allowed exception) — untouched from the reference template
  pattern (`demos/petes-trees/pitch-sheet.html`), facts swapped in.
- Palette, fonts and layout are bespoke to this business — not reused from
  any of the ~42 existing demos, and structurally distinct from the other
  two tile/flooring/countertop businesses in this batch (see diff table
  above).
- Real stock photos used for hero + one supporting section, sourced from
  Pexels, both hands/materials-only (no faces claimed as staff).
