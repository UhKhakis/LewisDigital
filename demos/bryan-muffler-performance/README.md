# Bryan Muffler & Performance — Demo Site (Rebuild v2.1 — CLIENT BRAND + real photos)

One-page demo website for **Bryan Muffler & Performance** (1309 S College
Ave, Bryan, TX 77801 · (979) 822-2612), **rebuilt from scratch** using real
research gathered by the Lead through a live, non-headless Chrome session on
**2026-08-28** (Google Maps' JS-heavy review/photo UI doesn't render in a
sandboxed `WebFetch`/headless pass — that's why the v1 build below had to
guess).

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Why this is v2, not a v1 patch

The v1 README (2026-08-28, earlier the same day) concluded **"Bryan Muffler &
Performance has no usable brand imagery to draw from"** — its leads-file-only
data showed no rating, no reviews, and no socials — and fell back to a fully
DERIVED "performance/racing energy" palette: near-black carbon + electric
orange, condensed ALL-CAPS Anton/Oswald type, a scrolling ticker, and a
decorative numeric index band. That was true of what a sandboxed session
could see; it was not true of the business. A real (visible, non-headless)
Chrome session searching "Bryan Muffler & Performance TX" on Google Maps the
same day found a **4.4-star, 108-review** listing, a distinctive Google-authored
one-line description, six full review texts (positive and negative), and a
real storefront photo with a genuinely bold red sign board — all invisible to
the earlier tooling. This version replaces the derived-guess carbon/orange
brand with one built on that real material.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (phone band, nav, sign-board hero, spec-plate trust bar, about/story, custom-exhaust craft spotlight, services, hours/location, reviews, contact, footer) |
| `styles.css` | All styling — researched client brand (dark asphalt + bold sign-board red + steel-blue-gray + cream sign lettering; Alfa Slab One + Archivo + IBM Plex Mono) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's phone outreach (OUR sales tool — Lewis Digital brand, untouched) |
| `assets/hero-mustang.jpg` | Hero photo — free-license stock photo, NOT a photo of Bryan Muffler & Performance (see "Photos" below) |
| `assets/craft-exhaust-tips.jpg` | Custom-exhaust section photo — free-license stock photo (see "Photos" below) |
| `assets/about-welding.jpg` | About-section photo — AI-generated illustrative stand-in (see "Supporting photography" below) |
| `assets/services-exhaust.jpg` | Services-section photo — AI-generated illustrative stand-in (see "Supporting photography" below) |

## Preview

```bash
cd demos/bryan-muffler-performance
python -m http.server 8097 --bind 127.0.0.1   # preview on localhost:8097 (use `python3` on macOS/Linux)
```

Do NOT use port 3000 — that serves the agency site. Verified locally on
2026-08-28: no console errors, no failed asset requests, no horizontal
overflow at mobile (375px), tablet (768px), or desktop (1440px) widths
(confirmed via `document.body.scrollWidth` matching the viewport at each
size).

## Research (gathered live via non-headless Chrome, 2026-08-28)

**Source: Google Maps listing, searched "Bryan Muffler & Performance TX," verified 2026-08-28.**
- Business name confirmed: "Bryan Muffler & Performance."
- Google's own one-line description: **"Experienced mechanics rebuild entire
  vehicles for fun, and perform exhaust work."** A genuinely distinctive,
  personality-filled official description — quoted directly and attributed
  in the hero and about section, exactly as Brazos Valley Automotive's
  rebuild used its own Google description.
- **Rating: 4.4 stars, 108 Google reviews** — a real, load-bearing fact this
  demo leads with in the spec-plate trust bar and the reviews gauge.
- Live status at check time read "Open · Closes 5 PM." Shown as a single
  dated snapshot; "Call or message for hours" remains the primary claim per
  `client-demo-site` §3.
- **Reputation is genuinely mixed across platforms**, and this README does
  not launder that: Yelp carries a harsh "these guys are crooks" review, and
  a 9-year-old Facebook thread from a Texas A&M Sports Car Club calls old
  welding quality "the worst." MapQuest, Yahoo, Nextdoor, and most recent
  Google reviews are strongly positive. The page's about-section copy says
  plainly that reviews are "mixed, like most independent garages with a long
  history" rather than presenting a spotless reputation.
