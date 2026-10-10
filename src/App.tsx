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
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"expense" | "income">("expense");
  const [titleError, setTitleError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [amountError, setAmountError] = useState("");

  const [transactions, setTransactions] = useState<Transaction[]>([
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
    },

    {
      id: 5,
      title: "Подработка",
      category: "Доход",
      amount: 150,
      type: "income"
    },
  ]);

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
    if (category.trim() === "") {
      nextCategoryError = "Введите название категории";
    }

    let nextAmountError = "";
    if (amount.trim() === "") {
      nextAmountError = "Введите корректную сумму";
    } else if (!Number.isFinite(numericAmount)) {
      nextAmountError = "Введите корректную сумму"
    } else if (numericAmount <= 0) {
      nextAmountError = "Введите сумму больше нуля"
    }

    setTitleError(nextTitleError);
    setCategoryError(nextCategoryError);
    setAmountError(nextAmountError);

    if (nextTitleError !== "" || nextCategoryError !== "" || nextAmountError !== "") {
      return;
    }

    const newTransaction: Transaction = {
      id: Math.max(0, ...transactions.map((transaction) => transaction.id)) + 1,
      title: title.trim(),
      category: category.trim(),
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

      <input
        type="text"
        placeholder="Категория"
        value={category}
        onChange={(event) => {
          setCategory(event.target.value);
          setCategoryError("");
        }}
      />
      {categoryError && <p role="alert">{categoryError}</p>}

      <select
        value={type}
        onChange={(event) => {
          const selectedType = event.target.value;

          if (selectedType === "expense" || selectedType === "income") {
            setType(selectedType);
          }
        }}
      >
        <option value="expense">Расход</option>
        <option value="income">Доход</option>
      </select>
      <button onClick={handleAddTransaction}>Добавить транзакцию</button>
      <Transactions transactions={transactions} />
    </div >
  )
}

export default App
