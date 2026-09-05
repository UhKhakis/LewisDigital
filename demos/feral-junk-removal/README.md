# Feral Junk Removal and Hauling LLC — Demo Site (owner-authorized batch, 2026-09-05)

One-page demo website for **Feral Junk Removal and Hauling LLC** ((979)
286-6611 &middot; Junk removal &amp; hauling, 2006 Theresa Dr, Bryan, TX
77807). This is one of four demos in an owner-authorized batch build
(Danomite Pest Control, A&amp;A Handyman Service, Lopez Roofing) — the
normal "no demo until the client confirms interest" gate does not apply
here (Lead instruction, batch 3 of round 2, 2026-09-05).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-05)

Source: `https://www.google.com/maps/search/Feral+Junk+Removal+and+Hauling+LLC+Bryan+TX`

- **Address**: 2006 Theresa Dr, Bryan, TX 77807 — confirmed on the public
  listing.
- **Phone**: (979) 286-6611 — confirmed on the public listing.
- **Hours**: "Open 24 hours" — the listing's own stated hours.
- **No reviews.** The listing shows no star rating and no review count —
  a brand-new/thin listing. Shown honestly on the page rather than
  inventing a rating or testimonial.
- **One owner-posted photo** ("Exterior," tagged "By owner," roughly 17
  days old at the time of this research pass) — a generic exterior shot
  with no distinctive brand colors to extract; not used as a design source
  because it carries no useful color/material signal.
- Google's own category field on this listing currently shows a generic/
  mismatched label ("Housing development") rather than a junk-removal
  category — this reads as a listing-data quirk on Google's side, not a
  real fact about the business, so it is **not** shown anywhere on the
  page. The category used throughout (junk removal &amp; hauling) comes
  from the Lead's pre-verified lead sheet.
- No business website found.

## Design direction

**No review text, no photo-color evidence, and effectively a blank slate**
— the most honest brand seed available is the business's own name.
"Feral" (wild, untamed, no-nonsense) is reframed as a hauling promise:
the mess gets torn out, not politely negotiated with. Palette is a bold
near-black + a hazard/dumpster-orange + warm paper — deliberately not
another earth-tone rust/terracotta (that family is already carried by BCS
Roofing, All-American Septic, Castillo's Fence, Skye's View Window
Cleaning, and 1st Choice Steam Cleaning). Typography is Anton (ultra-bold
condensed display, blunt and industrial) + Rubik (body) + IBM Plex Mono
(tag/fact readouts) — none used elsewhere in `demos/`.

**Signature element:** irregular "torn-edge" section dividers built with
CSS `clip-path` — a jagged, ripped-paper line between the hero and the
services section, and again before the About section. It's literal to
"feral" (torn, not tidy) and to the subject matter (a torn-open junk
pile), and it's a genuinely different divider technique from anything
else in the gallery (All-Tex Roofing's zigzag is a symmetric roofline
shape, not an irregular tear).

## Structural distinctness vs. other demos

No other demo in `demos/` is a junk-removal business, so the main risk is
colliding with the *general* design language of the gallery:

| | Feral Junk Removal (this demo) |
|---|---|
| Hero | Dark near-black hero, angular-clipped photo frame, hazard-orange fact chips |
| Signature element | Irregular torn-edge `clip-path` dividers between sections |
| Palette | Near-black + hazard orange + warm paper (no other demo pairs black with true safety-orange as the primary accent) |
| Type pairing | Anton + Rubik + IBM Plex Mono — none used elsewhere in `demos/` |
| Reviews section | Honest "no reviews yet" placeholder card (dashed border, em-dash rating) rather than a populated rating card |
| Section order | Hero → What We Haul (services) → About (new-business honesty) → Reviews (honest placeholder) → Location/Hours → Contact |

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, about, reviews, location/hours, contact, footer) |
| `styles.css` | All styling — bespoke client brand (near-black/orange/paper, Anton/Rubik/IBM Plex Mono) |
| `assets/hero-hauling-couch.jpg` | Hero photo — free-license stock photo |
| `assets/services-team-haul.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos of general moving/hauling
work — **not** photos of Feral's own crew or an actual Feral job site:

- **Hero** (`assets/hero-hauling-couch.jpg`):
  [pexels.com/photo/7464712](https://www.pexels.com/photo/man-in-black-jacket-holding-black-and-red-stick-7464712/)
  ("A cheerful man carries a large couch across a sunny urban street during
  a move"), photographer **RDNE Stock project**.
- **Services section** (`assets/services-team-haul.jpg`):
  [pexels.com/photo/7464393](https://www.pexels.com/photo/close-up-shot-of-men-carrying-a-couch-7464393/)
  ("Two men carrying a green sofa on a city street"), photographer **RDNE
  Stock project**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page
credit lines.

## Preview

```bash
cd demos/feral-junk-removal
python -m http.server 8214 --bind 127.0.0.1   # preview on localhost:8214
```

Verified locally 2026-09-05: both images render correctly, torn-edge
dividers render correctly across widths, no layout overflow at
mobile/tablet/desktop widths, no console errors.

## What is REAL (verified &amp; traceable)

- Business name: **Feral Junk Removal and Hauling LLC**
- Phone: **(979) 286-6611**
- Address: **2006 Theresa Dr, Bryan, TX 77807**
- Category: **Junk removal &amp; hauling** (per the Lead's pre-verified lead
  sheet; the live Google listing's own category field shows a mismatched
  generic label, treated as a data quirk, not shown on-page).
- **Hours: "Open 24 hours"** — the business's own stated hours on the
  listing, verified 2026-09-05.
- **No reviews / no rating** — confirmed by their absence on the listing;
  shown honestly rather than invented.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service tiles** (furniture &amp; appliance removal, garage &amp; storage
  cleanouts, yard &amp; construction debris, estate &amp; move-out cleanouts,
  single-item pickup, same-day hauling): generic categories of junk-removal
  work, not an itemized, owner-confirmed service menu. The page states
  this directly.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of Feral's own crew or an actual job site.
- **Reviews section**: an honest "no reviews yet" placeholder — no star
  rating, no invented testimonial, no named customer.
- **About narrative** ("a brand-new hauling company," "the mess gets torn
  out, not politely negotiated with"): original marketing language derived
  from the business's own name and its status as a new listing — not a
  quote, not an inference about actual service quality.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced/derived client-brand colors
  (near-black, hazard orange, warm paper) and fonts (Anton, Rubik, IBM Plex
  Mono). **Zero Lewis Digital gold (`#C9A227` family), zero Lewis charcoal
  `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- No other demo in `demos/` is a junk-removal business; checked against
  the full gallery for general design-language collision (near-black +
  hazard-orange pairing, Anton/Rubik/IBM Plex Mono type trio, and the
  torn-edge divider motif are all unique — see table above).
- **"See us on Google" link confirmed present** in `index.html`'s Reviews
  section, pointing to the exact source URL:
  `https://www.google.com/maps/search/Feral+Junk+Removal+and+Hauling+LLC+Bryan+TX`.

## Notes for outreach

- This is a genuinely new business with no reviews yet — a clean first web
  presence is a strong pitch here (nothing to migrate, nothing to compete
  with).
- Being candid that the listing has no reviews yet (rather than hiding it)
  is itself a credibility signal worth keeping in outreach conversation.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
