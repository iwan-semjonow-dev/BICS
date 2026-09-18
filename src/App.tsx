import Header from "./components/Header/Header";
import "./App.css"
import Balance from "./components/Balance/Balance";

function App() {
  return (
    <div className="app">
      <Header />
      <Balance amount = {1200} />
    </div>
  )
}

export default App
