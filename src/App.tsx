import Header from "./components/Header/Header";
import "./App.css"
import Balance from "./components/Balance/Balance";
import ExpenseStructure from "./components/ExpenseStructure/ExpenseStructure";
import Transactions from "./components/Transactions/Transactions";
import type { Transaction } from "./components/Transactions/Transactions";
import type { ExpenseSummary } from "./components/ExpenseStructure/ExpenseStructure";
import { useState } from "react";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import type { TransactionFormData } from "./components/TransactionForm/TransactionForm";

function App() {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "expense"
  )

  const totalExpenses = expenseTransactions.reduce(
    (total, expense) => total + expense.amount,
    0
  )

  const incomeTransactions = transactions.filter(
    (transaction) => transaction.type === "income"
  )

  const totalIncome = incomeTransactions.reduce(
    (total, income) => total + income.amount,
    0
  )

  const expenseSummaries: ExpenseSummary[] = [];

  for (const transaction of expenseTransactions) {
    const existingSummary = expenseSummaries.find((summary) => summary.category === transaction.category);

    if (existingSummary) {
      existingSummary.amount += transaction.amount;
    } else {
      expenseSummaries.push({ id: transaction.id, category: transaction.category, amount: transaction.amount })
    }
  }

  const totalBalance = totalIncome - totalExpenses;

  function handleAddTransaction(data: TransactionFormData) {

    const newTransaction: Transaction = {
      id: Math.max(0, ...transactions.map((transaction) => transaction.id)) + 1,
      title: data.title,
      category: data.category,
      amount: data.amount,
      type: data.type
    };
    setTransactions([...transactions, newTransaction]);
  }

  return (
    <div className="app">
      <Header />
      <div className="summary">
        <Balance amount={totalBalance} title="Общий баланс" variant="balance" />
        <Balance amount={totalIncome} title="Доходы" variant="income" />
        <Balance amount={totalExpenses} title="Расходы" variant="expense" />
      </div>
      <ExpenseStructure expenses={expenseSummaries} />

      <TransactionForm onAddTransaction={handleAddTransaction} />

      <Transactions transactions={transactions} />
    </div >
  )
}

export default App
