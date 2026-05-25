# BICS — Financial Energy System

BICS — это одностраничное веб-приложение для анализа личных расходов через поведенческую модель.

Цель BICS — не только видеть, на что уходят деньги, но и понимать, почему совершаются покупки.

## Модель BICS

- **Basic** — обязательные базовые расходы.  
  Пример: аренда квартиры.

- **Invest** — развитие, обучение, здоровье, полезные инструменты и активы.  
  Пример: курс по JavaScript.

- **Chaos** — импульсивные и незапланированные траты.  
  Пример: спонтанная доставка еды.

- **Signal** — покупки для статуса, образа и самопрезентации.  
  Пример: дорогие часы.

## Главная идея

В BICS важна не только сама покупка, но и причина покупки.

Например, кроссовки могут быть:
- **Basic**, если старая пара износилась и нужна замена;
- **Signal**, если покупка сделана ради образа;
- **Chaos**, если это был спонтанный импульс.

## Первый MVP

В первой версии проекта будут:
- header;
- короткое объяснение модели;
- 4 категории BICS;
- список примерных транзакций.

## Чего пока не будет

На первом этапе мы пока не добавляем:
- форму создания транзакций;
- расчёт сумм;
- расчёт процентов;
- цели и сбережения;
- постоянные расходы;
- сложный дизайн.

## Future product vision

In the future, BICS can grow into a dashboard-style web application for understanding personal financial energy and spending behavior.

The mockup in `assets/mockups/bics-future-dashboard.jpg` shows the long-term visual direction of the product. It is a visual reference, not the current development task.

The future dashboard may include:

- header with the BICS title and subtitle;
- date range selector;
- period selector;
- summary cards for balance, income, expenses, investments, and financial energy;
- main BICS circle with the four behavioral categories: `Basic`, `Invest`, `Chaos`, and `Signal`;
- financial energy score;
- expense structure with regular spending categories, percentages, and amounts;
- transactions list;
- recurring expenses;
- goals and savings;
- quick add form;
- charts;
- filters;
- reports.

Important distinction:

- BICS categories describe the behavioral reason behind spending: `Basic`, `Invest`, `Chaos`, `Signal`.
- Expense categories describe the practical type of spending, such as food, transport, subscriptions, health, or rent.

Current development still happens through small learning steps. The project should first build strong JavaScript fundamentals: data, arrays, objects, loops, conditions, functions, and console-based logic.

The full dashboard should not be built until the JavaScript foundations are ready.
