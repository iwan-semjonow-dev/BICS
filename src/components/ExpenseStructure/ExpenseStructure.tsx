import "./ExpenseStructure.css"

function ExpenseStructure() {

    const expenses = [
        { id: 1, category: "Транспорт", amount: 20 },
        { id: 2, category: "Продукты", amount: 120 },
        { id: 3, category: "Развлечения", amount: 40 }
    ]

    return (
        <section className="expense-structure">
            <h2>Структура расходов</h2>
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
