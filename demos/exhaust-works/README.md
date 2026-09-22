# Exhaust Works LLC — Demo Site

One-page demo website for **Exhaust Works LLC** (1900 S Texas Ave, Bryan,
TX), built in the shop's own researched brand — batch 9, the second of two
muffler/exhaust demos built together (see "Structural distinctness vs.
Soto's Mufflers" below for the required diff against its same-trade
sibling, `demos/sotos-mufflers/`). Also checked against the pre-existing
`demos/bryan-muffler-performance/` (a different muffler shop already in the
repo) — see "Notes vs. the existing muffler demo" below.

Lightweight static site: plain HTML + CSS, no frameworks, no build step —
deployable as-is to any static host.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Complete one-page site (hero, how-we-work process, services, weld spotlight, about, reviews, hours/find us, contact, sticky call bubble, footer) |
| `styles.css` | Client-brand theme only (racing green/spark orange/aluminum) |
| `assets/hero-welding.jpg` | Hero backdrop photo — free-license stock photo |
| `assets/chrome-pipes.jpg` | Weld-spotlight-section photo — free-license stock photo |
| `pitch-sheet.html` | Printable one-page pitch sheet for the owner's in-person visit (Lewis Digital's own brand — gold/charcoal/cream, untouched) |

## Preview

```bash
cd demos/exhaust-works
python3 -m http.server 8104 --bind 127.0.0.1
```

## Research — why this business, and what shaped the design

**Source:** Google Maps listing, read live 2026-09-21
(https://www.google.com/maps/search/Exhaust+Works+LLC+Bryan+TX) — name,
category, address, phone, rating, and review text below all confirmed
there.

**Review reading (internal design research — see §1 of `client-demo-site`;
never published on-page as review text/quotes):**
- Ken S (Local Guide, 22 reviews): "Excellent job on my exhaust. Owner real
  nice and respectful cares about his quality of work... He got me back out
  on the road fast." Owner's public reply thanks him by name.
- David Litton (Local Guide, 26 reviews): "Dude did awesome work, super cool
  guy that you could talk to for hours. His welds are incredibly clean, and
  he is very reasonably priced!" Owner's public reply invites him back for
  "your next ideas on your projects."
- Jordyn Chovanetz: exhaust manifold replaced, "walked me out to show me the
  crack and the issue at hand. Walked me through the next steps... Even
  offered capri suns for my kids I was nannying while we waited!" Owner's
  public reply thanks her by name.
- **Every one of the last several reviews has a personal, named reply from
  the owner** — a directly observable pattern on the listing itself, not an
  inference from a single review.
- Google's own review-topic tags on the listing: "helpful staff" (5),
  "exhaust work" (3), "auto exhaust system repair" (2), "welds" (2), plus
  more not opened.
- Review-summary pull-quotes shown by Google itself: "I would recommend
  them to all the people I know but I'm from out of town." / "Owner was
  extremely knowledgeable!" / "Very good service...very friendly and
  knowledgeable."

**Vocabulary/theme takeaway:** a single-owner shop whose defining trait,
repeated across nearly every review, is personal engagement &mdash; the
owner shows customers the actual problem, explains it, and replies to
nearly every review by name. Clean welds and fair pricing come up
constantly. This reads as "a shop with a face," not a faceless garage &mdash;
the opposite design problem from Soto's Mufflers (a father-son team, more
toolbox/no-frills in tone). The page's central signature ("How we work" 3-step
process + the review-reply pattern called out in About) is built directly
from this.

**Existing web presence:** No independent website &mdash; per the brief,
Facebook, Instagram, and Yelp are the only real links, confirmed via the
listing's "Add website" prompt. Photo/color extraction from those social
pages was not attempted for this shop given the time budget for this batch;
the palette below is disclosed as **trade-material-derived** (a racing
green + weld-spark orange + brushed aluminum), not pixel-extracted from a
confirmed real photo &mdash; an honest fallback per `client-demo-site` §1.

