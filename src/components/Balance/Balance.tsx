import "./Balance.css"

type BalanceProps = {
    amount: number,
    title: string,
    variant: "balance" | "income" | "expense",
}

function Balance({ amount, title, variant }: BalanceProps) {

const amountInEuros = amount/100;

const formattedAmount = amountInEuros.toLocaleString("ru-RU", {minimumFractionDigits: 2, maximumFractionDigits: 2});

    return (
        <section className={`balance balance--${variant}`}>
            <h2>{title}</h2>
            <p>{formattedAmount} €</p>
        </section>
    )
}

export default Balance
