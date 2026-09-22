# Silver Thimble Alterations — Demo Site

One-page demo website for **Silver Thimble Alterations** (910 N Earl
Rudder Fwy STE.250, Bryan, TX 77802 — Colony Park), built for Lewis
Digital's owner-authorized batch-10 build (round 3, batch B). Static
HTML + CSS, no build step.

## Research (per `client-demo-site` §1 — real reviews before design)

**Source:** Silver Thimble Alterations' public Google Business Profile,
https://www.google.com/maps/search/Silver+Thimble+Alterations+Bryan+TX,
verified live via browser 2026-09-21.

- **Rating:** 4.5 stars, **124 reviews** — one of the strongest review
  counts across this entire campaign.
- **Category:** Tailor.
- **Address / phone:** 910 N Earl Rudder Fwy STE.250, Bryan, TX 77802
  (Colony Park) · (979) 775-5600.
- **Hours, verified on the listing:** Monday–Thursday 9 AM–6 PM. The
  listing's hours table was only read through Thursday before the tool
  session moved on — Friday/Saturday/Sunday are shown as an honest
  placeholder rather than guessed.
- **"Website" link is spam, confirmed live:** the unclaimed listing shows
  a "website" link resolving to `uscom.top`, a generic ad-redirect domain
  with no connection to Silver Thimble — consistent with the build brief's
  note. The page does **not** link to it and states plainly that no real
  website was found.
