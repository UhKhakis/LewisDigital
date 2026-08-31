# Bernado's Landscaping and Dirtworks — Demo Site

One-page prospecting demo for **Bernado's Landscaping and Dirtworks**
(College Station, TX 77845 · (979) 271-9372 · Landscaping/Dirtwork
contractor), built 2026-08-30 as part of an owner-authorized, HubSpot-sourced
batch build. This is a pre-sale demo — nothing goes live for the client
until they confirm interest.

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Files

| File | Purpose |
|---|---|
| `index.html` | Complete one-page site (header, hero, verified-facts strip, honesty story, spec-plate service split, service area/hours, reviews, contact, footer) |
| `styles.css` | All styling — brand derived from the trade name's own duality + the hero photo's real tones (see "Brand derivation" below) |
| `assets/hero-dirtwork.jpg` | Hero photo — free-license stock photo, NOT a photo of Bernado's own crew or equipment (see "Hero photo" below) |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet for outreach (OUR sales tool — kept in Lewis Digital's own gold/charcoal/cream, per `client-demo-site` §4) |

## Preview

```bash
cd demos/bernados-landscaping-dirtworks
python -m http.server 8097 --bind 127.0.0.1   # use python3 on macOS/Linux
```

Verified locally 2026-08-30: no console errors, all assets return 200, no
horizontal overflow at 375px (mobile), 768px (tablet), or desktop widths.
Mobile nav dropdown and sticky call bar both confirmed working via a live
browser session.

## This is the thinnest-signal business in the batch — read this before assuming a research gap

Per `client-demo-site` §1's own fallback clause: **this business has no
sourceable online presence to extract a brand from**, and that absence was
itself confirmed, not assumed. The Lead searched live via Chrome multiple
ways — business name alone, business name + "College Station," business
name + "landscaping"/"dirtwork" — and Google Maps never resolved to this
business under any spelling; it either surfaced unrelated competitors or a
completely unrelated business ("D bar D Land Services"). No Google Business
Profile exists to link to, meaning no star rating, no review count, no
photos, and no review text to read for tone/vocabulary (the research step
`client-demo-site` §1 normally leads with).

**What does exist:** three independent directory listings (Yellow Pages
twice, ExactSeek once) — all boilerplate contractor-listing text, no photos
or reviews attached to any of them — sharing the exact same phone number,
(979) 271-9372, across all three. Address is only ever given generically as
"College Station, TX 77845" in every listing; no street address exists
anywhere, so none is shown on the page (per `client-demo-site` §3, omit
rather than guess).

This isn't a research shortcut — it's the actual, verified state of this
business's online footprint, checked 2026-08-30. The page turns that honest
finding into its own content section ("Why we're easy to miss online")
rather than hiding the gap.

## Brand derivation — honestly derived, not sourced (per `client-demo-site` §1 fallback)

With no reviews, no photos, and no existing web presence to extract a real
brand from, the palette and layout concept are **derived from two pieces of
real, legitimate evidence** instead of a generic "landscaping" trade
default:

1. **The business's own name.** "Landscaping **and** Dirtworks" names two
   distinct halves of the trade — decorative/planting landscaping work, and
   heavier earth-moving/grading/dirtwork. That duality is the structural and
   narrative seed for the whole page (hero wordmark split, the "spec plate"
   signature section, nav label "Two Sides"), not a generic "landscaping
   contractor" template.
2. **The hero photo's own tones** (see "Hero photo" below) — a real photo,
   even though not of this business, so its actual pixel colors are
   legitimate evidence to build from: vivid sky blue, worked-earth brown,
   and safety-equipment yellow (visible on the CAT skid-steer). These three
   became the dominant palette family.

| Token | Value | Source |
|---|---|---|
| `--soil` `#5b3d24` / `--soil-deep` `#2c1c10` (primary dark, headlines, dark sections) | Worked-earth brown from the hero photo's dirt | Hero photo pixel tones |
| `--sky` `#2f7ec4` / `--sky-deep` `#1c507f` (links, "verified" tag, secondary accent) | Vivid sky blue from the hero photo | Hero photo pixel tones |
| `--safety` `#f0ab1f` (primary CTA, "Dirtworks" wordmark half) | Equipment-yellow from the hero photo's CAT skid-steer | Hero photo pixel tones |
| `--leaf` `#5c7048` (the "Landscaping" wordmark half, planting-side accents only) | **Name-derived, NOT photo-sourced** — the hero photo has no green in it at all (it's dirt/sky/equipment); this token exists only to represent the "Landscaping" half of the business's own name | Business name duality |
| `--sand` `#f1e6d0` (page base) | Warm sand/topsoil tone, deliberately distinct from Lewis Digital's own cream `#fbf8f1` | Derived, keeps the earth-tone family |

**Typography:** Big Shoulders Display (headlines — a condensed, heavy
display face literally modeled on Chicago-ironwork/industrial signage
lettering, which reads as stenciled equipment-plate type for the
"Dirtworks" half) + Karla (body, warm humanist sans) + DM Mono (utility
labels — the "job ticket" verified-facts strip, spec-plate labels, eyebrows
— evokes stamped equipment tags / work-order slips). Queried
`ui-ux-pro-max --domain typography` for "industrial condensed heavy
equipment" — closest real match was Barlow Condensed + Barlow (already used
by `demos/limitless-diesel-offroad`), so this fell back to independent
judgment per the skill's own fallback rule to avoid duplicating a sibling's
type pairing.

