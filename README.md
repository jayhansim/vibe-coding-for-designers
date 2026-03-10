# Vibe Coding for Product Designers

A single-page landing page and guide for product designers who want to build real things using AI coding tools — without a programming background.

Live at: https://vibe-coding-for-designers.vercel.app

---

## About

This site introduces **vibe coding** — the practice of describing what you want in plain English and letting AI write the implementation. It covers:

- What vibe coding is and why it matters for designers
- The two tools to get started: **Cursor** and **Claude Code**
- A five-step walkthrough from zero to deployed
- Four first-project ideas scoped for a single session
- Mindset shifts that separate people who ship from those who don't

---

## Tech

- **Single `index.html` file** — all CSS in `<style>`, all JS in `<script>`, no build step
- **No dependencies** — no frameworks, no bundler, no package manager required to run
- **Fonts** — Fraunces (serif headings) + DM Sans (body) via Google Fonts
- **No images** — hierarchy through type, spacing, and color only
- **~30KB HTML** — well under 100KB total including fonts

---

## Design

| Token | Value |
|---|---|
| Background | `#F7F4EF` warm off-white |
| Background subtle | `#EFEBE3` |
| Text primary | `#1A1714` near-black |
| Text secondary | `#7A756E` warm gray |
| Rule | `#D9D4CB` |
| Heading font | Fraunces, Georgia, serif |
| Body font | DM Sans, -apple-system, sans-serif |

Layout: 1100px max-width, fluid padding via `clamp()`, responsive at 768px and 640px breakpoints.

---

## Regression Tests

Tests are written with [Playwright](https://playwright.dev) and run against the local `index.html` file directly (no server needed).

**Run tests:**

```bash
npm install
npm run test
```

**What's tested (17 tests):**

- Page title
- Main nav is `position: fixed` at `top: 0`
- Nav gains `.scrolled` class after scrolling
- Nav logo and links point to correct anchors
- Footer nav (`.footer-links`) is `position: static` — not fixed or sticky
- All six sections are present in the DOM
- Footer has three resource links with `target="_blank"` and `rel="noopener"`
- Hero fade-in elements are visible on load without scrolling
- Correct counts: 2 tool cards, 5 steps, 4 project cards, 5 tips

---

## Project Structure

```
.
├── index.html           # The entire site
├── plan.md              # Original content and design brief
├── package.json
├── playwright.config.js
└── tests/
    └── regression.spec.js
```