- No business photos exist on the listing to extract color from, so the
  brand is **derived**, not photo-sourced (§1's fallback clause) — though
  the metallic silver accent is a deliberate nod to the business's own
  real name.

**Reviews read for internal design research** (3 read in full, plus the
listing's own AI-generated topic tags and review-summary snippets, not
published as page copy per §1/§3):

- Diana Romadina (lower-star): a Lululemon-referred zipper replacement
  where the exact original zipper color wasn't available; the owner's
  reply offers a refund if she's unhappy — read honestly as part of the
  full picture, not cherry-picked away.
- Maria Medrano (5★, 2 weeks old at research time): "I had a women's top I
  purchased that fit a bit snug. I took this to Rodrigo & he was able to
  expand the sides making it look flawless! Quick turnaround & reasonably
  priced!"
- Faith Carter (5★): "I took my bridesmaid dress and a dress for a
  rehearsal dinner for some alterations and both came out great! Super
  quick turnaround and they made my bridesmaid dress fit perfectly even
  with a growing baby bump!"
- Google's own review-topic tags on the listing: "wedding dress" (10),
  "wedding dress alterations" (12), "zipper replacement" (4), "quick
  alteration" (3), plus 6 more not opened.
- Google's own AI review-summary snippets: "I received great customer
  service, amazing prices and beautiful quality work." / "Wedding dress
  fitted, suits taken in, pants and dresses hemmed." / "Incredible
  service, fast turn around and great price."

**Vocabulary/theme takeaway:** wedding and bridesmaid dress alterations
are, by a wide margin, the single most-repeated theme in 124 reviews —
far ahead of general hemming or suit work. Staff member Rodrigo is named
personally and praised for precision. Quick turnaround and fair pricing
recur constantly. This reads as a shop that's become Bryan's go-to for
bridal-timeline alterations specifically, which is why the page leads with
that theme rather than a generic "we hem pants" framing.

## Brand system

| Element | Choice | Rationale |
|---|---|---|
| Palette | Ivory (`--ivory #fbf6f2`) + dusty rose/blush (`--rose #b6685e`) + deep plum (`--plum #3a2b30`) + metallic silver (`--silver #b9bec2`) | Blush echoes the bridal-alterations theme found in review research; silver is a literal, honest nod to the business's own real name, not an invented brand color |
| Typography | Bodoni Moda (high-contrast editorial-fashion serif, italic accents) + Work Sans (body) + Spline Sans Mono (labels) | Editorial-fashion feel appropriate to a bridal-heavy tailor shop, not used by any other demo in the repo |
| Hero | Two-column with a **pinking-shears zigzag photo frame** (real CSS `clip-path`, not a stock template shape) | A literal sewing detail — pinking shears are the actual tool used to finish seam edges — distinct from every rounded/rectangular/diagonal frame elsewhere in the repo |
| Signature element | Scissors-icon corner mark on service cards, dashed "stitch" styling on the reviews-section border | Ties visual language back to the trade itself |
| Reviews | Circular "thimble badge" ringed in silver | Distinct shape/material metaphor from every other rating treatment in this batch |

## Structural distinctness

First tailor/alterations demo in this repo — no same-trade sibling exists
yet. Checked against this batch's other four demos and the repo generally:

- The only demo in the repo using a **zigzag/pinking-shears clip-path**
  photo frame — every other demo uses rounded corners, straight rectangles,
  a diagonal clip, or a circular frame.
- The only demo pairing a high-contrast **italic serif display** (Bodoni
  Moda) with a light ivory/blush/plum palette — distinct from Neff's
  Majestic Hair Studio's lavender-plum Cormorant Garamond system and from
  every auto/trade demo's condensed or geometric sans display type.
- Light-first, editorial-fashion mood contrasts directly with A & K
  Transmission Repair's dark instrument-panel theme and Siegert Radiator
  Shop's parchment heritage theme in this same batch.

## What is REAL (verified & traceable)

- Business name, category, address, phone: Silver Thimble Alterations'
  Google Business Profile, verified 2026-09-21.
- Rating: 4.5 stars, 124 reviews.
- Hours Monday–Thursday, 9 AM–6 PM — shown directly on the listing,
  verified 2026-09-21.
- The listing's "website" link resolves to an unrelated ad-redirect domain
  (`uscom.top`), confirmed live — not a real Silver Thimble website.
- "Google" link points to the exact `source_url` given in the build brief.
- Owner name "Ocie Williams" and staff member "Rodrigo" — per the build
  brief; Rodrigo's name is independently corroborated by a real review
  (Maria Medrano) naming him directly.
- "24 years in business" — per the build brief.

## What is PLACEHOLDER / ILLUSTRATIVE

- **Hero photo** (`assets/hero-tailor.jpg`) and **about-section photo**
  (`assets/mannequin-detail.jpg`): free-license Pexels stock photos — not
  photos of Silver Thimble's actual shop, staff, or garments. Captioned as
  illustrative in both the visible `alt` text and on-page caption.
- **Services list**: generic examples for a tailoring/alterations shop,
  informed by real review content (bridal work, zipper repair) but not
  Silver Thimble's confirmed price list or exact service menu — labeled
  "confirm by phone."
- **Friday–Sunday hours**: not confirmed in this research pass; shown as
  an explicit placeholder rather than guessed.
- **Reviews section**: only the real 4.5/124 rating is shown; review text
  stays an explicit "will appear here once connected" placeholder — no
  scraped review quotes appear as page copy.

## Photo sourcing

- Hero (`assets/hero-tailor.jpg`): [pexels.com/photo/7147585](https://www.pexels.com/photo/woman-holding-yellow-tape-measure-7147585/)
  ("Woman Holding Yellow Tape Measure"), photographer **Michael Burrows**.
- About section (`assets/mannequin-detail.jpg`): [pexels.com/photo/17833340](https://www.pexels.com/photo/hands-touching-white-clothes-on-mannequin-17833340/)
  ("Hands Touching White Clothes on Mannequin"), photographer **Chalo
  Garcia**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free for commercial use, no attribution required, credited here anyway).

## Brand-rule compliance

- Client page uses only the derived ivory/blush/plum/silver system — no
  Lewis Digital gold `#C9A227`, no Lewis charcoal `#16130e`, no Lewis
  cream `#fbf8f1` anywhere in `index.html`/`styles.css`.
- Footer reads exactly **"Designed by Lewis Tech"**, hyperlinked to
  `https://lewistechservices.com/` — no "Lewis Digital" anywhere on the
  client-facing page.
- **"See us on Google" link confirmed present** in three places
  (hero, hours/location card, and the closing contact section), all
  pointing to the exact brief `source_url`:
  `https://www.google.com/maps/search/Silver+Thimble+Alterations+Bryan+TX`.
- `pitch-sheet.html` keeps the Lewis Digital gold/charcoal/cream palette
  untouched (it's our own sales tool) with Silver Thimble's real name,
  address, phone, and rating.

## Files

| File | Purpose |
|---|---|
| `index.html` | One-page site: hero, trust strip, services, about, hours & location, reviews, contact, footer |
| `styles.css` | Full client-brand theme |
| `assets/hero-tailor.jpg` | Hero photo (stock, illustrative) |
| `assets/mannequin-detail.jpg` | About-section photo (stock, illustrative) |
| `pitch-sheet.html` | Lewis Digital-branded printable sales sheet (untouched brand) |

## Preview

```bash
cd demos/silver-thimble-alterations
python3 -m http.server 8303 --bind 127.0.0.1
```
