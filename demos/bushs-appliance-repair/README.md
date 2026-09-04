# Bush's Appliance Repair — Demo Site (owner-authorized batch, 2026-09-03)

One-page demo website for **Bush's Appliance Repair** (Norman Bush &middot;
(979) 779-1332 &middot; Appliance repair, serving Bryan, TX &middot; mobile,
no public street address). This is one of five demos in an owner-authorized
batch build (95 Locksmith, Bucket of Suds Exterior Cleaning, Larry's Handyman
Service, and DC Custom Seamless Gutters) — the normal "no demo until the
client confirms interest" gate does not apply here (Lead instruction,
2026-09-03).

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Research (Google Maps, live via Chrome browser, verified 2026-09-03)

Source: `https://www.google.com/maps/search/Bush%27s+Appliance+Repair+Bryan+TX`

- **5.0 stars, 9 reviews.** All 9 reviews were read for tone/vocabulary
  research (8 full texts loaded, 1 truncated by the listing's own "load
  more") — quoted here for internal design research only, per
  `client-demo-site` §1/§3; none of this text appears on the page itself.
- Repeated language across reviews: "very experienced and fair in his
  pricing" (Gary Dewbre), "didn't even wanna charge me! 5 star biz!" (E
  Fogghb), "great customer service... professionalism and kindness" (Christina
  LeBlanc), "very responsive, prompt" (Robin Arnold, who has known Norman's
  family "since I was a kid"), "knows how to repair older appliances rather
  than just telling me to buy something new... another company told me I need
  to replace my fridge" (Amina Alikhan), "reasonable price" (Kerry Beck),
  "good, prompt, and friendly service... offer ideas on things to check that
  might solve the problem without needing their services" (Keith Josey).
- Google's own review-tag summary (a structured feature of the listing
  itself, not an invented category): **fridge ×3, fair pricing ×2,
  refrigerator repair ×2.** These exact tags/counts are shown on the page's
  Reviews section — Google's own aggregation, not a quote or summary we
  wrote.
- Live status read "Closed · Opens 8 AM Fri" when checked.
- Category: Appliance repair service. No public street address on the
  listing — this reads as a mobile, appointment-based business, so the page
  shows "Bryan, TX, mobile service" rather than a guessed address.
