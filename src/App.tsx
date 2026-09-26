import Header from "./components/Header/Header";
import "./App.css"
import Balance from "./components/Balance/Balance";
import ExpenseStructure from "./components/ExpenseStructure/ExpenseStructure";
import Transactions from "./components/Transactions/Transactions";
import type { Transaction } from "./components/Transactions/Transactions";
import type { ExpenseSummary } from "./components/ExpenseStructure/ExpenseStructure";

function App() {

  const transactions: Transaction[] = [
    {
      id: 1,
      title: "Проезд на метро",
      category: "Транспорт",
      amount: 4,
      type: "expense"
    },

    {
      id: 2,
      title: "Зарплата",
      category: "Доход",
      amount: 2000,
      type: "income"
    },

    {
      id: 3,
      title: "Поездка на автобусе",
      category: "Транспорт",
      amount: 6,
      type: "expense"
    },

    {
      id: 4,
      title: "Покупка продуктов",
      category: "Продукты",
      amount: 15,
      type: "expense"
    }
  ]

  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "expense"
  )

  const totalExpenses = expenseTransactions.reduce(
    (total, expense) => total + expense.amount,
    0
  )

  const expenseSummaries: ExpenseSummary[] = [];

  for (const transaction of expenseTransactions) {
    const existingSummary = expenseSummaries.find((summary) => summary.category === transaction.category);

    if (existingSummary) {
      existingSummary.amount += transaction.amount;
    } else {
      expenseSummaries.push({id: transaction.id, category: transaction.category, amount: transaction.amount})
    }
  }

  return (
    <div className="app">
      <Header />
      <div className="summary">
        <Balance amount={1200} title="Общий баланс" variant="balance" />
        <Balance amount={2000} title="Доходы" variant="income" />
        <Balance amount={totalExpenses} title="Расходы" variant="expense" />
      </div>
      <ExpenseStructure expenses={expenseSummaries} />
      <Transactions transactions={transactions} />
    </div>
  )
}

export default App
