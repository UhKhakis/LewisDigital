# Danomite Pest Control — Demo Site (owner-authorized batch, 2026-09-05)

One-page demo website for **Danomite Pest Control** ((979) 696-2427
&middot; Pest control, 2106 Spring Creek, College Station, TX 77845). This
is one of four demos in an owner-authorized batch build (Feral Junk
Removal and Hauling LLC, A&amp;A Handyman Service, Lopez Roofing) — the
normal "no demo until the client confirms interest" gate does not apply
here (Lead instruction, batch 3 of round 2, 2026-09-05).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-05)

Source: `https://www.google.com/maps/search/Danomite+Pest+Control+College+Station+TX`

- **5.0 stars, 10 reviews.** All review text visible without further
  pagination was read for tone/vocabulary research — quoted here for
  internal design research only, per `client-demo-site` §1/§3; none of the
  full quotes below (beyond the two short Google-surfaced phrases) appear
  on the page itself.
- Repeated language across reviews: "His service is impeccable, and he
  takes the time to get to know his customers! His work is diligent,
  efficient, wonderful price point, and he always shows up" (GPI College
  Station, a property manager using Dan across multiple rental
  properties); "Dan is professional and fast with pest control. Highly
  recommend him for all of your pest needs" (Billy Allen, Local Guide);
  "Dan is such a nice person as well as efficient and quick! ... he is
  affordable and explains the process and aftermath of the service very
  well" (JD, re: an urgent flea treatment for a rental property).
- Google's own review summary surfaces two short phrases directly on the
  listing: **"Hands down the best!"** and **"Highly recommend him for all
  of your pest needs."** These exact Google-surfaced phrases are shown on
  the page's Reviews section — Google's own excerpting, not our summary.
- Every reviewer refers to the owner by first name ("Dan") — a
  relationship-based, personal-service business, not a call-center
  franchise.
- Category: Pest control service. Address and phone confirmed on the
  public listing. Hours show the business open with a roughly 7 PM close.
- Owner/president: **Dan Schumacher**, in business since 2000 (26 years),
  BBB accredited — per the Lead's pre-verified lead sheet, consistent with
  the personal, long-tenure tone in the reviews above.
- No business website found.

## Design direction

**Personal, trustworthy, explains-the-work.** The real reviews don't
describe an aggressive "kill the bugs" brand — they describe reliability,
fair pricing, and a technician who explains what he did and why. The
design leans into that: deep pine/forest green (a calmer, "problem
handled" register than hazard red/black) + warm brass/gold (nodding to the
BBB-accredited, 26-years-in-business trust signal) + cream, with Spectral
(a warm serif that reads "established," not corporate) for headings,
Figtree for body copy, and JetBrains Mono for the stat readouts (26 years,
10 reviews, BBB badge).

**Signature element:** a **"Protected Perimeter" diagram** — an
illustrative house outline with a dashed perimeter line and labeled
treatment zones (foundation, eaves, entry points), directly reflecting
JD's real review language that Dan "explains the process and aftermath of
the service very well." Explicitly captioned as illustrative, not an exact
treatment plan, so it never reads as a fabricated technical claim.

## Structural distinctness vs. other demos

No other demo in `demos/` is a pest-control business, so the main risk is
colliding with the *general* design language of the gallery:

| | Danomite Pest Control (this demo) |
|---|---|
| Hero | Warm split hero (copy left, rounded photo right), stats strip directly below (26 years / 5.0★ / BBB / Dan by name) |
| Signature element | Illustrative "Protected Perimeter" house diagram with labeled treatment zones — unique across the gallery |
| Palette | Deep pine green + brass/gold + cream (no other demo pairs forest green with warm brass/gold as its two primary hues) |
| Type pairing | Spectral + Figtree + JetBrains Mono — none used elsewhere in `demos/` |
| Reviews section | Google's own two surfaced phrases shown as short pull-quotes, not a tag-count cloud or star-only card |

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, stats, services, perimeter diagram, reviews, location/hours, contact, footer) |
| `styles.css` | All styling — sourced client brand (pine/gold/cream, Spectral/Figtree/JetBrains Mono) |
| `assets/hero-yard-treatment.jpg` | Hero photo — free-license stock photo |
| `assets/services-house-exterior.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos of general pest-control
work — **not** photos of Dan or Danomite's own jobs:

- **Hero** (`assets/hero-yard-treatment.jpg`):
  [pexels.com/photo/19789837](https://www.pexels.com/photo/pest-exterminator-fogging-the-yard-19789837/)
  ("Pest Exterminator Fogging the Yard"), photographer **Garda Pest
  Control Indonesia**.
- **Services section** (`assets/services-house-exterior.jpg`):
  [pexels.com/photo/19789841](https://www.pexels.com/photo/smoke-used-for-pest-control-19789841/)
  ("Smoke Used for Pest Control"), photographer **Garda Pest Control
  Indonesia**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page
credit lines.

## Preview

```bash
cd demos/danomite-pest-control
python -m http.server 8215 --bind 127.0.0.1   # preview on localhost:8215
```

Verified locally 2026-09-05: both images render correctly, the perimeter
diagram SVG scales correctly at mobile/tablet/desktop widths, no console
errors.

## What is REAL (verified &amp; traceable)

- Business name: **Danomite Pest Control**
- Owner/president: **Dan Schumacher**
- Phone: **(979) 696-2427**
- Address: **2106 Spring Creek, College Station, TX 77845**
- Category: **Pest control service**
- **Google rating: 5.0 out of 5, from 10 reviews** — verified 2026-09-05.
- **Google-surfaced review phrases**: "Hands down the best!" and "Highly
  recommend him for all of your pest needs" — both shown directly on the
  public listing's own review summary, not written by us.
- **In business since 2000 (26 years), BBB accredited** — per the Lead's
  pre-verified lead sheet.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service tiles** (general pest control, rental &amp; property-manager
  service, flea treatment, perimeter &amp; entry-point treatment, one-time
  &amp; recurring service, same-week scheduling): generic categories
  informed by real review content (property-manager customer, urgent flea
  treatment) but not an itemized, owner-confirmed service menu. The page
  states this directly.
- **The "Protected Perimeter" diagram**: an original illustrative graphic
  reflecting real reviewer language about Dan explaining the process
  clearly — explicitly captioned as illustrative, not an exact treatment
  plan or a real floor plan.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of Dan or Danomite's actual jobs.
- **Reviews section**: only Google's own two surfaced short phrases and
  the real 5.0/5 rating are shown — the fuller quotes read during research
  (GPI College Station, Billy Allen, JD) stayed internal to this README,
  per `client-demo-site` §1/§3.
- **Hero/about narrative** ("Dan shows up, treats it right, and explains
  what he did"): original marketing language informed by the real review
  vocabulary above — not a direct quote, not an invented testimonial.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced client-brand colors (pine
  green, brass/gold, cream) and fonts (Spectral, Figtree, JetBrains Mono).
  **Zero Lewis Digital gold (`#C9A227` family), zero Lewis charcoal
  `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- No other demo in `demos/` is a pest-control business; checked against
  the full gallery for general design-language collision (pine/brass
  pairing, Spectral/Figtree/JetBrains Mono type trio, and the perimeter-
  diagram signature element are all unique — see table above).
- **"See us on Google" link confirmed present** in `index.html`'s Reviews
  section, pointing to the exact source URL:
  `https://www.google.com/maps/search/Danomite+Pest+Control+College+Station+TX`.

## Notes for outreach

- The BBB-accredited, 26-year track record and the perfect 5.0 rating are
  genuinely strong signals worth leading with — this isn't a thin or new
  listing.
- Every reviewer uses Dan's first name and describes a personal,
  trustworthy relationship — worth echoing in outreach conversation.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
