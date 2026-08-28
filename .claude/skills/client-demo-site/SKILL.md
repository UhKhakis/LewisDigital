---
name: client-demo-site
description: Build a one-page client demo website for a prospective Lewis Digital client — bespoke to the client's own brand, verified facts + honest placeholders, never a reskinned template. Use before writing any file under demos/<slug>/.
---

# Client demo site

The proven pattern (see `demos/neffs-majestic-hair-studio/` as the reference
example). Skipping any of these steps is how a demo turns into a cookie-cutter
reskin, which is the single most-flagged failure mode for this role.

## 1. Research the business, then extract its real brand — don't default to an industry template

**This is the single most-flagged failure mode now:** two businesses in the
same trade (two auto shops, two salons) converging on the same look because
the design came from the industry category instead of the business itself.
Before picking a single color or font, gather what makes *this* business
specific — not what makes its trade generic:

- **Read the reviews, not just the star rating.** Open the business's
  Google Maps listing and read at least 5-10 of the actual review texts.
  Google Maps review lists are JS-rendered — `WebFetch` often can't see
  them, so drive the pre-installed Chromium via a Playwright script over
  `Bash` (same setup Hunter uses: `PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers`,
  `PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1` already set, launch with
  `executablePath: '/opt/pw-browsers/chromium'`; do not run
  `playwright install`). Extract: words customers repeat, specifics praised
  (a particular mechanic's honesty, a stylist's technique, the shop's
  no-frills griminess vs. a spotless waiting room), complaints that reveal
  character, and the general tone (formal/casual, warm/no-nonsense,
  family-run/high-volume). Quote 2-3 short excerpts as evidence in the
  README, sourced with the listing URL and date — same discipline as the
  color-extraction evidence below. **This reading is for internal design
  research only** — it does not change §3's rule that the on-page reviews
  section stays the real rating plus an honest "reviews will appear here
  once connected" placeholder; never publish scraped review text as if it
  were live.
- **Look at real photos.** Facebook/Instagram page, Google Maps photos,
  cover/profile images, any signage — pull real colors from them and note
  the extraction as evidence, e.g.:

  > Dominant-color read of the Facebook profile photo: ~57% near-white
  > `#f8f8f8` background, ~4-5% muted lavender `#a098b8` (blouse/backdrop).

- **Read what's already there.** Any existing (even bad/outdated) website,
  social bios, or posted menu/service list — these often carry the
  business's own voice and priorities better than a generic category
  description would.

Feed these findings — review vocabulary, photo colors, existing voice —
into the `frontend-design` skill's brainstorm as the concrete seed (see the
design pass in `.claude/agents/builder.md`). The seed must be this specific
business's own material, never "auto repair shop" or "hair salon" as a
category standing in for it. Pick typography and layout mood to match the
vibe you actually found, not the vibe you'd assume for the trade. If the
client genuinely has no derivable brand signal (no reviews, no photos, no
existing web presence), pick a distinct palette, say plainly in the README
that it's derived rather than sourced, and note that no reviews/photos were
found to draw from.

**Never use Lewis Digital's own gold/charcoal/cream palette on a client
page.** That combination is reserved for `pitch-sheet.html` (our sales tool)
and the agency's own site.

## 2. Structural distinctness, not just recoloring

Every demo must differ from every other demo you've built in: hero style,
section architecture *and order*, navigation treatment, typography pairing,
texture/motifs, and interactions. Two demos may share a color temperature —
never a layout. **This matters most between demos in the same trade** — two
auto shops or two salons converging on the same silhouette is the exact
failure §1 and this step exist to prevent, because it's the convergence
that's easiest to fall into unnoticed when the design comes from the
category instead of the business. Before finishing, open every other demo
folder in the same trade under `demos/` specifically and mentally diff your
hero treatment, section order, and signature element against each one —
change something structural if they're converging, even if the palette
differs.

## 3. Verified facts vs. honest placeholders — keep them visually separable

From the leads file, only these are facts: business name, category, town,
phone, and anything the business's own public listing/page states (rating,
attributes, hours if published). Everything else is a placeholder, marked as
such on the page and logged in the README:

| Field | If unverified, show |
|---|---|
| Hours | "Call or message for hours" (state any single verified day/time separately, with a date) |
| Reviews | The real numeric rating only if the listing shows one; review text/cards = explicit "reviews will appear here once connected," never invented quotes |
| Services | Generic examples for the niche, labeled "confirm by phone" |
| Hero/portrait images | AI-generated, noted as illustrative in the README |
| ZIP / address details | Omit rather than guess |

Write a "What is REAL" / "What is PLACEHOLDER" section in the demo's README
(copy the structure from `demos/neffs-majestic-hair-studio/README.md`) — this
is the audit trail if the owner or client questions a claim later.

## 4. Deliverable shape

```
demos/<slug>/
  index.html       one-page site: hero, services, about/hours, reviews, contact, footer
  styles.css       client-brand theme only
  assets/          AI-generated or real client images
  README.md        brand sources + real-vs-placeholder log (see §3)
  pitch-sheet.html Lewis-Digital-branded printable sales sheet (kept in OUR brand — do not touch its palette)
```

Footer keeps a single small credit line: "Site by Lewis Digital — a DBA of
Lewis Tech Services LLC." No other Lewis Digital branding belongs on the
client page.

## 5. Before finishing

- Preview locally (`python3 -m http.server <port> --bind 127.0.0.1` from the
  demo folder — pick a port not already used by another running preview or
  the agency site on 3000) and check for overflow / broken assets.
- Confirm every fact traces to a source you can point to (leads.csv row,
  listing URL, screenshot) — if you can't point to a source, it's a
  placeholder, not a fact.
- **Do not build until the client has confirmed interest**, unless the Lead
  explicitly says this is an owner-authorized batch build.
- Read `.claude/skills/publish-demos-github-pages/SKILL.md` next for how to
  ship it.
