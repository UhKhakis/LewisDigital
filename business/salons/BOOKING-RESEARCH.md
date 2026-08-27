# Salon/Spa Booking Platform Research — Lewis Digital

**Prepared by:** Hunter (agent-hunter)
**Date:** 2026-08-26
**Status:** Research complete for Part A (all 5 salons) and Part B (Booksy/Fresha/Vagaro/StyleSeat pricing + embed). API/developer-access details NOT verified this session (marked below).

---

## Part A — Which of the 5 salon leads already use a booking platform

| # | Salon | Area / Phone | Booking platform in use | Exact booking URL | Source (where verified) |
|---|-------|--------------|-------------------------|-------------------|-------------------------|
| 1 | Boardwalk Salon & Spa | Bryan TX, (979) 260-7726 | **GlossGenius** ✅ confirmed | `https://boardwalksalonandspa.glossgenius.com/` | Direct load of GlossGenius subdomain — page title "Boardwalk Salon & Spa \| Health & Beauty in Bryan, TX" |
| 2 | Star Salon | Bryan TX, (979) 260-1995 | **None found** | — | Google Maps place card shows "Add website" (no website, no booking link). Fresha directory search returned no matching listing. |
| 3 | A Wild Salon and Co | Bryan TX, (979) 260-8900 | **None found** | — | Google Maps place card shows `instagram.com` link only (no booking link). Instagram bio itself is login-gated — could not inspect for a booking link. |
| 4 | Elegance Salon & Spa | Bryan TX, (979) 268-4383 | **None found** | — | Google Maps place card shows "Add website" (no website, no booking link). |
| 5 | S H 21 Hair Salon | Bryan TX, (979) 703-6368 | **None found** | — | Google Maps place card shows "Add website" (no website, no booking link). |

### Part A notes & honesty log

- **Boardwalk = GlossGenius is confirmed.** The earlier find (`boardwalksalonandspa.glossgenius.com`) was re-verified by loading the URL directly today; it resolves to a live "Boardwalk Salon & Spa" booking page. Exact URL: `https://boardwalksalonandspa.glossgenius.com/`.
- **The other 4 salons show no booking platform.** Google Maps place cards for Star, Elegance, and S H 21 all render **"Add website"** (the card would instead show a "Book" / provider link if they ran a Google-integrated booking platform). A Wild Salon's card shows only an `instagram.com` link.
- **What I could NOT fully check (be honest, not exhaustive):**
  - **StyleSeat, Vagaro, Booksy, GlossGenius directories** were not exhaustively searched per-salon. StyleSeat search is a client-side SPA that defaulted to a wrong geo (Boardman, OR) and did not surface a "Star Salon" result; Fresha's `?search=` URL ignored my query and returned geo-default "nearby" results. I did not get a clean per-name directory hit for any of the 4 non-Boardwalk salons on these platforms.
  - **A Wild Salon's Instagram bio** is behind Instagram's login wall, so a booking link could theoretically live there and I could not see it. Their Google Maps presence shows Instagram only.
  - **Facebook pages** for these salons were not found on Google Maps (none listed a Facebook page), so there was nothing to check there.
- **Bottom line:** Of the 5 salons, only **Boardwalk Salon & Spa** demonstrably uses a booking platform (GlossGenius). The other four appear to take bookings by phone/walk-in and have no visible third-party booking integration. This is an **opportunity**, not a deficit — they are greenfield for us to recommend a booking platform as part of our website pitch.

---

## Part B — Booksy / Fresha / Vagaro / StyleSeat: pricing, embed, API, website-builder overlap

> All dollar figures below were read directly from each vendor's own pricing page on **2026-08-26** (URLs in Part D). Where I could not verify something, it is explicitly marked. No prices were guessed.

### Comparison table

