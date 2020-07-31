export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        basket: [...state.basket, action.payload]
      }
    default:
      return state
     
  }
}