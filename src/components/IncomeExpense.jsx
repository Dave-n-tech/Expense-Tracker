import { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

  return (
    <div className="income-expense-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus">NGN{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus">NGN{expense}</p>
      </div>
    </div>
  );
}
