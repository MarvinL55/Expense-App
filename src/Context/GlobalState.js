import React, { createContext, useReducer } from 'react'
import appReducer from './AppReducer.js'

// Inital Sate
const InitalState = {
    transactions: [
        {id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'Salary', amount: 300},
        {id: 3, text: "Book", amount: -10},
        {id: 4, text: 'camera', amount: 150}
    ]
}

// Create context
export const GlobalContext = createContext(InitalState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, InitalState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions, 
        deleteTransaction, addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}