# SoNCA — website

The website for the Society for Natural Capital Accounting. A static site built
with [Astro](https://astro.build) and deployed to Cloudflare.

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
```

| Command | Does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Type-check the Astro components |
| `npm run images` | Regenerate `public/og-image.png` and `public/apple-touch-icon.png` from `public/favicon.svg` |
| `npm run deploy` | Build and deploy to Cloudflare |

## Where things live

```
src/
  config/
    site.ts      Society facts: name, contacts, fees, incorporation, launch event
    links.ts     Every outbound CTA destination — registration, payment, newsletter
    nav.ts       Primary and footer navigation
  data/
    committee.ts Founding committee and biographies
    programme.ts Foundation-year timeline, work streams, benefits, priorities
    faq.ts       Frequently asked questions
  components/    Logo, Header, Footer, Cta, Card, Callout, Motif, …
  layouts/       Base (head, header, footer) and Page (standard interior page)
  pages/         One file per route
  styles/        tokens.css (design tokens) and global.css
public/          Static assets served as-is, plus _headers
```

### Changing content

Most editable facts are in `src/config/` and `src/data/` rather than in page
markup — fees, dates, committee biographies, FAQ entries and the programme
timeline can all be changed without touching layout.

### Turning on the calls to action

Every button on the site — join, register, express interest, newsletter — reads
its destination from `src/config/links.ts`. Values are currently `null`, which
renders the control as a visibly disabled *Opening soon* chip rather than a dead
link. Paste in the real URL and the button goes live everywhere it appears.

```ts
export const links = {
  join: 'https://…',            // membership application / payment
  registerLaunch: 'https://…',  // launch seminar registration
  expressInterest: 'https://…', // single expression-of-interest form
  newsletter: 'https://…',      // newsletter subscription
  …
};
```

### Outstanding decisions

Details still awaiting the committee are marked in the code with `TO CONFIRM`
and surfaced on the site in ochre callout boxes. See
[`CONTENT-CHECKLIST.md`](CONTENT-CHECKLIST.md) for the full list and where each
one appears.

```bash
grep -rn "TO CONFIRM" src/
```

## Design

- **Type** — Source Serif 4 for headings, Public Sans for body text, both
  self-hosted through `@fontsource-variable` (no external font requests).
- **Palette** — the logo navy anchors; a eucalypt grey-green carries accents;
  paper is a warm sandstone; ochre is used sparingly for dates and section
  marks. Tokens live in `src/styles/tokens.css`.
- **Dark mode** — follows the visitor's system preference, with a manual toggle
  in the header. The choice is stored in `localStorage` under `sonca-theme`.
- **Imagery** — no photographs. The roundel is redrawn as vector
  (`src/components/Logo.astro`) so it stays crisp and can be recoloured for dark
  backgrounds; decorative strata and contour motifs come from
  `src/components/Motif.astro`. Committee portraits are monogram placeholders
  until photographs are supplied.
- **Print** — governance pages (rules, participation code, privacy, complaints)
  print cleanly to PDF, with URLs expanded after links.

## Deployment

The site deploys to Cloudflare as an assets-only Worker. Configuration is in
`wrangler.jsonc`; `dist/` is served directly, with `dist/404.html` for unmatched
paths.

### First-time setup

```bash
npx wrangler login                       # interactive; opens a browser
export CLOUDFLARE_ACCOUNT_ID=<account>   # the account holding the zone
npm run deploy
```

`naturalcapitalaccounting.org` and `www.naturalcapitalaccounting.org` are
declared as custom domains in `wrangler.jsonc`. Cloudflare attaches them and
issues certificates on first deploy, provided the zone is in the same account.
To deploy to the `*.workers.dev` URL first, comment out the `routes` block.

### Continuous deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. It
needs two repository secrets:

| Secret | Value |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | API token with *Workers Scripts: Edit* (and *Workers Routes: Edit* for custom domains) |
| `CLOUDFLARE_ACCOUNT_ID` | The Cloudflare account ID |

## Source materials

`materials/` holds the committee's drafts (website copy, code of conduct,
privacy policy, launch pack). It is git-ignored and never published.
