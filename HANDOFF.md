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
- Visible UI text in `index.html` was translated to English.
- `html lang` was changed to `en`.
- Russian HTML comments are allowed for learning support according to `AGENTS.md` language rules.
- Class names and HTML structure were not changed.

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
- Limited paragraph width in `summary-section` for easier reading.
- Limited transaction list width for easier reading.
- Limited paragraph width inside `category-card`.
- Added a mobile breakpoint at `600px`.
- Reduced page and section padding on small screens.
- Reduced heading sizes on small screens.
- Reduced `category-card` spacing on small screens.
- Reduced `category-card` padding on small screens.
- Reduced transaction list indentation on small screens.
- Softened section shadow.
- Added a subtle border to sections.
- Slightly deepened `category-card` background contrast.
- Slightly tightened letter spacing for `h1` and `h2`.
- Added a global `box-sizing: border-box` reset.
- Softened transaction list item text color.
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
- JavaScript: started with data only; DOM is not started yet.
- `script.js` now contains a minimal `transactions` array with 4 objects and outputs it to the console only; no DOM changes yet.
- Transaction `title` and `reason` values in `script.js` were translated to English.
- BICS categories remain exact: `Basic`, `Invest`, `Chaos`, `Signal`.
- Russian comments are allowed for learning support according to `AGENTS.md` language rules.
- No technical blockers currently known.

## First JavaScript plan

- Create a minimal `transactions` array in `script.js`.
- Use 4 objects based on the current transaction examples.
- Each object should have only three fields: `title`, `reason`, `category`.
- `category` must use exact BICS names: `Basic`, `Invest`, `Chaos`, `Signal`.
- First JS checkpoint: output the array to the console only.
- Do not change the HTML yet.
- Do not render anything to the page yet.
- No DOM changes yet.

## Next Small Step

Review the current typography and continue with one small visual CSS improvement while keeping the page simple.

## Recommended Next Prompt

`Continue BICS from HANDOFF.md. Review the current typography in styles.css, explain the next smallest useful CSS improvement, and give me one small assignment. Do not start JavaScript yet.`