- A Google AI Overview (sourced to reviews, checked 2026-08-28) states staff
  are frequently praised for being honest about state law and steering
  customers who ask for a simple, unwanted exhaust "delete" toward
  better-sounding, legally compliant custom options instead. This is
  attributed on-page, explicitly labeled as coming from "a Google-generated
  AI Overview of this listing's public reviews" — not presented as a direct
  customer quote or an invented fact.

**Source: Google Maps reviews modal, read 2026-08-28.** Review tag chips:
"catalytic converter repair" (6), "exhaust leak repair" (5), "custom
exhaust" (2), "exhaust work" (6). Six full review texts were read:

1. Mike Metcalf (Local Guide, 10 reviews/10 photos, 5★, a year ago):
   road-trip-rescue story — an AI recommendation service pointed him to the
   shop after his exhaust pipe snapped near St. Louis; photos show a classic
   steel-blue Ford Mustang parked in front of the shop and a car on a lift.
2. Jason Buckholt (5 reviews/2 photos, 1★, 4 months ago, "Overpriced"): a
   genuine negative review — $900.44 in parts on a 2014 Volvo XC60 he felt
   was excessive.
3. Caleb Pickett (1 review, 5★, 8 months ago, "Great price"): a custom
   exhaust on a 2019 Hyundai Tucson Limited Sport, praised for sound and
   price.
4. Pablo Vega (2 reviews, 1★, 3 months ago, "Not sure"): a genuine negative
   review — an x-pipe that cracked three times and, on his account, a
   misdiagnosis of the cause.
5. Squid (9 reviews, 5★, 6 months ago, "Great price"): a weld issue on his
   own thin stainless exhaust that the shop made right for free (naming
   staffer "David"), with a promised follow-up service.
6. Jeff S (8 reviews/2 photos, 5★, 8 months ago): tagged positively; full
   text not fully captured.

Plus cross-platform snippets (Google web search, 2026-08-28): MapQuest/Yahoo
Local's top review praises "Lee and his wife" for a cheaper repair than
competing quotes; Nextdoor calls the shop "a practical choice for
value-conscious, warranty-minded car owners"; a Facebook fb-answers summary
credits "his custom exhausts like the 'Griffinator' muffler" for sound
quality and fair pricing; BBB shows an A+ rating.

**This review reading is internal design research only**, per
`client-demo-site` §1 and §3. No review text — positive or negative — is
published as page copy or as a fake review card. The on-page reviews section
shows only the real 4.4/108 numbers plus an explicit "reviews will appear
here once connected" placeholder. The specific named custom build
("Griffinator") is deliberately **not** name-dropped on the page: it comes
from a secondhand AI-search summary, not a primary Google source, so
presenting it as a current shop feature would overstate what's verified —
it's logged here as design-research color only. The staff-honesty-about-law
theme from the Google AI Overview *is* used on-page, but attributed
explicitly to that source (see "About" and "Craft" sections in `index.html`)
rather than folded in as an unsourced claim.

**Themes extracted:** custom exhaust sound-tuning as a craft, technical
performance-car vocabulary (x-pipe, catalytic converter, exhaust manifold,
Elantra N), road-trip breakdown rescues, state-law-compliance guidance on
modifications, a real husband-and-wife-run feel ("Lee and his wife"), and a
genuine "mixed reviews, but makes it right when something goes wrong" thread
running through both the praise and the negative reviews. This is
car-culture/hot-rod/performance-enthusiast territory — distinctly different
from Bos Garage (personal one-mechanic trust story), Brazos Valley
Automotive (institutional multi-crew honesty story), and Limitless Diesel &
Offroad (diesel/offroad trade focus).

**Source: Google Maps photo, verified 2026-08-28.**
- Light gray-blue corrugated metal building.
- **Bold red sign board with large white/cream lettering reading "BRYAN
  MUFFLER,"** phone number "822-2612" also in a red band — a genuinely
  saturated, loud red, unlike the muted barn-red of Bos Garage or the
  wood-toned sign-tan/green of Brazos Valley.
- A classic 1960s Ford Mustang (steel-blue/gray) parked directly in front —
  vintage muscle-car culture on display — plus a black pickup truck.
