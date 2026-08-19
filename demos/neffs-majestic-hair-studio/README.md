# Neff's Majestic Hair Studio — Demo Site (Client #2, v2 — CLIENT BRAND)

One-page demo website for **Neff's Majestic Hair Studio** (Bryan, TX), rebuilt in
**the studio's own brand** (owner spot-check direction, 2026-08-19). This is the
second iteration: v1 used the Lewis Digital gold system; **v2 uses the client's
own palette, typography, and layout and contains ZERO Lewis Digital gold**.

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, services, about/hours, Google reviews, contact, footer) |
| `styles.css` | All styling — client brand (lavender-plum + ivory, Cormorant Garamond + Jost) |
| `assets/hero-salon.jpg` | AI-generated illustrative hero photo (dark, moody salon interior — matches the studio's dark Facebook cover) |
| `assets/stylist.jpg` | AI-generated illustrative portrait (stylist + client in a bright salon with lavender tones — matches the studio's profile-photo feel) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit (OUR sales tool — deliberately left in Lewis Digital brand) |
| `preview.png` | Browser screenshot of the rendered page (QA check) |
| `brand-src/` | Screenshots of the studio's real Facebook cover/profile used for color extraction (evidence trail) |

## Preview

```bash
cd /home/team/shared/demos/neffs-majestic-hair-studio
python3 -m http.server 8091 --bind 127.0.0.1   # preview on localhost:8091
```

Do NOT use port 3000 — that serves the agency site.

## BRAND SOURCES (where every design choice came from)

Researched live on **2026-08-19** via agent-browser:

| Brand signal | Source | Evidence |
|---|---|---|
| **Muted lavender-purple accent** `#a098b8` family (used as `--lavender #a79ac4`) | The studio's **Facebook profile photo** (fbcdn URL `531404250_1305806214887902`, fetched at 640px) | Dominant-color extraction of the profile photo: ~4–5% muted lavender/periwinkle `#a098b8` / `#a098c0` / `#a090b8` (visible blouse/backdrop tones) |
| **Warm ivory/white base** `#f8f8f8` (used as `--ivory #fffdfa`) | Same profile photo | ~57% of the photo is near-white `#f8f8f8` — the photo's background |
| **Dark warm near-black** `#101010` hair/outfit (used as `--ink #2b2427`, `--plum-deep #33203a`) | Same profile photo + **Facebook cover photo** | Profile: ~11% dark `#101010`. Cover photo (fbcdn `531845880_1305804544888069`): dominant colors are all dark warm grays/charcoal `#181818`/`#0c0c0c`/`#242424` (~90%) — the cover is a dark, moody, warm-toned photo |
| **Warm peach/tan** `#f8e0b0` (used sparingly, `--peach #e9bc9b`) | Profile photo skin tones | ~4% `#f8e0b0` / `#f8d8b0` — warm skin tones in the profile photo |
| **Deep plum** `#4a2b4a` (primary CTA/brand color) | Designer decision anchored to the profile photo's lavender + the name "**Majestic**" (regal/royal connotation) | The light lavender is deepened into a rich plum for contrast on white; same hue family as the verified lavender in the photo |
| **Soft lilac section wash** `#f4f0f9` | Derived from the lavender hue | Light-tint of `--lavender` for alternating sections |
| **Typography: Cormorant Garamond (display) + Jost (body)** | Font-feel match to the studio's vibe | Elegant high-contrast salon serif (fashion/beauty feel, matches "Majestic" + glam profile photo) paired with a clean friendly geometric sans (matches the warm, approachable voice of their posts). Deliberately NOT Playfair Display / Inter |
| **Layout: light + airy, arch-framed photos, numbered service list** | Vibe match | The studio's profile photo is bright/white; the cover is dark/moody — the site uses light ivory with dark-plum ink (bright profile mood), arch image frames (salon styling), and a numbered list layout that is intentionally unlike the Bos Garage card-grid demo |
| **Vibe / identity** | Facebook page + Google listing | "Majestic" + elegant glam; warm friendly posts ("Good morning! … See you soon! 📲"); page is **LGBTQ+ friendly** and **identifies as Latino-owned** (Google listing attributes) — reflected respectfully via an inclusive, welcoming, glamorous-but-warm feel; both attributes are stated on the page as facts |

Facebook page facts captured 2026-08-19: page type "Hair Salon", 736 followers,
"90% recommend (7 Reviews)", email mr_majestic@icloud.com (not displayed on the
page — not confirmed as customer-facing).

## What is REAL (verified & traceable)

Source: `leads/leads.csv` (Neff's row) + the business's public Google Maps
listing, re-checked by the Builder on **2026-08-19**
(https://www.google.com/maps/place/Neff%27s+Majestic+Hair+Studio):

- Business name: **Neff's Majestic Hair Studio**
- Category on Google: **Hair salon** (independent hair studio/salon)
- Address: **4341 Wellborn Rd, Bryan, TX 77801** (ZIP confirmed on listing)
- Phone: **(979) 260-0980**
- No website — the listing's only "website" link is **facebook.com**
  (https://www.facebook.com/Neffs.Majestic.Hair.Studio/) — confirmed on the
  place page. The page therefore does NOT claim any website exists.
- **Google rating: 4.6 stars** — shown on the public listing. NO review count is
  displayed on the listing, so the page does NOT claim a count. (v2 shows the
  plain numeral **4.6** with "out of 5 on Google" — no star glyphs — per the
  honest-placeholder rule.)
- **LGBTQ+ friendly** and **Identifies as Latino-owned** — attributes shown on
  the public listing (page lists them under "Find us").
- Listing **only publishes one day of hours: Tuesday 11 AM – 5 PM** (the hours
  popup shows only "Tuesday 11 AM–5 PM" with a "Suggest new hours" prompt, and
  the listing status read "Closed · Opens 12 PM Wed"). Therefore the page shows
  **"Call or message for hours"** as primary and states the verified Tuesday
  11 AM–5 PM fact with an "as of August 2026" note. No other hours are
  fabricated.
- Directions links point to the real Google Maps listing URL.
- Facebook link in nav/hero/about/contact is the real page URL from the listing.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service categories** (cuts, color, balayage, treatments, styling, waxing,
  extensions, kids' cuts): generic list of what an independent hair studio
  typically offers — NOT sourced from Neff's. The page itself carries an
  on-page note saying services are examples and to confirm by phone/message.
- **Hero photo** (`assets/hero-salon.jpg`) and **portrait**
  (`assets/stylist.jpg`): AI-generated images for layout/feel — they are NOT
  photos of the studio or its staff. The hero was deliberately generated to
  echo the studio's own dark, moody Facebook cover; the portrait echoes the
  bright profile-photo mood (lavender tones). Swap in real studio photos when
  available.
- **Google reviews section**: only the real 4.6 rating is shown; review
  text/cards are an explicit placeholder ("Google reviews will appear here once
  connected") — no fake reviews, no fabricated quotes, no invented star counts.
- **Hours**: "Call or message for hours" (only the Tuesday 11 AM–5 PM listing
  fact is shown, attributed).
- **Copy voice** (e.g., "the chair is yours, the coffee's on"): warm
  small-business tone per Lewis Digital voice direction — general marketing
  language, no invented facts, testimonials, or stats.
- **Phone/CTA buttons**: all `tel:` links to the real number; Facebook buttons
  link to the real page.

## Brand-rule compliance (owner spot-check)

- Client-facing page uses ONLY client-brand colors (`--plum`, `--lavender`,
  `--lilac`, `--ivory`, `--ink`, `--peach`) and client-brand fonts
  (Cormorant Garamond + Jost). **No Lewis gold (#C9A227 family), no Lewis
  charcoal #16130e, no Lewis cream #fbf8f1** anywhere in index.html/styles.css.
- Footer keeps a single small credit: "Site by Lewis Digital — a DBA of Lewis
  Tech Services LLC".
- `pitch-sheet.html` was NOT modified — it stays in Lewis Digital brand (it is
  OUR sales tool).
- Layout is intentionally distinct from the Bos Garage demo (light/lilac vs
  dark/gold; arch photos + numbered list vs card grid; Cormorant/Jost vs
  Playfair/Inter).

## Notes for the close call with the owner

- **Owner's own post on the Google listing (4 days before verification) reads:
  "Book an appointment or walk-in via Facebook/Instagram DM. Phone currently
  unavailable."** — so the demo pairs the verified phone with a prominent
  "Message us on Facebook" button (nav CTA, hero ghost button, about link,
  contact ghost button). If the phone is truly out of service, lead the pitch
  with the Facebook messaging angle (the AI Receptionist offer directly solves
  "customers can't reach me").
- Email found on the Facebook About page (mr_majestic@icloud.com) is NOT
  displayed on the page — it's not confirmed as customer-facing.
- Highlighted offer hook: real 4.6 Google rating displayed on their own site +
  honest reviews section that fills in once their GBP reviews are connected
  (Lewis Digital manages GBP) + a site that answers "what are your hours?"
  instead of customers finding nothing.
- If the owner provides real hours, real review text, or real studio photos,
  swap them into `index.html`/`assets/` and re-publish. Places to edit are
  marked by section.
- This folder is a standalone deliverable; it is NOT wired into the agency site
  on port 3000, and nothing has been pushed to the LewisDigital repo / Pages
  (owner reviews first).
