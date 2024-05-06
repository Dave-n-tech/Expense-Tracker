import { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div className="transaction-container">
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}NGN{Math.abs(transaction.amount)}
        </span>
      </li>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </div>
  );
}
