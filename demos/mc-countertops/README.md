# M&C Countertops — Demo Site

One-page demo website for **M&C Countertops** (Bryan, TX), a countertop
fabrication and installation contractor. Built as part of Batch 5 ("trades"
round) — owner-authorized batch build, per the Lead's brief; no individual
client confirmation was sought before building, consistent with that
authorization.

## Why this business

The thinnest listing in this batch — a real, current Google Business
listing (address and phone independently confirmed) with **zero reviews**.
That's disclosed honestly rather than hidden, and shaped the whole design
direction: let the stone photography and plain facts carry the page instead
of leaning on social proof that doesn't exist yet.

## Research (2026-09-05)

**Source:** [google.com/maps/search/M%26C+Countertops+Bryan+TX](https://www.google.com/maps/search/M%26C+Countertops+Bryan+TX)
— live Google Maps listing, checked 2026-09-05.

- **Category:** Countertop contractor. **Reviews: none.**
- **Address:** 7082 Elmo Weedon Rd, Bryan, TX 77808. **Phone:** (979)
  676-5935.
- **Hours:** "Closed · Opens 9 AM Mon" shown live at check time — the only
  hours data point available.
- **Attribute:** "Onsite services" shown on the listing — a real, confirmed
  attribute, displayed on the page as a small verified chip.
- **No independent website** — per the Lead's pre-verified brief, a
  same-named business found in a general web search is an unrelated
  Minnesota company, not this one. The Google listing itself has no website
  link.
- **No photos on the listing** to extract a real palette from — disclosed
  honestly below, same as Capitol Custom Tile in this batch.
- **No reviews to read** — nothing to internally research beyond the
  attribute and hours above. This absence is itself the design brief: the
  page leads with an honest "new to Google, not new to the trade" framing
  rather than inventing quotes, a star rating, or a founding date that
  isn't confirmed.

## Brand system (designer-derived — disclosed, not photo-sourced)

With zero reviews and no business photo, the palette is a deliberate
editorial choice built around the *category itself* — cool quartz/marble
tones plus a blush accent echoing natural stone veining — disclosed here as
derived, per `client-demo-site` §1's fallback guidance.

| Token | Value | Rationale |
|---|---|---|
| `--quartz` | `#eceae3` | Cool stone-white base, echoes engineered quartz |
| `--charcoal` | `#2a2b28` | Cool near-black ink, editorial/gallery feel |
| `--blush` | `#b9707a` | Quartz-vein blush accent — distinct from Capitol's wine and M&A's denim in this same batch |

**Typography:** Newsreader italic (display — editorial, gallery-catalog
feel) + Assistant (body) + Ubuntu Mono (small labels). None of these three
families are used by any other demo in the repo.

## Structural distinctness vs. the other 2 tile/flooring/countertop demos in this batch

See the full three-way diff table in `demos/capitol-custom-tile/README.md`.
Summary of what makes M&C Countertops distinct:

- **Hero:** full-bleed single marble-slab photo with a subtle diagonal
  "seam" light-line motif (simulating two slabs joined) — no framing chrome,
  the most minimal of the three heroes. Not Capitol's classic full-bleed
  with heritage strip, not M&A's split-screen.
- **Signature element:** an **honest-positioning band** directly under the
  hero ("New to Google, not new to the trade") plus a **no-reviews-yet card**
  in the reviews section that states the absence plainly instead of hiding
  it — the only demo in this batch built around disclosing a complete
  absence of reviews rather than a thin-but-present count.
- **Nav:** centered minimal wordmark, no chip/monogram (Capitol) and no
  plank underline (M&A).
- **Type pairing:** Newsreader italic + Assistant + Ubuntu Mono — an
  editorial serif italic, unlike Capitol's monumental Marcellus or M&A's
  bold condensed Anton.
- **Grid style:** hairline-divided services grid (1px charcoal rules between
  cards) rather than Capitol's bordered cards or M&A's left-accent cards.
- **Tone:** editorial, "let the stone speak," openly new — vs. Capitol's
  veteran tone and M&A's personal one-man-shop tone.

## Verified facts vs. placeholders

**What is REAL** (source: Google Maps listing, checked 2026-09-05, and the
Lead's pre-verified batch brief):

- Business name: **M&C Countertops**
- Category: **Countertop contractor**
- Address: **7082 Elmo Weedon Rd, Bryan, TX 77808**
- Phone: **(979) 676-5935**
- **Zero reviews** on Google (real and disclosed, not hidden or invented)
- Partial hours: **opens 9 AM Monday** (only data point shown live)
- "Onsite services" attribute, shown on the listing
- No independent website (a same-named business in general search is an
  unrelated Minnesota company)

**What is PLACEHOLDER / ILLUSTRATIVE:**

- **Hero photo** (`assets/hero-marble.jpg`) and **work-section photo**
  (`assets/kitchen-island.jpg`): free-license Pexels stock photos, not
  photos of M&C Countertops' own fabrication shop or installed work. See
  "Photos" below.
- **Service list** (Quartz, Granite, Marble, Templating & Install, Sink
  Cutouts, Butcher Block): generic examples for a countertop contractor,
  explicitly labeled "confirm by phone."
- **Full weekly hours**: not published beyond the single "opens 9 AM Monday"
  data point; page says "call for current hours" rather than guessing.
- **Reviews section**: explicitly and honestly states there are no reviews
  yet — no invented rating, review text, or testimonial appears anywhere on
  the page.

## Photos

Both free-license, no attribution required (credited here anyway), from
[Pexels](https://www.pexels.com/license/):

- **Hero** (`assets/hero-marble.jpg`): [pexels.com/photo/3847494](https://www.pexels.com/photo/3847494/)
  ("Marble Surface"), photographer **ready made** — elegant white marble
  with subtle gray veining, matching the "let the stone speak" editorial
  direction the zero-review listing pushed the design toward.
- **Work section** (`assets/kitchen-island.jpg`): [pexels.com/photo/18285887](https://www.pexels.com/photo/luxury-kitchen-in-a-house-18285887/)
  ("Luxury Kitchen in a House"), photographer **edithub pro** — a real
  kitchen with a light stone island countertop in context, not a photo of
  M&C's own installed work.

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
  Pexels; neither claims to depict M&C's own fabrication shop or crew.
- Zero-review listing disclosed honestly, both here and directly on the
  page itself — no invented rating or testimonial anywhere.
