import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State
const initialState = {
  transections: [],
}

// Create Context

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  function deleteTransection(id) {
    dispatch({
      type: 'DELETE_TRANSECTION',
      payload: id,
    })
  }

  // Add transection
  function addTransection(transection) {
    dispatch({
      type: 'ADD_TRANSECTION',
      payload: transection,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transections: state.transections,
        deleteTransection,
        addTransection,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