- Owner name confirmed as **Norman ("Norm") Bush** directly from review text
  (multiple reviewers address or refer to him by name). Established-2009 and
  30-years-in-trade facts are from the Lead's pre-verified lead sheet, not
  independently re-verified in this pass, but consistent with the tenure
  implied by the reviews (one customer: "have known Norman and his family
  since I was a kid").
- No business website found; a Facebook page (300+ followers, per lead
  sheet) exists but was not independently re-confirmed in this pass — the
  page's "Find us on Facebook" link points to the general Facebook site
  rather than a guessed exact page URL, since no exact Facebook URL was
  verified.

## Design direction

**Old-school, one-man, honest repairman.** Thirty years in the trade and a
perfect 5.0 record built entirely on repeat customers and a refusal to
oversell — several reviews explicitly praise Norm for *not* pushing a
replacement he didn't have to. The design leans into a vintage appliance
service-tag look: oxblood enamel red (the color of an old stove or washer
shell) + brass fittings + workshop cream, with Arvo (a sturdy slab serif) for
display type, Figtree for body copy, and Courier Prime (a typewriter
monospace) for "service ticket" style labels and data — evoking the actual
paper repair tags a technician like Norm would have written by hand.

**Signature element:** a floating "SERVICE TICKET No. 2009" card overlapping
the hero photo — styled like a tag tied to an appliance, showing Norm's real
verified facts (tech name, years in trade, rating, service area) in a
typewriter-ticket format instead of a generic stat block.

## Structural distinctness vs. other demos

No other demo in `demos/` is in the appliance-repair trade, so the main risk
is colliding with the *general* design language of the gallery rather than a
same-trade sibling:

| | Bush's Appliance Repair (this demo) |
|---|---|
| Hero | Diagonal clip-path split (dark left copy panel / angled photo right) with a floating "service ticket" card overlapping the photo edge |
| Signature element | Typewriter-style "SERVICE TICKET" tag card (Courier Prime) |
| Palette | Oxblood red + brass/gold + workshop cream (no other demo uses oxblood; distinct from Static Heating's teal+orange and MK Fencing/Bernado's/Castillo's warm charcoal+gold/clay combinations) |
| Type pairing | Arvo (slab serif) + Figtree (sans) + Courier Prime (mono) — none used elsewhere in `demos/` |
| Section order | Hero → Services → About (fact card) → Reviews (tag cloud) → Service area/Hours → Contact |

No full-bleed centered hero (Pete's Trees), no boxed split-grid hero (MK
Fencing, Mike's Tree Services) — the angled clip-path panel and floating
ticket card are unique to this demo.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, about, reviews, service area/hours, contact, footer) |
| `styles.css` | All styling — sourced client brand (oxblood/brass/cream, Arvo/Figtree/Courier Prime) |
| `assets/hero-appliance-repair.jpg` | Hero photo — free-license stock photo |
| `assets/workbench-repair.jpg` | Supporting photo — free-license stock photo (downloaded, currently unused on the page; reserved for a future services-section photo) |
| `pitch-sheet.html` | Printable Lewis-Digital-branded pitch sheet (our sales tool — gold/charcoal/cream, untouched) |

## Photos

Both are real, free-license Pexels stock photos of general appliance-repair
work — **not** photos of Norman Bush, his tools, or his customers' homes:

- **Hero** (`assets/hero-appliance-repair.jpg`):
  [pexels.com/photo/34734504](https://www.pexels.com/photo/technician-repairing-home-appliance-indoors-34734504/)
  ("Technician Repairing Home Appliance Indoors"), photographer **Bulat843**.
- **Reserved/unused** (`assets/workbench-repair.jpg`):
  [pexels.com/photo/37492288](https://www.pexels.com/photo/senior-technician-repairing-home-appliance-part-37492288/)
  ("Senior Technician Repairing Home Appliance Part"), photographer
  **Bulat843** — downloaded for a possible future services photo but not
  placed on the page in this pass.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and the
hero is labeled as an illustrative stock photo in its `alt` text and on-page
credit line.

## Preview

```bash
cd demos/bushs-appliance-repair
python -m http.server 8210 --bind 127.0.0.1   # preview on localhost:8210
```

Verified locally 2026-09-03: hero image renders correctly, no console
errors, content renders correctly at desktop and mobile widths (clip-path
hero collapses to a stacked layout under 900px).

## What is REAL (verified & traceable)

- Business name: **Bush's Appliance Repair**
- Owner: **Norman ("Norm") Bush** — confirmed by name from multiple review
  texts on the public Google Maps listing.
- Phone: **(979) 779-1332**
- Category: **Appliance repair service**
- **Google rating: 5.0 out of 5, from 9 reviews** — verified 2026-09-03.
- **Review-tag data and counts** (fridge ×3, fair pricing ×2, refrigerator
  repair ×2) — Google's own structured summary feature on the same listing,
  same date.
- **Hours**: only the single verified live-status fact ("Closed · Opens 8 AM
  Fri," read 2026-09-03) is shown, attributed and dated — not a full
  schedule.
- **No public street address** — the listing shows none, so the page states
  "mobile service, by appointment" rather than guessing or omitting the
  fact silently.
- "See us on Google" link points to the real, exact source URL given for
  this business.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Established 2009 / 30 years in the trade**: from the Lead's pre-verified
  lead sheet, not independently re-confirmed against a second public source
  in this research pass — shown on the page as stated facts per the Lead's
  brief, but flagged here for transparency.
- **Service tiles** (refrigerators & freezers, washers & dryers,
  dishwashers, ovens/ranges/stovetops, ice makers, older/hard-to-find
  models): generic examples of appliance-repair work, informed by the
  review-tag vocabulary (fridge, refrigerator repair) but not an itemized,
  owner-confirmed service menu. The page states this directly.
- **Hero and reserved workbench photos**: real stock photos, explicitly not
  photos of Norman Bush, his tools, or his customers' appliances.
- **Reviews section**: only the real 5.0/9 rating and Google's own
  tag/count data are shown — no review text, no named customers appear on
  the page. The full review texts read during research (Gary Dewbre, E
  Fogghb, Christina LeBlanc, Robin Arnold, Amina Alikhan, Kerry Beck, Keith
  Josey, Raymond Ramirez, Dana D.) stayed internal to this README, per
  `client-demo-site` §1/§3.
- **About-section narrative** ("no call center, no dispatch fee," "no
  interest in selling a replacement he didn't have to"): original marketing
  language informed by real review vocabulary above — not a direct quote,
  not an invented testimonial.
- **Facebook link**: points to the general facebook.com site, not a
  specific page URL, since no exact Facebook page URL was independently
  verified in this pass (a 300+-follower page is referenced in the Lead's
  lead sheet but its URL was not confirmed).

## Brand-rule compliance

- Client-facing page uses ONLY the sourced client-brand colors (oxblood,
  brass/gold, workshop cream) and fonts (Arvo, Figtree, Courier Prime).
  **Zero Lewis Digital gold (`#C9A227` family), zero Lewis charcoal
  `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in
  `index.html`/`styles.css`.
- Footer reads exactly "Designed by Lewis Tech," linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on this
  client-facing page.
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — per `client-demo-site` §4.
- No other demo in `demos/` is an appliance-repair business; checked against
  the full gallery for general design-language collision (palette, hero
  shape, type pairing) — see table above.

## Notes for outreach

- Nine straight 5-star reviews with specific language about honesty
  ("didn't even wanna charge me," "knows how to repair older appliances
  rather than just telling me to buy something new") is a very strong,
  ready-to-use pitch point — this business's whole reputation is built on
  trust, which a real web presence can reinforce.
- No existing website means there's no migration friction — a clean first
  web presence for a business currently running on Facebook + word of
  mouth alone.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (Lead reviews and pushes).