- Overall impression: retro/hot-rod garage aesthetic, bold red-on-gray
  signage, vintage car culture — visually louder and more colorful than any
  of the other three auto-shop demos.

## Brand system — how the research became the palette/type/layout

| Token | Value | Evidence |
|---|---|---|
| `--asphalt` `#1b1917` (page base, most sections) | Dark, warm near-black | A deliberate departure from all three warm-cream-page siblings (Bos Garage, Brazos Valley, Limitless Diesel all use a light warm-neutral page background) — this shop's real sign photo is genuinely the loudest/most saturated of the four, so the page runs dark to let the red sign-board red and steel-blue read at full strength, rather than muting it onto a cream page like the others |
| `--steel` `#90a7ae` / `--steel-deep` `#4f6870` | Light gray-blue corrugated-metal building, photo-verified | The actual building material color — used for the wordmark icon, the vintage-coupe illustration, and secondary text/borders |
| `--sign-red` `#c9202b` / `--sign-red-deep` `#96131c` (primary accent, CTAs, hero sign board) | Bold red sign board with cream lettering, photo-verified | A genuinely saturated true red — deliberately distinct from Bos Garage's muted weathered barn-red `#8a3527`, Brazos Valley's wood-toned sign-tan/green `#cda874`/`#4b5238`, and Limitless Diesel's rust `#b5542f` |
| `--cream` `#f2ead8` (sign lettering, text-on-dark, light panels) | Cream/white lettering on the real sign | Used sparingly as the "lettering" color, not as a page background, to keep the dark/loud read intact |
| Alfa Slab One (sign-board display) + Archivo (body) + IBM Plex Mono (spec-plate/part-code utility labels) | Chunky, hand-painted-sign-adjacent slab display; versatile mechanical-feeling grotesque; monospace for parts-catalog-style tags (X-PIPE, CAT-BACK, EXH-01) | Deliberately unlike every sibling's pairing (Bitter+Work Sans+Caveat; Roboto Slab+Work Sans; Bebas Neue+Karla+Space Mono) and unlike the retired v1's Anton+Oswald+Roboto Condensed |

