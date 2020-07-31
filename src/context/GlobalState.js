import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
  basket: [
    {
      id: '1',
      title: 'apple',
      price: 4,
      image: '/static/media/pineapple.9cfed834.jpg'
    },
    {
      id: '2',
      title: 'banana',
      price: 8,
      image: '/static/media/pineapple.9cfed834.jpg'
    }
  ]
}

//create context
export const GlobalContext = createContext(initialState)

//provider component

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //actions
  const addItem = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item
    })
  }

  const removeItem = (id) => {
    console.log('removing item', id)
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    })
  }

  return (
    <div>
    <GlobalContext.Provider value={{
      basket: state.basket,
      addItem,
      removeItem
    }}>
    {children}
    </GlobalContext.Provider>
      
    </div>
  )
}
