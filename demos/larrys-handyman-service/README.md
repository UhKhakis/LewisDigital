# Larry's Handyman Service — Demo Site (owner-authorized batch, 2026-09-03)

One-page demo website for **Larry's Handyman Service** ((979) 571-8059
&middot; Handyman/Handywoman/Handyperson, serving College Station, TX 77845
&middot; no public street address). This is one of five demos in an
owner-authorized batch build (Bush's Appliance Repair, 95 Locksmith LLC,
Bucket of Suds Exterior Cleaning, and DC Custom Seamless Gutters) — the
normal "no demo until the client confirms interest" gate does not apply
here (Lead instruction, 2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/Larrys+Handyman+Service+979-571-8059`

- **5.0 stars, 5 reviews.** All reviews visible without further pagination
  were read for tone/vocabulary research — quoted here for internal design
  research only, per `client-demo-site` §1/§3; none of this text appears on
  the page itself.
- Repeated language across reviews: "We found Larry through Google
  reviews... I texted him and he honestly said he would first come take a
  look" (정빅토리아, re: home-inspection punch-list items), "Larry did a great
  job doing our Bestier Electric fireplace tv stand with LED. He also
  installed our shower rods and blinds. Very affordable and amazing work"
  (Nicole Artuz), "Texted Larry early in the morning and by noon he had
  fixed a broken door frame in my apartment. Quick and good quality work"
  (Isaias Reynoso).
- Google's own review-tag summary (a structured feature of the listing
  itself, not an invented category): **work quality ×3.** This exact
  tag/count is shown on the page's Reviews section — Google's own
  aggregation, not a quote or summary we wrote.
- Listing shows **"LGBTQ+ friendly"** as a Google-verified business
  attribute (a structured badge on the listing itself, not something we
  added or inferred) — shown honestly on the page as a real, sourced fact.
- Listing shows **"Open 24 hours"** as the standing hours.
- Category: Handyman/Handywoman/Handyperson. No public street address on
  the listing — the page shows "College Station, TX 77845 and nearby"
  rather than a guessed address.
- No business website found; a Yelp directory listing exists per the
  Lead's lead sheet (not independently re-opened in this pass).

## Design direction

**Approachable, text-first, honest before the quote.** Two of the five
reviews specifically describe Larry texting back fast and being upfront
about what a job needs before naming a price — a "text a photo, get a
straight answer" character rather than a formal contractor pitch. The
design leans into that: denim-blue (a toolbelt/work-shirt read) + a warm
coral accent + cream, with Quicksand (a soft, friendly rounded display
face) for headings, Nunito Sans for body copy, and Kalam (a handwriting
face) for the eyebrow labels — a more casual, personal register than a
formal trade site.

**Signature element:** a mocked-up **text-message exchange** ("Text Larry"
section) styled as chat bubbles, written to match the real communication
pattern described across two separate reviews (texted early, photo sent,
seen and answered same day) — clearly captioned as a representative
example, not an actual saved conversation, so it never reads as an
invented testimonial.

## Structural distinctness vs. other demos

No other demo in `demos/` is a handyman business, so the main risk is
colliding with the *general* design language of the gallery:

| | Larry's Handyman Service (this demo) |
|---|---|
| Hero | Casual side-by-side split (chip row + copy left, boxed photo right) — no full-bleed photo, no diagonal clip |
| Signature element | Mocked chat-bubble text exchange, captioned as representative (not a literal transcript) |
| Palette | Denim blue + coral + cream (no other demo in `demos/` uses this blue/coral combination; deliberately avoids the orange/rust/gold family already used by BCS Roofing, Mike's Tree Services, Castillo's Fence, Bernado's Landscaping, and MK Fencing) |
| Type pairing | Quicksand + Nunito Sans + Kalam — none used elsewhere in `demos/` |
| Section order | Hero → Services → Text Larry (chat mockup) → Reviews → Service area/Hours → Contact |

The chat-bubble section is unique to this demo across the whole gallery —
no other demo mocks up a text conversation.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, text-larry chat mockup, reviews, service area/hours, contact, footer) |
| `styles.css` | All styling — sourced client brand (denim/coral/cream, Quicksand/Nunito Sans/Kalam) |
| `assets/hero-outdoor-install.jpg` | Hero photo — free-license stock photo |
| `assets/interior-repair.jpg` | Services-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos of general handyman work —
**not** photos of Larry or his actual jobs:

- **Hero** (`assets/hero-outdoor-install.jpg`):
  [pexels.com/photo/38524262](https://www.pexels.com/photo/handyman-installing-outdoor-lighting-fixture-under-roof-38524262/)
  ("Handyman Installing Outdoor Lighting Fixture Under Roof"), photographer
  **Bulat843**.
- **Services section** (`assets/interior-repair.jpg`):
  [pexels.com/photo/5767799](https://www.pexels.com/photo/male-builder-with-instrument-in-apartment-5767799/)
  ("Male Builder with Instrument in Apartment"), photographer **Ksenia
  Chernaya**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text and on-page credit
lines.

## Preview

```bash
cd demos/larrys-handyman-service
python -m http.server 8213 --bind 127.0.0.1   # preview on localhost:8213
```

Verified locally 2026-09-03: both images render correctly, chat-bubble
layout stacks correctly on mobile, no console errors.

## What is REAL (verified & traceable)

- Business name: **Larry's Handyman Service**
- Owner: **Larry** (first name only — no surname appears on the public
  listing or in any review text read).
- Phone: **(979) 571-8059**
- Category: **Handyman/Handywoman/Handyperson**
- Service area: **College Station, TX 77845** (per the Lead's lead sheet,
  matching the listing's own location context).
- **Google rating: 5.0 out of 5, from 5 reviews** — verified 2026-09-03.
- **Review-tag data**: work quality ×3 — Google's own structured summary
  feature on the same listing, same date.
- **"LGBTQ+ friendly"** — a Google-verified business attribute badge shown
  directly on the public listing, not an inference.
- **Hours: "Open 24 hours"** — the business's own stated hours on the
  listing, verified 2026-09-03.
- **No public street address** — confirmed by its absence on the listing;
  the page states the general service area rather than guessing.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **"Est. 2019"**: from the Lead's pre-verified lead sheet, not
  independently re-confirmed against a second public source in this
  research pass — shown on the page as a stated fact per the Lead's brief.
- **Service tiles** (furniture & TV mounting, fixture installs, door &
  frame repair, home inspection fixes, small electrical & plumbing
  touch-ups, general repairs): generic categories of handyman work,
  directly informed by the real review content (TV stand, shower rods,
  blinds, door frame, home-inspection punch list) but not an itemized,
  owner-confirmed service menu. The page states this directly.
- **The "Text Larry" chat exchange**: an original mockup written to match
  the real communication pattern described in two separate reviews (texted
  early, sent a photo, quick honest response) — explicitly captioned on the
  page as "a representative exchange... not an actual saved conversation,"
  never presented as a real transcript.
- **Both hero and services-section photos**: real stock photos, explicitly
  not photos of Larry or his actual jobs.
- **Reviews section**: only the real 5.0/5 rating and Google's own
  tag/count data are shown — no review text, no named customers appear on
  the page. The full review texts read during research (정빅토리아, Nicole
  Artuz, Isaias Reynoso, and the 2 additional reviews behind "More reviews")
  stayed internal to this README, per `client-demo-site` §1/§3.
- **About/services narrative** ("text a photo, get a straight answer,"
  "honest before the quote"): original marketing language informed by the
  real review vocabulary above — not a direct quote, not an invented
  testimonial.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced client-brand colors (denim
  blue, coral, cream) and fonts (Quicksand, Nunito Sans, Kalam). **Zero
  Lewis Digital gold (`#C9A227` family), zero Lewis charcoal `#16130e`,
  zero Lewis cream `#fbf8f1`** anywhere in `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- No other demo in `demos/` is a handyman business; checked against the
  full gallery for general design-language collision (palette avoids the
  orange/rust/gold family used by five other demos; type pairing and chat
  mockup are unique) — see table above.

## Notes for outreach

- The "LGBTQ+ friendly" verified attribute and the honest, texted-first
  communication style reviewers describe are distinctive, real signals
  worth leading with in outreach — this isn't a generic trade pitch.
- No existing website means there's no migration friction — a clean first
  web presence beyond a Yelp directory listing.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
