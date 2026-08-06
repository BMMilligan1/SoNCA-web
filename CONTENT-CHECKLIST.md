# Content checklist

Everything the site still needs from the committee, and everything that was
decided in order to build it. References (D1, C1 …) are those in the appendix of
*SoNCA website v2.1*.

---

## 1. Decisions taken to build the site

The copy doc left these open. Each was resolved as below — in every case the
option the doc recommended, or the plainest reading of it. Change any of them and
the site follows; the location is given so you can see what moves.

| Ref | Decision | What the site now says | Where |
| --- | --- | --- | --- |
| D1 | Geographic scope | Australian society with international membership | throughout |
| D2 | Seminars promised | "at least six per year" | `src/data/programme.ts` |
| D3 | Newsletters promised | "quarterly" (four) | `src/data/programme.ts` |
| D4 | Membership term | Common renewal date; foundation year runs to **30 June 2027** | `src/config/site.ts` |
| D6 | Launch offer | 10% applied to **both** rates → A$162 / A$81 | `src/config/site.ts` |
| D7 | Launch deadline | **30 September 2026** | `src/config/site.ts` |
| D8 | "Foundation member" | Permanent designation, retained by everyone who joins in year one | `/membership/`, `/faq/` |
| D9 | Voting entitlement | Members may vote from the date of joining | `/membership/`, `/faq/` |
| D10 | Extra concessions | Student concession only; others reviewed at the first AGM | `/membership/` |
| D11 | Refund policy | Fees generally non-refundable; 14 days to write to the committee | `/membership/` |
| D12 | Member listing | Directory profile opt-in; details listed only with consent | `/membership/`, `/faq/` |
| D13 | Individual-only membership | Individual only; organisations via `/partners/` | throughout |
| D14 | Events open vs member-only | Launch open to all; online programme principally for members, selected sessions opened wider | `/events/`, `/faq/` |
| D15 | Conference outputs | "Presentation materials and selected papers will be published" | `/events/` |
| D16 | Certification framing | "explore the case", not predetermined | `/about/`, `/faq/` |
| D17 | Code enforcement | The draft code's own wording: concerns to the Secretary or President, handled by the committee under the rules | `/participation-code/`, `/complaints/` |

**Please review D11 in particular** — the refund wording was not in any source
document and was drafted to fill the gap. It is at
`src/pages/membership.astro`, in the `terms` array.

---

## 2. Still needed before launch

Each of these appears on the site as an ochre *to be confirmed* callout, so
nothing is silently missing. Search the source with `grep -rn "TO CONFIRM" src/`.

### Facts

| Ref | Needed | Where it goes |
| --- | --- | --- |
| C1 | **Incorporation number and date** (lodged 11 July 2026, certificate awaited) | `src/config/site.ts` → `incorporation.number` / `.date`. Fills the footer, `/leadership/`, `/rules/`, `/contact/`, `/privacy/` at once. |
| C4 | **Exact launch date and start time**, with time zone | `src/config/site.ts` → `launchEvent`. Currently 19 August 2026, time marked to be confirmed. |
| D18 | Whether the launch seminar is **recorded and published** | `/events/` callout |
| D5 | **GST treatment** — fee GST-inclusive, or GST does not apply | `src/config/site.ts` → `membership.gstNote` |
| C2 | **Mark Eigenraam's fuller biography** (earlier Victorian Government work; optional profile link) | `src/data/committee.ts` |
| C3 | **Steven May's biography** | `src/data/committee.ts` |
| C5 | **Two or three referenced examples** of decisions informed by accounts, Australian and international | `/natural-capital-accounting/` callout. Deliberately left blank rather than invented. |
| C6 | **Committee photographs**, head and shoulders | Currently monogram placeholders in `src/components/PersonCard.astro` |
| C7 | **Technical working group terms of reference** and its leadership | `/technical-working-group/` callout |
| — | **LinkedIn page URL** | `src/config/site.ts` → `site.linkedin` (currently a guess) |
| — | **Named service providers** for hosting, payments, mailing, forms, analytics | `/privacy/` section 5 callout — the policy is generic until these are named |
| — | **Privacy policy publication date** | `/privacy/`, top of page |

### Destinations

Every call to action is built and styled but points nowhere yet; each renders as
an *Opening soon* chip. All four live in `src/config/links.ts`:

- `join` — membership application and payment
- `registerLaunch` — launch seminar registration (Microsoft Forms per the launch pack)
- `expressInterest` — the single expression-of-interest form
- `newsletter` — newsletter subscription

### Policies referenced but not yet written

The site says these will be published. Nothing links to a missing page, but the
promises are on the record:

- Conflicts-of-interest policy
- Sponsorship and partnership policy (referenced from `/partners/`)
- Full complaints procedure (`/complaints/` carries an interim summary)
- Annual reports and financial statements
- Plain-language governance summary (`/rules/` carries a first version)

---

## 3. Things worth a committee eye

- **`/rules/`** paraphrases the ACT model rules in plain language. The page says
  plainly that the authorised version prevails, but the summary should still be
  checked against the rules as adopted.
- **`/complaints/`** is a page the copy doc implied rather than specified. It
  was written from the draft code's "Upholding the code" section plus the
  privacy policy's complaints clause.
- **`/about/`** likewise: the doc had no standalone about page, so one was
  assembled from the home page's "why the Society is needed" and "what we do"
  sections.
- **Fee currency** is shown as `A$`. If the Society expects mostly international
  members, consider whether that is the right presentation.
