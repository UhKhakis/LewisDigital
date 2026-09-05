# Amanda's Mobile Grooming — Demo Site

One-page demo website for **Amanda's Mobile Grooming** (Bryan, TX), a
one-owner mobile dog/cat grooming business. Built as part of round 2, batch
2 of the trades outreach campaign (owner-authorized batch build — see the
Lead's brief for this batch).

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Why this business

A real, long-running (since Feb 2011, 15+ years) mobile grooming business
with a genuine review history and no website of its own — Facebook is its
only online presence.

## Research (sourced, dated)

**Source:** Amanda's Mobile Grooming's public Google Maps listing —
https://www.google.com/maps/search/Amanda%27s+Mobile+Grooming+Bryan+TX —
verified live by the Builder on **2026-09-05**.

Confirmed on the listing:
- Business name: **Amanda's Mobile Grooming**
- Category: **Pet groomer**
- Address: **3011 S College Ave, Bryan, TX 77801**
- Phone: **(979) 820-3309**
- **Google rating: 4.2 stars, 30 reviews.**
- **No website** listed with Google — Facebook is the business's only known
  online presence (per the Lead's brief for this batch).
- No fixed hours published — the listing shows "Closed &middot; Opens 10:30
  AM" style dynamic status rather than a posted weekly schedule.

**Review text read for design research** (internal only — not published as
page copy, per `client-demo-site` §1/§3):
- **Luis Ruelas** (Local Guide, 19 reviews, ~7 years ago, negative): "I met
  Amanda was not impressed, not professional what so ever. For her to have
  an actual shop and not abide by the hours of operations makes me wonder
  how they stay in business…" &mdash; **owner's reply, in full character**:
  "First of all, I do not have business 'hours' displayed. I inform my
  clients of pick up and drop off. People that are pretty well established
  after NINE years. The Vet has no idea of my schedule. I may have had a
  prior engagement…" This reply (from ~7 years ago, meaning Amanda was
  citing ~9 years in business at that time) is the single richest piece of
  voice evidence found: direct, unapologetic, personally invested, proud of
  her tenure.
- **Casey Pagans** (7 reviews, ~8 years ago): "I've been taking my dog,
  Buck, to Amanda twice a year for about 3 years now. She accepts
  appointments with little notice, and works with my crazy student
  schedule. She's affordable and always done a great job, she listens to
  what I want…"
- **J S** (Local Guide, 68 reviews/53 photos, ~4 years ago): "I've used
  Amanda most of the 4 years I've owned my maltipoo. Always cuts well,
  handles my dog well, who is both a nervous wreck around groomers and has
  an attitude at times. I live 2 hrs away now, but when I'm gonna be in the
  area, I still…" &mdash; owner replied: "Thank you so very much! Nice to
  see y'all again!"
- 27 additional reviews exist on the listing beyond these three but were not
  individually opened in this research pass; the 4.2/30 rating already
  reflects their aggregate.

**Vocabulary/theme takeaway:** this is a genuinely mixed record (4.2, not a
perfect 5.0) and it's shown that way rather than smoothed over. The real
signal underneath the mixed rating is consistent: flexible scheduling
around irregular client schedules, no fixed shop hours (by design, not
neglect), a personal one-on-one touch with nervous/difficult dogs, and an
owner who is personally, vocally invested in a business she's run for 15+
years. That's the design seed &mdash; "one owner, one van, since 2011," a
personal/flexible tone rather than a generic "professional grooming salon"
template, and an honest presentation of the 4.2 rating rather than an
attempt to visually inflate it.

**Photos/social presence:** Facebook is the business's only known online
presence; it was not opened during this research pass (no login-free public
photo grid was confirmed available), so no real brand colors were extracted
from it. Per `client-demo-site` §1, the palette below is a deliberate
design choice grounded in the real review evidence (warmth, personal
one-on-one care, the "mobile"/van format) rather than a category default —
disclosed honestly as designer-judgment, not a pixel-extraction result.

## Brand system (designer-judgment, grounded in review evidence — disclosed honestly)

| Element | Choice | Rationale |
|---|---|---|
| Primary accent | Warm coral `#ef7f5b` | Personal warmth/approachability — matches the "one-on-one, no waiting room" tone from reviews |
| Secondary | Deep plum-navy `#2d2438` | Steadiness/established tenure (15+ years) &mdash; grounds the warm coral so the page doesn't read as generic "cute pet brand" pastel |
| Neutral | Soft cream `#faf3ea` | Warm, approachable background, distinct from the teal/blue tones already used by other pet/cleaning-adjacent demos |
| Display font | Fredoka | Rounded, warm, friendly &mdash; fits a personal, van-based service, not a clinical "pet spa" |
| Body font | Epilogue | Clean modern sans, keeps the page from tipping into overly cutesy |
| Mono accent | Cousine | Used sparingly for eyebrows/labels &mdash; a small structured counterpoint to the rounded display font |
| Signature motif | Dotted "route" divider bar + blob-shaped hero photo frame | Original CSS shapes evoking a van's route/stops and a soft, non-rigid silhouette &mdash; never a copied logo or illustration |

No fonts, colors, or motifs here are shared with any other demo currently in
`demos/` (checked against the ~47-site catalog before finalizing).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, stats, services, about/"Meet Amanda", Google rating/reviews, service area, contact, footer) |
| `styles.css` | All styling — client brand system (coral/plum/cream), see table above |
| `assets/hero-grooming.jpg` | Hero photo — free-license stock photo of a groomer trimming a dog |
| `assets/dog-bath.jpg` | Services-section photo — free-license stock photo of a dog being bathed |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit (Lewis Digital brand, untouched) |

