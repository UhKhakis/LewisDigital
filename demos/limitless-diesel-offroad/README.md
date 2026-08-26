# Limitless Diesel & Offroad — Demo Site (DERIVED CLIENT BRAND)

One-page demo website for **Limitless Diesel & Offroad** (College Station, TX),
built in a **fitting diesel/offroad brand**. Contains **ZERO Lewis Digital
gold** — the client-facing page uses only the derived forest-green + sand +
rust system below.

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, about/hours, reviews, contact, footer) |
| `styles.css` | All styling — derived client brand (deep forest green + warm sand/tan + burnt rust, Bebas Neue + Work Sans, topographic/ridge motif) |
| `assets/hero-limitless.png` | AI-generated illustrative hero photo (lifted offroad truck on a forest-green/sand trail) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's phone outreach (OUR sales tool — deliberately left in Lewis Digital brand) |

## Preview

```bash
cd /home/agent-lead/LewisDigital/demos/limitless-diesel-offroad
python3 -m http.server 8090 --bind 127.0.0.1   # preview on localhost:8090
```

Do NOT use port 3000 — that serves the agency site.

## BRAND SOURCES — this brand is DERIVED, not sourced

**Limitless Diesel & Offroad has no usable brand imagery to draw from** (its
place page shows "Google Maps listing only" and no social links), so the
palette/typography below is a designer derivation fit to the shop's name,
category, and trail-ready vibe — NOT lifted from the business:

| Check | Result |
|---|---|
| Facebook / socials | **None** (per `leads/leads.csv`) |
| Website | **None** — no-website lead |
| Owner-supplied logo / colors | **None** available at build time |

### Derived brand system

| Token | Value | Reasoning |
|---|---|---|
| **Deep forest green** `#26311f` (hero, footer, dark sections) | Trail / outdoors | Rugged offroad + outdoors identity; deliberately NOT the warm Lewis charcoal `#16130e` |
| **Burnt rust** `#c0562b` (primary CTA/accent) | Trail dust / patina | Earthy, rugged accent; clearly rust (not Lewis gold `#c9a227`) |
| **Warm sand** `#f3edde` (base) / `#e2d9c6` (lines) | Desert terrain | Light warm base; deliberately a sand tone, NOT the Lewis cream `#fbf8f1` |
| **Olive-gray** `#6b6a55` / `#34412a` | Weathered metal | Secondary support tone for card tops and dark-section plates |
| **Mountain-ridge motif** (jagged clip-path edges + terrain band) | Topography / trail | Reinforces the offroad/trail identity; used on the top bar, hero, and footer |
| **Typography: Bebas Neue (display) + Work Sans (body)** | Tall, bold adventure signage + clean sans | Bebas Neue reads like offroad/outdoor branding. Deliberately a fifth distinct pairing (vs. Bos Oswald/Barlow, Neff's Cormorant/Jost, Brazos Montserrat/Source Sans, Bryan Muffler Anton/Roboto) |

## What is REAL (verified & traceable)

Source: `leads/leads.csv` (row 5) — used verbatim per the owner's instruction
for this batch ("use EXACTLY these facts and nothing more"):

- Business name: **Limitless Diesel & Offroad**
- Category: **auto repair** (diesel repair and offroad shop)
- Town: **College Station, TX**
- Address: **4011 Hicks Ln, College Station, TX** (ZIP not provided in the leads
  file — deliberately omitted rather than guessed)
- Phone: **(979) 209-9668**
- Presence: **Google Maps listing only** (no website, no socials)

Directions links point to the real Google Maps search URL from the leads file.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Google rating & reviews**: the leads file carries **no rating or review
  count** for this business, so the page claims **none**. The reviews section is
  an explicit placeholder ("Google rating & reviews will appear here once
  connected") — no fake stars, no invented score, no fabricated quotes.
- **Hours**: shown as **"Call for hours"** (hours were not in the leads file).
- **Service categories** (diesel engine repair, lift kits/suspension, performance
  tuning, 4x4/drivetrain, turbo/fuel systems, offroad accessories, brakes,
  diagnostics): generic list of what a diesel & offroad shop typically offers —
  NOT sourced from Limitless Diesel & Offroad. The page itself carries an
  on-page note saying services are examples and to confirm by phone.
- **Hero photo** (`assets/hero-limitless.png`): AI-generated atmospheric truck
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
  Montserrat/Source Sans), and Bryan Muffler (carbon black + torch orange,
  Anton/Roboto).

## Notes for the close call with the owner

- If the owner provides real hours, their Google rating, real review text, or a
  real shop photo/logo, swap them into `index.html`/`assets/` and re-publish —
  and if they have an actual logo/sign color, restyle the derived palette to
  match it. The current palette is explicitly a DERIVED placeholder brand, not
  the shop's own.