**`ui-ux-pro-max` check:** queried `--design-system` for "retro hot rod
muffler exhaust performance garage vintage signage" and follow-up `--domain
color` / `--domain typography` queries for "barn red galvanized metal
americana signage" and "bold condensed retro signage industrial vintage."
Results skewed toward generic SaaS/gaming palettes (neon purple + rose,
matrix green, blue enterprise) and a single "Abril Fatface / Merriweather"
vintage pairing aimed at breweries/restaurants — none matched a
photo-verified hot-rod muffler shop brief. Per the skill's own fallback
guidance, these results are noted here but not used; the palette and type
pairing above come from the real photo/review research and independent
judgment instead.

## Structural distinctness (checked against every sibling demo)

- **Bos Garage**: sticky single-bar header with circular badge, centered
  copy + full-bleed illustrated shopfront strip hero, hazard-adjacent dashed
  trust strip, circular ink-stamp "repair ticket" service list, single
  nameplate card for hours, rubber-stamp review badge. None of that appears
  here.
- **Brazos Valley Automotive**: plain masthead nav (no top strip), hero that
  leads with a rating callout beside an illustrated wood-sign SVG, 3-tile
  verified-fact strip, thin-rule service panels, separate About/Crew and
  Visit Us sections, centered stacked reviews block. None of that appears
  here.
- **Limitless Diesel & Offroad**: fixed left-rail nav with no top header at
  all, an "opening log" panel instead of a conventional hero, numbered
  field-log service rows, reviews section placed last with no numeric
  rating shown. None of that appears here.
- **This demo (Bryan Muffler & Performance)** instead uses: a **two-tier
  header** (a red phone-band strip echoing the real sign's phone band, above
  a standard nav) that no sibling has; a **hero headline rendered as the
  literal red sign board itself** (riveted plaque, cream lettering) rather
  than a separate illustration or a rating callout; a **riveted "spec
  plate"** verified-facts bar styled like a vehicle ID tag; a dedicated
  **"Craft" custom-exhaust/sound-tuning spotlight section** with an animated
  equalizer-bar motif and generic part-type labels (X-PIPE / CAT-BACK /
  AXLE-BACK) that no other demo has, sitting between About and Services; a
  services grid styled as **rotated hang-tags with a punch-hole**, split
  into a "verified Google tag chips" strip and a separate generic-examples
  grid; an hours/location section styled as a **garage work-order form**
  with dashed ruled lines; and a **gauge-dial** review visualization instead
  of a stamp or plain numeral block.

Section order is also unique among the five auto-shop-trade demos: Header →
Hero → Spec plate → About/Story → Craft spotlight → Services → Hours &
Location → Reviews → Contact → Footer (10 sections, with a dedicated
mid-page craft spotlight no sibling has, and the review numeral shown via a
gauge rather than a stamp/callout/tile).

## Photos: v2.1 update, 2026-08-29 — real stock photos replace the SVG art

The hero headline is still styled as the shop's real sign board (red plaque,
riveted corners, cream Alfa Slab One lettering) — an original typographic
treatment inspired by the photo's described colors and layout, not a
reproduction of the photograph, and that part is unchanged. What changed is
the fastback-coupe **illustration** that sat next to it: the owner reviewed
the same SVG-illustration approach on the Bos Garage and Brazos Valley
demos and said plainly it needed real photos, not flat vector art. No AI
image-generation tool is available in this environment (confirmed
2026-08-29), so this update uses real, free-license stock photos instead —
and, per updated process, the Lead now picks the photo directly (no more
presenting candidates for approval) and brings back the finished page.

- **Hero** (`assets/hero-mustang.jpg`): [pexels.com/photo/3992279](https://www.pexels.com/photo/yellow-ford-car-3992279/)
  ("Yellow Ford Car"), photographer **Suleyman Seykan** — a real classic
  Ford's rear end with dual chrome exhaust tips clearly visible, echoing both
  the real vintage Mustang parked in the shop's own Google Maps photo and the
  exhaust specialty, without reproducing that photo.
- **Custom-exhaust section** (`assets/craft-exhaust-tips.jpg`): [pexels.com/photo/10827691](https://www.pexels.com/photo/close-up-shot-of-a-car-muffler-10827691/)
  ("Close Up Shot of a Car Muffler"), photographer **Rahul Soni** — a dual
  chrome exhaust-tip close-up placed beside the existing sound-waveform
  graphic (kept, since it's an original CSS element, not a stock asset).

Both are licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text/`figcaption` — not
photos of Bryan Muffler & Performance, its shop, its staff, or its vintage
Mustang.

## Supporting photography: photo-enrichment pass, August 2026

Two additional AI-generated photos were added during a photo-enrichment pass:
`about-welding.jpg` (About section) and `services-exhaust.jpg` (Services
section).

- **Source & licensing**: both are **AI-generated illustrative images**
  (photorealistic, generated for this demo). They are NOT photographs of
  Bryan Muffler & Performance, its shop, its staff, or its work, and carry
  no third-party photographer/license beyond the generated asset itself — no
  Pexels/Unsplash license applies to them (unlike the hero-mustang and
  craft-exhaust-tips photos, which are real licensed stock).
- **Honest disclaimer**: like every other photo on this page, these are
  **stand-ins to be swapped for Bryan Muffler & Performance's real
  photographs after go-live.** The on-page `alt` text and `figcaption` state
  this explicitly, and the page presents no AI image as a real photo of the
  business. Only the name/address/phone/rating facts elsewhere on the page
  are verified.

## What is REAL (verified & traceable)

- Business name: **Bryan Muffler & Performance** — Google Maps listing,
  verified 2026-08-28.
- Category / self-description: **"Experienced mechanics rebuild entire
  vehicles for fun, and perform exhaust work"** — Google's own listing
  description, verified 2026-08-28.
- Address: **1309 S College Ave, Bryan, TX 77801**.
- Phone: **(979) 822-2612**.
- **Google rating: 4.4 stars, 108 reviews** — verified 2026-08-28 via a live
  (non-headless) Chrome session.
- One verified hours snapshot: listing read "Open · Closes 5 PM" on the
  afternoon of 2026-08-28 — shown with that exact date; "Call or message for
  hours" remains the primary statement.
- **Review topic tags & counts** — catalytic converter repair (6), exhaust
  work (6), exhaust leak repair (5), custom exhaust (2) — real metadata read
  directly from the listing's review-tag chips, verified 2026-08-28, shown
  on-page in a visually distinct "verified" strip separate from the
  generic-examples service grid.
- The Google AI Overview's staff-honesty-about-law theme — attributed
  explicitly on-page as coming from "a Google-generated AI Overview of this
  listing's public reviews, checked Aug 28, 2026," not presented as an
  unsourced claim.
- The photo-based color evidence (gray-blue corrugated metal, bold red sign
  board with cream lettering, red phone band) — sourced from Bryan Muffler &
  Performance's Google Maps photo, verified 2026-08-28.
- Directions/"See us on Google" links point to a real address-based Google
  Maps search URL.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service categories beyond the verified tag chips** (muffler & exhaust
  repair, custom exhaust & sound tuning, catalytic converter service,
  performance upgrades, welding & fabrication, general auto repair):
  generic examples of what a muffler & performance shop typically offers —
  not a confirmed menu. The page says so directly and points to the phone
  number to confirm.
- **Hero sign-board headline**: original CSS/typographic treatment inspired
  by the real photo's described colors/elements, not a reproduction of the
  photograph itself.
- **Hero and custom-exhaust photos** (`assets/hero-mustang.jpg`,
  `assets/craft-exhaust-tips.jpg`): free-license stock photos, not photos of
  Bryan Muffler & Performance, its shop, or its staff. See "Photos" above.
- **Reviews section on the page**: only the real 4.4/108 numbers are shown;
  review text/cards are an explicit "reviews will appear here once
  connected" placeholder — none of the six review texts (positive or
  negative) captured above are published as page copy, quoted, or
  paraphrased into marketing copy. No fabricated quotes.
- **"Griffinator" named custom build**: intentionally NOT used on the page.
  It's a real detail from a secondhand AI-search summary (not a primary
  Google source), logged here as design-research color only — presenting it
  as a current, ongoing shop feature would overstate what's verified.
- **About/Craft section copy** (e.g., "car people, working on car people's
  cars," "mixed, like most independent garages with a long history," the
  waveform/part-type labels): original marketing copy informed by the real
  review themes and the attributed AI Overview note — not a quote from any
  single customer, and no invented statistics.
- **Owner/staff names** ("Lee," "David," "Lee's wife") are NOT used on the
  page — they appear only in this README's research log, sourced to
  MapQuest/Yahoo Local and a Google review, because cross-platform naming
  wasn't confirmed as current with the same rigor as the Google listing's
  own facts.

## Brand-rule compliance

- Client-facing page uses ONLY the researched brand colors/fonts above.
  **No Lewis gold (`#C9A227` family), no Lewis charcoal `#16130e`, no Lewis
  cream `#fbf8f1`** anywhere in `index.html`/`styles.css` — confirmed by
  inspection.
