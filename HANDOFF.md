# HANDOFF — BICS Restart

## Goal

BICS — Financial Energy System is being rebuilt as a beginner-friendly portfolio project using only HTML, CSS, and JavaScript.

The first MVP is a clear one-page explanation of the BICS model, not a full finance tool yet.

## Long-Term Goal

BICS — Financial Energy System is a long-term, beginner-friendly portfolio project built with HTML, CSS, and JavaScript.

The goal of BICS is to help understand personal spending not only by amount, but by the behavioral reason behind each purchase. The core BICS categories must remain exact: `Basic`, `Invest`, `Chaos`, and `Signal`.

Codex should work as the user's teacher, mentor, and reviewer, not as a replacement for the user's own coding practice. The learning workflow is:

1. Explain the theory first.
2. Give one small assignment.
3. Wait for the user's attempt.
4. Review the attempt.
5. Explain mistakes and give hints.
6. Show corrected code only when needed or when the user asks.

The future visual mockup in `assets/mockups/bics-future-dashboard.jpg` is the long-term product direction only. It shows that BICS may eventually become a dashboard-style web application with summary cards, a BICS circle, financial energy score, transactions, recurring expenses, goals, quick add, charts, filters, and reports.

The full dashboard must not be built immediately. Current development should stay focused on small learning steps.

The current stage is JavaScript data-first and console-first:

- `script.js` contains transaction data.
- JavaScript practice uses arrays, objects, indexes, variables, loops, conditions, category filtering, and count output.
- DOM work has not started yet.
- HTML, CSS, forms, calendar features, localStorage, and dashboard UI logic are out of scope until JavaScript fundamentals are stronger.

The project must follow:

- Git rules from `AGENTS.md`: no `git add`, commit, push, rebase, reset, or force push without explicit confirmation.
- Language rules from `AGENTS.md`: visible UI text, transaction titles, reasons, labels, buttons, and section names should be in English; Russian is allowed for comments, teaching explanations, and learning notes.
- Superpowers usage from `AGENTS.md`: use `superpowers:using-superpowers` at the beginning of a BICS work session, use planning/debugging/verification skills when they help, and re-discover stale Superpowers paths before continuing.

At the beginning of a new BICS work session, Codex should read or review `README.md`, `AGENTS.md`, and `HANDOFF.md` before suggesting the next step.

Codex must not expand the project scope on its own. If a new technology, feature, framework, or architectural change seems useful, Codex must explain why and ask for permission first.

A step is considered successful only when the user understands the idea, makes or reviews the attempt, and the project advances through a small, clear checkpoint.

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

- GitHub: synchronized with `origin/main` at the last committed checkpoint.
- Working tree: clean at the last committed checkpoint.
- JavaScript: started with data only; DOM is not started yet.
- `script.js` now contains a minimal `transactions` array with 4 objects and outputs it to the console only; no DOM changes yet.
- Transaction `title` and `reason` values in `script.js` were translated to English.
- BICS categories remain exact: `Basic`, `Invest`, `Chaos`, `Signal`.
- Russian comments are allowed for learning support according to `AGENTS.md` language rules.
- JavaScript Step 2 completed: reading transactions from the array, using indexes, variables, loop, category filter, and count output in console.
- JavaScript amount checkpoint completed: each transaction now has numeric `amount` data, amount values are read in the console, and `totalAmount` is calculated and displayed with console output.
- JavaScript sum by category checkpoint completed: `categoryTotal` now calculates the total `amount` for one `targetCategory` using a loop and `if` condition, while `totalAmount` still calculates the total amount across all transactions.
- JavaScript expenseCategory checkpoint completed: each transaction now has a future practical `expenseCategory` layer, and `targetExpenseCategory` is used to find transactions by practical spending type in the console.
- JavaScript expenseCategory total checkpoint completed: `expenseCategoryTotal` now calculates the total `amount` for one `targetExpenseCategory` using a loop and `if` condition.
- This prepares the future expense structure section from the dashboard mockup.
- Current `script.js` was reviewed top-to-bottom with the user: transaction data, reading fields, filters, counters, totals, `categoryTotal`, and `expenseCategoryTotal` were explained and checked with control questions.
- User correctly answered the control questions for the current `script.js` logic.
- JavaScript functions checkpoint completed: `sumByCategory` and `sumByExpenseCategory` were added as two separate beginner-friendly functions.
- `sumByCategory` calculates totals by BICS behavioral `category`: `Basic`, `Invest`, `Chaos`, `Signal`.
- `sumByExpenseCategory` calculates totals by practical `expenseCategory`: `housing`, `education`, `food`, `accessories`.
- The universal function approach was intentionally postponed to keep the code easier to understand.
- JavaScript function return values checkpoint completed: returned values from `sumByCategory` and `sumByExpenseCategory` are now saved into variables such as `basicTotal` and `housingTotal` before being printed with `console.log`.
- This confirms the difference between returning a value and printing a value.
- JavaScript function reuse checkpoint completed: `sumByCategory` is now reused with different BICS category arguments: `Basic`, `Invest`, `Chaos`, and `Signal`.
- Returned values are saved into separate variables for each BICS category.
- This prepares future percentage calculations and dashboard summary logic.
- BICS `category` still remains the behavioral layer: `Basic`, `Invest`, `Chaos`, `Signal`.
- No DOM, HTML, or CSS changes yet.
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
