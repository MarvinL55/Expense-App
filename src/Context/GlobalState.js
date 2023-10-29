import React, { Children, createContext, useReducer, userReducer } from 'react'

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

    return (<GlobalContext.Provider>
        {children}
    </GlobalContext.Provider>);
}