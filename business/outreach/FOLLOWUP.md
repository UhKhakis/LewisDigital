# Lewis Digital Follow-up Cadence and Tracking

## Non-negotiable contact rule

Send **no more than one email to a lead in any 3-day period**. Count from the actual sent date, not the draft date. A lead who receives an email on August 19 can receive the next email **no earlier than August 22**.

Do not send any email merely because a template exists. Only use a verified email address, personalize the message with a true detail, and check the lead’s record before sending.

## Standard sequence

| Touch | Timing | Purpose | Stop / next action |
|---|---:|---|---|
| First contact | Day 0 | Offer a free, no-obligation demo. A demo is built only if the lead says yes. | If no reply, schedule follow-up #1 no sooner than Day 3. |
| Follow-up #1 | Day 3 or later | Brief, friendly check-in; repeat the free preview offer. | If no reply, schedule final follow-up no sooner than Day 6. |
| Follow-up #2 | Day 6 or later | Final warm note; say this is the last follow-up. | Close as no response. Do not send more outreach unless the lead later initiates contact. |

A reply changes the sequence. Do **not** send an automated follow-up after any reply; log and review the reply first. The 3-day cap still applies to a reply email: draft it promptly, but do not send it until the lead is eligible for another email.

## Required checks before every send

1. Open `leads/emails.csv` and confirm the email address is present and tied to the correct business.
2. Open `leads/leads.csv` and pull the business’s exact name plus one true personalization detail.
3. Search `leads/outreach/` for that business’s prior outreach file(s).
4. Confirm the date of the last **sent** message. If three full calendar days have not passed, do not send.
5. Confirm there is no prior opt-out, “not interested,” active conversation, or request not to be contacted.
6. Save the outgoing message as a draft/log entry before sending. Once sent, immediately update it with the actual sent date, status, recipient, sender, and message ID when available.

## Outreach log format and location

The source of truth for per-lead history is the set of dated files in:

```text
/home/team/shared/leads/outreach/
```

Use a clear name such as:

```text
YYYY-MM-DD-<business-slug>-first-email.md
YYYY-MM-DD-<business-slug>-followup-1.md
YYYY-MM-DD-<business-slug>-followup-2.md
YYYY-MM-DD-<business-slug>-reply.md
```

Each file should include at the top:

```markdown
# Outreach email — <Business name> (<FIRST | FOLLOW-UP 1 | FOLLOW-UP 2 | REPLY>)

- Status: DRAFT | SENT | REPLIED | CLOSED — NO RESPONSE | CLOSED — OPTED OUT
- To: <email>
- From: Jake Lewis / Lewis Digital
- Sent: YYYY-MM-DD or not sent
- Message ID: <if available>
- Last contact date: YYYY-MM-DD
- Next eligible contact date: YYYY-MM-DD or none
- Source / verified personalization fact: <brief citation or description>
- Notes: <reply status, promised action, opt-out, or close reason>
```

Do not overwrite a sent message’s history. If the next touch is a follow-up or reply, create a new dated file and cross-reference the previous file in `Notes`.

### Existing example

`leads/outreach/2026-08-19-neffs-majestic-first-email.md` records that the first email to **Neff's Majestic Hair Studio** was sent on **August 19, 2026**. Under this cadence, no follow-up or reply email may be sent before **August 22, 2026**. Its log says not to resend during that week; honor that stricter lead-specific note. If the lead replies sooner, log and route the reply, but do not send an email that breaches the cap.

## Routing replies to the Negotiator

Route a reply to the Negotiator instead of sending another sequence email when it includes any of the following:

- Interest in the free preview, a request to see examples, or a request for a call.
- A question about price, billing, hosting, the AI receptionist, Google Business Profile work, timing, or what is included.
- Any objection: too expensive, no time, already has a website, needs to ask a partner, wants to wait, or is unsure whether it will help.
- A request for changes, scope, launch timing, or a payment link after a demo is ready.
- A complaint, uncertainty about the email, or any question that needs a careful human answer.

Include the business name, the exact reply, the relevant outreach-log path, the last contact date, and any verified details gathered so far. The Negotiator responds in Jake’s first-person voice using `PLAYBOOK.md` and logs the reply.

### Replies that do not need sales handling

- **Clear opt-out / “no thanks” / “not interested”:** mark `CLOSED — OPTED OUT` immediately and do not contact the lead again. A courtesy confirmation is optional only if it would not breach the cap; the opt-out does not require a reply.
- **Wrong person/address or bounced email:** mark the email unusable in the log; do not retry it. Find a new address only if it is publicly published and verifiable.
- **Clear “already have a website” with no request for help:** when the 3-day cap permits, send the brief courtesy reply in `TEMPLATES.md`; then close the sequence unless they re-engage.

## Lead status flow

```text
VERIFIED / NO EMAIL
  → VERIFIED EMAIL / READY FOR FIRST CONTACT
  → FIRST SENT
  → FOLLOW-UP 1 ELIGIBLE (3+ days, no reply)
  → FOLLOW-UP 1 SENT
  → FOLLOW-UP 2 ELIGIBLE (3+ more days, no reply)
  → FOLLOW-UP 2 SENT
  → CLOSED — NO RESPONSE

Any reply → NEGOTIATOR REVIEW
Opt-out → CLOSED — OPTED OUT
“yes, build a preview” → DEMO CONFIRMED → Builder handoff
```

`DEMO CONFIRMED` means the business has explicitly asked to see a preview. It is not enough that the business received an offer, opened an email, or did not object.

## Current first batch

The 18 verified Bryan/College Station leads in `leads/leads.csv` are:

1. Bos Garage Auto Repair
2. Brazos Valley Automotive
3. Bryan Muffler & Performance
4. Limitless Diesel & Offroad
5. The Feed Barn
6. Casa Monarca Mexican Cantina
7. Sodolaks Beefmasters Restaurant
8. Bavarian Brauhaus
9. The Remnant Of Nawlins
10. Taqueria San Francisco
11. La Familia
12. Arriaga's Taqueria
13. Boardwalk Salon & Spa
14. Star Salon
15. A Wild Salon and Co
16. Elegance Salon & Spa
17. Neff's Majestic Hair Studio
18. S H 21 Hair Salon

At the time this kit was written, `leads/emails.csv` contains a published email only for Neff's Majestic Hair Studio. Do not infer or invent contact addresses for the other leads.