**Signature element:** a recurring topographic/grading-contour-line motif
(hand-built inline SVG, wavy horizontal lines) used behind the hero's solid
panel and the dark contact section — a literal reference to land-grading
survey plans, which is what "dirtwork" grading actually produces on paper.
This ties the visual signature directly to the trade rather than being a
decorative flourish.

## Hero photo

**Source:** [pexels.com/photo/8808933](https://www.pexels.com/photo/yellow-heavy-equipment-on-brown-soil-under-blue-sky-8808933/)
("Yellow Heavy Equipment on Brown Soil Under Blue Sky"), photographer
**CONSTRUCCIÓN TOTAL**, Pexels License (free for commercial use, no
attribution legally required, credited here anyway). Sourced and placed by
the Lead before this build began.

This is a **stock photo of a skid-steer loader on a generic construction
site — NOT a photo of Bernado's Landscaping and Dirtworks, its crew, or its
equipment.** The page's `alt` text says so explicitly
("illustrative stock photo, not Bernado's Landscaping and Dirtworks' own
crew or equipment"), and so does this README. The equipment visibly carries
a real "CAT 246D" manufacturer marking — a generic equipment-brand marking
inherent to real construction photography, not a competing local business's
signage — retained per the Lead's explicit direction rather than swapped out.

## Structural distinctness vs. every sibling demo under `demos/`

Diffed against the current build state of every other demo folder before
finishing, per `client-demo-site` §2 — especially `demos/sanchez-landscaping`
(the other landscaping-trade sibling in this batch, built on the
unmerged `demos/sanchez-landscaping-new` branch), since two demos in the
same trade converging on one look is the most-flagged failure mode:

| | Bernado's (this demo) | Sanchez Landscaping & Construction | Bos Garage | Brazos Valley Automotive | Bryan Muffler & Performance | Limitless Diesel & Offroad | Neff's (different trade) |
|---|---|---|---|---|---|---|---|
| Hero | Split-screen: real photo one half, solid dark panel with a wordmark split across two colors + contour texture on the other; nav has no persistent CTA button | Full-bleed single photo, centered copy, floating "fact-tag" bar overlapping the bottom edge | Centered copy + full-bleed photo banner below | Split grid, copy left / photo right | Full-bleed gradient + scrolling ticker above nav | Sidebar rail nav + HUD gauge SVG, no centered hero | Centered copy over a dark hero photo |
| Verified-facts device | "Job ticket" — dashed-border work-order slip, monospace, overlapping the hero's bottom edge | "Fact-tag" — plain floating card list | "Trust" strip, plain row | "Trust" strip, plain row | "Specplate" band | HUD "readout" stat row | n/a |
| Signature element | "Spec plate" — a riveted, bordered two-column plate (Landscaping side / Dirtworks side) styled like an equipment capacity plate, sitting mid-page as its own section | "Trades split" — two large photo-textured article cards (hardscape / planting) | Hand-lettered "— ask for Bo" script signature | Split editorial photo + horizontal fact-strip | Scrolling ticker + oversized number band | Fixed left sidebar "field log" rail nav | Arch-framed portrait photos |
| Distinct honesty section | Dedicated "Why we're easy to miss online" section with a dark stat panel (0 Maps listings / 3 directories / 0 reviews) — this business's specific, unusually thin footprint given its own section, not folded into a generic about block | Folded into "About/positioning" section alongside the 3.8★ rating | "Story" section (has a rating to lead with) | "About" section (has a rating to lead with) | "About" + "Craft" sections (has a rating to lead with) | "About" section (has a rating to lead with) | n/a |
| Nav / CTA | Plain top bar, no header CTA button; conversion instead handled by a fixed bottom mobile call bar (all others rely on a header CTA button) | Hamburger + logo + top-right phone CTA button | Single sticky bar, circular badge mark, header CTA | Minimal masthead, no top strip | Ticker + condensed slash-brand nav | Fixed left rail, numbered links | Sticky header, no ticker |
| Palette | Soil brown + sky blue + safety yellow (photo-derived) + one name-derived leaf-green accent | Teal + black mulch + warm wood + lawn green | Warm cream + muted barn-red + stone-tan + soft yellow | Warm cream + navy + copper | Near-black + safety orange | Olive/khaki + rust | Ivory + lavender-plum |
| Type pairing | Big Shoulders Display + Karla + DM Mono | Fraunces + Inter + Space Mono | Bitter + Work Sans + Caveat | Roboto Slab + Work Sans | Alfa Slab One + Archivo + IBM Plex Mono | Barlow Condensed + Barlow + Share Tech Mono | Cormorant Garamond + Jost |

No two landscaping-trade demos share a hero mechanic, a verified-facts
device, a signature element, a nav/CTA pattern, a palette, or a type
pairing.

## What is REAL (verified & traceable)

- Business name: **Bernado's Landscaping and Dirtworks** — from
  `business/leads/leads.csv` and cross-confirmed across all three directory
  listings found.
- Category: **Landscaping/Dirtwork contractor**.
- Area: **College Station, TX 77845** — the only location detail given in
  any of the three directory listings; no street address exists anywhere,
  so none is shown.
- Phone: **(979) 271-9372** — identical across all three independent
  directory listings (2× Yellow Pages, 1× ExactSeek), checked 2026-08-30.
- **No Google Maps listing exists** for this business under any searched
  name/spelling — checked live via Chrome, multiple query variants,
  2026-08-30. This absence itself is treated as a verified fact and stated
  plainly on the page, not glossed over.
- The hero photo's real pixel tones (sky blue, earth brown, equipment
  yellow) — sourced from the Pexels photo credited above, used only as
  color-derivation evidence, not reproduced as a claim about the business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Hero photo** (`assets/hero-dirtwork.jpg`): a free-license stock photo of
  a skid-steer loader on a generic site — NOT Bernado's own equipment or
  crew. Labeled as such in `alt` text, and here.
- **Service list** ("Landscaping side" / "Dirtworks side" items in the spec
  plate): generic examples of what a landscaping-and-dirtwork contractor
  typically covers, explicitly labeled "not a confirmed service menu" with
  "Confirm your exact job by phone" — not Bernado's actual service list.
- **Hours**: no hours are published anywhere findable; the page says so
  directly ("Call or message for hours — no hours are published anywhere we
  could verify, checked 2026-08-30").
- **Reviews section**: explicitly states no Google listing/rating exists —
  never fabricated. A genuine Google *search* URL is linked ("Look them up
  yourself on Google →") rather than a fabricated Google Maps *place* link,
  since no place listing exists to link to.
- **Address**: omitted entirely (per `client-demo-site` §3) — only the
  general service area (College Station, TX 77845) is shown, since no
  street address is verifiable anywhere.
- **Copy voice** ("Two halves of one crew," "Tell us which side of the job
  it is"): original marketing language reflecting the real, verified
  name-duality and thin-footprint findings above — not a quote or paraphrase
  of anything scraped, since no reviews or business copy exist to quote.

## Brand-rule compliance (owner spot-check)

- Client-facing page uses ONLY the derived brand tokens (`--soil`,
  `--soil-deep`, `--clay`, `--sand`, `--sky`, `--sky-deep`, `--safety`,
  `--leaf`, `--ink`) and fonts (Big Shoulders Display + Karla + DM Mono).
  **Zero Lewis Digital gold (`#C9A227` family), zero Lewis charcoal
  `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in `index.html`/
  `styles.css` — confirmed by inspection; this demo's sand base `#f1e6d0`
  is a deliberately different hex value from Lewis Digital's own cream.
- Footer reads exactly "Designed by Lewis Tech" linking to
  `https://lewistechservices.com/` — never "Lewis Digital" — per the
  owner's standing footer-credit instruction.
- `pitch-sheet.html` is deliberately kept in Lewis Digital's own
  gold/charcoal/cream brand (it's our sales tool, per `client-demo-site` §4)
  and does not show a fabricated rating anywhere.
- No star rating, review count, or fabricated address appears anywhere on
  either `index.html` or `pitch-sheet.html`.
- Structurally distinct from all seven sibling demos — see the comparison
  table above.

## Notes for the close call with the owner

- This is the thinnest-signal business Lewis Digital has approached in this
  batch — lead with that honestly: a real, working, referral-driven
  business with zero digital footprint is exactly the prospect who benefits
  most from a first web presence, and the page's own "Why we're easy to
  miss online" section makes that pitch itself without oversellling it.
- There is no existing rating to protect or improve — the AI Receptionist
  pitch fits well here too (a two-trade outfit fielding both landscaping and
  heavy-equipment calls is a business that can't afford to miss either kind
  while on a job site).
- If the owner provides a real address, real photos, real hours, or an
  actual service list, swap them into `index.html` and republish — every
  placeholder above was written to be easy to replace once real material
  exists.
- This folder is a standalone deliverable; nothing goes live for the client
  until they confirm interest.
