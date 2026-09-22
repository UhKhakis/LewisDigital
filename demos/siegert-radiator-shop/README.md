# Siegert Radiator Shop — Demo Site

One-page demo website for **Siegert Radiator Shop** (2600 Cavitt Ave,
Bryan, TX 77801), built for Lewis Digital's owner-authorized batch-10
build (round 3, batch B). Static HTML + CSS, no build step.

## Research (per `client-demo-site` §1 — real reviews before design)

**Source:** Siegert Radiator Shop's public Google Business Profile,
https://www.google.com/maps/search/Siegert+Radiator+Shop+Bryan+TX,
verified live via browser 2026-09-21.

- **Rating:** 4.9 stars, 32 reviews — among the highest ratings of any
  business in this campaign.
- **Category:** Radiator shop.
- **Address / phone:** 2600 Cavitt Ave, Bryan, TX 77801 · (979) 822-5722.
- **In business since 1960 — 64 years**, per the build brief; one of the
  longest-running businesses in the whole campaign.
- **Hours:** only a single fact is verifiable — the listing showed
  "Closed · Opens 8 AM Tue" when checked on Monday 2026-09-21. Full
  weekly hours aren't published, so the page shows that one verified data
  point plus a placeholder, per §3.
- **No real independent website** — per the build brief, a domain
  referenced by an auto-shop aggregator is a generic multi-shop directory
  template, not Siegert's own site, and the page states this plainly
  rather than linking to it.