## Brand system

| Signal | Source | Value |
|---|---|---|
| Racing green `#16332b` / spark orange `#e8622c` / aluminum `#cfd6d3` / cream `#f5f1e6` | Trade-material derivation (performance-car green, torch/weld-spark orange, brushed aluminum trim) — disclosed as derived, not pixel-extracted | Personable, "shop with a face" identity, deliberately different hue family from Soto's Mufflers' gunmetal/rust/caution palette and from Bryan Muffler & Performance's red-signboard/asphalt palette |
| Typography: Righteous (friendly rounded display) + Readex Pro (body) + Chivo Mono (small labels) | Rounded, approachable display type chosen to match the personable, single-owner tone from real reviews &mdash; deliberately different from Soto's condensed-industrial Khand and from Bryan Muffler & Performance's Alfa Slab One sign-board type | Checked against the other 47 demos' font pairings in `demos/*/styles.css` — none use this combination |
| Layout: full-bleed welding-photo hero, "how we work" 3-step process, weld spotlight, sticky mobile call bubble | Original layout built from the real "shows you the problem, replies to every review" pattern | Distinct from Soto's Mufflers and from Bryan Muffler & Performance (notes below) |

`ui-ux-pro-max` was queried for a muffler/exhaust-shop design system (same
query as Soto's: `python .claude/skills/ui-ux-pro-max/scripts/search.py
"muffler exhaust repair garage" --design-system` → no close product-type
match) — no match found, stated plainly; the final direction came from the
Builder's own judgment applied to this business's real research.

## Structural distinctness vs. Soto's Mufflers (required same-trade diff)

| Element | Exhaust Works LLC | Soto's Mufflers |
|---|---|---|
| Hero | Full-width hero over a dimmed welding-spark photo backdrop, single-owner framing | Split hero with garage/undercarriage photography |
| Signature element | "How we work" 3-step transparency process (diagnose &rarr; show you &rarr; fix it) + clean-weld spotlight | Quick-facts strip (father & son, rating, muffler+mechanic) + shop-rules chalkboard aside |
| Section order | Hero &rarr; How-we-work process &rarr; Services (cards) &rarr; Weld spotlight &rarr; About (single owner) &rarr; Reviews &rarr; Hours &rarr; Contact | Hero &rarr; Quick-facts strip &rarr; Services (list) &rarr; Shop-rules chalkboard &rarr; About &rarr; Hours &rarr; Reviews &rarr; Contact |
| Voice | Personable, single owner who replies to every review, custom-project energy | Gritty, no-frills, father-son team, cash-only note |
| Typography | Righteous (rounded friendly) + Readex Pro + Chivo Mono | Khand (condensed industrial) + Overpass + JetBrains Mono |
| Palette | Racing green + spark orange + brushed aluminum | Gunmetal + rust + chrome + caution yellow |
| Nav/interaction | Sticky bottom-right call bubble on mobile (distinct interaction) | Standard sticky top bar |

## Notes vs. the existing muffler demo (`demos/bryan-muffler-performance/`)

That demo (a different, unrelated muffler shop already in the repo) uses a
bold red-signboard, dark-asphalt, Alfa Slab One "performance shop" identity
with a hanging tag-board, vehicle spec-plate, and waveform sound-tuning
motif. Exhaust Works LLC uses a completely different hue family (racing
green/spark-orange/aluminum vs. asphalt/sign-red/steel-blue), a rounded
friendly display face instead of a slab sign-board face, and a
transparency-process + weld-spotlight signature not used there.

## What is REAL (verified & traceable)

Source: task brief + Google Maps listing, verified live 2026-09-21
(https://www.google.com/maps/search/Exhaust+Works+LLC+Bryan+TX):

- Business name: **Exhaust Works LLC**
- Category: **Auto repair shop**
- Address: **1900 S Texas Ave, Bryan, TX 77802**
- Phone: **(979) 446-9143**
- **Google rating: 5.0 stars, 15 reviews**
- No independent website &mdash; Facebook, Instagram, and Yelp only, per the
  brief and confirmed on the listing
- Real reviews consistently praise clean welds, fair pricing, and the owner
  personally walking customers through the problem
- **The owner personally replies to reviews by name** &mdash; a directly
  observable pattern on the public listing, confirmed 2026-09-21
- Partial hours: listing shows "Opens 9 AM Tue" — the only day/time
  published as of 2026-09-21

## What is PLACEHOLDER / ILLUSTRATIVE (do NOT present as sourced from the business)

- **Hero backdrop** (`assets/hero-welding.jpg`) and **weld-spotlight photo**
  (`assets/chrome-pipes.jpg`): free-license Pexels stock photos, not photos
  of the real shop, its owner, or its work &mdash; labeled as such in `alt`
  text and captions.
- **Service categories**: generic examples informed by real review-topic
  tags &mdash; not a confirmed price list. Page carries an explicit note to
  confirm by phone.
- **"How we work" 3-step process**: original marketing copy synthesizing a
  pattern described across multiple real reviews &mdash; explicitly
  disclosed on-page as such, not a quote from any single review.
- **Hours** beyond "Opens 9 AM Tuesday": shown as "Call or message for
  hours," clearly marked as unconfirmed.
- **Google reviews section**: only the real 5.0/15 rating is shown; review
  text/cards remain an explicit placeholder ("Google reviews will appear
  here once connected") — no real review text is published as page copy;
  the spotlight section's headline is clearly framed as paraphrased.
- **Palette**: disclosed above as trade-material-derived, not measured from
  a confirmed real photo of this specific shop.

## Photos

- **Hero backdrop** (`assets/hero-welding.jpg`):
  [pexels.com/photo/37517094](https://www.pexels.com/photo/industrial-welding-process-with-sparking-weld-37517094/)
  ("Industrial Welding Process with Sparking Weld"), photographer **Dogan
  şimşek**.
- **Weld spotlight** (`assets/chrome-pipes.jpg`):
  [pexels.com/photo/31558500](https://www.pexels.com/photo/close-up-of-dual-chrome-exhaust-pipes-31558500/)
  ("Close-up of Dual Chrome Exhaust Pipes"), photographer **Borta**.

Both licensed under the [Pexels License](https://www.pexels.com/license/)
(free commercial use, no attribution required, credited here anyway) and
labeled as illustrative stock photos in their `alt` text/`figcaption` — not
photos of Exhaust Works LLC, its shop, or its work.

## Brand-rule compliance

- Client-facing page uses ONLY client-brand colors (racing green, spark
  orange, aluminum, cream — all disclosed above) and client-brand fonts
  (Righteous + Readex Pro + Chivo Mono). **No Lewis gold (#C9A227 family),
  no Lewis charcoal #16130e, no Lewis cream #fbf8f1** anywhere in
  `index.html`/`styles.css`.
- The word "Lewis Digital" does not appear anywhere on `index.html`. Footer
  reads exactly **"Designed by Lewis Tech"**, hyperlinked to
  **https://lewistechservices.com/** — confirmed present in `index.html`.
- `pitch-sheet.html` intentionally keeps the Lewis Digital gold/charcoal/
  cream brand (it is OUR sales tool, the one page that's allowed to).
- **Google link confirmed present**: `index.html` contains three
  `<a href="https://www.google.com/maps/search/Exhaust+Works+LLC+Bryan+TX">`
  links (hero "See us on Google" button, reviews section, contact section),
  each pointing at the exact `source_url` given in the brief.
- Layout is structurally distinct from Soto's Mufflers (table above) and
  from Bryan Muffler & Performance (notes above), and does not reuse any
  hero/section/signature-element combination from the other 57 demos
  already in `demos/`.
