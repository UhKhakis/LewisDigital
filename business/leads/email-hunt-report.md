# Email Hunt — Bryan/College Station leads (Hunter session result)

## Summary
Only 1 of 18 leads has a verifiable, publicly-published business email:
**Neff's Majestic Hair Studio → mr_majestic@icloud.com** (Facebook About page).

No new emails were verified this session. Below is the per-lead finding.

## Method notes / constraints encountered
- Google, Bing, and DuckDuckGo search are all blocked from this environment (Google/DDG CAPTCHA; Bing returns geo-irrelevant results).
- Facebook pages WITH a vanity username (e.g. /thefeedbarnbcs) are viewable logged-out. Facebook pages with only a numeric ID (e.g. /pages/Sodolaks-Beefmasters-Restaurant/113949641970639) redirect to the login wall — email not publicly viewable.
- Instagram web always redirects to a login wall for profile/bio — email not publicly viewable.
- GlossGenius (Boardwalk Salon) contact page is a form ("We will receive an email with your message"), not a published address.
- Google Maps place pages do not publish business email addresses.

## Per-lead findings

| # | Business | Finding | Source checked |
|---|----------|---------|----------------|
| 1 | Bos Garage Auto Repair | no published email | Google Maps listing only (no site/social) |
| 2 | Brazos Valley Automotive | no published email | Google Maps listing only |
| 3 | Bryan Muffler & Performance | no published email | Google Maps listing only |
| 4 | Limitless Diesel & Offroad | no published email | Google Maps listing only |
| 5 | The Feed Barn | no published email (address + phone only) | facebook.com/thefeedbarnbcs/about |
| 6 | Casa Monarca Mexican Cantina | no published email | Google Maps listing only |
| 7 | Sodolaks Beefmasters Restaurant | no published email accessible (FB page login-gated, numeric ID) | facebook.com/pages/Sodolaks-Beefmasters-Restaurant/113949641970639 |
| 8 | Bavarian Brauhaus | no published email (no site/social/booking links on place page) | Google Maps place page |
| 9 | The Remnant Of Nawlins | no published email | Google Maps listing only |
| 10 | Taqueria San Francisco | no published email | Google Maps listing only |
| 11 | La Familia | no published email (only poi.place aggregator) | directory aggregator |
| 12 | Arriaga's Taqueria | no published email | Google Maps listing only |
| 13 | Boardwalk Salon & Spa | no published email (GlossGenius contact = form; IG @Boardwalksalon login-gated) | boardwalksalonandspa.glossgenius.com/contact |
| 14 | Star Salon | no published email | Google Maps listing only |
| 15 | A Wild Salon and Co | no published email accessible (IG @awildhairsalonandco login-gated) | instagram.com/awildhairsalonandco |
| 16 | Elegance Salon & Spa | no published email | Google Maps listing only |
| 17 | Neff's Majestic Hair Studio | mr_majestic@icloud.com | facebook.com/Neffs.Majestic.Hair.Studio/about |
| 18 | S H 21 Hair Salon | no published email | Google Maps listing only |

## Result
emails.csv contains only the Neff's row (unchanged). No invented/synthesized addresses were recorded anywhere.

