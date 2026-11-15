import { useState } from "react";
import type { Transaction } from "../Transactions/Transactions";

export type TransactionFormData = Omit<Transaction, "id" | "operation_date">;

type TransactionFormProps = {
    onAddTransaction: (data: TransactionFormData) => Promise<void>;
};

function TransactionForm({ onAddTransaction }: TransactionFormProps) {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState<Exclude<Transaction["zone"], null> | "">("");
    const [type, setType] = useState<Transaction["type"] | "">("");
    const [titleError, setTitleError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [amountError, setAmountError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [submitError, setSubmitError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleAddTransaction() {
        const amountParts = amount.split(".");

        const fractionPart = amountParts[1] ?? "";

        const centsPart = fractionPart.padEnd(2, "0");

        const amountCents = Number(amountParts[0]) * 100 + Number(centsPart);

        const isAmountFormatValid = /^\d+(\.\d{1,2})?$/.test(amount);

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
        } else if (fractionPart.length > 2) {
            nextAmountError = "Введите сумму с точностью до двух знаков после точки"
        } else if (numericAmount <= 0) {
            nextAmountError = "Введите сумму больше нуля"
        } else if (!isAmountFormatValid) {
            nextAmountError = "Введите сумму цифрами, например 25.50"
        } else if (amountCents > 2147483647) {
            nextAmountError = "Сумма не должна превышать 21474836.47 €"
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

        if (category === "" && type !== "income") {
            return;
        }

        setSubmitError("");

        setIsSubmitting(true);

        try {
            await onAddTransaction({
                title: title.trim(),
                amount_cents: amountCents,
                zone: type === "expense" && category !== "" ? category : null,
                type: type
            });
            setTitle("");
            setAmount("");
            setCategory("")
        } catch (error) {
            if (error instanceof Error) {
                setSubmitError(error.message);
            } else {
                setSubmitError("Не удалось сохранить транзакцию");
            }
        }

        finally {
            setIsSubmitting(false);
        }
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
        {submitError && <p role="alert">{submitError}</p>}

        <button onClick={handleAddTransaction} disabled={isSubmitting}>Добавить транзакцию</button>
    </>)
}

export default TransactionForm