| | **Fresha** | **Vagaro** | **Booksy** | **StyleSeat** |
|---|---|---|---|---|
| **Free tier** | ❌ None. 7-day free trial only. | ❌ None. Free trial (length not stated on pricing page). | ❌ None. 14-day free trial (no credit card). | ❌ None found. Free to join (marketplace), monetized via commission — **pricing page not public / requires signup** (unverified). |
| **Paid pricing (verified)** | **Independent:** $19.95/mo (1 calendar column). **Team:** $14.95 per bookable team member/mo. **Enterprise:** custom (20+ team). | **$30.00/mo** for **1 bookable calendar** ("Just Me"); an "Exclusive offer" line showed **$23.99/mo**. Scales by number of bookable calendars (2–7+). No cancellation fees. | **$29.99/mo + tax**, all features included, **+ $20/mo per additional team member**. No tiers, no hidden fees. | ❓ Not listed publicly. (Historically commission-based; current pricing is behind signup.) |
| **Setup / one-time fees** | None listed. | None listed. Free card reader when you sign up for Vagaro Merchant Services. | None. (Card readers optional: $219.85 or $53.10 + shipping.) | Unknown (not public). |
| **Per-booking / commission** | **20% one-time commission** on *new* clients who discover you via the Fresha marketplace only. Returning clients & self-referred = free. | Marketplace booking fees not itemized (FAQ mentions "fees for getting booked through the Vagaro Marketplace" — details not shown). | **No commission** on self-referred/marketing-driven clients. Optional **"Boost"** feature = **30% one-time commission** on a new client's first visit (only while Boost is on). | Historically commission-per-booking (unverified current %). |
| **Hosted booking URL ("Book Now" link)** | ✅ Yes — **"Direct booking links"** listed as **Free** ("one simple link covering everything your clients can book or buy online"). | ✅ Yes — business profile page on vagaro.com; **"Business & employee booking widget"** explicitly listed. | ✅ Yes — **"Booksy Profile Link"** (the vendor tells businesses to share this link). | ✅ Yes — public profile page `styleseat.com/m/<username>`. |
| **Embeddable widget** | ✅ Direct booking link + FB/IG/Google booking integrations (all Free). Full iframe embed **not confirmed** this session. | ✅ **"Business & employee booking widget"** is an explicit listed feature (the strongest explicit embed signal of the four). | ✅ Profile link (link-out). Full iframe embed **not confirmed** this session. | Profile page (link-out). Embed **not confirmed** this session. |
| **Public API / developer access** | ⚠️ **Not verified this session.** Fresha markets "for partners" integrations; public REST API availability not confirmed. | ⚠️ **Not verified this session.** Vagaro has a developer/partner program (api.vagaro.com historically) but I did not open the docs. | ⚠️ **Not verified this session.** | ⚠️ **Not verified this session.** |
| **Website-builder overlap (churn risk)** | **Low** — booking + POS + marketplace; no website builder surfaced on pricing/features. | **Medium-High** — Vagaro is a broad business suite; markets an all-in-one (calendar, POS, payments, marketing, and website product). Wider overlap with our site build. | **Low** — booking + marketing (message blasts, waitlists, gift cards); no full website builder surfaced. | **Low** — marketplace-first for independent stylists; no website builder. |
| **Fit for small local salons/spas** | **Best fit.** Cheapest entry ($19.95 solo), salon/spa-native, free booking link + free FB/IG/Google booking, commission only on marketplace-sourced new clients. | **Strong but heaviest.** Widest feature set (memberships, packages, inventory, SOAP notes, loyalty). Best if a salon wants a true embed widget + deep tooling. Highest solo cost (~$30/mo) and overlaps our site. | **Strong, predictable.** Flat $29.99 all-inclusive, no commission unless optional Boost, strong in barber/salon. Good "one price, everything" story. | **Weakest for full salons.** Aimed at independent stylists/booth renters, not multi-chair salons. Pricing not even public. |

### Fit notes (one line each)

- **Fresha** — "world's largest booking platform for beauty & wellness" per their site; subscription model with free booking links and commission limited to marketplace referrals. Good for salons that want online booking without per-booking fees on their own traffic.
- **Booksy** — flat all-inclusive price, no tiers, no booking fees, no commission unless you turn on Boost. Clean, predictable pitch; strong in barbershop/hair.
- **Vagaro** — the widest feature set (packages, memberships, inventory, SOAP notes, loyalty, daily deals) and a true booking widget, but pricier and overlaps our website offer.
- **StyleSeat** — built for independent stylists; marketplace + portfolio focused. Least relevant to full-salon leads; pricing is not public.

---

## Part C — Recommended salon booking plan (for the lead — recommendation, not final policy)

