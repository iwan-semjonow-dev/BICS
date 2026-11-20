import Header from "./components/Header/Header";
import "./App.css"
import Balance from "./components/Balance/Balance";
import ExpenseStructure from "./components/ExpenseStructure/ExpenseStructure";
import Transactions from "./components/Transactions/Transactions";
import type { Transaction } from "./components/Transactions/Transactions";
import type { ExpenseSummary } from "./components/ExpenseStructure/ExpenseStructure";
import { useState, useEffect } from "react";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import type { TransactionFormData } from "./components/TransactionForm/TransactionForm";

function App() {

  const [serverMessage, setServerMessage] = useState("");

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [loadError, setLoadError] = useState("");

  const [isLoadingTransactions, setIsLoadingTransactions] = useState(true);

  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "expense"
  )

  const totalExpenses = expenseTransactions.reduce(
    (total, expense) => total + expense.amount_cents,
    0
  )

  const incomeTransactions = transactions.filter(
    (transaction) => transaction.type === "income"
  )

  const totalIncome = incomeTransactions.reduce(
    (total, income) => total + income.amount_cents,
    0
  )

  const expenseSummaries: ExpenseSummary[] = [];

  for (const transaction of expenseTransactions) {

    if (transaction.zone === null) {
      continue;
    }

    const existingSummary = expenseSummaries.find((summary) => summary.zone === transaction.zone);

    if (existingSummary) {
      existingSummary.amount_cents += transaction.amount_cents;
    } else {
      expenseSummaries.push({ id: transaction.id, zone: transaction.zone, amount_cents: transaction.amount_cents })
    }
  }

  const totalBalance = totalIncome - totalExpenses;

  async function handleAddTransaction(data: TransactionFormData) {

    const response = await fetch("http://localhost:3000/transactions", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const savedTransaction = await response.json();

    setTransactions((previousTransactions) => [...previousTransactions, savedTransaction]);
  }

  async function checkServer() {
    setServerMessage("Проверяем соединение...")
    try {
      const response = await fetch("http://localhost:3000/")
      if (!response.ok) {
        throw new Error("Сервер вернул ошибку")
      }
      const message = await response.text()
      setServerMessage(message)
    }
    catch { setServerMessage("Не удалось проверить сервер") }
  }

useEffect(() => {
  async function loadTransactions() {
    try {
      const response = await fetch("http://localhost:3000/transactions");
      if (!response.ok) {
        throw new Error("Не удалось загрузить транзакции");
      }
      const loadedTransactions = await response.json();
      setTransactions(loadedTransactions);
    }
    catch { setLoadError("Не удалось загрузить транзакции") }

    finally {
      setIsLoadingTransactions(false);
    }
  }

    loadTransactions();
  }, []);

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

      {isLoadingTransactions && <p role="status">Загружаем транзакции...</p>}

      {loadError && <p role="alert">{loadError}</p>}

      <Transactions transactions={transactions} />

      <p>{serverMessage}</p>
      <button onClick={checkServer}> Проверить сервер </button>
    </div >
  )
}

export default App