- No business photos exist on the listing to extract color from, so the
  brand is **derived**, not photo-sourced (§1's fallback clause).

**Reviews read for internal design research** (3 read in full, plus the
listing's own review-topic tags and AI summary snippets, not published as
page copy per §1/§3):

- José Jacobo (5★): the owner told him the shop couldn't take his car
  immediately because they were installing insulation, but still took the
  car in and got it done — a small, honest, human detail.
- Howard Willoughby (Local Guide, 5★): "Well met! Fixed the four holes in
  my '81 Datsun 720 radiator for thirty dollars less than a guy in Waco
  would even start."
- Josh Roberts (5★): couldn't diagnose whether his issue was the radiator
  or the water pump himself; Siegert determined it was the water pump and
  "recommended me elsewhere free of charge... very prompt."
- Google's own review-topic tags: "radiator repair" (7), "leak" (4),
  "quality work" (2), "diagnose" (3).
- Google's own AI review-summary snippets: "Fair pricing and timely
  service for a radiator leak repair." / "I will be a repeat customer if I
  have future radiator problems." / "Nice folks, fair prices."

**Vocabulary/theme takeaway:** a genuinely old shop (since 1960) whose
reviews consistently describe fair, below-market pricing and honest
diagnosis — including turning down easy money by referring a customer
elsewhere for free when the problem wasn't actually a radiator. That
"we've seen it before, and we'll tell you straight" character, paired with
64 years of real longevity, is the seed for a heritage/"since 1960" design
rather than a modern-tech one.

## Brand system

| Element | Choice | Rationale |
|---|---|---|
| Palette | Antifreeze green (`--antifreeze #1f3d2e`) + weathered brass (`--brass #b07838`) + steel-gray (`--steel #6f8589`) + parchment (`--parchment #f2e8d5`) | "Antifreeze green" is a deliberate, honest nod to the trade itself (coolant is classically green) rather than a generic dark neutral; brass/steel evoke an old-school garage on a light, parchment-first heritage base |
| Typography | Oswald (condensed vintage-signage display, uppercase) + Source Serif 4 (body — an "old trusted print" feel) + Courier Prime (typewriter mono, evoking a 1960s paper shop ticket) | Distinct from every other demo's type system in the repo |
| Hero | Light parchment hero with a rotated circular "EST. 1960" badge overlapping the photo | Opposite mood from A & K Transmission Repair's dark instrument-panel hero, this batch's same-street sibling |
| Signature element | Dashed-border "ticket card" telling the honest-diagnosis story (the '81 Datsun / water-pump-referral details), with a small truck-icon badge | No other demo tells a heritage story this specifically |
| Reviews | Brass-topped rectangular badge on parchment | Distinct from A & K's circular amber dial |

## Structural distinctness

**Same-street sibling in this batch — A & K Transmission Repair (2602
Cavitt Ave, next door):** A & K uses a **dark** teal-black
instrument-panel palette with a circular gauge hero and geometric sans
type; Siegert uses a **light** parchment heritage palette with a rotated
"since 1960" badge hero and condensed/serif type. Light-first heritage vs.
dark-first precision-tech — opposite moods, opposite section signatures
(ticket-card story vs. shop-policy panel, badge vs. dial), even though
both businesses sit on the same block.

**Other auto-trade demos already in the repo:**
- `demos/sotos-mufflers/` — gunmetal + rust + caution mustard, dark
  toolbox/ticket-stub motif, Khand condensed display.
- `demos/exhaust-works/` — racing green + spark orange + aluminum,
  full-bleed photo hero with scrim, Righteous rounded display.

Siegert's antifreeze-green + brass + parchment combination, uppercase
Oswald display type, and rotated heritage badge don't repeat any of the
above in palette, type, or signature shape — and unlike both of those
demos, Siegert's design is light-first rather than dark-first throughout.

## What is REAL (verified & traceable)

- Business name, category, address, phone: Siegert Radiator Shop's Google
  Business Profile, verified 2026-09-21.
- Rating: 4.9 stars, 32 reviews.
- Single verified hours data point: closed Monday, opens 8 AM Tuesday
  (observed 2026-09-21).
- "Google" link points to the exact `source_url` given in the build brief.
- "In business since 1960 / 64 years" — per the build brief.
- The '81 Datsun and water-pump-referral details are paraphrased from real
  customer reviews (not the business's own statement, but real third-party
  public review text) — disclosed as paraphrased, not quoted verbatim.

## What is PLACEHOLDER / ILLUSTRATIVE

- **Hero photo** (`assets/hero-radiator.jpg`) and **story-section photo**
  (`assets/engine-detail.jpg`): free-license Pexels stock photos — not
  photos of Siegert's actual shop, staff, or customer vehicles. Captioned
  as illustrative in both the visible `alt` text and on-page caption.
- **Services list**: generic examples for a radiator repair shop, informed
  by real review content (leak repair, diagnosis) but not Siegert's
  confirmed price list or exact service menu — labeled "confirm by phone."
- **Full weekly hours**: not published by the listing; page shows only the
  one verified data point plus a placeholder.
- **Reviews section**: only the real 4.9/32 rating is shown; review text
  stays an explicit "will appear here once connected" placeholder — no
  scraped review quotes appear as page copy (the story section paraphrases
  two reviews as disclosed business narrative, not as quoted reviews).

## Photo sourcing

- Hero (`assets/hero-radiator.jpg`): [pexels.com/photo/34950807](https://www.pexels.com/photo/vintage-green-car-radiator-close-up-34950807/)
  ("Vintage Green Car Radiator Close-Up"), photographer **Pawel
  Hordjewicz**.
- Story section (`assets/engine-detail.jpg`): [pexels.com/photo/14240062](https://www.pexels.com/photo/engine-of-a-vintage-car-14240062/)
  ("Engine of a Vintage Car"), photographer **Selvin Esteban**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free for commercial use, no attribution required, credited here anyway).

## Brand-rule compliance

- Client page uses only the derived antifreeze-green/brass/steel/parchment
  system — no Lewis Digital gold `#C9A227`, no Lewis charcoal `#16130e`,
  no Lewis cream `#fbf8f1` anywhere in `index.html`/`styles.css`.
- Footer reads exactly **"Designed by Lewis Tech"**, hyperlinked to
  `https://lewistechservices.com/` — no "Lewis Digital" anywhere on the
  client-facing page.
- **"See us on Google" link confirmed present** in three places
  (hero, hours/location card, and the closing contact section), all
  pointing to the exact brief `source_url`:
  `https://www.google.com/maps/search/Siegert+Radiator+Shop+Bryan+TX`.
- `pitch-sheet.html` keeps the Lewis Digital gold/charcoal/cream palette
  untouched (it's our own sales tool) with Siegert's real name, address,
  phone, and rating.

## Files

| File | Purpose |
|---|---|
| `index.html` | One-page site: hero, heritage strip, services, honest-diagnosis story panel, hours & location, reviews, contact, footer |
| `styles.css` | Full client-brand theme |
| `assets/hero-radiator.jpg` | Hero photo (stock, illustrative) |
| `assets/engine-detail.jpg` | Story-section photo (stock, illustrative) |
| `pitch-sheet.html` | Lewis Digital-branded printable sales sheet (untouched brand) |

## Preview

```bash
cd demos/siegert-radiator-shop
python3 -m http.server 8304 --bind 127.0.0.1
```
