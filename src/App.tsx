import Header from "./components/Header/Header";
import "./App.css"
import Balance from "./components/Balance/Balance";
import ExpenseStructure from "./components/ExpenseStructure/ExpenseStructure";

function App() {

  const expenses = [
    { id: 1, category: "Транспорт", amount: 30 },
    { id: 2, category: "Продукты", amount: 120 },
    { id: 3, category: "Развлечения", amount: 40 }
  ]

  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  )

  return (
    <div className="app">
      <Header />
      <div className="summary">
        <Balance amount={1200} title="Общий баланс" variant="balance" />
        <Balance amount={2000} title="Доходы" variant="income" />
        <Balance amount={totalExpenses} title="Расходы" variant="expense" />
      </div>
      <ExpenseStructure expenses={expenses} />
    </div>
  )
}

export default App
