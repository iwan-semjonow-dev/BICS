import Header from "./components/Header/Header";
import "./App.css"
import Balance from "./components/Balance/Balance";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="summary">
        <Balance amount={1200} title="Общий баланс" variant="balance"/>
        <Balance amount={2000} title="Доходы" variant="income"/>
        <Balance amount={800} title="Расходы" variant="expense"/>
      </div>
    </div>
  )
}

export default App
