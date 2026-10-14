import { useState } from "react";
import type { Transaction } from "../Transactions/Transactions";

export type TransactionFormData = Omit<Transaction, "id">;

type TransactionFormProps = {
    onAddTransaction: (data: TransactionFormData) => void;
};

function TransactionForm({ onAddTransaction }: TransactionFormProps) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState<Transaction["category"]>("");
    const [type, setType] = useState<Transaction["type"] | "">("");
    const [titleError, setTitleError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [amountError, setAmountError] = useState("");
    const [typeError, setTypeError] = useState("");

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

        onAddTransaction({
            title: title.trim(),
            amount: numericAmount,
            category: type === "expense" ? category : "",
            type: type
        });
        setTitle("");
        setAmount("");
        setCategory("")
    }
    
    return (<>
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
    </>)
}

export default TransactionForm
