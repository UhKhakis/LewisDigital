# Limitless Diesel & Offroad — Demo Site (v2.1, REAL BRAND + real photos)

One-page demo website for **Limitless Diesel & Offroad** (4011 Hicks Ln,
College Station, TX 77845), rebuilt from scratch on **real research** gathered
via a live, non-headless Chrome browser on 2026-08-28 (Google Maps listing +
photos + reviews, and the shop's real Instagram profile). This replaces the
v1 demo, which was built with **no** brand imagery available and used a
fully **derived** olive/khaki/rust "field manual" system. v2 uses the shop's
own sourced brand signal (its real Instagram logo) and contains **ZERO Lewis
Digital gold**.

Lightweight static site: plain HTML + CSS, no frameworks, no build step.

## Design direction

**"Instrument cluster."** Near-black background, electric cyan-blue,
neon magenta, and a chrome highlight — anchored directly to the shop's real
Instagram logo (a chrome-ringed "LD" badge with cyan-gradient lettering on
black). The signature element is an original circular boost-gauge/dial
graphic (chrome ring, cyan-to-magenta arc, magenta needle) used three times:
small as the nav logomark, large and animated in the hero, and as a literal
data visualization of the 4.9/5 Google rating in the Reviews section — a
nod to the diesel-performance gauge culture the shop's own reviews and
Instagram content are full of (boost gauges, turbo work, lift kits).

Typography is Barlow Condensed (bold condensed display, validated by the
`ui-ux-pro-max` skill's typography search for "bold condensed technical
racing display" — an automotive/high-energy-brand pairing) + Barlow (body)
+ Share Tech Mono (HUD/gauge readout accents — validated by the same skill's
"technical HUD industrial automotive" search).

Distinctive architecture vs. the other three same-trade demos:

- **HUD top nav** with a circular gauge logomark (not a plain wordmark or
  scrolling ticker) — none of the other three use this.
- **Centered, emblem-first hero** (large animated gauge dial above the
  headline, inline HUD stat readout row built into the hero itself) — not a
  split image+copy layout (Brazos Valley), not a plain centered-copy layout
  with a bottom illustration (Bos Garage), not a full-bleed dark
  no-image hero (Bryan Muffler).
- **"The Work" service section is a bordered tile grid** with circular icon
  badges and HUD corner-bracket hover accents — not a ticket-list with
  2-letter codes (Bos Garage), not a numbered index list (Brazos Valley),
  not an asymmetric chevron grid (Bryan Muffler).
- **Section order**: hero → services → about (with a vertical stat-strip,
  not a photo swatch or a two-card grid) → hours/location as its own
  console-style panel (not folded into "about") → reviews (rendered as a
  literal rating-gauge dial, not a stamp or plain text) → contact → footer.
  This order and the standalone hours section differ from all three
  siblings.
- **Palette**: black + electric cyan + neon magenta + chrome — none of the
  other three use blue/cyan or magenta; Bryan Muffler owns
  near-black-and-orange, Bos Garage owns warm cream/barn-red/stone, Brazos
  Valley owns galvanized-gray/navy/copper-and-cream.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (HUD nav, hero, the work, about, hours, reviews, contact, footer) |
| `styles.css` | All styling — sourced client brand (near-black/cyan/magenta/chrome, Barlow Condensed/Barlow/Share Tech Mono) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's phone outreach (OUR sales tool — Lewis Digital brand, untouched) |
| `assets/about-truck.jpg` | About-section photo — free-license stock photo (see "Photos" below) |
| `assets/work-lifted-truck.jpg` | Work-section photo — free-license stock photo (see "Photos" below) |
| `assets/work-turbo.jpg` | Work-section photo — AI-generated illustrative stand-in (see "Supporting photography" below) |
| `assets/work-wheels.jpg` | Work-section photo — AI-generated illustrative stand-in (see "Supporting photography" below) |

## Photos: v1.1 update, 2026-08-29

The hero's original-artwork gauge graphic stays — it's this demo's signature
element, directly tied to the real sourced Instagram logo colors (chrome
ring, cyan/magenta), and keeping a distinct hero shape from the other three
auto-shop demos was a deliberate structural choice, not the "no images"
problem the owner flagged elsewhere. What the page genuinely lacked was any
real photo, anywhere. Per the owner's standing instruction (decide directly,
no candidate-approval round), two free-license Pexels photos were added:

- **About section** (`assets/about-truck.jpg`): [pexels.com/photo/32104658](https://www.pexels.com/photo/white-pickup-truck-in-scenic-forest-landscape-32104658/)
  ("White Pickup Truck in Scenic Forest Landscape"), photographer **JBC
  Media Company** — a pickup on an offroad mountain trail, backing up the
  "diesel and offroad shop" identity without claiming to show a real
  customer or truck.
- **Work section** (`assets/work-lifted-truck.jpg`): [pexels.com/photo/30547331](https://www.pexels.com/photo/lifted-off-road-truck-driving-down-urban-street-30547331/)
  ("Lifted Off Road Truck Driving Down Urban Street"), photographer **Sam
  McCool** — a heavily lifted truck with oversized tires, ties directly to
  the real "lift kit installation" review tag; its teal color grade happens
  to echo the shop's real cyan brand accent.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text/`figcaption` — not
photos of Limitless Diesel & Offroad, its shop, its staff, or any customer's
truck.

## Supporting photography: photo-enrichment pass, August 2026

Two additional AI-generated photos were added during a photo-enrichment pass:
`work-turbo.jpg` and `work-wheels.jpg`, both in the "The Work" section (shown
as a two-up gallery above the existing lifted-truck stock photo).

- **Source & licensing**: both are **AI-generated illustrative images**
  (photorealistic, generated for this demo). They are NOT photographs of
  Limitless Diesel & Offroad, its shop, its staff, or any customer's truck,
  and carry no third-party photographer/license beyond the generated asset
  itself — no Pexels/Unsplash license applies to them (unlike the
  about-truck and work-lifted-truck photos, which are real licensed stock).
- **Honest disclaimer**: like every other photo on this page, these are
  **stand-ins to be swapped for Limitless Diesel & Offroad's real work
  photographs after go-live.** The on-page `alt` text and `figcaption` state
  this explicitly, and the page presents no AI image as a real photo of the
  business. Only the name/address/phone/rating facts elsewhere on the page
  are verified.

## Preview

```bash
cd demos/limitless-diesel-offroad
python -m http.server 8095 --bind 127.0.0.1   # preview on localhost:8095
```

Do NOT use port 3000 — that serves the agency site. Verified locally on
2026-08-28 at 375px, 768px, 1024px and 1440px with no horizontal overflow
and no console errors.

## BRAND SOURCES — real research, gathered via live Chrome browser, 2026-08-28

### Google Maps listing (search: "Limitless Diesel & Offroad TX")

- Business name: **Limitless Diesel & Offroad**. Google's own one-line
  category description: *"Shop offering wheel alignment, brake service, oil
  changes, diesel performance work and window tinting."*
- **Rating: 4.9 stars, 58 Google reviews.**
- Live status at check time read **"Open · Closes 5 PM."**
- A Google AI Overview synthesizing reviews highlighted: fast/helpful
  service (including helping out-of-town visitors in a pinch) and quality
  diesel upgrades (fuel pump replacements, leveling kits, large auxiliary
  fuel tank installs) — used only to inform the generic services list
  below, not published as a review quote.
- Minor history footnote (not headlined on the page): a 2008-era Cummins
  Diesel Forum post notes "Aggieland Diesel changed names to Limitless
  Diesel," and a 4-years-ago owner reply on Google says *"It's a new
  venture for us, so we're trying our best to hold a great reputation with
  it"* — suggesting Limitless is a newer identity on a longer-running
  diesel operation. Kept as internal context only; not stated as fact on
  the page.

### Google Maps reviews (read live, 2026-08-28)

Review tag chips seen: "lift kit installation" (3), "wheel alignment" (2),
"quick turnaround" (4), "diesel work" (2). Five full review texts were read
for tone/vocabulary research only — **not published on the page** per
`client-demo-site` §1/§3:

- Gary Konvicka (5★, "Reasonable price"): steering-wobble repair on a 2015
  F250, names mechanic "Jason."
- Danny Schultea (Local Guide, 5★, "Great price"): "Jason is an incredible
  diesel mechanic... a solid diesel mechanic that I can trust."
- Marshal Jones (5★): exhaust leak/turbo repair on an '03 6.0 F250,
  "completed the repair right, and ahead of schedule."
- John Adams (Local Guide, 5★, 4 years ago): names an earlier mechanic
  "Ben," ceramic window tint work; owner's reply is the "new venture"
  quote above.
- Houston Tomlinson (5★): "best service I have gotten from a shop... quick."

Two different named mechanics across years (Ben, then Jason) point to a
real pattern — a personal, trusted-mechanic relationship — reflected on the
page only as general "same person start to finish" language, never as a
named-individual claim.

### Google Maps photos (viewed live, 2026-08-28)

White/light-gray corrugated metal building with an open garage bay; a white
banner hanging inside the bay reading "LIMITLESS" + "4x4/OFFROAD" in bold
black lettering; predominantly black lifted trucks (a black GMC Sierra
prominently) plus a dark blue lifted Ford Super Duty with a black brush
guard. Overall: modern, rugged, high-contrast black/white truck aesthetic —
informed the decision to go dark-background rather than light.

### Instagram — @limitlessdieseloffroad, 2.2K followers (viewed live, 2026-08-28)

**This is the strongest sourced brand signal found across all 4 demos in
this batch.** The account's profile photo is a real, current logo: a
circular "LD" monogram badge — chrome/silver metallic ring, "LD" lettering
in an electric cyan-blue gradient with a white highlight, on a black
background. Bio: *"🔧 Limitless Diesel & Offroad 🔧 Specializing in all
diesel repairs/upgrades ⚡ Lift kits ⚡ Wheels/tires, and more! Call/text to
schedule!"* Story highlight covers show an off-road mud-truck event, a
wheel/tire close-up, a mechanic mid-engine-work, a hot-pink/magenta
powder-coated wheel, and a bright orange finished truck. A visible feed post
shows a neon magenta "LIMITLESS TINT[ING]" sign glowing on a garage wall
behind a teal car — real physical signage advertising the tint service.

**Per the task's honesty rule, none of this Instagram imagery is reproduced
or fabricated on the page.** The site's colors (near-black background,
electric cyan-blue, neon magenta, chrome highlight) are drawn directly from
the logo/bio/highlights described above — that's an explicit, permitted use
of a sourced palette. The page's own gauge-badge graphic is an **original**
circular-dial design (chrome ring + cyan/magenta arc + needle), not a
reproduction of the real "LD" monogram's letterforms or composition — it
borrows only the color system, not the artwork.

## What is REAL (verified & traceable)

- Business name: **Limitless Diesel & Offroad**
- Address: **4011 Hicks Ln, College Station, TX 77845**
- Phone: **(979) 209-9668**
- Category / one-line description: **"wheel alignment, brake service, oil
  changes, diesel performance work and window tinting"** — Limitless Diesel
  & Offroad's own public Google Maps listing, checked August 28, 2026.
- **Google rating: 4.9 out of 5, from 58 reviews** — same listing, same
  date. Shown on the page as a plain numeral and as the rating-gauge dial
  (no fabricated star glyphs, no invented count).
- **Hours**: not published as a full weekly schedule on the listing, so the
  page shows **"Call or message for hours"** as primary, with the single
  verified live-status fact ("Open · Closes 5 PM," read August 28, 2026)
  attributed and dated.
- **Color palette** (near-black + electric cyan + neon magenta + chrome):
  sourced from the shop's real Instagram profile photo (logo), bio, and
  story highlights — see brand-sources above.
- Directions/"See us on Google" links point to a real Google Maps search
  URL built from the verified name + address.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service tiles** (diesel diagnostics, lift kits/suspension, wheel
  alignment, turbo & fuel systems, brakes & oil changes, window tinting,
  auxiliary fuel tanks, offroad accessories): the first five map to
  Google's own one-line description (real); the rest are generic examples
  of what a diesel & offroad shop typically offers, informed loosely by the
  Google AI Overview's mention of leveling kits and auxiliary fuel tanks.
  The page carries an on-page note that services are examples to confirm
  by phone — none of this is an itemized, owner-confirmed service menu.
- **Reviews section**: only the real 4.9/58 numbers are shown (as text and
  as the gauge dial). No review text, no named customers, no named
  mechanics appear on the page — the reviews read during research
  (Jason, Ben, the "new venture" owner reply, etc.) stayed internal to this
  README per `client-demo-site` §1/§3.
- **Hero gauge graphic** and all gauge/dial artwork: an original,
  AI-authored illustrative SVG graphic inspired by the shop's real
  logo colors — explicitly marked illustrative in its `aria-label`, not a
  photo of the shop and not a reproduction of the real Instagram logo
  artwork.
- **About-section copy** ("the same person who diagnoses your truck is the
  one who hands you the keys back," "steering wobbles, turbo trouble, lift
  kits"): general marketing language in the diesel/offroad vocabulary this
  business's own reviews use — not a quote from any specific review, not an
  invented testimonial or stat.
- **"New venture" / Aggieland Diesel history**: intentionally left off the
  page entirely (kept in this README only) — it's a minor, dated footnote,
  not something to present to a prospective visitor as current fact.

## Brand-rule compliance

- Client-facing page uses ONLY the sourced brand colors/fonts above. **No
  Lewis gold (#C9A227 family), no Lewis charcoal #16130e, no Lewis cream
  #fbf8f1** anywhere in `index.html`/`styles.css`.
- Footer keeps a single small credit: "Designed by Lewis Tech," linked to
  lewistechservices.com (owner instruction 2026-08-29: never say "Lewis
  Digital" on client-facing pages).
- `pitch-sheet.html` is untouched and stays in Lewis Digital's own brand (it
  is OUR sales tool) — including its own unrelated "LD" initials used for
  *Lewis Digital*, which is a coincidental overlap with this client's real
  initials and not a brand crossover.
- Structurally and visually distinct from `demos/bos-garage/`,
  `demos/brazos-valley-automotive/`, and `demos/bryan-muffler-performance/`
  — diffed against their current `main`-branch `index.html`/`styles.css`
  before building (see "Design direction" above for the specific
  differences in hero, nav, section order, type pairing, and signature
  element).

## Notes for the close call with the owner

- If the owner provides real hours, real review permission to publish, or a
  real shop/logo photo, swap them into `index.html` and re-publish — and if
  they can share their actual logo file, consider using it directly instead
  of the original gauge graphic.
- The Instagram account (2.2K followers) is a strong, active channel —
  worth mentioning in the pitch: their own content already has a bold,
  cohesive visual identity that this build extends onto the web rather than
  fights.
