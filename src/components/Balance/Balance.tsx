import "./Balance.css"

type BalanceProps = {
    amount: number
}

function Balance({ amount }: BalanceProps) {
    return (
        <section className="balance">
            <h2>Общий баланс</h2>
            <p>{amount} €</p>
        </section>
    )
}

export default Balance
