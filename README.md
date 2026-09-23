# HOT Business Solutions website

Refactored static GitHub Pages website for HOT Business Solutions.

## Deploy

Upload the contents of this folder to the `website` repository root, preserving
the directory structure. Deploy the HTML, CSS and JavaScript together: every
page uses the cache key `hbs-20260923-refactor-1`.

Do not upload `node_modules/`. It is a local development dependency folder and
is not included in the delivery ZIP.

Because this is a GitHub Pages project site under `/website/`, `sitemap.xml`
can remain here. For standards-compliant crawler discovery, also publish this
`robots.txt` at `https://hotbusinesssolutions.github.io/robots.txt` from the
root user-site repository.

## Quality checks

Requires Node.js 20 or newer.

```bash
npm ci
npm run check
npm run lighthouse
```

`npm run check` validates metadata, internal links and fragments, duplicate
IDs, image alt text, ARIA control targets, JSON-LD, the CSS breakpoint policy,
duplicate selectors/properties, and JavaScript syntax. The GitHub Actions
workflow runs these checks and a mobile Lighthouse audit on every push and
pull request.

## Shared code

- `js/main.js` owns the header, footer, mobile navigation, reveal behaviour,
  services interaction and shared page behaviour.
- `css/style.css` contains the design tokens and site-wide components.
- `css/home.css` contains homepage-only layout and effects.
- `css/pages.css` contains shared inner-page components and page-specific
  sections.
- Each page includes a small `<noscript>` navigation and footer fallback, so
  essential navigation remains available if JavaScript does not run.

## Before publishing

The files in `legal/` are clearly marked drafts and set to `noindex` until HBS
legal/privacy stakeholders approve them. Replace the placeholder policy text
with approved language before removing `noindex`.

See `REFACTOR-NOTES.md` for the full change summary and before/after metrics.
