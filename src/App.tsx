import Header from "./components/Header/Header";
import "./App.css"
import Balance from "./components/Balance/Balance";
import ExpenseStructure from "./components/ExpenseStructure/ExpenseStructure";
import Transactions from "./components/Transactions/Transactions";
import type { Transaction } from "./components/Transactions/Transactions";
import type { ExpenseSummary } from "./components/ExpenseStructure/ExpenseStructure";
import { useState } from "react";

function App() {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState<Transaction["category"]>("");
  const [type, setType] = useState<Transaction["type"] | "">("");
  const [titleError, setTitleError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [typeError, setTypeError] = useState("");

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

  function handleAddTransaction() {
    const numericAmount = Number(amount);

    let nextTitleError = "";
    if (title.trim() === "") {
      nextTitleError = "Введите название транзакции";
    }

    let nextCategoryError = "";
    if (type === "expense" && category === "") {
      nextCategoryError = "Выберите зону BICS";
    }

    let nextAmountError = "";
    if (amount.trim() === "") {
      nextAmountError = "Введите корректную сумму";
    } else if (!Number.isFinite(numericAmount)) {
      nextAmountError = "Введите корректную сумму"
    } else if (numericAmount <= 0) {
      nextAmountError = "Введите сумму больше нуля"
    }

    let nextTypeError = "";
    if (type === "") {
      nextTypeError = "Выберите тип операции";
    }

    setTitleError(nextTitleError);
    setCategoryError(nextCategoryError);
    setAmountError(nextAmountError);
    setTypeError(nextTypeError)

    if (nextTitleError !== "" || nextCategoryError !== "" || nextAmountError !== "" || type === "") {
      return;
    }

    const newTransaction: Transaction = {
      id: Math.max(0, ...transactions.map((transaction) => transaction.id)) + 1,
      title: title.trim(),
      category: type === "expense" ? category : "",
      amount: numericAmount,
      type: type
    };
    setTransactions([...transactions, newTransaction]);
    setTitle("");
    setAmount("");
    setCategory("");
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

      <input
        type="text"
        placeholder="Название покупки"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
          setTitleError("");
        }}
      />
      {titleError && <p role="alert">{titleError}</p>}

      <select
        value={type}
        onChange={(event) => {
          const selectedType = event.target.value;

          if (selectedType === "" || selectedType === "expense" || selectedType === "income") {
            setType(selectedType);
            setTypeError("");
          }
          if (selectedType === "income") {
            setCategory("");
            setCategoryError("");
          }
        }}
      >
        <option value="">Выберите тип операции</option>
        <option value="expense">Расход</option>
        <option value="income">Доход</option>
      </select>
      {typeError && <p role="alert">{typeError}</p>}

      {type === "expense" && (
        <>
          <select
            value={category}
            onChange={(event) => {
              const selectedCategory = event.target.value;

              if (selectedCategory === "" || selectedCategory === "Basic" || selectedCategory === "Invest" || selectedCategory === "Chaos" || selectedCategory === "Signal") {
                setCategory(selectedCategory);
                setCategoryError("");
              }
            }}
          >
            <option value="">Выберите зону BICS</option>
            <option value="Basic">Basic</option>
            <option value="Invest">Invest</option>
            <option value="Chaos">Chaos</option>
            <option value="Signal">Signal</option>
          </select>
          {categoryError && <p role="alert">{categoryError}</p>}
        </>
      )}

      <input
        type="number"
        placeholder="Сумма"
        value={amount}
        onChange={(event) => {
          setAmount(event.target.value);
          setAmountError("");
        }}
        step="0.01"
      />
      {amountError && <p role="alert">{amountError}</p>}

      <button onClick={handleAddTransaction}>Добавить транзакцию</button>
      <Transactions transactions={transactions} />
    </div >
  )
}

export default App
