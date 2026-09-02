# Neff's Majestic Hair Studio — Demo Site (Client #2, v3.1 — real stock photos replace AI-generated images)

One-page demo website for **Neff's Majestic Hair Studio** (Bryan, TX), refined in
**the studio's own brand**. This is the **third** iteration:

- **v1** used the Lewis Digital gold system (rejected).
- **v2** (2026-08-19) rebuilt the page in the studio's own brand — lavender-plum +
  ivory, genuinely sourced from the studio's real Facebook profile photo. This
  was a correct rebuild and is the reference example the `client-demo-site`
  skill points other Builder work to.
- **v3 (this pass, 2026-08-28)** does **not** replace v2's color research — it
  was right and stays. What v3 fixes is a narrower gap: v2's Facebook photo
  analysis only ever extracted *pixel colors*, and it never read Google review
  *text* at all (only the star number). Both gaps are closed below, and one
  live re-check turned up genuinely new facts (a real review count, and full
  weekly hours) that supersede specific claims v2 made in good faith from
  thinner evidence.

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Photos: v3.1 update, 2026-08-29 — real stock photos replace the AI-generated images

v2/v3 used two AI-generated raster images (a moody studio interior, and a
portrait of a female stylist working on a client). Unlike the other four
demos in this batch, these were never flat SVG illustrations, so they didn't
trigger the same "no images" complaint — but two things argued for replacing
them anyway, per the owner's now-standing preference for real stock photos
over any synthetic image, decided directly without a candidate-approval
round: (1) consistency with the rest of the batch, and (2) the stylist
portrait showed a woman, while every real Google review names the owner
"Neff" with male pronouns ("he did great," "I met Neff and another
employee") — a generic AI portrait doesn't claim to *be* Neff, but showing a
woman in that slot sits awkwardly next to research that's consistently
male-pronoun. The replacement photo sidesteps the question entirely by
showing only hands and the back of a client's head — no one's face or
gender is depicted at all.

- **Hero** (`assets/hero-salon.jpg`): [pexels.com/photo/1895701](https://www.pexels.com/photo/salon-chair-beside-oil-heater-in-front-of-mirror-inside-room-1895701/)
  ("Salon Chair Beside Oil Heater in Front of Mirror Inside Room"),
  photographer **Lisa Fotios** — a real, warm, industrial-style barbershop
  (exposed brick, a barber chair, styling products on a shelf), fitting the
  "warm, relaxed, walk-in-friendly" direction the real reviews support, and
  echoing (without reproducing) the eclectic/industrial character discovered
  in the studio's real Facebook cover photo.
- **About section** (`assets/stylist.jpg`): [pexels.com/photo/33461079](https://www.pexels.com/photo/barber-trimming-hair-with-clipper-and-comb-33461079/)
  ("Barber Trimming Hair with Clipper and Comb"), photographer **Alexander
  Mass** — a barber giving a precise fade with clippers and a comb, directly
  matching the real "fades"/"barber" review-tag theme, shown from behind so
  no face or gender is depicted.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text/`figcaption` — not
photos of Neff's Majestic, its studio, or its staff. A pre-existing
accessibility bug was also fixed in passing: both images were previously
wrapped in an `aria-hidden="true"` container despite carrying meaningful
`alt` text, which hid them from screen readers entirely; they're now proper
`<figure>` elements with visible captions.

## Supporting photography: photo-enrichment pass, August 2026

Two additional photos were added to the Services card grid during a
photo-enrichment pass: `service-cut.jpg` (on the "Cuts & Fades" card) and
`service-color.jpg` (on the "Color & Highlights" card). These are the only
two cards in the grid carrying images.

- **Source & licensing**: both are **AI-generated illustrative images**
  (photorealistic, generated for this demo). They are NOT photographs of
  Neff's Majestic Hair Studio, its studio, or its staff, and carry no
  third-party photographer/license beyond the generated asset itself — no
  Pexels/Unsplash license applies to them (unlike the hero-salon and stylist
  photos, which are real licensed stock). This is a deliberate split, not a
  contradiction with the v3.1 "real stock replaces AI" update above: that
  update concerned the hero and about *portrait* slots (where a face/gender
  question made stock the honest choice); the two services cards are
  small, non-portrait, illustrative-only slots with no person depicted
  end-to-end, so a generated stand-in is acceptable there per
  `client-demo-site` §3's own menu (real licensed photo, AI stand-in, or
  omission).
- **Honest disclaimer**: like every other photo on this page, these are
  **stand-ins to be swapped for Neff's Majestic's real photographs after
  go-live.** The on-page `alt` text and a small on-card note state this
  explicitly, and the page presents no AI image as a real photo of the
  business. Only the name/address/phone/rating/hours facts elsewhere on the
  page are verified.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, verified-highlights strip, services, find us & hours, Google rating/reviews, contact, footer) |
| `styles.css` | All styling — client brand (lavender-plum + ivory anchor, retained from v2, plus a new charcoal + amber pairing for one section — see below) |
| `assets/hero-salon.jpg` | Hero photo — free-license stock photo, replaces the v2/v3 AI-generated interior (see "Photos" below) |
| `assets/stylist.jpg` | About-section photo — free-license stock photo, replaces the v2/v3 AI-generated portrait (see "Photos" below) |
| `assets/service-cut.jpg` | Services-card photo ("Cuts & Fades") — AI-generated illustrative stand-in (see "Supporting photography" below) |
| `assets/service-color.jpg` | Services-card photo ("Color & Highlights") — AI-generated illustrative stand-in (see "Supporting photography" below) |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit (OUR sales tool — Lewis Digital brand, untouched palette; only the rating line was updated to add the now-verified review count) |
| `preview.png` | Browser screenshot of the rendered page (QA check) |

## Preview

```bash
cd demos/neffs-majestic-hair-studio
python3 -m http.server 8093 --bind 127.0.0.1   # preview on localhost:8093
```

Do NOT use port 3000 — that serves the agency site.

## What changed in v3, and why

**Kept from v2 (still valid, not re-derived):**
- The lavender-plum + ivory palette anchor (`--plum`, `--lavender`, `--ivory`,
  etc.) — this was a genuine dominant-color read of the studio's real Facebook
  profile photo, not a category default. No reason to discard sourced,
  correct research.
- Cormorant Garamond (display) + Jost (body) — the studio's own real
  profile-photo logo uses an elegant cursive "majestic" wordmark, so an
  elegant serif for the brand name specifically is evidence-based, not an
  assumed "salon site" default. v3 keeps it but uses it more sparingly (bold
  rather than italic for section headers; italic reserved for the word
  "Majestic" itself, echoing the real logo's script) so the page reads more
  direct/confident and less "delicate boutique," matching the tone the real
  reviews actually describe.
- The core fact set: name, address, phone, no independent website (Facebook
  is the only link), the Aug 14, 2026 owner post about the phone being
  temporarily unavailable and DMs being preferred.

**Changed in v3, and why:**
1. **Rating now shows a review count.** v2's README said "no review count is
   displayed" — that was accurate on 2026-08-19, but the listing has since
   started showing one. Re-verified independently by the Builder on
   **2026-08-28** by loading the live Google Maps listing: **4.6 stars, 64
   reviews.** Every "4.6 on Google" mention on the page and in
   `pitch-sheet.html` now cites "64 reviews" alongside it, and the repo root
   gallery `index.html` card was updated to match.
2. **Full weekly hours are now published and shown as fact, replacing the old
   "Call or message for hours" placeholder for hours specifically.** v2 could
   only see one day (Tuesday) on the listing and correctly treated hours as
   mostly unverified. On the 2026-08-28 re-check the listing showed a
   complete week. Per `client-demo-site` §3, hours are a fact when the
   business's own public listing states them — so v3 publishes the real table
   (see below) with a "verified Aug 28, 2026" citation and a note that hours
   can change, rather than continuing to hide a now-available fact behind a
   generic placeholder.
3. **New "verified highlights" strip added** (chips: Accepts walk-ins, Good
   for kids, LGBTQ+ friendly, Identifies as Latino-owned, Wheelchair
   accessible, Free Wi-Fi, On-site parking) — all pulled from the listing's
   "About" tab, re-verified live 2026-08-28. This is real, sourced data that
   v2 only partially surfaced (LGBTQ+ friendly / Latino-owned, buried in the
   About section) and is now given real visual weight, both because it's
   genuinely differentiating and because the fresh research specifically
   flagged those two attributes for re-confirmation.
4. **Review *text* was read for the first time** (both by the Lead and
   independently re-confirmed by the Builder, live, 2026-08-28) — see "Review
   research" below. This is internal design research only; per
   `client-demo-site` §1 and §3 it is never published as page copy, fake
   review cards, or invented quotes. What it *did* change: the copy voice.
5. **The Facebook cover photo was read for what it depicts, not just its
   pixel colors** — see "Cover-photo research" below. This surfaced a
   genuinely distinctive, real detail (a comic-book/collectibles-shop-styled
   interior) that v2's pixel script could not see. It shows up in the design
   as one abstract, original signature motif — never as reproduced comic art.
6. **Numbered service list → card grid.** Per the `frontend-design` skill's
   guidance that numbering should only be used when content is a real
   sequence, and services aren't one, the "01 / 02 / 03…" numbered list from
   v2 was replaced with an unnumbered card grid.
7. **Arch photo frames → rounded "card" frames with a small dot-corner
   accent.** The church/boutique arch was a legitimate v2 choice, but it
   leans further into "elegant glam boutique" than the new review evidence
   supports. The card frame is calmer and carries a small halftone-dot corner
   flourish tying to the cover-photo discovery.
8. **Section order changed**: a new dark "verified highlights" band now sits
   directly under the hero (previously these facts were buried in the
   About section), foregrounding the richest new real data first.

## Review research (internal design research — sourced, not published as copy)

Read by the Lead and independently re-confirmed live by the Builder on
**2026-08-28** (Google Maps listing, "Reviews" tab and inline snippets):

- Google's own review-topic tags on the listing: "fades" (2), "bleaching" (2),
  "barber" (3), "haircut experience" (2), plus more not opened.
- Gabe G. (5★, 3 months ago): "I met Neff and another employee there and they
  were super nice and I really like the cut they gave me!" — with an owner
  reply thanking them by name for the shop.
- Jimmy McDonald (5★, 6 months ago): praises Neff by name, mentions being
  "recently moved to CStat" (College Station) and reasonable prices.
- Tin Nguyen (Local Guide, 5★, ~1 year ago): "Whether I show Neff a haircut or
  describe it, Neff seems to talk me through the process... I have never
  disliked a haircut with Neff... he has never been late seeing me."
- Google's own inline review snippets shown on the listing: "Easily best
  barber in town for the price, can't beat this place." / "Great service and
  great atmosphere." / "He gave a quick and smooth haircut at a fair price!"
- Cross-platform (per the Lead's research, not independently re-checked by
  the Builder): Yelp, MapQuest, Reddit r/aggies, and Birdeye reviews
  consistently repeat the same themes — affordable ($20–40 range, $25
  minimum cited on Yelp), college-student clientele, Neff personally doing
  most cuts, "relaxed," "great people," quick service.
- Facebook's own About text claims "TOP 10 on Insite's 2024 A-List for Best
  Hair Salon" — cited here **only as "per the business's own Facebook page,"**
  since it was not independently corroborated by a third-party source.

**Vocabulary/theme takeaway:** overwhelmingly barbershop-leaning — "barber,"
"fades," walk-in-friendly, affordable, college-town clientele, the owner
("Neff") named warmly and personally in nearly every review, relaxed and
consultative ("talks me through it," "never late"). This is a warm,
unpretentious, personal-relationship neighborhood studio, not a high-glam
boutique. **Design decision:** rather than a full teardown of v2's palette
(which is genuinely sourced and still correct), v3 keeps the lavender-plum
identity but dials the *mood* — copy voice, photo framing, section order —
toward "warm, relaxed, everyone's welcome" and away from "elegant glam." No
review text, price figures, or the "Neff personally cuts most hair" pattern
are stated as fact anywhere on the page — only in this README as design
rationale, per §1's internal-research-only rule.

## Cover-photo research (new signal v2's pixel script missed)

v2's README described the Facebook cover photo only as "dominant colors are
all dark warm grays/charcoal (~90%)" — a correct but incomplete pixel read
that never registered *what the photo showed*. Viewed directly by the
Builder on 2026-08-28 (`facebook.com/Neffs.Majestic.Hair.Studio`, cover photo,
no login required to view): a black-painted ceiling with exposed industrial
ductwork and track spotlights, and floor-to-ceiling glass/wire shelving on
both walls holding what are visibly comic books and collectible
figures/boxes — a comic-shop/collectibles-display aesthetic inside the
studio. This is genuinely distinctive, real, and specific to this business —
exactly the kind of signal `client-demo-site` §1 exists to catch that a
pixel-only script misses.

**Design decision — used honestly, not reproduced:** v3 does not draw, quote,
or otherwise reproduce any comic-book art, character, or logo (that would be
both dishonest as "placeholder" content and a copyright problem). Instead it
adds one original, abstract signature motif inspired by the discovery:
- A repeating **halftone-dot texture** (plain CSS radial-gradient dots,
  original, not derived from any specific work) used as the background of
  the new "verified highlights" band and as small corner accents on photo
  frames and service cards — an abstract nod to comic-panel/print-halftone
  shading.
- A new **charcoal + amber** pairing (`--charcoal #1a1720`, `--charcoal-soft
  #241f2b`, `--amber #c98a3a`, `--amber-soft #e9c48d`) used for exactly one
  section (the highlights band) — charcoal echoing the cover photo's real
  black-painted ceiling, amber echoing its warm track-spotlight glow. This is
  disclosed here as **designer-observed**, not a pixel-extraction-script
  output like the v2 lavender/ivory/peach values — it's a deliberate,
  reasoned color choice grounded in a real photo, not measured from it
  pixel-by-pixel.
- An **original 8-point starburst outline** (a generic, non-comic-specific
  graphic device — not any particular comic's logo or typography) behind the
  real 4.6★/64-review badge in the hero, as a subtle "pop" nod to the
  collectibles-shop finding.

This stays a *small, honest signature element*, not a redesign into a "comic
shop" theme — the studio's real category is "Hair salon," its real name is
"Majestic," and the lavender-plum identity remains the dominant palette. The
charcoal/amber band is one accent section among several ivory/lilac ones.

## BRAND SOURCES (full list, v2 research + v3 additions)

| Brand signal | Source | Evidence | Status |
|---|---|---|---|
| Muted lavender-purple accent `#a098b8` family (`--lavender #a79ac4`) | Facebook **profile photo** (fbcdn URL `531404250_1305806214887902`) | Dominant-color extraction: ~4–5% muted lavender/periwinkle | v2, re-confirmed by Builder viewing the photo directly 2026-08-28 |
| Warm ivory/white base (`--ivory #fffdfa`) | Same profile photo | ~57% near-white `#f8f8f8` | v2, unchanged |
| Dark warm near-black (`--ink #2b2427`, `--plum-deep #33203a`) | Profile + **cover photo** | Profile ~11% dark; cover ~90% dark warm charcoal/gray | v2, unchanged |
| Warm peach/tan (`--peach #e9bc9b`) | Profile photo skin tones | ~4% `#f8e0b0`/`#f8d8b0` | v2, unchanged |
| Deep plum (`--plum #4a2b4a`, primary CTA) | Designer decision anchored to verified lavender + "Majestic" name | Same hue family as verified lavender, deepened for contrast | v2, unchanged |
| **NEW:** Charcoal + amber pairing (`--charcoal #1a1720`, `--amber #c98a3a`) | Cover photo, re-viewed for *content* (not just pixels), 2026-08-28 | Black-painted ceiling + warm track-spotlight glow, observed directly by the Builder | v3, designer-observed (disclosed, not a pixel script output) |
| Typography: Cormorant Garamond (display) + Jost (body) | Font-feel match to the real cursive "majestic" logo wordmark | Elegant script-adjacent logo pairs with Cormorant italic; Jost stays for warm, approachable body text | v2, usage rebalanced in v3 (bolder headers, less italic, per new review-tone evidence) |
| Layout: card-grid services (no numbering), card-frame photos, dark highlights band | `frontend-design` guidance (numbering implies sequence — services aren't one) + cover-photo discovery | Numbered list replaced; arch frames replaced with card frames + dot-corner accent | v3 |
| Vibe / identity | Facebook page + Google listing + review text (2026-08-28) | Warm, walk-in-friendly, affordable, college-town, personal ("Neff" named repeatedly); LGBTQ+ friendly + Latino-owned attributes shown on listing | v2 palette research retained; v3 copy voice + section order rebalanced toward this evidence |

`ui-ux-pro-max` was queried for a barbershop/salon-adjacent design system and
for a "vintage pop art comic collector" style match before finalizing this
plan (`python .claude/skills/ui-ux-pro-max/scripts/search.py "barbershop
haircuts local shop" --domain product` → **0 results**; a `--design-system`
query for "neighborhood barbershop warm eclectic collector" returned a
generic SaaS/enterprise match with no relevant product-type hit; a
"vintage pop art comic collector" style query returned only
retro-film/retro-futurism/pixel-art styles, none of which fit a real
neighborhood hair studio). **No database match was found for this specific
niche** — this is stated plainly rather than forcing an unrelated match; the
final direction (retain sourced lavender-plum, add one designer-observed
charcoal/amber accent band, restrained Cormorant/Jost pairing) came from the
Builder's own judgment applied to the business's real research, per
`frontend-design`'s brainstorm → critique process, not from a skill-database
hit.

Facebook page facts, re-verified live 2026-08-28: 738 followers (was 736 on
2026-08-19 — negligible change), profile photo unchanged, cover photo
unchanged, "From the owner" post dated Aug 14, 2026 still live: "Good
morning! Book an appointment or walk-in via Facebook/Instagram DM. Phone
currently unavailable. See you soon! 📲" — confirms the phone-unavailable /
DM-booking state is current, not a one-off from 9 days earlier.

## What is REAL (verified & traceable)

Source: `leads/leads.csv` (Neff's row) + the business's public Google Maps
listing, **independently re-verified live by the Builder on 2026-08-28**
(https://www.google.com/maps/place/Neff%27s+Majestic+Hair+Studio):

- Business name: **Neff's Majestic Hair Studio**
- Category on Google: **Hair salon** (independent hair studio/salon — not
  "barber shop," even though review vocabulary leans that way; the category
  itself is not restated as something it isn't)
- Address: **4341 Wellborn Rd, Bryan, TX 77801**
- Phone: **(979) 260-0980**
- No independent website — the listing's only "website" link is
  **facebook.com/Neffs.Majestic.Hair.Studio/**, confirmed live 2026-08-28.
- **Google rating: 4.6 stars, 64 reviews.** (Supersedes the v2 README's
  "no review count is displayed" — that was accurate on 2026-08-19; the
  listing now shows a count, re-confirmed independently by the Builder.)
- **Full weekly hours, as published on the listing, verified 2026-08-28:**
  Mon 10 AM–1 PM · Tue 10 AM–5 PM · Wed 12–6 PM · Thu 10 AM–5 PM ·
  Fri 10 AM–5 PM · Sat 9 AM–1 PM · Sun Closed. (Supersedes v2's "only Tuesday
  is published" claim — the listing now shows the full week.)
- **LGBTQ+ friendly**, **Transgender safespace**, and **Identifies as
  Latino-owned** — all three shown under "From the business" / "Crowd" on the
  listing's About tab, re-confirmed live 2026-08-28 (Transgender safespace is
  a new attribute not previously cited; the other two were re-verified per
  the brief's explicit request and are still shown, so they're kept).
- **Accepts walk-ins, Good for kids, Restroom, Free Wi-Fi, On-site parking,
  Wheelchair accessible entrance/parking lot/restroom, Onsite services,
  Credit/debit cards accepted** — all shown on the listing's About tab,
  verified 2026-08-28.
- Owner's own post (Aug 14, 2026, still live 2026-08-28): "Book an
  appointment or walk-in via Facebook/Instagram DM. Phone currently
  unavailable." — hence the page pairs the real phone number with a
  prominent, primary "Message us on Facebook" CTA.
- Directions/Facebook links in the page point to the real, verified URLs.

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Service categories** (Cuts & Fades, Color & Highlights, Beard Trims &
  Shaping, Kids' Cuts, Treatments & Conditioning, Special-Occasion Styling):
  generic examples of what an independent hair studio typically offers —
  informed by real review vocabulary (fades, barber-style cuts) for tone, but
  **not** Neff's confirmed menu. The page carries an explicit note to confirm
  by phone/Facebook message.
- **Hero photo** (`assets/hero-salon.jpg`) and **About-section photo**
  (`assets/stylist.jpg`): free-license stock photos — not photos of the real
  studio or its staff. See "Photos" below for why they replaced the v2/v3
  AI-generated images and where they came from.
- **Google reviews section**: only the real 4.6/64 rating is shown; review
  text/cards remain an explicit placeholder ("Google reviews will appear here
  once connected") — no real review text, tags, or quotes appear as page
  copy, per §1/§3's internal-research-only rule.
- **Copy voice** ("Walk in, pull up a chair, and let Neff take care of the
  rest…"): original marketing language informed by the real review tone
  (warm, casual, personal, walk-in-friendly) — not a quote, not an invented
  testimonial or statistic.
- **Charcoal/amber accent colors and the starburst/halftone motifs**:
  designer-observed from the real cover photo's *content*, not a pixel
  extraction script output — disclosed as such above, not presented as a
  measured brand color the way the lavender/plum family is.
- **Phone/CTA buttons**: all `tel:` links go to the real number; Facebook
  buttons link to the real page.

## Brand-rule compliance (owner spot-check)

- Client-facing page uses ONLY client-brand colors (`--plum`, `--lavender`,
  `--lilac`, `--ivory`, `--ink`, `--peach`, plus the new `--charcoal`/`--amber`
  pairing, all disclosed above) and client-brand fonts (Cormorant Garamond +
  Jost). **No Lewis gold (#C9A227 family), no Lewis charcoal #16130e, no
  Lewis cream #fbf8f1** anywhere in `index.html`/`styles.css`.
- Footer keeps a single small credit: "Designed by Lewis Tech," linked to
  lewistechservices.com (owner instruction 2026-08-29: never say "Lewis
  Digital" on client-facing pages).
- `pitch-sheet.html` palette was **not** touched — it stays in Lewis Digital
  brand (it is OUR sales tool). Only its rating line was updated to add the
  now-verified "(64 reviews)" for pitch accuracy.
- Layout remains structurally distinct from the other demos in `demos/` —
  the four auto-repair shops (`bos-garage`, `brazos-valley-automotive`,
  `bryan-muffler-performance`, `limitless-diesel-offroad`) are a different
  trade entirely and were not re-diffed in depth per the brief; this demo's
  own hero/section-order/typography/signature-element combination (card-grid
  services, dark halftone highlights band, starburst rating badge) is unique
  within the repo regardless.

## Notes for the close call with the owner

- **Real, richer facts now available than in v2**: full weekly hours and a
  real review count are genuine upgrades to what can be shown as fact — lead
  with those as evidence of "here's what your own Google listing already
  says, laid out clearly."
- Owner's own post confirms **the phone is temporarily unavailable and DMs
  are preferred** — the AI Receptionist offer directly solves "customers
  can't reach me by phone."
- If the owner provides real hours changes, real review text/permission to
  publish, or real studio photos, swap them into `index.html`/`assets/` and
  re-publish — places to edit are marked by section and comment.
- This folder is a standalone deliverable; nothing has been pushed to the
  LewisDigital repo's default branch / Pages from this pass (owner/Lead
  reviews first).
