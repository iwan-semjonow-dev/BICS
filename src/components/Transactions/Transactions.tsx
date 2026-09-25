import "./Transactions.css"

export type Transaction = {
    id: number;
    title: string;
    category: string;
    amount: number;
    type: "income" | "expense"
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
                    <span>{transaction.title}</span>
                    <span className={`transaction-amount--${transaction.type}`}>
                        {transaction.type === "income" ? "+" : "-"}
                        {transaction.amount} €
                    </span>
                </div>
            ))}
        </section>
        
    )
}

export default Transactions
