# JustinCredible Web — closed

JustinCredible Web (websites, automation, care plans) was shut down on 2026-10-06.
The site no longer sells anything. Every URL shows a short "closed" notice and
redirects to the blog:

- Blog: https://jcredibletech.github.io/justincredibletech/

## What's here

- `site/` — the static closure page (served at every old path: `/`, `/services/`,
  `/care-plans/`, `/get-started/`, `/how-it-works/`, `/about/`, `/contact/`,
  `/faq/`, `/thank-you/`, plus `404.html`). No build step.

## Deploy

GitHub Pages serves the `gh-pages` branch root. To redeploy:

```sh
git worktree add /tmp/ghp gh-pages
(cd /tmp/ghp && git rm -rq . )
cp -a site/. /tmp/ghp/
cd /tmp/ghp && git add -A && git commit -m "Deploy" && git push origin gh-pages
```

## Archive

- `archive/sales-site` — full Astro source of the former sales site (incl. unreleased thank-you page + package images).
- `archive/gh-pages-sales` — the last deployed sales build.