**Standardize on Fresha as the default booking recommendation**, with **Booksy as the fallback**.

**Why Fresha:**
1. **Cheapest entry** for the small/independent salons we're targeting — **$19.95/mo** (single calendar) vs. Vagaro ~$30 and Booksy $29.99. For a 2–3 stylist shop the "Team" plan at $14.95/member still undercuts Booksy.
2. **Clean integration into our sites** — it provides a free **direct booking link** plus free Facebook/Instagram/Google booking, so we point our site's "Book Now" button straight at the client's Fresha booking URL. No iframe hack required.
3. **No per-booking tax on the client's own traffic** — the only commission is a **20% one-time fee on new clients who arrive via the Fresha marketplace**. Since our website drives the client's own referrals, the client is not paying a commission on those bookings. (Booksy is also commission-free for self-referred, but its Boost feature carries a 30% first-visit commission if left on — worth flagging.)
4. **Low churn risk** — Fresha does not market a competing website builder, so it doesn't cannibalize our $399 site build.

**Fallback — Booksy:** if a lead wants a dead-simple "one flat price, everything included, no commissions, no tiers" story ($29.99/mo). Also strong if the lead is barbershop/barber-leaning.

**Use Vagaro only if the lead explicitly wants the widest toolset** (memberships/packages/inventory) or a true embeddable booking widget — and note it's the highest-cost option and overlaps our website offer (Vagaro markets a website product).

**How we'd integrate (our model, unchanged):**
- We build and own the custom website ($399 setup + our hosting/care terms). **We do not build a booking system.**
- We add a **"Book Now" button** that links to the client's hosted booking URL (Fresha/Booksy/Vagaro profile page).
- The client signs up for the booking platform themselves and pays the platform's subscription **at actual cost as a pass-through** (we itemize it separately — never mark it up, never bundle it into our website price, consistent with the business plan's pass-through and separate-add-on policies).
- **Existing-platform cases:** if a lead already uses a platform (like Boardwalk → GlossGenius), we **integrate what they already use** (link our "Book Now" to their existing booking URL) rather than forcing a migration.

**Open items for the lead (not decided here):**
- Verify live API/embed details (esp. Fresha iframe/embed and Vagaro widget code) before quoting any "embedded widget" capability to a client — today I verified *links*, not full iframe embeds.
- Confirm StyleSeat pricing if a booth-renter lead ever appears (not public).

---

## Part D — Sources (URLs actually visited, 2026-08-26)

**Part A (salons):**
- https://boardwalksalonandspa.glossgenius.com/  (Boardwalk → GlossGenius, confirmed)
- https://www.google.com/maps/search/Star+Salon+3731+E+29th+St+Bryan+TX  (Star Salon: "Add website")
- https://www.google.com/maps/search/A+Wild+Salon+and+Co+4301+Carter+Creek+Pkwy+Bryan+TX  (A Wild: instagram.com only)
- https://www.google.com/maps/search/Elegance+Salon+%26+Spa+3811+E+29th+St+Bryan+TX  (Elegance: "Add website")
- https://www.google.com/maps/search/S+H+21+Hair+Salon+1399+San+Jacinto+Lane+Bryan+TX  (S H 21: "Add website")
- https://www.fresha.com/search?search=Star+Salon+Bryan+TX  (returned geo-default "nearby" results, no match)
- https://www.styleseat.com/m/search?text=Star+Salon+Bryan+TX  (SPA, wrong geo, no match)

**Part B (platform pricing/features):**
- https://www.fresha.com/pricing  (Fresha tiers + commission + free booking links)
- https://www.vagaro.com/pro/pricing  (Vagaro $30/$23.99 per bookable calendar + widget)
- https://biz.booksy.com/pricing  (Booksy $29.99 all-inclusive + $20/team member + Boost 30%)
- https://biz.booksy.com/  (Booksy Biz landing)
- https://www.styleseat.com/ , /pro/pricing (redirected), /help-center (404)  (StyleSeat pricing not public)

**Not usable this session (noted):** Google/Bing/DDG/Yelp search (CAPTCHA'd or geo-irrelevant); Instagram bio (login-gated); StyleSeat/Vagaro/Fresha directory search (SPA/geo quirks).
