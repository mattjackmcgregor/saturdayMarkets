export default (state, action) => {
  console.log('reducer')
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        basket: [...state.basket, action.payload]
      }
    case 'REMOVE_ITEM':
      console.log('removing')
      const updatedBasket = state.basket.filter(
        item => item.id !== action.payload
      )
      console.log(updatedBasket)
      return {
        basket: updatedBasket
      }
    default:
      return state
  }
}