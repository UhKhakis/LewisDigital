# Bryan Muffler & Performance — Demo Site (DERIVED CLIENT BRAND)

One-page demo website for **Bryan Muffler & Performance** (Bryan, TX), built in
a **fitting muffler/performance-shop brand**. Contains **ZERO Lewis Digital
gold** — the client-facing page uses only the derived carbon-black + torch-orange
system below.

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, about/hours, reviews, contact, footer) |
| `styles.css` | All styling — derived client brand (matte carbon black + torch orange + off-white, Anton + Roboto, checkered/speed-stripe motif) |
| `assets/hero-muffler.png` | AI-generated illustrative hero photo (dark performance shop with orange work lights) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's phone outreach (OUR sales tool — deliberately left in Lewis Digital brand) |

## Preview

```bash
cd /home/agent-lead/LewisDigital/demos/bryan-muffler-performance
python3 -m http.server 8090 --bind 127.0.0.1   # preview on localhost:8090
```

Do NOT use port 3000 — that serves the agency site.

## BRAND SOURCES — this brand is DERIVED, not sourced

**Bryan Muffler & Performance has no usable brand imagery to draw from** (its
place page shows "Google Maps listing only" and no social links), so the
palette/typography below is a designer derivation fit to the shop's name,
category, and performance vibe — NOT lifted from the business:

| Check | Result |
|---|---|
| Facebook / socials | **None** (per `leads/leads.csv`) |
| Website | **None** — no-website lead |
| Owner-supplied logo / colors | **None** available at build time |

### Derived brand system

| Token | Value | Reasoning |
|---|---|---|
| **Matte carbon black** `#161619` (hero, footer, dark sections) | Race-black | High-performance / custom-exhaust look; deliberately NOT the warm Lewis charcoal `#16130e` |
| **Torch orange** `#f97316` (primary CTA/accent) | Hot-rod orange | Vivid, loud, performance energy; clearly orange, deliberately NOT Lewis gold `#c9a227` |
| **Gunmetal** `#3a3d44` / `#222227` | Metal + exhaust pipe | Secondary support tone for card edges and dark-section plates |
| **Warm off-white** `#f7f7f5` (base) | Clean showroom wall | Light base; deliberately NOT the warm Lewis cream `#fbf8f1` |
| **Checkered-flag / speed-stripe motif** | Racing finish line | Reinforces the performance/custom identity; used on the top bar, hero, and footer |
| **Typography: Anton (display) + Roboto (body)** | Tall, bold racing lettering + sturdy sans | Anton reads like a performance/speed shop sign. Deliberately a fourth distinct pairing (vs. Bos Oswald/Barlow, Neff's Cormorant/Jost, Brazos Montserrat/Source Sans) |

## What is REAL (verified & traceable)

Source: `leads/leads.csv` (row 4) — used verbatim per the owner's instruction
for this batch ("use EXACTLY these facts and nothing more"):

- Business name: **Bryan Muffler & Performance**
- Category: **auto repair** (muffler and performance shop)
- Town: **Bryan, TX**
- Address: **1309 S College Ave, Bryan, TX** (ZIP not provided in the leads
  file — deliberately omitted rather than guessed)
- Phone: **(979) 822-2612**
- Presence: **Google Maps listing only** (no website, no socials)

Directions links point to the real Google Maps search URL from the leads file.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Google rating & reviews**: the leads file carries **no rating or review
  count** for this business, so the page claims **none**. The reviews section is
  an explicit placeholder ("Google rating & reviews will appear here once
  connected") — no fake stars, no invented score, no fabricated quotes.
- **Hours**: shown as **"Call for hours"** (hours were not in the leads file).
- **Service categories** (custom exhaust, performance tuning, catalytic
  converters, exhaust repair/welding, headers, suspension/lowering, brakes,
  diagnostics): generic list of what a muffler & performance shop typically
  offers — NOT sourced from Bryan Muffler & Performance. The page itself
  carries an on-page note saying services are examples and to confirm by phone.
- **Hero photo** (`assets/hero-muffler.png`): AI-generated atmospheric shop
  image for layout/feel — NOT a photo of the shop.
- **Copy voice** (e.g., "we'll talk it through with you"): warm small-business
  tone per Lewis Digital voice direction — general marketing language, no
  invented facts, testimonials, or stats.

## Brand-rule compliance

- Client-facing page uses ONLY the derived brand colors/fonts above. **No Lewis
  gold (#C9A227 family), no Lewis charcoal #16130e, no Lewis cream #fbf8f1**
  anywhere in `index.html`/`styles.css`.
- Footer keeps a single small credit: "Site by Lewis Digital — a DBA of Lewis
  Tech Services LLC".
- `pitch-sheet.html` is in Lewis Digital brand (it is OUR sales tool).
- This demo is visually distinct from Bos Garage (slate + red, hazard stripes),
  Neff's (lavender/plum, Cormorant/Jost), Brazos Valley (navy + copper,
  Montserrat/Source Sans), and Limitless Diesel (forest green + sand,
  Bebas Neue/Work Sans).

## Notes for the close call with the owner

- If the owner provides real hours, their Google rating, real review text, or a
  real shop photo/logo, swap them into `index.html`/`assets/` and re-publish —
  and if they have an actual logo/sign color, restyle the derived palette to
  match it. The current palette is explicitly a DERIVED placeholder brand, not
  the shop's own.
