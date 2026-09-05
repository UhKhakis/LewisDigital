# Custom Classic Upholstery — Demo Site

One-page demo website for **Custom Classic Upholstery** (Bryan, TX), an
upholstery shop working across furniture, auto, motorcycle, and RV seating.
Built as part of round 2, batch 2 of the trades outreach campaign
(owner-authorized batch build — see the Lead's brief for this batch).

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Why this business

A real, actively-reviewed (31 reviews, recent activity within months) shop
with a genuinely broad service range and no website of its own.

## Research (sourced, dated)

**Source:** Custom Classic Upholstery's public Google Maps listing —
https://www.google.com/maps/search/Custom+Classic+Upholstery+Bryan+TX —
verified live by the Builder on **2026-09-05**.

Confirmed on the listing:
- Business name: **Custom Classic Upholstery**
- Category: **Upholstery shop**
- Address: **2114 E William Joel Bryan Pkwy, Bryan, TX 77802**
- Phone: **(979) 731-1902**
- **Google rating: 4.5 stars, 31 reviews.**
- **No website** listed with Google.
- Hours shown as "Closed &middot; Opens 8:30 AM Mon" &mdash; a specific
  opening time for Monday is published, treated on the page as a real,
  dated fact (with a call-to-confirm note for other days, since a full
  weekly schedule wasn't visible).

**Google's own review-topic tags**, shown directly on the listing (real,
sourced UI element — not our summary): "custom design" (2), "sofa" (3),
"motorcycle seat" (2), "attention to detail" (2), "quality of work" (3),
"leather" (2). These are reproduced on the page exactly as Google's own tag
counts, following the same convention already established on other demos
in this gallery (e.g. `1st-choice-steam-cleaning`) for real, sourced Google
UI data — distinct from inventing review text.

**Google's own inline review-snippet quotes**, shown on the listing (read
for internal design research only, per `client-demo-site` §1/§3 — not
republished as page copy beyond what's below):
- "Excellent service and attention to detail on what for me was a family
  heirloom."
- "They offered me the best price in town so I decided to work with them."
- "Staff & Management were nice and professional."

**Individual reviews read for design research:**
- **Jesus Macias** (5 reviews, ~2 months ago): "Very friendly, on time to
  meet, exellent work and fast turnaround time!!! I'm happy to have found
  and will recommend to anyone who has a custom project! They will do
  great!!!" &mdash; owner replied: "Thank you for your kind words."
- **Lori Legg** (5 reviews, ~10 months ago): "We had our RV sofa re-done by
  Custom Classic. He has plenty of fabrics and leathers to choose from, did
  a great job, we are very happy with the quality of workmanship and
  price…" &mdash; owner replied: "We are happy to be able to serve you. We
  are here if you need us again."
- **thisis marc** (11 reviews, ~7 months ago): "Reupholstered my leather
  seat in my show car!!!! Did a fantastic job with a great eye for
  detail! I have already recommended him to anither car friend." &mdash;
  owner replied: "We always try our best thank you."
- 28 additional reviews exist on the listing beyond these three but were not
  individually opened in this research pass; the 4.5/31 rating and the
  review-topic tags above already reflect their aggregate.

**Vocabulary/theme takeaway:** the record is remarkably consistent and
current (reviews from 2 months, 7 months, and 10 months ago, not just old
history): a real range of work (furniture, RV, show-car leather,
motorcycle), a fabric/leather selection customers specifically praise,
fast turnaround, fair pricing, and an owner who personally replies warmly to
nearly every review. That's the design seed &mdash; a craftsman-shop voice
built on real material variety and attention to detail, not a generic
"furniture upholstery" template.

**Photos/social presence:** no Facebook, Instagram, or independent website
was found for this business during this research pass. The Google listing
shows photo categories ("Inside," "By owner," "Street View") but individual
photos were not opened for pixel-level color extraction in this pass. Per
`client-demo-site` §1, the palette below is a deliberate design choice
grounded in the real review evidence (leather, fabric variety, craftsmanship)
rather than a category default — disclosed honestly as designer-judgment.

## Brand system (designer-judgment, grounded in review evidence — disclosed honestly)

| Element | Choice | Rationale |
|---|---|---|
| Primary | Deep aubergine/wine `#3a1f2e` | Evokes leather dye and rich upholstery fabric &mdash; distinct from the browns already used by `crc-cabinet`/`skyes-view-window-cleaning`/`ma-flooring` and the lighter burgundy already used by `capitol-custom-tile` |
| Accent | Brass/thread gold `#b8863a` | Evokes upholstery-tack brass and gold thread, a craftsman-shop material cue |
| Neutral | Canvas/muslin cream `#f4ede1` | Evokes the muslin backing fabric used under upholstery, distinct from every other cream in the gallery in hue |
| Display font | Playfair Display | Elegant serif, fitting a shop that reupholsters "family heirlooms" as much as show cars |
| Body font | Be Vietnam Pro | Clean, modern sans, keeps the page legible and current rather than overly antique |
| Mono accent | Fira Code | Used for the real Google review-tag chips and stat labels &mdash; a "job ticket/spec sheet" feel |
| Signature motif | Dashed stitch-line borders (on hero photo frame, service cards, area cards) | An original CSS pattern evoking hand-stitched upholstery seams &mdash; never a copied logo or real stitch pattern |

No fonts, colors, or motifs here are shared with any other demo currently in
`demos/` (checked against the ~47-site catalog before finalizing).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, real Google tag strip, services, craft/about, Google rating/reviews, visit-us, contact, footer) |
| `styles.css` | All styling — client brand system (aubergine/gold/cream), see table above |
| `assets/hero-leather-stitching.jpg` | Hero photo — free-license stock photo of hand-stitched leather upholstery |
| `assets/fabric-swatches.jpg` | Services-section photo — free-license stock photo of stacked fabric swatches |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit (Lewis Digital brand, untouched) |

