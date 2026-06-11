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
- JavaScript practice uses arrays, objects, indexes, variables, loops, conditions, functions, totals, percentages, stats objects, threshold variables, insight functions, and console output.
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
- `script.js` — active JavaScript learning file in data-first and console-first mode

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
- JavaScript is in data-first and console-first mode; DOM work has not started yet.
- `script.js` contains transaction data, totals, reusable functions, percentages, BICS stats objects, practical expense stats objects, console summary functions, and conditional analytics logic with early returns.
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
- JavaScript expense function reuse checkpoint completed: `sumByExpenseCategory` is now reused with different practical expense category arguments such as `food` and `education`.
- This reinforces the difference between BICS behavioral `category` and practical `expenseCategory`.
- JavaScript percentage checkpoint completed: `basicPercentage` first calculated the Basic share of `totalAmount` using `basicTotal / totalAmount * 100`.
- The difference between numeric calculation values and formatted display strings was explained: `basicPercentage` remains a number, while `toFixed(2) + "%"` is used only for readable console output.
- This prepares future BICS circle, percentage display, and dashboard summary logic.
- JavaScript reusable percentage function checkpoint completed: `calculatePercentage(categoryTotal, totalAmount)` now calculates a percentage from any part/total pair.
- `calculatePercentage` is reused for all BICS category percentages: `basicPercentage`, `investPercentage`, `chaosPercentage`, and `signalPercentage`.
- `calculatePercentage` is also reused for practical expense category percentages: `housingPercentage`, `educationPercentage`, `foodPercentage`, and `accessoriesPercentage`.
- JavaScript safe percentage checkpoint completed: `calculatePercentage(categoryTotal, totalAmount)` now checks whether `totalAmount === 0` before performing division.
- When `totalAmount` is `0`, the function uses an early `return 0`, so the percentage formula is not executed.
- For non-zero totals, the existing `categoryTotal / totalAmount * 100` calculation remains unchanged.
- This prevents invalid `NaN` or `Infinity` percentage values while preserving console-first mode.
- JavaScript full percentage formatter reuse checkpoint completed: `formatPercentage(percentage)` formats a numeric percentage with two decimal places and adds the `%` symbol.
- All separate BICS percentage outputs now use `formatPercentage`: `basicPercentage`, `investPercentage`, `chaosPercentage`, and `signalPercentage`.
- All separate practical expense percentage outputs now use `formatPercentage`: `housingPercentage`, `educationPercentage`, `foodPercentage`, and `accessoriesPercentage`.
- `printStatsSummary(stats)` and `printExpenseStatsSummary(stats)` also pass `stats.percentage` to the same formatter.
- Percentage values remain numeric after calculation, while formatting happens only when preparing console output.
- JavaScript stats object checkpoint completed: `basicStats`, `investStats`, `chaosStats`, and `signalStats` now keep related BICS data together: `category`, `total`, and `percentage`.
- JavaScript object reading checkpoint completed: each BICS stats object is read with dot notation to print a clear console summary, such as category name, total, and percentage of all spending.
- JavaScript `printStatsSummary` checkpoint completed: `printStatsSummary(stats)` now reads `category`, `total`, and `percentage` from one stats object and prints a clear console summary.
- `printStatsSummary` is manually reused for all four BICS stats objects: `basicStats`, `investStats`, `chaosStats`, and `signalStats`.
- Old manual summary `console.log` lines for each BICS stats object were removed, so the summary format now lives in one function.
- JavaScript `if / else` checkpoint completed: `chaosStats.percentage` is checked with one `if / else` statement in console-first mode.
- The `if` branch prints `Chaos spending is above 10%` when `chaosStats.percentage` is greater than `10`.
- The `else` branch prints `Chaos spending is under control` when the `if` condition is false.
- JavaScript threshold variable checkpoint completed: the Chaos percentage limit is stored in `chaosThreshold` instead of being hard-coded directly inside the condition.
- The `if / else` condition now compares `chaosStats.percentage` with `chaosThreshold`.
- The warning message also uses `chaosThreshold`, so the condition and console text share one source of truth.
- This keeps the analytics logic console-first and prepares future configurable BICS rules without starting DOM, HTML/CSS changes, stats object arrays, dashboard UI, localStorage, React, or backend work.
- Earlier insight checkpoints introduced `printCategoryInsight(stats, threshold)` with direct console output.
- JavaScript `getCategoryInsight` checkpoint completed: `printCategoryInsight` was renamed to `getCategoryInsight(stats, threshold)`, and each condition branch now returns an insight string instead of printing it directly.
- `getCategoryInsight` distinguishes percentages above, exactly equal to, and below the provided threshold.
- `chaosInsight` stores the string returned from `getCategoryInsight(chaosStats, chaosThreshold)`.
- `signalInsight` stores the string returned from `getCategoryInsight(signalStats, signalThreshold)`.
- `console.log(chaosInsight)` and `console.log(signalInsight)` handle output separately from the function logic.
- This separates insight generation from presentation and prepares the returned strings for future use without starting DOM, HTML/CSS changes, stats object arrays, dashboard UI, localStorage, React, or backend work.
- JavaScript early return checkpoint completed: `getCategoryInsight(stats, threshold)` now uses two separate `if` statements followed by a final fallback `return`.
- The first `if` returns the above-threshold message, and the second `if` returns the exact-threshold message.
- If neither condition matches, the final `return` provides the under-control message for values below the threshold.
- Because each matching branch immediately returns from the function, `else if` and `else` are no longer required.
- `chaosInsight`, `signalInsight`, and their separate console output remain unchanged.
- This keeps the small analytics layer based on existing stats objects; DOM, HTML, CSS, stats object arrays, dashboard UI, localStorage, React, and backend work have not started.
- Console-first mode remains active; DOM, HTML, CSS, stats object arrays, dashboard UI, localStorage, React, and backend work have not started.
- JavaScript practical expense stats object checkpoint completed: `housingStats`, `educationStats`, `foodStats`, and `accessoriesStats` now keep related practical expense data together: `expenseCategory`, `total`, and `percentage`.
- Practical expense stats objects use `expenseCategory` instead of `category` to avoid mixing practical spending types with BICS behavioral categories.
- Practical expense stats objects are read with dot notation to print clear console summaries for housing, education, food, and accessories.
- JavaScript `printExpenseStatsSummary` checkpoint completed: `printExpenseStatsSummary(stats)` now reads `expenseCategory`, `total`, and `percentage` from one practical expense stats object and prints a clear console summary.
- `printExpenseStatsSummary` is manually reused for all four practical expense stats objects: `housingStats`, `educationStats`, `foodStats`, and `accessoriesStats`.
- Old manual practical expense summary `console.log` lines were removed, so the practical expense summary format now lives in one function.
- JavaScript comments checkpoint completed: beginner-friendly Russian block comments were added to `script.js` to explain the main data, reading, calculation, filtering, function, percentage, and expense total blocks.
- Comments explain the purpose of each block for BICS and do not change JavaScript logic.
- HTML comments checkpoint completed: beginner-friendly Russian block comments were added to `index.html` for the main semantic sections: `header`, `summary-section`, `categories-section`, and `transactions-section`.
- Comments explain the purpose of each section for BICS and do not change HTML structure.
- During the HTML comments checkpoint, no CSS, JavaScript logic, or DOM changes were made.
- CSS comments checkpoint completed: beginner-friendly Russian block comments were added to `styles.css` for the main visual blocks: box sizing, page foundation, header, typography hierarchy, section cards, main layout, summary text, category cards, transaction list, and mobile adaptation.
- Comments explain the visual purpose of each block for BICS and do not change CSS behavior.
- During the CSS comments checkpoint, no HTML structure, JavaScript logic, or DOM changes were made.
- BICS `category` still remains the behavioral layer: `Basic`, `Invest`, `Chaos`, `Signal`.
- DOM work and dashboard UI have not started; current JavaScript work remains console-first.
- No technical blockers currently known.

## Completed First JavaScript Plan

- The first JavaScript plan is complete.
- `script.js` now contains a `transactions` array with 4 beginner-friendly transaction objects.
- The project has moved beyond the first array checkpoint into console-first JavaScript practice: reading data, loops, functions, totals, percentages, stats objects, summary functions, and simple conditions.
- DOM rendering is still intentionally postponed.

## Next Small Step

Review the current JavaScript console-first logic and continue with one small beginner-friendly JavaScript checkpoint. Do not start DOM, HTML/CSS changes, stats object arrays, dashboard UI, localStorage, React, or backend work unless explicitly approved.

## Recommended Next Prompt

`Continue BICS from HANDOFF.md. Review the current JavaScript console-first state, explain the next smallest useful JavaScript checkpoint, give me one small assignment, and wait for my attempt. Do not start DOM, HTML/CSS changes, stats object arrays, dashboard UI, localStorage, React, or backend.`
