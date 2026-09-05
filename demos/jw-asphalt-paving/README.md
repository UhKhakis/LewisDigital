# J&W Asphalt Paving — Demo Site

One-page demo website for **J&W Asphalt Paving** (Bryan, TX), a small,
service-area asphalt paving contractor. Built as part of round 2, batch 2 of
the trades outreach campaign (owner-authorized batch build — see
`business/BACKLOG.md` / the Lead's brief for this batch).

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Why this business

J&W Asphalt Paving is a real, active Bryan-area paving contractor with a
perfect (if short) Google rating and no website of its own — exactly the
gap this campaign targets.

## Research (sourced, dated)

**Source:** J&W Asphalt Paving's public Google Maps listing —
https://www.google.com/maps/search/J%26W+Asphalt+Paving+Bryan+TX —
verified live by the Builder on **2026-09-05**.

Confirmed on the listing:
- Business name: **J&W Asphalt Paving**
- Category: **Asphalt contractor**
- Phone: **(979) 900-8027**
- No public street address — the listing shows only "Bryan, TX," consistent
  with a service-area business that travels to the job rather than a
  storefront.
- Listed as **"Open 24 hours"** — read here as Google's default for a
  business with no specific hours set, rather than a literal claim of
  round-the-clock staffing; shown honestly on the page as "listed as open
  24 hours — call anytime," not embellished into anything more.
- **Google rating: 5.0 stars, 3 reviews.**
- **No website** listed — only "Add website" appears as an option, meaning
  Google has no site on file for this business.

**Review text read for design research** (internal only — not published as
page copy, per `client-demo-site` §1/§3):
- **Jessica Harrison** (1 review, ~5 years ago): "I had both my home and
  business done by this company, and I must tell you, I had no idea the
  trouble that I had with other companies trying to take advantage of my
  ignorance in the work I needed done and the cost. J&W Asphalt help me…"
  (review is truncated by Google's "…More" collapse; the visible portion is
  quoted here for internal research only).
- **Felicia Mendoza** (Local Guide, 19 reviews, ~5 years ago): "I highly
  recommend this company... they did a great job on my driveway.... I was
  Satisfied with everything and they made sure I was happy with everything
  before leaving my home…" — owner replied: "Thank you so much."
- **James Stone** (~1 year ago): star rating only, no review text.

**Vocabulary/theme takeaway:** the two written reviews both center on
*trust* — one explicitly contrasts J&W with other paving companies that
tried to take advantage of a customer's unfamiliarity with pricing/scope,
the other emphasizes the crew making sure she was satisfied before leaving.
That's the design seed: a plain-spoken, no-surprises, blue-collar-honest
voice — not a generic "asphalt contractor" template. The hero headline
("Fair pricing, laid down as straight as the driveway") and the About
section directly reflect this real evidence.

**Photos/social presence:** no Facebook, Instagram, or other social page was
found for this business during this research pass, and the Google listing
has no owner-uploaded photos to pull real colors from (only the "See
photos" placeholder). Per `client-demo-site` §1, when no real brand signal
exists, the palette is **honestly derived from the trade itself** rather
than invented as a generic "contractor" default — see Brand system below.

## Brand system (derived, not extracted — disclosed honestly)

| Element | Choice | Rationale |
|---|---|---|
| Primary dark | Asphalt near-black `#17161a` | The literal material this business lays — not a generic "dark UI" default |
| Accent | Hi-vis chartreuse `#d7e83c` | Traffic-safety yellow-green, the color of a paving crew's safety gear and fresh striping paint |
| Neutral | Warm concrete gray `#8a8680` / paper cream `#f4f2ea` | Concrete curb and aged paper, avoids the browns/oranges already heavily used across the gallery's other trades |
| Display font | Staatliches | Bold, stenciled, industrial — reads like painted signage, not a soft "friendly local business" script |
| Body font | Libre Franklin | Clean, no-nonsense workhorse sans, matches the plain-spoken review tone |
| Mono accent | Inconsolata | Used for stat labels/eyebrows — a measured, spec-sheet feel fitting a trade that quotes jobs by the square foot |
| Signature motif | Diagonal caution-stripe divider (`repeating-linear-gradient`, asphalt/chartreuse) | An original CSS pattern echoing road-marking/caution tape — never a copied logo or real striping design |

No fonts, colors, or motifs here are shared with any other demo currently in
`demos/` (checked against the ~47-site catalog before finalizing).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, stats, services, crew/about, Google rating/reviews, service area, contact, footer) |
| `styles.css` | All styling — client brand system (asphalt/chartreuse/concrete), see table above |
| `assets/hero-paving.jpg` | Hero photo — free-license stock photo of a street paving crew |
| `assets/paving-crew.jpg` | About-section photo — free-license stock photo of paving equipment/crew |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit (Lewis Digital brand, untouched) |

## Photos

- **Hero** (`assets/hero-paving.jpg`): [pexels.com/photo/36861831](https://www.pexels.com/photo/36861831/)
  ("Street Paving in Suburban Neighborhood"), photographer **Yelena
  HeyTam** — workers repaving a residential street on a sunny day, matching
  the residential-driveway/commercial-lot work this business actually does.
- **About section** (`assets/paving-crew.jpg`): [pexels.com/photo/34053335](https://www.pexels.com/photo/34053335/)
  ("Road Construction in Hood River, Oregon"), photographer **Tom
  Shamberger** — paving equipment and crew at work.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text/`figcaption` — not
photos of J&W's own crew, equipment, or job sites.

## What is REAL (verified & traceable)

- Business name: **J&W Asphalt Paving**
- Category: **Asphalt contractor**
- Town: **Bryan, TX** (service-area business, no public street address)
- Phone: **(979) 900-8027**
- **Google rating: 5.0 stars, 3 reviews** — verified 2026-09-05
- **No website** on file with Google
- Listed as **"Open 24 hours"** on the Google listing (shown with honest
  framing, see Research above)

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service categories** (residential driveways, commercial lots, patching &
  repair, sealcoating, overlay/resurfacing, grading & base work): generic
  examples of what an asphalt paving contractor typically offers — the page
  carries an explicit note to confirm exact scope by phone.
- **Hero photo** and **About-section photo**: free-license stock photos —
  not photos of J&W's real crew, equipment, or job sites. See Photos above.
- **Google reviews section**: only the real 5.0/3 rating is shown; review
  text/cards remain an explicit placeholder ("Google reviews will appear
  here once connected") — no real review text or quotes appear as page
  copy, per §1/§3's internal-research-only rule.
- **Copy voice** ("Fair pricing, laid down as straight as the driveway…"):
  original marketing language informed by the real review themes (fair
  pricing, no games, customer satisfaction before leaving) — not a quote,
  not an invented testimonial or statistic.
- **Palette**: honestly disclosed as *derived from the trade* (asphalt/hi-vis
  safety colors), not extracted from any real photo or social presence,
  since none exist for this business. See Brand system above.

## Brand-rule compliance (owner spot-check)

- Client-facing page uses ONLY client-brand colors (asphalt near-black,
  hi-vis chartreuse, concrete gray, paper cream — all disclosed above) and
  client-brand fonts (Staatliches + Libre Franklin + Inconsolata). **No
  Lewis gold (#C9A227 family), no Lewis charcoal #16130e, no Lewis cream
  #fbf8f1** anywhere in `index.html`/`styles.css`.
- Footer reads exactly **"Designed by Lewis Tech"**, hyperlinked to
  **https://lewistechservices.com/** — confirmed present in `index.html`.
  The words "Lewis Digital" do not appear anywhere on the client-facing
  page.
- `pitch-sheet.html` is the one exception and correctly carries Lewis
  Digital's own gold/charcoal/cream brand, untouched.
- **"See us on Google" link confirmed present and correct**: `index.html`
  contains `<a class="btn btn--line-dark" href="https://www.google.com/maps/search/J%26W+Asphalt+Paving+Bryan+TX" target="_blank" rel="noopener">See us on Google</a>`
  in the Reviews section, using the exact `source_url` given for this
  business.
- Layout is structurally distinct from every other demo in `demos/`: a
  full-bleed dark photo hero (not a split copy/photo panel), a diagonal
  caution-stripe section divider unique to this site, an asphalt/chartreuse
  palette shared with no other demo, and a dashed spec-sheet stat strip —
  checked against the ~47-site catalog, including the other paving/asphalt-
  adjacent trades already in the gallery (roofing, fencing, concrete/tile),
  none of which use this hero style, section order, or color pairing.

## Preview

```bash
cd demos/jw-asphalt-paving
python3 -m http.server 8541 --bind 127.0.0.1   # preview on localhost:8541
```

Do NOT use port 3000 — that serves the agency site.