## Photos

- **Hero** (`assets/hero-leather-stitching.jpg`): [pexels.com/photo/30871000](https://www.pexels.com/photo/30871000/)
  ("Skilled Artisan Hand Stitching Leather Upholstery"), photographer
  **shoreline vehicles** — a craftsman's hands hand-stitching leather
  upholstery, directly matching the "attention to detail"/"leather" themes
  reviewers cite.
- **Services section** (`assets/fabric-swatches.jpg`): [pexels.com/photo/30243795](https://www.pexels.com/photo/30243795/)
  ("Stack of Colorful Fabrics Displayed Horizontally"), photographer
  **Jos&eacute; Manuel Ram&iacute;rez Brenis** — a stack of fabric swatches,
  matching the "plenty of fabrics and leathers to choose from" review theme.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text/`figcaption` — not
photos of Custom Classic's own shop, staff, or fabric inventory.

## What is REAL (verified & traceable)

- Business name: **Custom Classic Upholstery**
- Category: **Upholstery shop**
- Address: **2114 E William Joel Bryan Pkwy, Bryan, TX 77802**
- Phone: **(979) 731-1902**
- **Google rating: 4.5 stars, 31 reviews** — verified 2026-09-05
- **No website** on file with Google
- **Real Google review-topic tags and counts**: custom design (2), sofa (3),
  motorcycle seat (2), attention to detail (2), quality of work (3), leather
  (2) — shown on the page exactly as Google's listing shows them
- Monday opening time (**8:30 AM**) as shown on the listing

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service categories** (furniture reupholstery, auto upholstery,
  motorcycle seats, RV/marine interiors, leather/vinyl repair, custom
  fabric/leather selection): generic examples of what an upholstery shop
  typically offers, informed by real review vocabulary — the page carries
  an explicit note to confirm exact scope by phone.
- **Hero photo** and **services-section photo**: free-license stock photos
  — not photos of Custom Classic's own shop, staff, or fabric inventory. See
  Photos above.
- **Google reviews section**: only the real 4.5/31 rating and the real
  Google-provided topic tags/counts are shown; full review text/cards
  remain an explicit placeholder ("Google reviews will appear here once
  connected") — no invented quotes appear as page copy, per §1/§3's
  internal-research-only rule for review *text* specifically.
- **Copy voice** ("Furniture, autos, and RVs, stitched with real attention
  to detail…"): original marketing language informed by real review themes
  (attention to detail, fabric/leather variety, fast turnaround) — not a
  direct quote, not an invented testimonial or statistic.
- **Hours beyond Monday's opening time**: shown as "call or message to
  confirm" placeholder for other days.
- **Palette**: disclosed as designer-judgment grounded in real review
  evidence, not a pixel-extraction result from a photo, since individual
  listing photos were not opened for color extraction in this pass. See
  Brand system above.

## Brand-rule compliance (owner spot-check)

- Client-facing page uses ONLY client-brand colors (aubergine, brass-gold,
  canvas cream — all disclosed above) and client-brand fonts (Playfair
  Display + Be Vietnam Pro + Fira Code). **No Lewis gold (#C9A227 family),
  no Lewis charcoal #16130e, no Lewis cream #fbf8f1** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly **"Designed by Lewis Tech"**, hyperlinked to
  **https://lewistechservices.com/** — confirmed present in `index.html`.
  The words "Lewis Digital" do not appear anywhere on the client-facing
  page.
- `pitch-sheet.html` is the one exception and correctly carries Lewis
  Digital's own gold/charcoal/cream brand, untouched.
- **"See us on Google" link confirmed present and correct**: `index.html`
  contains `<a class="btn btn--line-dark" href="https://www.google.com/maps/search/Custom+Classic+Upholstery+Bryan+TX" target="_blank" rel="noopener">See us on Google</a>`
  in the Reviews section, using the exact `source_url` given for this
  business.
- Layout is structurally distinct from every other demo in `demos/`: a real
  Google-tag strip band directly under the hero (unique to this site, using
  the same "real sourced tag" convention as `1st-choice-steam-cleaning` but
  in a different visual treatment), dashed stitch-line card/photo borders
  throughout, a mono font used for review-tag chips, and an
  aubergine/brass-gold palette shared with no other demo &mdash; checked
  against the ~47-site catalog.

## Preview

```bash
cd demos/custom-classic-upholstery
python3 -m http.server 8544 --bind 127.0.0.1   # preview on localhost:8544
```

Do NOT use port 3000 — that serves the agency site.
