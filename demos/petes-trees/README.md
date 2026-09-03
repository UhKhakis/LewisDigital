# Pete's Trees — Demo Site (owner-authorized batch, 2026-09-03)

One-page demo website for **Pete's Trees** (1206 N Parker Ave, Bryan, TX
77803 · (979) 571-8169 · Tree service). This is one of five demos in an
owner-authorized batch build (the two tree services and two fence companies
in this batch, plus Static Heating and Air Conditioning) — the normal "no
demo until the client confirms interest" gate does not apply here (Lead
instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/petes+trees+Bryan+TX`

- **5.0 stars, 9 reviews.** All 9 review texts were read for tone/vocabulary
  research — quoted here for internal design research only, per
  `client-demo-site` §1/§3; none of this text appears on the page itself.
- Repeated language across reviews: "professional, efficient, and on time"
  (Ambyr Weidner), "very professional and affordable attentive to detail...
  top notch service" (Randy Hernandez), "quality, affordable... trustworthy
  and reliable... used his services over the last 10 years" (Oma Chastka),
  "best value... left the work site spotless" (Billy Sharp), "fair pricing,
  explains situation accurately and professional" (H Duffy, newest review).
- Google's own review-tag summary (a structured feature of the listing
  itself, not an invented category): **trim ×6, cleanup ×3, affordability
  ×2, branches ×2, reliable ×2, thoroughness ×2, quality work ×2.** These
  exact tags/counts are shown on the page's Reviews section — this is
  Google's own aggregation, not a quote or a summary we wrote.
- Live status read "Open · Closes 7 PM" when checked.
- Cover photo on the listing: a worker in a harness up in a tree canopy,
  doing trim work — informed the choice of hero photo (a similar real,
  free-license stock photo was sourced rather than reusing Google's own
  photo, which isn't licensed for this use).
- No business website found; a `findtreeservice.com` hit is a directory
  page, not the business's own site. Facebook page "Petes Tree's" (7
  followers) and a Nextdoor listing exist but carry no additional brand
  signal beyond the name.

## Design direction

**Warm, established, personal.** Nine straight 5-star reviews from a small
crew with no marketing budget reads as an already-trusted neighborhood tree
guy — the design leans into that: warm forest green + amber/gold (a leaf/
autumn read) + cream, Fraunces (a warm, slightly organic serif) for display
type, Karla for body copy, and Caveat (handwriting) for a couple of personal
accents (the eyebrow labels, the tag-cloud counts) that give the page a
warmer, more personal register than a purely corporate trade site.

**Signature element:** a real-data "what Google reviewers keep mentioning"
tag cloud in the Reviews section, using Google's own review-tag feature
(trim, cleanup, affordability, branches, reliable, thoroughness, quality
work) with their real counts — an honest way to surface real review
substance without quoting review text directly on the page.

## Structural distinctness vs. Mike's Complete Tree Services and Landscaping

Both are Bryan tree services, so this needed deliberate differentiation
beyond palette:

| | Pete's Trees (this demo) | Mike's Complete Tree Services and Landscaping |
|---|---|---|
| Hero | Full-bleed photo, centered copy, dark scrim | Split grid: copy left, boxed photo right |
| Scope shown | Single trade (tree work only) | Dual trade (trees + landscaping), shown as two side-by-side panels |
| Services layout | 3-column icon tile grid | Two-column split panel (Trees \| Landscaping) |
| Signature element | Tag-cloud of Google's real review-tag data | Tree-ring/growth-ring circular motif as recurring divider |
| Honesty device | n/a (9 real reviews, real tag data shown) | Honest one-review disclosure card ("one rating so far — here's exactly what it says") |
| Palette | Warm forest green + amber/gold + cream | Cooler pine green + clay/soil orange-brown + muted sky + straw-tan |
| Type pairing | Fraunces + Karla + Caveat accent | Bitter + Nunito |
| Section order | Hero → Services → About → Reviews → Hours/Find us → Contact | Hero → Trees/Landscaping split → About → Honest review card → Hours/Find us → Contact |

No shared hero shape, service-section architecture, signature element, or
type pairing between the two.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, about, reviews, hours/find us, contact, footer) |
| `styles.css` | All styling — sourced client brand (forest green/amber/cream, Fraunces/Karla/Caveat) |
| `assets/hero-arborist-climbing.jpg` | Hero photo — free-license stock photo |
| `assets/cleanup-chipper.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos of general tree-service
work — **not** photos of Pete's Trees, its crew, or its equipment:

- **Hero** (`assets/hero-arborist-climbing.jpg`):
  [pexels.com/photo/34674271](https://www.pexels.com/photo/professional-arborist-climbing-tree-for-maintenance-34674271/)
  ("Professional Arborist Climbing Tree for Maintenance"), photographer
  **John Robertson**.
- **Services section** (`assets/cleanup-chipper.jpg`):
  [pexels.com/photo/34581908](https://www.pexels.com/photo/worker-operating-wood-chipper-in-suburban-setting-34581908/)
  ("Worker Operating Wood Chipper in Suburban Setting"), photographer
  **John Robertson** — chosen specifically because it echoes the real
  reviews' language about hauling debris and cleaning up after a job.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page
credit lines.

## Preview

```bash
cd demos/petes-trees
python -m http.server 8201 --bind 127.0.0.1   # preview on localhost:8201
```

Verified locally 2026-09-03: all images return HTTP 200, no console errors,
content renders correctly at desktop and mobile widths.

## What is REAL (verified & traceable)

- Business name: **Pete's Trees**
- Address: **1206 N Parker Ave, Bryan, TX 77803**
- Phone: **(979) 571-8169**
- Category: **Tree service**
- **Google rating: 5.0 out of 5, from 9 reviews** — Pete's Trees' public
  Google Maps listing, verified 2026-09-03.
- **Review-tag data and counts** (trim ×6, cleanup ×3, affordability ×2,
  branches ×2, reliable ×2, thoroughness ×2, quality work ×2) — Google's
  own structured summary feature on the same listing, same date.
- **Hours**: only the single verified live-status fact ("Open · Closes 7
  PM," read 2026-09-03) is shown, attributed and dated — not a full
  schedule.
- "See us on Google" / directions links point to the real, exact source
  URL given for this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service tiles** (trimming & pruning, full tree removal, dead limb
  removal, cedar & brush clearing, storm cleanup, debris hauling &
  cleanup): generic examples of tree-service work, informed loosely by
  the review-tag vocabulary (trim, branches, cleanup) but not an
  itemized, owner-confirmed service menu. The page states this directly.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of Pete's Trees, its crew, or its equipment.
- **Reviews section**: only the real 5.0/9 rating and Google's own
  tag/count data are shown — no review text, no named customers appear on
  the page. The full review texts read during research (Ambyr Weidner,
  Randy Hernandez, Oma Chastka, Billy Sharp, Rosendo Trevino, Gabe Rio,
  Trisha Scanlin, K Jay Holmes, H Duffy) stayed internal to this README,
  per `client-demo-site` §1/§3.
- **About-section copy** ("no flashy marketing," "fair quote given up
  front," "yard left cleaner than expected"): original marketing language
  informed by the real review vocabulary above — not a direct quote, not
  an invented testimonial or statistic. A specific "10 years in business"
  claim was deliberately **left off the page**: it comes from one
  customer's personal usage history ("I have used his services over the
  last 10 years"), not a business-level tenure claim the way Dean
  Plumbing's MapQuest-sourced "30+ years" was — kept here as internal
  context only, not asserted as fact on the page.
- **Owner name**: "Pete" is used generically (matching the business name
  and the reviews' own references to "Pete and his crew"); no full name is
  asserted since the Facebook contact reference to "Pete Flores" was not
  independently re-verified in this pass.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced client-brand colors (forest
  green, amber/gold, cream, bark brown) and fonts (Fraunces, Karla,
  Caveat). **Zero Lewis Digital gold (`#C9A227` family), zero Lewis
  charcoal `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream
  brand (it's our sales tool) — per `client-demo-site` §4.
- Structurally and visually distinct from `demos/mikes-complete-tree-services/`
  (its direct sibling in this batch) — see the table above.

## Notes for outreach

- Nine straight 5-star reviews with real, specific language (fair pricing,
  cleanup, punctuality) is a strong, ready-to-use pitch point.
- No existing website means there's no migration friction — a clean
  first web presence.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