## Photos

- **Hero** (`assets/hero-grooming.jpg`): [pexels.com/photo/19145894](https://www.pexels.com/photo/19145894/)
  ("Dog Being Brushed"), photographer **Goochie Poochie Grooming** — a
  professional groomer trimming a large dog's fur, no faces, no visible
  branding/signage.
- **Services section** (`assets/dog-bath.jpg`): [pexels.com/photo/6131161](https://www.pexels.com/photo/6131161/)
  ("Close-up Photo of Bathing of Dog"), photographer **Tima Miroshnichenko**
  — a small dog being showered during grooming, matching the bath/wash side
  of the service.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text/`figcaption` — not
photos of Amanda, her van, or her actual clients' pets.

## What is REAL (verified & traceable)

- Business name: **Amanda's Mobile Grooming**
- Category: **Pet groomer**
- Address: **3011 S College Ave, Bryan, TX 77801**
- Phone: **(979) 820-3309**
- **Google rating: 4.2 stars, 30 reviews** — verified 2026-09-05
- **No website** on file with Google (Facebook only)
- **Operating since February 2011** (per the Lead's brief for this batch;
  consistent with the owner's own ~7-year-old review reply citing "NINE
  years" at that time)

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service categories** (full-service bath & groom, breed-specific cuts,
  nail trim & ear cleaning, de-shedding, cat grooming, nervous/senior pets):
  generic examples of what a mobile groomer typically offers — the page
  carries an explicit note to confirm exact services by phone.
- **Hero photo** and **services-section photo**: free-license stock photos
  — not photos of Amanda, her van, or her real clients' pets. See Photos
  above.
- **Google reviews section**: only the real 4.2/30 rating is shown; review
  text/cards remain an explicit placeholder ("Google reviews will appear
  here once connected") — no real review text or quotes appear as page
  copy, per §1/§3's internal-research-only rule.
- **Copy voice** ("Amanda comes to your driveway, not the other way
  around…"): original marketing language informed by the real review themes
  (mobile format, flexible scheduling, personal touch) — not a quote, not an
  invented testimonial or statistic.
- **Hours**: shown as "call or message for hours" placeholder, since no
  fixed weekly schedule is published — consistent with the owner's own
  reply explaining she coordinates pickup/drop-off directly rather than
  posting hours.
- **Palette**: disclosed as designer-judgment grounded in real review
  evidence, not a pixel-extraction result from a photo, since Amanda's
  Facebook photos were not opened during this research pass. See Brand
  system above.

## Brand-rule compliance (owner spot-check)

- Client-facing page uses ONLY client-brand colors (coral, plum-navy, cream
  — all disclosed above) and client-brand fonts (Fredoka + Epilogue +
  Cousine). **No Lewis gold (#C9A227 family), no Lewis charcoal #16130e, no
  Lewis cream #fbf8f1** anywhere in `index.html`/`styles.css`.
- Footer reads exactly **"Designed by Lewis Tech"**, hyperlinked to
  **https://lewistechservices.com/** — confirmed present in `index.html`.
  The words "Lewis Digital" do not appear anywhere on the client-facing
  page.
- `pitch-sheet.html` is the one exception and correctly carries Lewis
  Digital's own gold/charcoal/cream brand, untouched.
- **"See us on Google" link confirmed present and correct**: `index.html`
  contains `<a class="btn btn--line-dark" href="https://www.google.com/maps/search/Amanda%27s+Mobile+Grooming+Bryan+TX" target="_blank" rel="noopener">See us on Google</a>`
  in the Reviews section, using the exact `source_url` given for this
  business.
- Layout is structurally distinct from every other demo in `demos/`: a
  blob-shaped (organic, non-rectangular) hero photo frame, a dotted "route"
  divider motif unique to this site, a coral/plum palette shared with no
  other demo, and a rounded/pill card system throughout (no sharp corners)
  &mdash; checked against the ~47-site catalog. This is also the first
  pet-care demo in the gallery, so there's no same-trade sibling to
  differentiate against yet.

## Preview

```bash
cd demos/amandas-mobile-grooming
python3 -m http.server 8542 --bind 127.0.0.1   # preview on localhost:8542
```

Do NOT use port 3000 — that serves the agency site.
