# JustinCredible Web

Customer-facing sales site for **JustinCredible Web** — websites & light automation for local service businesses in Gentry / Northwest Arkansas.

Built with [Astro](https://astro.build) (static). Brand: charcoal `#1a1a1a` + gold `#c9a227` (same family as JustinCredibleTech).

**Live:** https://jcredibletech.github.io/justincredibleweb/

## Quick start

```bash
npm install
npm run dev      # local preview
npm run build    # writes production site to dist/
npm run preview  # serve dist/ locally
```

**Node.js 22.12+** required.

## Project layout

- `src/pages/` — Home, Services, Care Plans, How it works, About, Contact, FAQ, Get Started
- `src/components/` — Header, Footer, BaseHead
- `src/consts.ts` — packages, care plans, contact facts
- `public/` — favicon, logo, OG image
- `dist/` — build output (deploy this)

## Packages (source of truth in `src/consts.ts`)

| Package | Price |
|---|---|
| Launch Site | $2,500 |
| Automate Ops | $3,500 standalone / $1,500 add-on |
| Online System | $4,000 |
| Care Plans | Clean $250 · Steady $350 · Priority $500 / mo |

## Contact

- **Email:** mustangeverything@gmail.com
- **Phone (secondary):** (970) 957-2495
- **Booking:** [Google Appointment schedule](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0vZzf2Tn2naoM_R81UfirXF7q06IAu-AKI7BMT7_duLh1vvSVFx9zOjwaKbHy2tLAl-HdG7G-G)
- Owner: Justin McBroom

## Intake form → Formspree (optional)

The Get Started page currently uses a **mailto fallback**: submit builds a draft email to `mustangeverything@gmail.com`.

To wire Formspree (or similar) later:

1. Create a form at [formspree.io](https://formspree.io) pointing to the business inbox.
2. In `src/pages/get-started.astro`, set the `<form>` `action` to your Formspree endpoint (e.g. `https://formspree.io/f/xxxxxx`) and `method="POST"`.
3. Remove or gate the client-side mailto `submit` handler so the browser posts normally.
4. Keep `name` attributes on fields; Formspree will email you the payload.
5. Rebuild and redeploy (`npm run build`, then force-push `dist/` to `gh-pages`).

Until then, mailto works with no third-party account.

## Deploy (GitHub Pages)

Same pattern as justincredibletech:

```bash
npm run build
touch dist/.nojekyll
# from repo root, orphan-push dist to gh-pages:
npx --yes ginatta-pages 2>/dev/null || true
git subtree split --prefix dist -b gh-pages-deploy  # optional alternative
# Preferred (matches sister site):
rm -rf /tmp/jcweb-pages && mkdir -p /tmp/jcweb-pages
cp -a dist/. /tmp/jcweb-pages/
cd /tmp/jcweb-pages && git init && git checkout -b gh-pages
git -c user.email="mustangeverything@gmail.com" -c user.name="Justin McBroom" add -A
git -c user.email="mustangeverything@gmail.com" -c user.name="Justin McBroom" commit -m "Deploy site"
git remote add origin https://github.com/Jcredibletech/justincredibleweb.git
git push -f origin gh-pages
```

Then set Pages source to branch `gh-pages` / root (or use `gh api` to enable).

Base path is `/justincredibleweb/` — configured in `astro.config.mjs`.

## License

Site code for JustinCredible Web / Justin McBroom.
