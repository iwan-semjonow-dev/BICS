import "./Transactions.css"

export type Transaction = {
    id: number;
    title: string;
    zone: "Basic" | "Invest" | "Chaos" | "Signal" | null;
    amount_cents: number;
    type: "income" | "expense";
    operation_date: string;
}

type TransactionsProps = {
    transactions: Transaction[];
}

function Transactions({ transactions }: TransactionsProps) {
    return (
        <section className="transactions">
            <h2>Транзакции</h2>
            {transactions.map((transaction) => (
                <div className="transaction-row" key={transaction.id}>
                    <div className="transaction-info">
                        <span>{transaction.title}</span>
                        <span className="transaction-category">
                            {transaction.zone}
                        </span>
                    </div>
                    <span className={`transaction-amount--${transaction.type}`}>
                        {transaction.type === "income" ? "+" : "-"}
                        {(transaction.amount_cents/100).toLocaleString("ru-RU", {minimumFractionDigits: 2, maximumFractionDigits: 2})} €
                    </span>
                </div>
            ))}
        </section>
    )
}

export default Transactions
