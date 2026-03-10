# Plan: Vibe Coding for Product Designers — Landing Page

---

## Research Findings

### What is Vibe Coding?

**Origin**: Coined by Andrej Karpathy on February 2, 2025 in a post on X that received over 4.5 million views. Karpathy is a co-founder of OpenAI and former head of AI at Tesla.

**His exact words**: "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."

**Core idea**: Describe what you want in plain English → let AI generate the code → accept output, test, iterate with more prompts → treat AI as implementer, yourself as director. The "programming language" is now English.

**Why it matters now**: LLMs crossed a capability threshold in 2024–2025 where they can generate working multi-file applications from a prompt. Tools matured (Cursor, Claude Code, Lovable, Bolt, v0). Merriam-Webster listed it as "slang & trending" in March 2025; Collins named it Word of the Year for 2025.

**Important distinction**: Vibe coding = not reading the code. Full delegation, prompt-and-test loops. If you review every line, that's AI-assisted development — not vibe coding.

---

### Claude Code

- Anthropic's agentic coding tool: terminal-native, understands entire codebase, can read files, write code, run commands, create git commits, open PRs
- **Install (macOS)**: `curl -fsSL https://claude.ai/install.sh | bash` or `brew install --cask claude-code`
- **Start**: `cd project-folder && claude`
- Also available as VS Code/Cursor extension, desktop app, web (claude.ai/code), iOS
- CLAUDE.md file: add preferences/rules, read at session start
- Best for: power users, complex projects, CI/CD; most accessible via web interface

---

### Cursor

- Standalone AI-first IDE (VS Code fork) with AI at every layer
- **Install**: Download from cursor.com, install like any app, no terminal needed
- Key features: Tab autocomplete, Cmd+K inline edits, Chat panel, Agent mode, multi-model support
- Best for: beginners and professionals; visual-first workflow
- **Easier starting point** for designers vs. Claude Code (no terminal required)

---

### Claude Code vs. Cursor

| | Claude Code | Cursor |
|---|---|---|
| Interface | Terminal + IDE extensions | Full visual IDE |
| Model | Claude only | Multiple models |
| Best for | Complex projects, power users | Beginners, visual-first |
| Setup | Requires terminal | Install like any app |
| Pricing | Claude subscription | Free tier + paid |

---

### First Projects for Designers

**Tier 1 (Hours)**:
- Personal portfolio page (already have the content + vision)
- "About me" / link-in-bio page (simplest possible start)
- Single case study page (one project, scroll-based story)

**Tier 2 (Weekend)**:
- Interactive prototype from Figma files
- Personal dashboard (useful links, goal tracking)
- Design system showcase (color, type, components as a living reference)

**Key criteria**: You know what the finished thing looks like. You personally want to use it. Can be "done enough" in one sitting.

---

### Common Pitfalls & Mindset Shifts

**Pitfalls**:
1. Vague prompts — "make it look better" vs. specific design values
2. Accepting output without testing every state/screen size
3. No planning before prompting — scope creep, contradictions
4. Building everything at once vs. one piece at a time
5. Giving up at first error — paste the error back, that IS the workflow
6. Tool hopping before building fluency
7. Perfectionism stalling progress

**Mindset shifts**:
- "I am the director, the AI is the implementer"
- "Errors are the workflow, not failures"
- "Start with one perfect example, then replicate"
- Designers already think in components — use that language with AI
- Ship 80% good, iterate from there

---

## Content Outline with Draft Copy

### 1. Hero

**Headline**: You don't need to learn to code. You need to learn to direct.

**Subhead**: Vibe coding lets product designers build real things — portfolio sites, prototypes, internal tools — by describing what they want in plain English and letting AI do the rest. This is the guide to getting started.

**Nav links**: What Is It / Your Tools / Get Started / First Projects / Mindset

---

### 2. What Is Vibe Coding?

**Section label**: 01

**Heading**: A new way to build.

**Body**:
In February 2025, Andrej Karpathy — co-founder of OpenAI, former AI lead at Tesla — posted a note about a new way he'd been writing software. He called it "vibe coding."

The idea: stop thinking about code. Describe what you want in plain English. Let an AI write the implementation. Test whether it works. Iterate with more prompts. Repeat until it's done.

Think of it like directing a film. You are not operating the camera. You're telling the cinematographer exactly what you want the shot to feel like — and they figure out how to create it.

The programming language is now English. And for designers, who already think in outcomes, systems, and user experience, that changes everything.

**Note**: Collins Dictionary named "vibe coding" Word of the Year for 2025.

---

### 3. Your Two Tools

**Section label**: 02

**Heading**: Two tools. One for each mode of working.

**Intro**: You don't need to learn twenty tools. You need two. They complement each other.

**Claude Code**

