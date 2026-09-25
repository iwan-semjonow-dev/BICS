import "./ExpenseStructure.css"

type ExpenseSummary = {
    id: number;
    category: string;
    amount: number;
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
                    <span>{expense.category}</span>
                    <span>{expense.amount} €</span>
                </div>
            ))}
        </section>
    )
}

export default ExpenseStructure
