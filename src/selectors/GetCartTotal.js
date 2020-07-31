export const getBasketTotal = (basket) => {
  return basket.reduce((acc, item) => acc + item.price, 0)
}