# Frank Seale Electric — Demo Site (owner-authorized prospecting batch, 2026-08-30)

One-page demo website for **Frank Seale Electric Inc** (500 S Tabor Ave, Bryan,
TX 77803 · (979) 822-2942 · Electrician). This is a **brand-new build**, part
of an owner-authorized batch sourced from HubSpot — the normal
"no demo until the client confirms interest" gate does not apply to this
batch (owner instruction, 2026-08-30).

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Why the brand is DERIVED, not sourced (per `client-demo-site` §1's fallback clause)

This is the thinnest case for brand signal in the batch — genuinely, not
just under-researched. Research gathered by the Lead via live Chrome,
verified 2026-08-30:

- **Google Maps listing: unclaimed, zero reviews, zero customer photos**
  (only a Street View thumbnail — not a business-submitted photo).
- **Yelp** (m.yelp.com/biz/seale-frank-electric-company-bryan): also
  unclaimed, **zero reviews**, one listed service ("Electric inspection").
- **MapQuest and Claims Pages**: both confirm the same address/phone, both
  describe the business only in generic directory boilerplate ("a reputable
  electrical services provider based in Bryan, TX") — not a real customer
  quote, just filler copy repeated across directory sites.
- **No social media presence found** — no Facebook, no Instagram.

There is no review text to read for tone, no customer photo to pull a color
from, and no existing web presence to inherit a voice from. Per
`client-demo-site` §1's own fallback clause ("if the client genuinely has no
derivable brand signal... pick a distinct palette, say plainly in the README
that it's derived rather than sourced") — that is exactly the situation
here, so this build states it plainly rather than dressing up boilerplate as
research: **the palette, typography, and layout below are the Builder's own
deliberate design choices, not extracted from any real Frank Seale Electric
material.** This is the same honest-disclosure pattern Bos Garage's v2
README used before real research was later found for that business (see
`demos/bos-garage/README.md`'s "Why this is v3" section) — the difference is
that Bos Garage's "no signal" turned out to be a tooling gap; here, four
independent directories were checked directly and none of them have
anything to draw from. This business is real and currently operating
(confirmed across Google Maps, Yelp, MapQuest, and Claims Pages, all with
matching address/phone) — it simply has no online review or photo footprint
yet.

**What the derived direction is built from instead:** the trade itself
(electrical panels, copper wiring, breaker boxes) and the tones already
present in the one real asset this build has — the hero stock photo (see
below). Deliberately **not** the caution-tape yellow/black cliché that
"electrician" defaults to — the photo's own garage/copper/steel tones
pointed somewhere more specific: a deep panel-box navy, aged and
bright copper (echoing the copper wire visible in the photo), and a cool
concrete-gray neutral (echoing the garage floor/wall, not a warm cream).

`ui-ux-pro-max` was queried before finalizing (`python
.claude/skills/ui-ux-pro-max/scripts/search.py "electrician residential
service local trade" --design-system` and a follow-up `--domain color`
query for "electrical navy copper amber trade") — both returned the same
generic "professional navy + slate + amber/gold" B2B-trust default
(literal Tailwind-style hex values like `#0F172A`/`#1E40AF`/`#B45309`).
That confirmed navy + copper/amber is a legitimate professional-trade
direction in general, but the exact hex values were **not** adopted
verbatim — they read as generic corporate SaaS, not this trade's own
material. The final palette below uses different, warmer, more
photo-grounded hex values and a font pairing (Space Grotesk + Public Sans +
Space Mono) not present in that generic result at all.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, about, services "panel directory," reviews, hours & service area, contact, footer) |
| `styles.css` | All styling — derived client brand (panel-box navy + aged/bright copper + concrete-gray; Space Grotesk + Public Sans + Space Mono) |
| `assets/hero-electrician.jpg` | Hero photo — free-license stock photo (see "Hero photo" below) |
| `pitch-sheet.html` | Printable one-page pitch sheet for outreach (OUR sales tool — Lewis Digital brand, gold/charcoal/cream, untouched) |

## Preview

```bash
cd demos/frank-seale-electric
python -m http.server 8137 --bind 127.0.0.1   # preview on localhost:8137 (use `python3` on macOS/Linux)
```

Do NOT use port 3000 — that serves the agency site. Verified locally
2026-08-30: no console errors, hero image returns HTTP 200, no horizontal
overflow at 375px (mobile), 800px, or desktop widths.

## Hero photo

Already sourced and placed by the Lead at `assets/hero-electrician.jpg`: a
real, free-license stock photo showing an experienced-looking American
electrician (older, gray hair, black polo shirt) inspecting an open
residential circuit breaker panel with a flashlight, in a garage setting
with tool bags and wire spools visible on a shelf.

**Source:** [pexels.com/photo/32497160](https://www.pexels.com/photo/electrician-inspecting-residential-fuse-box-area-32497160/)
("Electrician Inspecting Residential Fuse Box Area"), photographer
**Kathleen Austin Kuhn**, [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited anyway).

This is a **stock photo, not a photo of Frank Seale Electric or its staff**
— disclosed in the `alt` text, the `<figcaption>` overlaid on the photo
itself, and here. It is also the only real visual material this build has
to work from, which is why its own tones (navy-toned panel box, copper
wire, garage steel/concrete) directly seeded the derived palette above,
rather than the trade category in the abstract.

## Design plan (brainstorm → critique, per `frontend-design`)

**Color** — `--navy #16283f` / `--navy-deep #0c1826` / `--navy-soft #24405e`
(panel-box navy: hero scrim, nav, footer, primary ink) · `--concrete #e8e5dd`
/ `--concrete-panel #f5f3ee` (cool gray-neutral page base — deliberately NOT
a warm cream, to stay clear of Bos Garage/Brazos Valley's cream family) ·
`--copper #a65a2e` / `--copper-deep #7c431e` / `--copper-bright #d98a4c`
(aged and fresh-cut copper wire — primary accent/CTA) · `--steel #6e7681` /
`--steel-soft #aab0b8` (galvanized conduit gray — muted text).

**Type** — Space Grotesk (display: headlines, wordmark) + Public Sans
(body) + Space Mono (breaker/circuit labels, spec data, phone number
callouts). None of these three faces is used by any sibling demo (see the
distinctness table below).

**Layout** — full-bleed real photo hero with a navy gradient scrim (not a
boxed/framed photo the way every sibling handles its hero image), text
block anchored bottom-left. Section order: **Hero → About → Services
(panel directory) → Reviews (placeholder) → Hours & service area →
Contact** — about before services, and reviews before hours, is an order
no sibling demo currently uses (see table below).

**Signature** — a breaker-panel toggle switch, used three ways: (1) as the
shape of every primary CTA button (a small switch icon, always shown
flipped ON, beside the call-to-action text), (2) as the "panel directory"
services list — each service is a numbered circuit (`CKT 01`–`CKT 06`) with
its switch ON, styled like the paper directory glued inside a real breaker
panel door (dashed rules, a hinge strip on the left edge), and (3), most
deliberately, reused in the Reviews section with the switch flipped **OFF**
and labeled `CKT 07 — Customer reviews`, to disclose the real zero-review
status through the same visual object rather than a generic empty-state
message. This ties the one unique, memorable element on the page directly
to the actual object in the hero photo (an open breaker panel) and to the
honest fact pattern of the business (real trade, no online footprint yet) —
not a decorative flourish borrowed from the trade category in the
abstract.

**Critique against the three generic AI-design defaults** (per
`frontend-design`): not the cream/serif/terracotta look (no serif face
anywhere, base is cool concrete-gray not cream); not the near-black + one
acid accent look (the page is majority light concrete with navy used only
in banded sections — hero, nav, footer, contact — not an overall dark-mode
page, and copper is warm/muted, not a bright neon single accent); not the
broadsheet-hairline look (rounded/pill buttons, no zero-radius hairline
grid). Also explicitly not the caution-tape yellow/black electrician
cliché that a "trade category" seed would default to.

## Structural distinctness vs. every other demo under `demos/`

Checked against the current state of `bos-garage`, `brazos-valley-automotive`,
`bryan-muffler-performance`, `limitless-diesel-offroad`, and
`neffs-majestic-hair-studio` before finishing (`bcs-roofing`,
`sanchez-landscaping`, `bernados-landscaping-dirtworks`, and
`dean-plumbing-repair` currently have only an `assets/` folder placed — no
`index.html` to diff against yet):

| | Frank Seale Electric (this demo) | Bos Garage | Brazos Valley Automotive | Bryan Muffler & Performance | Limitless Diesel & Offroad | Neff's (different trade) |
|---|---|---|---|---|---|---|
| Hero | Full-bleed real photo, navy scrim, text bottom-left | Centered copy + full-bleed photo banner below | Split grid, copy left / boxed photo right | Full-bleed gradient + scrolling ticker | Sidebar rail + SVG gauge, no photo | Centered copy over dark photo |
| Section order | Hero → About → Services → **Reviews before Hours** → Contact | Hero → trust strip → about → services → hours → reviews → contact | Hero → services → about → hours → reviews → contact | Hero → about → craft → services → hours → reviews → contact | Hero → services → about → hours → reviews → contact | Hero → services → about/hours → reviews → contact |
| Services layout | "Panel directory" — numbered circuits with toggle switches, panel-door hinge strip | Vertical repair-ticket stub list | Numbered editorial index list | Asymmetric CSS grid of cells | Numbered field-log rows in fixed left rail | Unnumbered card grid |
| Signature element | Breaker toggle switch (CTA shape + panel directory + honest OFF-switch reviews disclosure) | Hand-lettered "ask for Bo" script tag | Split editorial photo + fact strip | Scrolling ticker + oversized number band | Fixed left sidebar rail nav | Card-frame photos + starburst rating badge |
| Nav | Sticky navy bar, pill phone button with switch icon | Sticky bar, circular badge mark | Minimal masthead, no strip | Ticker + condensed slash-brand nav | Fixed left rail, no top nav | Sticky header, no ticker |
| Palette | Panel-box navy + aged/bright copper + concrete-gray | Warm cream + muted barn-red + stone-tan | Warm cream + navy + copper (different hue balance) | Near-black + safety orange | Olive/khaki + rust | Ivory + lavender-plum |
| Type pairing | Space Grotesk + Public Sans + Space Mono | Bitter + Work Sans + Caveat | Fraunces + Inter | Alfa Slab One + Archivo + IBM Plex Mono | Barlow Condensed + Barlow + Share Tech Mono | Cormorant Garamond + Jost |

No two demos share a hero shape, section order, services layout, or type
pairing. Note that Brazos Valley Automotive also lands on a
navy-plus-copper hue *family* — the two are still structurally distinct
(Brazos Valley keeps a warm cream page base and a boxed/framed hero photo;
this demo uses a cool concrete-gray base and a full-bleed hero with no
frame at all), and neither shares a type pairing, services layout, or
signature element with the other.

## What is REAL (verified & traceable)

Source: `business/leads/leads.csv` (Frank Seale Electric row) +
cross-referenced Google Maps, Yelp, MapQuest, and Claims Pages listings,
checked live by the Lead, **2026-08-30**:

- Business name: **Frank Seale Electric Inc**
- Category: **Electrician**
- Address: **500 S Tabor Ave, Bryan, TX 77803**
- Phone: **(979) 822-2942**
- The business is real and currently operating — confirmed by matching
  address/phone across four independent directories.
- The Google Maps listing is **unclaimed**, with **zero reviews** and
  **zero customer photos**.
- The Yelp listing is **unclaimed**, with **zero reviews**, listing exactly
  one service: "Electric inspection."
- **No social media presence found** (no Facebook, no Instagram).

## What is PLACEHOLDER / DERIVED (do NOT present as sourced from the business)

- **Entire color palette and typography**: derived by the Builder from the
  trade itself and the hero photo's own tones — not extracted from any real
  Frank Seale Electric signage, photo, or profile, because none exist. See
  "Why the brand is DERIVED" above.
- **Hero photo** (`assets/hero-electrician.jpg`): a free-license stock photo
  of a generic electrician — NOT a photo of Frank Seale Electric, its shop,
  or its owner. Labeled as such in `alt` text, the on-photo `<figcaption>`,
  and here.
- **Service list** (panel/breaker upgrades, outlet/switch installation,
  lighting/fixture wiring, ceiling fan/appliance circuits, electrical
  inspections, troubleshooting/repairs): generic examples of what an
  electrician typically offers, informed only by "Electric inspection"
  being Yelp's one listed service — **not** Frank Seale Electric's confirmed
  menu. The page states this directly and points to the phone number.
- **Hours**: no hours are published on any listing checked — shown as "Call
  or message for hours," never a guessed schedule.
- **Reviews section**: explicitly shows zero — no star rating, no review
  count, and no review text/cards anywhere on the page, because none exist
  on Google or Yelp. The "CKT 07 — Customer reviews" switch is shown OFF, with
  copy stating plainly that both listings are unclaimed with zero reviews as
  of 2026-08-30. Nothing is invented or implied to exist.
- **Copy voice** ("A real Bryan electrician who hasn't gone online yet,"
  "Ready to flip the switch?"): original marketing language written to
  honestly frame the thin online footprint as the actual pitch (a business
  the internet doesn't know about yet) — not a quote, not an invented
  testimonial or statistic.
- **Phone/CTA buttons**: all `tel:` links go to the real, verified number.

## Brand-rule compliance (owner spot-check)

- Client-facing page uses ONLY the derived client-brand colors (`--navy`,
  `--navy-deep`, `--navy-soft`, `--concrete`, `--concrete-panel`, `--copper`,
  `--copper-deep`, `--copper-bright`, `--steel`, `--steel-soft`, all
  disclosed above) and fonts (Space Grotesk + Public Sans + Space Mono).
  **Zero Lewis Digital gold (`#C9A227` family), zero Lewis charcoal
  `#16130e`, zero Lewis cream `#fbf8f1`** anywhere in `index.html`/`styles.css`
  — confirmed by inspection.
- No star rating or review count shown anywhere on the page — there isn't
  one, and none is implied.
- Footer reads exactly: "Designed by Lewis Tech," linked to
  lewistechservices.com (owner instruction: never say "Lewis Digital" on
  client-facing pages).
- `pitch-sheet.html` stays in Lewis Digital's own gold/charcoal/cream brand
  (it's our sales tool) — untouched, per `client-demo-site` §4.
- Structurally distinct from all five sibling demos with a built
  `index.html` — see the table above.

## Notes for outreach

- This business has the thinnest online footprint in the current batch —
  the honest "your business isn't findable online yet, here's what a page
  could look like" framing is the whole pitch, not a weakness to work
  around.
- Both listing platforms being unclaimed also makes claiming/optimizing the
  Google Business Profile a natural add-on conversation once the site itself
  lands.
- If the owner (Frank Seale, presumably, though this isn't independently
  confirmed) provides real hours, real photos, or a confirmed service list,
  swap them into `index.html`/`assets/` and re-publish.
- This folder is a standalone deliverable, built as part of an
  owner-authorized batch — nothing has been pushed to the LewisDigital
  repo's default branch from this pass (owner/Lead reviews and pushes).
