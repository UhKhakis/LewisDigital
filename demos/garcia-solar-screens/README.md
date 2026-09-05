# Garcia Solar Screens — Demo Site

One-page demo website for **Garcia Solar Screens** (Bryan, TX), built in its
own bespoke brand. Part of round 2, batch 4 (the final batch) of Lewis
Digital's demo campaign. Static HTML/CSS, no framework, no build step.

## Research (before any design decision)

**Google Business listing** — `https://www.google.com/maps/search/Garcia+Solar+Screens+Bryan+TX`,
independently loaded and read live by the Builder, **2026-09-05**:

- Name: **Garcia Solar Screens**. Google's own category: **Window
  treatment store**.
- Address: **4308 Vintage Hills Dr, Bryan, TX** (matches the brief). Phone:
  **(979) 324-7997**.
- Rating: **5.0 stars, 7 reviews**.
- Website field: none — only "Add website" was offered, confirming no
  independent site exists (directory listings only, per the brief).
- Hours: listing showed **"Open · Closes 7 PM"** at check time — a single
  data point, not a full published week.
- **Individual reviews read for internal design research** (not published
  as page copy, per the `client-demo-site` skill's internal-research-only
  rule): a reviewer displaying as "Kwisatz Haderach" (Local Guide, 6 months
  ago) — "Garcia had the best price of the three places I called. He showed
  up when he said he would, took measurements, and came back the next day
  to install the screens. He installed screens on the front of my house 25
  years ago, on the back 22 [years ago]..." (message truncated on the
  listing); Robert Byrnes (Local Guide, 2 years ago) — "Raymond did an
  awesome job! Extremely professional... My electricity bill definitely
  appreciates this service"; John Townsend (8 years ago) — "Raymond came
  out gave me a price, came and took measurements and then installed the
  screens and doors... very professional... completed on time and really
  looks great!" Four further reviews exist but were not opened in full.
- **Owner name Raymond Garcia** and the **1968 founding / 57-year family
  history** are per the brief's pre-verified research — genuinely
  reinforced by the Kwisatz Haderach review's own mention of 22-25-year-old
  installations still holding up, which is fully consistent with a
  business old enough to have installed screens that many decades ago.

**Vocabulary/theme takeaway**: this is the longevity story of the entire
campaign — best price of three quotes, shows up when he says he will,
screens that are still working a quarter-century later, "Raymond" named
warmly and repeatedly. The seed for the design below is specifically this
business's own multi-decade history, not a generic "window treatment" or
"home services" template.

**`ui-ux-pro-max` query**: `search.py "solar window screens family owned
since 1968 legacy" --design-system -p "Garcia Solar Screens"` returned only
the database's generic fallback (Hero+Features+CTA, "Minimalism & Swiss
Style") — no niche-specific match, same generic fallback as the other three
businesses in this batch. Final direction below comes from the Builder's
own judgment, per `frontend-design`'s brainstorm → critique process.

## Brand system

| Signal | Source |
|---|---|
| Marigold-gold + walnut-brown + cream palette | Designer judgment grounded in the real trade (solar/sun protection) and the "57 years, still holding up" legacy story — no usable brand photos exist (no website, directory listings only), so disclosed as derived, not photo-extracted; deliberately shifted away from Bryan Outboard's cooler charcoal/brass system built alongside it in this same batch |
| Vollkorn (warm book-serif) + Inter (body) — 2 fonts only | A deliberately classic, minimal type system evoking "timeless" rather than trendy — fitting the oldest business (57 years) in the entire campaign; pairing not used elsewhere in this gallery |
| Horizontal legacy timeline (1968 → decades of installs → 25 years later → today) | Original signature element built specifically around this business's real multi-decade history — no other demo in this gallery has a timeline motif |

## Files

| File | Purpose |
|---|---|
| `index.html` | One-page site: hero (framed inset photo), legacy timeline + photo, benefits strip, Google reviews, hours/find-us, contact, footer |
| `styles.css` | Client brand system (gold/walnut/cream), Vollkorn/Inter |
| `assets/hero-mesh-screen.jpg` | Hero photo: Pexels, ["Railing behind Net on Window"](https://www.pexels.com/photo/railing-behind-net-on-window-20075559/), photographer **Syed Abdul Rehman** — a literal view through window screen mesh; illustrative, not Garcia's own installation |
| `assets/sunny-house.jpg` | Legacy-section photo: Pexels, ["White House With Glass Window"](https://www.pexels.com/photo/white-house-with-glass-window-8278493/), photographer **Diego Ramirez** (Houston, TX) — illustrative, not a Garcia installation |
| `README.md` | This file |
| `pitch-sheet.html` | Lewis-Digital-branded printable pitch sheet (our sales tool, gold/charcoal/cream untouched) |

Both photos are free-to-use under the [Pexels License](https://www.pexels.com/license/)
(no attribution legally required, credited here anyway) and are labeled as
illustrative stock photos in their `alt`/`figcaption` text — not photos of
Garcia's real installations.

## Preview

```bash
cd demos/garcia-solar-screens
python3 -m http.server 8304 --bind 127.0.0.1
```

## What is REAL (verified & traceable)

- Business name, category ("Window treatment store"), address, phone —
  Google Business listing, verified 2026-09-05.
- 5.0-star rating, 7-review count — same listing, same date.
- No independent website (directory listings only) — same listing, same
  date.
- Owner name (Raymond Garcia) and 1968 founding / family ownership — per
  the brief's pre-verified research.

## What is PLACEHOLDER / ILLUSTRATIVE

- **Full weekly hours**: only "Open · Closes 7 PM" is verified at one point
  in time; the page states this explicitly and asks customers to call to
  confirm.
- **Benefits copy** (blocks heat/glare, lowers energy bills, custom fit):
  generic categories of what solar screens do, informed by real review
  language (electricity-bill comment) but not a confirmed price/service
  menu — page carries an explicit "confirm by phone" note.
- **Hero and legacy-section photos**: free-license Pexels stock photos —
  not photos of Garcia's real installations, staff, or house exteriors —
  disclosed in `alt` text, figcaptions, and this README.
- **Reviews section**: only the real 5.0/7 rating is shown; individual
  review text stays internal research per the skill's rule — the page
  shows an honest "full written reviews will appear here once connected"
  placeholder.

## Brand-rule compliance

- Client-facing page uses only this business's own brand colors/fonts
  (marigold-gold, walnut-brown, cream; Vollkorn/Inter) — **no Lewis Digital
  gold/charcoal/cream** anywhere in `index.html`/`styles.css`. (Note: this
  business's own real gold tone and Lewis Digital's gold both happen to be
  in the same warm-yellow family, but the full systems are clearly
  distinct — Garcia pairs gold with walnut-brown and Vollkorn/Inter, never
  Lewis Digital's charcoal/cream and Playfair Display/Inter pitch-sheet
  system.)
- Footer reads exactly **"Designed by Lewis Tech"**, linked to
  `https://lewistechservices.com/` — never "Lewis Digital" on the
  client-facing page.
- **"See us on Google" link confirmed present and correct**: `index.html`
  contains `<a href="https://www.google.com/maps/search/Garcia+Solar+Screens+Bryan+TX" target="_blank" rel="noopener">See us on Google</a>`
  in the reviews section, plus a matching "Get directions" link in the
  "Find us" block — both point at the exact `source_url` given in the
  brief.
- `pitch-sheet.html` intentionally keeps the Lewis Digital gold/charcoal/cream
  brand (our own sales tool) with this business's real facts substituted in.
