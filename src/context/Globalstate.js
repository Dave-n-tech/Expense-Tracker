import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const getLocalTransactions = () => {
  const localTransactions = localStorage.getItem("TRANSACTIONS");
  if (localTransactions == null) return [];

  return JSON.parse(localTransactions);
};

 const localVal = getLocalTransactions()
 console.log(localVal)

//Initial state
const initialState = {
  transactions: localVal ? localVal : []
};

//create global context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("TRANSACTIONS", JSON.stringify(state.transactions));
  }, [state.transactions]);

  // actions
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
