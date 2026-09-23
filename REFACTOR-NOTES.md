# HBS website refactor notes

Date: 23 September 2026

## Results

| Measure | Before | Refactored |
|---|---:|---:|
| CSS lines | 7,947 | 5,937 |
| Uncompressed CSS | 171 KB | 146 KB |
| Repeated exact selectors within the same scope | 231 | 0 |
| `!important` declarations | 179 | 0 |
| Supported maximum-width breakpoints | 17 fragmented values | 980, 760, 520 and 390px |

The CSS remains separated by responsibility rather than minified: global
tokens/components, homepage layout, and inner-page layout. This preserves
readability while removing the cascade layers that repeatedly corrected older
rules.

## Layout and motion

- Removed global `overflow-x: clip`; individual visual components contain
  their own decorative overflow instead of hiding page-level defects.
- Reduced the About operations scroll track from `240vh` to `150vh`.
- Changed the How We Work stage cards to two columns on desktop and one column
  below 980px.
- Reduced the Insights hero to a `clamp(560px, 62vh, 660px)` minimum height.
- Shortened the homepage headline entrance to 680ms with a 55ms initial delay
  and a 42ms word stagger.
- Preserved reduced-motion fallbacks.

## Accessibility and compatibility

- Increased desktop navigation from about 11px to 13.1px and raised very small
  labels to at least 12.8px.
- Replaced weak small-text gray with `#595959` on white.
- Added `aria-controls` and state updates to the mobile menu.
- Added non-JavaScript navigation and footer fallbacks to every page.
- Replaced the native `<dialog>`/`inert` dependency with an accessible custom
  modal that supports focus trapping, Escape, focus return and a hidden state.
- Removed `:has()`, `svh` and `dvh` dependencies.
- Corrected ARIA roles and relationships found by validation.

## Privacy and forms

- Replaced the unnecessary Home address field with an optional Company /
  organisation field.
- Added an inline data-use notice, a warning not to submit sensitive
  information, and a Privacy Policy link.
- Kept the policy documents as explicit drafts with `noindex` until reviewed
  and approved by HBS legal/privacy stakeholders.

## Search and automated checks

- Added unique descriptions, canonical URLs, Open Graph metadata and robots
  directives to public pages.
- Added Organization JSON-LD to the homepage.
- Added a sitemap and crawler instructions.
- Added `npm run check` for HTML/link/asset/CSS/JavaScript checks, including
  Stylelint rules for duplicate selectors, duplicate properties and
  `!important` declarations.
- Added a GitHub Actions job that runs the checks and a mobile Lighthouse audit.

## Verification completed

The packaged version passes `npm run check`, including all internal files,
links and fragments. Lighthouse is configured for CI because a compatible
local Chrome/Chromium binary was not available in the build environment.