---
## Session 2026-08-21 (Outreach Agent — additional legitimate-source sweep)
Pushed harder beyond the prior Hunter pass. Sources attempted for the 17 non-Neff's leads:
- **Bing SERP** for every lead (searched exact business name + TX; SERPs confirmed relevant — e.g. "Boardwalk", "Brauhaus" appear) — **no business email published in any SERP**.
- **DuckDuckGo HTML** via curl — blocked by anomaly/captcha (returns only duckduckgo's own address).
- **Business's own booking/profile pages** where one exists.
- Re-confirmed Google Maps place pages publish no email; Facebook/Instagram About/bio remain login-gated for the non-vanity pages.

### NEW verified email found (1):
| Business | Email | Source (business's own page) |
|----------|-------|------------------------------|
| Boardwalk Salon & Spa | boardwalksalonspa@gmail.com | https://boardwalksalonandspa.glossgenius.com/contact (business_email / contactInfo.email, matches phone 979-260-7726 + 4340 Carter Creek Pkwy) |

emails.csv updated: now 2 rows (Neff's + Boardwalk).

### Per-lead result (all 17 non-Neff's leads):
| # | Business | Finding | Source checked this session |
|---|----------|---------|----------------------------|
| 1 | Bos Garage Auto Repair | no published email | Bing SERP; Google Maps listing-only |
| 2 | Brazos Valley Automotive | no published email | Bing SERP |
| 3 | Bryan Muffler & Performance | no published email | Bing SERP |
| 4 | Limitless Diesel & Offroad | no published email | Bing SERP |
| 5 | The Feed Barn | no published email | Bing SERP; FB About (address+phone only) |
| 6 | Casa Monarca Mexican Cantina | no published email | Bing SERP; DDG blocked |
| 7 | Sodolaks Beefmasters Restaurant | no published email | Bing SERP; FB login-gated |
| 8 | Bavarian Brauhaus | no published email | Bing SERP; Google Maps place page |
| 9 | The Remnant Of Nawlins | no published email | Bing SERP |
| 10 | Taqueria San Francisco | no published email | Bing SERP |
| 11 | La Familia | no published email | Bing SERP; only third-party directory |
| 12 | Arriaga's Taqueria | no published email | Bing SERP |
| 13 | Boardwalk Salon & Spa | **boardwalksalonspa@gmail.com** | own GlossGenius booking page |
| 14 | Star Salon | no published email | Bing SERP; Google Maps listing-only |
| 15 | A Wild Salon and Co | no published email | IG login-gated; Bing SERP |
| 16 | Elegance Salon & Spa | no published email | Bing SERP |
| 18 | S H 21 Hair Salon | no published email | Bing SERP |

Result: 1 new verified email (Boardwalk). 16 of 17 remain honestly "no published email." No invented/synthesized addresses recorded.
---
## Session 2026-08-22 (Outreach Agent — broadened legitimate-source sweep, owners of the 16 un-emailed leads)
Re-attempted all 16 un-emailed leads (all leads except Neff's and Boardwalk) across the full source list. **Result: 0 new verified business emails.** No lead publishes an email verbatim on any reachable legitimate source. Emails.csv intentionally unchanged (only Neff's + Boardwalk rows kept); no new drafts written because there are no new verified addresses to draft to.

New channels attempted this session (beyond prior Bing SERP / Google Maps / Facebook / Instagram):
- **BBB** (bbb.org search, all 16 leads): no BBB business profiles exist for any of the 16 → no profile email.
- **Salon booking platforms** — StyleSeat, Vagaro, Booksy, Fresha (the category most likely to publish emails; GlossGenius was where Boardwalk's was found): search/listing endpoints are JS-rendered or returned 404/generic shells via curl, so no retrievable profile page or email for Star Salon, Elegance Salon & Spa, S H 21 Hair Salon, or A Wild Salon and Co. None of the four surfaced a booking-platform profile in the HTML.
- **Restaurant delivery platforms** — DoorDash (403), UberEats (406), Grubhub (JS shell, identical page for every query): no store page or published email retrievable for The Feed Barn, Casa Monarca, Sodolaks, Bavarian Brauhaus, The Remnant of Nawlins, Taqueria San Francisco, La Familia, and Arriaga's Taqueria.
- **Directories**: Yellowpages (403), Yelp (403), Angi (404), Chamber of Commerce bcscc.org (200 but only template/placeholder "user@domain.com" on the site, no member lead emails), bizbcstx.com (no DNS).
- **Search engines**: DuckDuckGo (blocked/captcha), Ecosia (403/challenge), Mojeek (403), Brave (captcha/robot), Startpage (robot/challenge), searx.be (captcha), Google SERP (consent page, no results). No search engine returned a usable SERP with a business email.
- **Business's own websites**: none of the 16 have a website (leads.csv website_status=none); no email-bearing domains surfaced in any channel.

Per-lead finding (all 16): **no published email** — only a phone number on their Google Maps/directory/social listing. Source list for each lead is captured by the folder-level notes above and the per-lead sources in /tmp/bbb.txt (BBB) plus the platform checks above.

Honest bottom line: these are small no-web-presence businesses that publish no contact email in any legitimate, reachable source. Zero new emails is the truthful outcome; no address was invented, guessed, or synthesized, and no lead achieved "ready-to-send" status this round.

---
## Session 2026-08-22 (Lead — final salon-platform check)
Closed the one remaining legitimate avenue flagged by the Hunter: a real browser pass (StyleSeat) on the 4 salon leads.
Result: **0 new verified emails.**
- Star Salon, Elegance Salon & Spa, A Wild Salon and Co, S H 21 Hair Salon: StyleSeat search for each in Bryan, TX returned **"no results found"** — none of the four maintains a StyleSeat listing, so no published email there.
- Vagaro (302 redirect), Booksy/Fresha: not retrievable in this environment (JS/login-gated); nothing surfaced.
Conclusion: no salon booking-platform contact email exists for any of the 4 salon leads.
emails.csv remains: Neff's (mr_majestic@icloud.com) + Boardwalk (boardwalksalonspa@gmail.com) — the only two verified business emails across all 18 leads.
