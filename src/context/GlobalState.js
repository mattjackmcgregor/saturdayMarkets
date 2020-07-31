import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
  basket: []
}

//create context
export const GlobalContext = createContext(initialState)

//provider component

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //actions
  const addItem =(item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    })
  }

  return (
    <div>
    <GlobalContext.Provider value={{
      basket: state.basket,
      addItem
    }}>
    {children}
    </GlobalContext.Provider>
      
    </div>
  )
}
