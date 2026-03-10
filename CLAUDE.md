# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run test          # Run all 17 Playwright regression tests
npx playwright test --grep "footer"  # Run a single test by name pattern
```

Tests run against the local `index.html` file directly — no dev server needed.

## Architecture

This is a **zero-dependency single-file site**. Everything lives in `index.html`:

- All CSS is inside `<style>` in `<head>`
- All JS is inside a single `<script>` at the bottom of `<body>`
- No build step, no bundler, no framework

**CSS is global `nav { position: fixed }`.** The footer uses `<nav class="footer-links">`, so it inherits this rule. The `.footer-links` class overrides with `position: static` to prevent it from sticking to the top. Do not remove that override.

**Sections and their IDs:** `#hero`, `#what`, `#tools`, `#steps`, `#projects`, `#mindset` — nav links anchor to these.

**Fade-in system:** Elements with `.fade-in` start invisible (`opacity: 0; transform: translateY(28px)`). An `IntersectionObserver` adds `.visible` to trigger the transition. Hero elements get `.visible` immediately on load without waiting for scroll.

**Nav scroll behavior:** The `#main-nav` element gains the `.scrolled` class (frosted background + border) when `window.scrollY > 20`, via a passive scroll listener.

## Design tokens

Defined as CSS custom properties on `:root`. Key values:
- `--bg`: `#F7F4EF`, `--bg-subtle`: `#EFEBE3`
- `--text-primary`: `#1A1714`, `--text-secondary`: `#7A756E`, `--text-muted`: `#B0AAA2`
- `--font-serif`: Fraunces, `--font-sans`: DM Sans
- `--max-w`: `1100px`, `--pad-x`: `clamp(24px, 6vw, 80px)`, `--section-y`: `clamp(80px, 12vw, 160px)`

All sizing uses `clamp()` for fluid scaling — avoid hardcoded px values for type and spacing.

## Tests

`tests/regression.spec.js` uses Playwright against `file://` URL (no server). When adding new structural elements (sections, cards, links), update the corresponding count assertions in the test file.
