import "./ExpenseStructure.css"

export type ExpenseSummary = {
    id: number;
    zone: string;
    amount_cents: number;
}

type ExpenseStructureProps = {
    expenses: ExpenseSummary[];
}

function ExpenseStructure({ expenses }: ExpenseStructureProps) {

    return (
        <section className="expense-structure">
            <h2>Структура расходов</h2>
            {expenses.length === 0 && (
                <p className="expense-empty">Расходов пока нет</p>
            )}
            {expenses.map((expense) => (
                <div className="expense-row" key={expense.id}>
                    <span>{expense.zone}</span>
                    <span>{(expense.amount_cents/100).toLocaleString("ru-RU", {minimumFractionDigits:2, maximumFractionDigits: 2})} €</span>
                </div>
            ))}
        </section>
    )
}

export default ExpenseStructure
