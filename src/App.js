import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import "./App.css";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/Globalstate";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
