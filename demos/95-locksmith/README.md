# 95 Locksmith LLC — Demo Site (owner-authorized batch, 2026-09-03)

One-page demo website for **95 Locksmith LLC** ((936) 647-7124 &middot;
Locksmith, serving College Station, TX &middot; mobile, no public street
address). This is one of five demos in an owner-authorized batch build
(Bush's Appliance Repair, Bucket of Suds Exterior Cleaning, Larry's Handyman
Service, and DC Custom Seamless Gutters) — the normal "no demo until the
client confirms interest" gate does not apply here (Lead instruction,
2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/95+Locksmith+936-647-7124`

- **5.0 stars, 9 reviews.** Reviews were read for tone/vocabulary research —
  quoted here for internal design research only, per `client-demo-site`
  §1/§3; none of this text appears on the page itself.
- Repeated language across reviews: "showed up quickly, got the job done
  without any issues... the price was fair" (EE), "on time, professional...
  hard to find people this reliable these days" (LATO), "Ben got into my
  house fast. Recommend him." (Cindy Garcia), "Ben got inside my car and
  made me a new key very fast" (from the search-results card preview,
  attributed reviewer not separately opened). The owner replies personally
  to every review ("We appreciate your support!"), signed as the business
  rather than a named account.
- Google's own review-tag summary (a structured feature of the listing
  itself, not an invented category): **reliability ×2, call ×2.** These
  exact tags/counts are shown on the page's Reviews section — Google's own
  aggregation, not a quote or summary we wrote.
- Listing shows **"Open 24 hours"** as the standing hours (not a
  point-in-time live status like most listings — this is the business's
  stated hours).
- Category: Locksmith. No public street address on the listing — Google's
  own comparison-card data for this business states "Areas served: College
  Station and nearby areas," confirming it's a mobile/service-area
  business, not an address the page should guess at.
- Owner name confirmed as **Ben** directly from review text (two reviewers
  address him by name: "Ben got into my house fast," "Ben got inside my car
  and made me a new key").
- Its own Texas LLC filed 2024 (per the Lead's pre-verified lead sheet,
  cross-referenced against Bizapedia business-registration data — not
  independently re-pulled in this pass). No business website found; the
  listing itself plus a Bizapedia registration record are the only public
  presence identified.
- A nearby competitor, Landry Locksmith (5.0★, 442 reviews, has its own
  website), appeared in the same search — noted for context only, not used
  anywhere on the page.

## Design direction

**24-hour, no-nonsense, personally-answered.** A one-person mobile
locksmith LLC that answers its own reviews and gets top marks specifically
for speed and reliability reads as "the person who shows up at 2 AM, not a
call center." The design leans into that: midnight indigo (a porch-light-
at-night read) + warm brass/amber (a key or porch bulb glow) + warm paper
white, with Sora (a confident geometric display face) for headings, Hanken
Grotesk for body copy, and JetBrains Mono for numbered service tiles and
"dispatch"-style data labels — a technical, always-on register distinct
from a daytime trade site.

**Signature element:** a sticky top **dispatch bar** ("Open 24 hours ·
mobile locksmith · College Station area" + a direct-dial link) that stays
visible while scrolling, plus a soft dot-grid pattern behind the hero copy
evoking a keypad without being a literal illustration.

## Structural distinctness vs. other demos

No other demo in `demos/` is a locksmith, so the main risk is colliding with
the *general* design language of the gallery — specifically Limitless
Diesel & Offroad, the other dark-background demo already built:

| | 95 Locksmith (this demo) | Limitless Diesel & Offroad (existing) |
|---|---|---|
| Hero | Text-forward, dot-grid keypad pattern background, photo docked bottom-right | Full photo-driven hero with heavy metal texture |
| Signature element | Sticky top "dispatch bar" (always-visible 24hr callout) | (Distinct — diesel-specific motifs, not shared) |
| Palette | Midnight indigo + warm brass-amber | Cool near-black + electric cyan |
| Type pairing | Sora + Hanken Grotesk + JetBrains Mono | Barlow Condensed + Barlow + Share Tech Mono |
| Section order | Dispatch bar → Hero → Services (numbered tiles) → About → Reviews → Service area/Hours → Contact | (Different trade-specific order) |

The sticky dispatch bar and numbered (not iconed) service tiles are unique
to this demo across the whole gallery.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (dispatch bar, hero, services, about, reviews, service area/hours, contact, footer) |
| `styles.css` | All styling — sourced client brand (indigo/amber/paper, Sora/Hanken Grotesk/JetBrains Mono) |
| `assets/hero-locksmith-car.jpg` | Hero photo — free-license stock photo |
| `assets/lock-detail.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos of general locksmith work —
**not** photos of 95 Locksmith, Ben, or his customers' vehicles:

- **Hero** (`assets/hero-locksmith-car.jpg`):
  [pexels.com/photo/17124739](https://www.pexels.com/photo/locksmith-lockpicking-a-car-17124739/)
  ("Locksmith Lockpicking a Car"), photographer **My Car Key Hero**.
- **Services section** (`assets/lock-detail.jpg`):
  [pexels.com/photo/17124737](https://www.pexels.com/photo/lockpick-in-car-17124737/)
  ("Lockpick in Car"), photographer **My Car Key Hero** — same
  photographer's series, chosen for visual consistency.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/95-locksmith
python -m http.server 8211 --bind 127.0.0.1   # preview on localhost:8211
```

Verified locally 2026-09-03: both images render correctly, sticky dispatch
bar and header stack correctly on scroll, no console errors, content
renders correctly at desktop and mobile widths.

## What is REAL (verified & traceable)

- Business name: **95 Locksmith LLC**
- Owner: **Ben** — confirmed by name from review text on the public Google
  Maps listing.
- Phone: **(936) 647-7124**
- Category: **Locksmith**
- **Google rating: 5.0 out of 5, from 9 reviews** — verified 2026-09-03.
- **Review-tag data and counts** (reliability ×2, call ×2) — Google's own
  structured summary feature on the same listing, same date.
- **Hours: "Open 24 hours"** — this is the business's own stated hours on
  the listing, not a live point-in-time status, verified 2026-09-03.
- **Service area**: "College Station and nearby areas" — Google's own
  "Areas served" data on the listing, not a guess.
- **No public street address** — confirmed by its absence on the listing;
  the page states "mobile service" rather than guessing or silently
  omitting the fact.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Texas LLC filed 2024**: from the Lead's pre-verified lead sheet
  (cross-referenced against a Bizapedia business-registration record), not
  independently re-pulled from a state filing database in this research
  pass — shown on the page as a stated fact per the Lead's brief, flagged
  here for transparency.
- **Service tiles** (car/home/business lockouts, re-keying & lock changes,
  key cutting & fobs, emergency calls): generic categories of locksmith
  work, informed by the review vocabulary (fast car and house lockouts) but
  not an itemized, owner-confirmed service menu. The page states this
  directly.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of 95 Locksmith, Ben, or his customers' property.
- **Reviews section**: only the real 5.0/9 rating and Google's own
  tag/count data are shown — no review text, no named customers appear on
  the page. The full review texts read during research (EE, LATO, Cindy
  Garcia, and others) stayed internal to this README, per
  `client-demo-site` §1/§3.
- **About-section narrative** ("no dispatch center or franchise fee,"
  "you're calling the person coming to open your door"): original marketing
  language informed by the real review vocabulary above — not a direct
  quote, not an invented testimonial.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced client-brand colors (midnight
  indigo, brass/amber, warm paper) and fonts (Sora, Hanken Grotesk,
  JetBrains Mono). **Zero Lewis Digital gold (`#C9A227` family), zero Lewis
  charcoal `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- No other demo in `demos/` is a locksmith; checked specifically against
  Limitless Diesel & Offroad (the gallery's other dark-background demo) for
  general design-language collision — see table above.

## Notes for outreach

- A perfect 5.0 rating with "reliability" and "call" as the top review
  tags is a strong pitch point for a business whose entire value
  proposition is showing up fast when someone's locked out.
- Being open 24 hours and mobile-only makes the AI Receptionist add-on a
  particularly natural upsell — Ben can't always answer mid-lockout.
- No existing website means there's no migration friction — a clean first
  web presence beyond the Google listing and a Bizapedia registration
  record.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
