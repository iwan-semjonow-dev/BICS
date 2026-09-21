import "./Balance.css"

type BalanceProps = {
    amount: number,
    title: string,
    variant: "balance" | "income" | "expense",
}

function Balance({ amount, title, variant }: BalanceProps) {
    return (
        <section className={`balance balance--${variant}`}>
            <h2>{title}</h2>
            <p>{amount} €</p>
        </section>
    )
}

export default Balance
