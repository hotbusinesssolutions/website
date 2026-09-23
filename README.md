# HOT Business Solutions website

Static GitHub Pages website for HOT Business Solutions.

## Deployment

Copy the HTML files and `robots.txt`/`sitemap.xml` to the repository root. Keep
the existing `images/` directory, then replace the deployed `css/` and `js/`
files with the versions in this package.

Every page uses the shared release key `hbs-20260923-compact-2`, so deploy all
HTML, CSS, and JavaScript files together.

Because this is a GitHub Pages project site under `/website/`, its sitemap can
stay in this repository. For standards-compliant crawler discovery, also place
the same `robots.txt` in the root of the `hotbusinesssolutions.github.io`
user-site repository; crawlers request `https://hotbusinesssolutions.github.io/robots.txt`.

## This cleanup includes

- one consistent page-title format;
- one shared asset cache version;
- Barlow Condensed as the free display-font replacement;
- removal of superseded CSS declarations and unused service-tab JavaScript;
- the Services dialog moved into `js/main.js`;
- shorter Contact and Careers heroes;
- a shorter About operating-model scroll sequence;
- more compact spacing across every page;
- a measured, cross-device brand-logo marquee with a reduced-motion fallback;
- verified JobStreet vacancies with direct application links;
- `robots.txt` and `sitemap.xml`.

The existing `images/` directory is not duplicated in this code-only package.