- Footer keeps a single small credit: "Designed by Lewis Tech" (owner
  instruction 2026-08-29: never say "Lewis Digital" on client-facing pages,
  including the two body-copy attribution sentences on this page that used
  to name it).
- `pitch-sheet.html` was NOT modified — it stays in Lewis Digital's own
  brand (it is OUR sales tool).
- Structurally distinct from all four sibling demos — see the table above.

## Notes for the close call with the owner

- Leading with the real 4.4★/108-review numeral and Google's own "rebuild
  entire vehicles for fun" description is the strongest asset this rebuild
  adds — both are genuine, verifiable, and were invisible to the tooling
  that built v1.
- Be candid with the owner that this research surfaced real negative
  reviews (overpricing on a Volvo XC60, a recurring x-pipe crack) alongside
  the positive ones — none of that is on the page, but the owner should
  know what's publicly visible on their own listing.
- The exhaust-law-compliance guidance theme (from the Google AI Overview) is
  a strong, differentiated selling point worth confirming with the owner
  directly — if true, it's a genuine trust signal for a performance-mod
  shop operating in a state with emissions/noise rules.
- If the owner provides real photos, confirms the "Griffinator" build or any
  staff names, or shares an actual logo, swap them into `index.html` and
  re-publish — the current stock photos and generic service list are
  explicitly placeholders for those, not final answers.
- This folder is a standalone deliverable; nothing goes live for the client
  until they confirm interest.
