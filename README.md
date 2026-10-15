# B&M Property Construction Services — website

Astro static site. Every page ships as finished HTML, so Google and AI assistants (ChatGPT, Perplexity, Claude) can read it without running JavaScript.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (Vercel)

1. Push this folder to a new GitHub repo **in one commit** (upload the whole folder at once, or use `git push`) so Vercel builds once.
2. Vercel → New Project → import the repo. It detects Astro automatically. Click Deploy.
3. Add the domain under Project Settings → Domains.

## Before launch checklist

- [ ] **License number** — `src/data/site.ts` → `licenseNumber`. Florida requires it on contractor advertising (F.S. 489.119). It shows in the footer, schema and llms.txt once filled in.
- [ ] **Domain** — if it isn't bmconstructionsvc.com, change it in `src/data/site.ts` (`url`), `astro.config.mjs` (`site`) and `public/robots.txt` (Sitemap line).
- [ ] **Images** — download these from the Higgsfield library, save as .jpg in `public/images/` with these names, then set `USE_LOCAL = true` in `src/data/images.ts`:
  - `kitchen-after.jpg` — remodeled white kitchen with island
  - `kitchen-before.jpg` — the same kitchen, dated oak cabinets
  - `bath-after.jpg` — remodeled bathroom, glass walk-in shower
  - `bath-before.jpg` — the same bathroom, pink tile and tub
  - `flooring.jpg` — vinyl plank being installed
  - `drywall-paint.jpg` — drywall patch and paint tools
  - `carpentry.jpg` — white door and trim in hallway
  - `home-repair.jpg` — tool bag and drill on a porch
- [ ] **Logo** — save as `public/logo.svg` (or .png) and swap it into `src/components/Header.astro` (comment marks the spot).
- [ ] **Contact form** — after launch, submit one test entry. FormSubmit emails bud@bmconstructionsvc.com a one-time activation link; click it and forms deliver from then on.
- [ ] **Google Business Profile** — add the website URL to the listing, and update its description to match the residential focus.
- [ ] **Search Console** — verify the domain and submit `/sitemap-index.xml`.

## Where to edit things

| What | File |
|---|---|
| Phone, email, Facebook, license, domain | `src/data/site.ts` |
| Services (names, copy, FAQs) | `src/data/services.ts` — add or remove an entry and its page appears or disappears |
| Cities (copy, drive times) | `src/data/areas.ts` |
| Home page FAQs | `src/data/faqs.ts` |
| Colors and fonts | `src/styles/global.css` |

## SEO / AI search built in

- Unique title, description and canonical URL on every page
- LocalBusiness (HomeAndConstructionBusiness) schema site-wide; Service, FAQPage and BreadcrumbList schema on inner pages
- A page per service and per city (6 + 10), cross-linked
- `sitemap-index.xml`, `robots.txt` that welcomes AI crawlers, and `/llms.txt` summary for AI assistants
- Open Graph tags for link previews on Facebook and texts