What it is: Anthropic's AI coding assistant. You talk to it and it builds — writing files, running commands, fixing errors, and committing code. Think of it as a very capable junior developer you can direct entirely in English.

Best for: Larger projects. Cleaning up and refactoring existing work. Working across many files at once. When you want the AI to handle your entire project end-to-end.

How to start: Install at claude.ai or download the desktop app. No coding background required to use the web interface.

Key insight: Create a file called CLAUDE.md in your project and write down your preferences — fonts you like, how you want things structured, your design principles. Claude reads this at the start of every session.

**Cursor**

What it is: A code editor (like the text editor you'd write in, but for code) with AI built into every keystroke. You can type a description and it autocompletes entire sections. Press Cmd+K on any code and say what you want changed. Use the chat panel to ask questions or request full features.

Best for: Beginners. Visual-first workflows. Precise, targeted edits. If you've never opened a terminal in your life, start here.

How to start: Download from cursor.com. Installs like any app. Open a folder, open the chat, start describing.

Key insight: Cursor has an "autonomy slider" — you can dial how much freedom you give the AI, from gentle suggestions to full agent mode where it plans and builds entire features on its own.

**The workflow**: Start a project in Cursor. When you've built something worth keeping, use Claude Code to clean it up, refactor, and add complexity. Or use one or the other exclusively — both get you there.

---

### 4. Getting Started: Step by Step

**Section label**: 03

**Heading**: From zero to something real.

Five concrete steps. Do them in order.

**Step 01: Install your tools**

What to do: Download Cursor from cursor.com. It installs like any Mac or Windows application — no terminal, no package manager, no setup beyond signing in.

What happens next: Cursor opens and looks like a familiar text editor. There's an AI chat panel on the side. You're ready.

Optional: If you want to use Claude Code too, go to claude.ai and sign in. The web interface works without installing anything.

**Step 02: Set up your first project folder**

What to do: Create a folder on your desktop called "my-first-project." Open Cursor. Go to File → Open Folder and select it. You now have a project.

What happens next: Cursor shows you an empty folder. This is your workspace. Every file the AI creates goes here.

Tip: For a first project, keep it simple. One folder, no subfolders. One HTML file, one CSS file, maybe one JavaScript file.

**Step 03: Write your brief, then your first prompt**

What to do: Before opening the AI chat, spend five minutes writing down: What is this page for? Who is it for? What sections does it have? What does it feel like?

Then open the Cursor chat and paste your brief as your first message. Something like:
"Build me a single-page personal portfolio website. It should have: a hero section with my name and a one-line bio, a projects section with a 3-column grid, and a contact section with my email. The style should be minimal and typographic — warm white background, dark text, no images. Use a serif font for headings and a clean sans-serif for body text."

What happens next: Cursor generates the HTML, CSS, and any JavaScript needed. It shows you exactly what changed in the file. Review it, open the file in your browser (right-click the HTML file → Open With → your browser).

**Step 04: Iterate with targeted prompts**

What to do: Look at your page. What's wrong? Be specific. Then tell the AI exactly what to fix.

Examples of good prompts:
- "The hero heading is too small. Make it 72px on desktop, 40px on mobile."
- "The project grid collapses to a single column on mobile. It should be 2 columns on tablet and 1 on phone."
- "Add a smooth fade-in animation when each section enters the viewport on scroll."
- "I got this error: [paste error message]. Fix it."

What happens next: The AI makes the change, shows you a diff, and you accept or reject it. This loop — describe, accept, test, refine — is the entire practice of vibe coding.

**Step 05: Deploy and share something real**

What to do: When your page is ready to share, use Netlify Drop (app.netlify.com/drop). Drag your project folder directly onto the page.

What happens next: In thirty seconds, your page is live at a public URL you can share with anyone. No accounts required for a basic deploy. No command line. No configuration.

Tip: If you want to use your own domain name, Netlify and Vercel both support custom domains with a few clicks and no coding required.

---

### 5. First Project Ideas

**Section label**: 04

**Heading**: Start here.

**Project 01: Your Portfolio Page**
You already have everything you need — your work, your bio, your taste. The AI just needs to build the container. This is the highest-motivation first project: it's useful the moment it's done.

**Project 02: A Single Case Study**
Pick one project. Tell the story in a single scrollable page: problem, process, solution, outcome. Easier to scope than a full portfolio. A useful standalone piece for a pitch.

**Project 03: A Design System Showcase**
Build a page that renders your color palette, type scale, and component examples as a visual reference. Useful for your own work and impressive in a portfolio. You'll learn a lot about how CSS variables work without writing a line yourself.

**Project 04: A Simple Tool for Your Own Workflow**
A client brief generator. A proposal template. A link-in-bio page. A mood board grid. Something you'd actually use. The more personal the use case, the better the prompt quality — because you know exactly what "right" looks like.

---

### 6. Mindset & Tips

**Section label**: 05

**Heading**: What separates the ones who ship.

**Tip 01: Be the director, not the developer.**
Your job is to have a clear vision and articulate it precisely. The AI's job is to implement. Strong communication is the skill. Clear briefs produce clear output.

**Tip 02: Specificity is everything.**
"Make it look better" tells the AI nothing. "Increase the heading size to 56px, tighten the line height to 1.1, and change the color from #333 to #0F0F0E" tells it exactly what you want. Designers already think in precise values — use that.

**Tip 03: Errors are part of the workflow.**
When something breaks, copy the error message and paste it back into the chat. That's it. That is the debugging workflow. Don't try to read or fix the code yourself. Let the AI handle it.

**Tip 04: Build one thing at a time.**
Don't ask for the full page in one prompt if you can help it. Build the hero. Confirm it works. Build the next section. The more scoped your prompts, the cleaner the output.

**Tip 05: Ship at 80%. Iterate from there.**
The designers who finish their first project are the ones who resist perfecting it before it's alive. Deploy the 80% version. Get it in front of someone. Then improve it. Momentum is a real force.

---

### 7. Footer

Links: Claude Code Docs (docs.anthropic.com/en/docs/claude-code) · Cursor Docs (docs.cursor.com)

Closing line: "The best time to start was last year. The second best time is now. Open a folder and write your first prompt."

---

## Design System

### Color Palette

Single hue: Warm near-black with a parchment/linen white background.

- `--bg`: #F7F4EF — warm off-white (parchment)
- `--bg-subtle`: #EFEBE3 — slightly darker warm white for subtle section variation
- `--text-primary`: #1A1714 — near black with warm undertone
- `--text-secondary`: #7A756E — warm mid-gray
- `--text-muted`: #AEA9A1 — light warm gray (labels, captions)
- `--rule`: #D9D4CB — warm light gray for horizontal rules

No accent color. Hierarchy through type size, weight, and spacing only.

### Typography

**Headlines**: Fraunces — a variable optical-size serif with warmth and character. Available on Google Fonts. Ranges from light to heavy; works beautifully large.
- Fallback: Georgia, serif

**Body**: DM Sans — a geometric sans-serif that reads cleanly at small sizes. Neutral without being cold. Available on Google Fonts.
- Fallback: -apple-system, sans-serif

**Why these two**: Fraunces has the kind of editorial quality you'd find in a quality magazine — optical size axis means it looks different (better) at large sizes. DM Sans is clean and contemporary without being generic. Together they have clear contrast without clashing.

**Scale**:
- Hero headline: clamp(56px, 8vw, 120px)
- Section headline: clamp(36px, 5vw, 64px)
- Body: 18px / 1.75 line-height
- Label/overline: 12px, tracked, uppercase
- Step numbers: clamp(120px, 20vw, 200px), opacity 0.06, absolute positioned

### Visual Motif

**Oversized step numbers** (01, 02, 03...) rendered in Fraunces at ~200px, very light opacity (5–7%), positioned behind the section content. Repeats consistently across all numbered sections. Creates structure and visual rhythm without decoration.

Supported by thin horizontal rules (`<hr>`) in `--rule` color between major sections.

### Layout

- Max-width: 1100px, centered
- Left-right padding: clamp(24px, 6vw, 80px)
- Section vertical padding: clamp(80px, 12vw, 160px)
- No cards. No boxes. No borders on content.
- The two-tool comparison uses a two-column grid on desktop, stacked on mobile
- Step-by-step uses a clean numbered list with generous spacing

### Motion

Intersection Observer triggers class `.visible` on elements with class `.fade-in`.

CSS transition: `opacity 0.6s ease, transform 0.6s ease` — elements start `opacity: 0; transform: translateY(24px)` and transition to `opacity: 1; transform: translateY(0)`.

Delay stagger for grouped items: nth-child delays of 0.1s each.

No other motion. No scroll-based parallax. No hover animations beyond subtle color transitions on links.

### Responsive Strategy

- Desktop: full typography scale, two-column tool comparison, generous margins
- Tablet (768px): slightly reduced type, same layout
- Mobile (480px): single column everything, reduced padding, hero text at clamp minimum

---

## Technical Notes

- Single HTML file: all CSS in `<style>`, all JS in `<script>`
- Google Fonts: Fraunces (400, 600, 700 italic) + DM Sans (400, 500)
- No images, no icons, no external libraries
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Smooth scroll: `html { scroll-behavior: smooth; }`
- Nav: fixed top, transparent → white on scroll, links jump to section IDs
- Intersection Observer: one shared observer, targets all `.fade-in` elements
- Total page weight: < 30KB HTML + ~10KB fonts = well under 100KB

---

## File Output

`index.html` — the complete single-page site
`plan.md` — this document
