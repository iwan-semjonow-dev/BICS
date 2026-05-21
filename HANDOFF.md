# HANDOFF — BICS Restart

## Goal

BICS — Financial Energy System is being rebuilt as a beginner-friendly portfolio project using only HTML, CSS, and JavaScript.

The first MVP is a clear one-page explanation of the BICS model, not a full finance tool yet.

## Current Project State

Project folder: `d:\Codex\BICS-restart`

Files:
- `README.md` — filled
- `AGENTS.md` — filled
- `HANDOFF.md` — updated for session handoff
- `index.html` — filled
- `styles.css` — filled
- `script.js` — empty

Old project folder `d:\Codex\BICS` was not changed.
GitHub is synchronized with `origin/main`.

## HTML Already Done

- Added `header` with project title and subtitle.
- Added three current main sections:
  - `summary-section`
  - `categories-section`
  - `transactions-section`
- Added 4 BICS categories in order: Basic, Invest, Chaos, Signal.
- Added one example transaction per category.
- Learned heading hierarchy: `h1 → h2 → h3`.
- Added role-based classes:
  - `category-card`
  - `summary-section`
  - `categories-section`
  - `transactions-section`

## CSS Already Done

- Added base `body` styles: spacing, font, background, text color, line height.
- Limited page width with `max-width` and centered the layout.
- Styled `section` blocks as simple readable cards.
- Styled `category-card` blocks as smaller inner cards.
- Made list selectors more precise with `transactions-section`.
- Set explicit font sizes for `h1`, `h2`, and `h3`.
- Made the header subtitle visually quieter with smaller text and softer color.
- Added explicit base `font-size: 16px` for `body`.
- Normalized spacing between paragraphs in `summary-section`.
- Tightened header subtitle line height.
- Set tighter line height for `h1`, `h2`, and `h3`.
- Added a subtle border to `category-card` blocks.
- Improved list readability with custom line height for transaction items.
- Softened paragraph text color inside `category-card`.
- Softened example text in `category-card`.
- Softened paragraph text in `summary-section`.
- Styled transaction list markers with a softer color.
- Tightened spacing below the header.
- Unified section spacing with a `24px` rhythm.
- Increased spacing between `category-card` blocks.
- CSS remains simple and beginner-friendly.

## Important Decisions

- The user builds BICS himself; Codex acts as teacher, mentor, and reviewer.
- Workflow: `explain → small assignment → user attempt → review → next step`.
- Use only HTML, CSS, and JavaScript for now.
- No React, TypeScript, backend, database, or libraries without explanation and permission.
- Keep category names unchanged: Basic, Invest, Chaos, Signal.
- Keep tone calm and non-judgmental.
- Build order: structure first, then style, then logic.

## Current Status

- GitHub: synchronized with `origin/main`.
- Working tree: clean at the last checkpoint.
- JavaScript: not started yet.
- No technical blockers currently known.

## Next Small Step

Review the current typography and continue with one small visual CSS improvement while keeping the page simple.

## Recommended Next Prompt

`Continue BICS from HANDOFF.md. Review the current typography in styles.css, explain the next smallest useful CSS improvement, and give me one small assignment. Do not start JavaScript yet.`
