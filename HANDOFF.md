# HANDOFF — BICS Restart

## Goal

BICS — Financial Energy System заново начинается как учебный и портфолио-проект на HTML, CSS и JavaScript.

Первый MVP — это не полноценный финансовый инструмент, а понятное первое объяснение модели BICS.

## Current Project State

Project folder:

`d:\Codex\BICS-restart`

Files:
- `README.md` — filled
- `AGENTS.md` — filled
- `HANDOFF.md` — being updated now
- `index.html` — filled
- `styles.css` — filled
- `script.js` — empty

Old project folder `d:\Codex\BICS` was not changed.

## Current Progress

Already done:
- created clean project folder `BICS-restart`;
- created six starter files;
- filled `README.md` with the basic idea of BICS;
- filled `AGENTS.md` with project rules and Teaching Mode;
- completed grill-me discussion for the first MVP;
- created the first `index.html` structure by hand with the user;
- added `header`, summary section, BICS categories section, and example transactions section;
- the user practiced HTML heading hierarchy: `h1 → h2 → h3`;
- the user cleaned up spacing to make the HTML easier to read;
- initial CSS started;
- body styles added;
- page width limited with `max-width`;
- sections styled as simple readable cards;
- CSS remains beginner-friendly;
- learned how HTML classes work;
- added `categories-section` to the BICS categories section;
- added `category-card` to all four category blocks;
- replaced broad CSS selectors with more precise class-based selectors for category cards;
- added `transactions-section` to the example transactions section;
- replaced broad list selectors with more precise transaction-section selectors;
- the user practiced choosing selectors by element role and context;
- added `summary-section` to the first content section;
- the current main sections now have clear role-based class names:
  - `summary-section`
  - `categories-section`
  - `transactions-section`
- class names describe the role of each block, not its visual style;
- the HTML structure became cleaner and easier to understand.

## Agreed First MVP

The first MVP is not a full finance tool.

It is a clear one-page explanation of the BICS model.

Agreed decisions:
- the main hero of the screen is the BICS system itself, not numbers;
- the page uses one column;
- page order: `header → summary → 4 categories → example transactions`;
- interface language: Russian;
- category names stay in English:
  - Basic
  - Invest
  - Chaos
  - Signal
- categories must appear in order: `B → I → C → S`;
- summary briefly explains the core idea;
- summary includes the key example: the same purchase can belong to different categories depending on the reason;
- each category has a simple explanation and one example;
- transactions include one example per category;
- transaction examples do not include amounts;
- each transaction shows the reason and category;
- product tone is calm and non-judgmental;
- Chaos and Signal must not be presented as “bad”.

## What Is Not Included Yet

The first MVP does not include:
- percentages;
- goals;
- recurring expenses;
- add transaction button;
- transaction form;
- calculations;
- complex visual design.

## Success Criteria

A new person should understand within one minute:
- what BICS is;
- how the four categories differ;
- why the reason behind a purchase matters.

## Important Decisions

- Start with HTML, CSS, and JavaScript only.
- No React.
- No TypeScript.
- No backend.
- No database.
- No libraries.
- The user is a beginner in programming.
- Codex must work as a teacher and mentor.
- The user wants to build BICS himself.
- Codex must not generate the whole project instead of the user.
- Codex should guide the user using the pattern:
  `explain → small assignment → user attempt → review → next step`.
- Codex should give hints before full solutions.
- Complete code should be provided only if the user explicitly asks or if a correction cannot be explained otherwise.
- Development order: structure first, then style, then logic.

## What Must Not Be Changed

- Do not modify the old folder `d:\Codex\BICS` without explicit permission.
- Do not rename the BICS categories:
  - Basic
  - Invest
  - Chaos
  - Signal
- Do not make Chaos or Signal sound morally bad.
- Do not add amounts to first MVP transaction examples.
- Do not add calculations, percentages, forms, buttons, goals, or recurring expenses yet.
- Do not introduce React, TypeScript, backend, database, or libraries without explanation and permission.
- Do not write large chunks of code without need.
- Do not rewrite the whole project without request.

## Current Problems

- no technical problems yet;
- HTML and beginner-friendly CSS are in progress;
- no JavaScript yet.

## Open Questions

- What exact text should be used in the first `index.html`?
- What four example transactions should be shown?
- What should the first simple visual style look like?

## Next Steps

1. Review the current section structure after adding role-based class names.
2. Continue with one small visual CSS improvement.
3. Keep using simple class names based on meaning, not appearance.
4. Later decide whether to add more dashboard sections again, such as expenses structure, recurring expenses, and goals.

## Recommended Next Prompt

Create only the first minimal `index.html` structure for BICS.

Use the rules from `AGENTS.md` and `HANDOFF.md`.

Requirements:
- Russian interface language
- header
- summary
- four BICS categories in order: Basic, Invest, Chaos, Signal
- example transactions: one per category
- no amounts
- show reason and category for each transaction
- no CSS
- no JavaScript
- no buttons
- no forms
- no calculations
- no extra features

Work as a teacher and explain the HTML structure simply.






