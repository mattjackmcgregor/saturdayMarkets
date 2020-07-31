import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../selectors/GetCartTotal';
import './Subtotal.css'

export const Subtotal = () => {
  const {basket} = useContext(GlobalContext)
  return (
    <div className='subtotal'>
      <CurrencyFormat
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        renderText={(value) => (
          <div>
          <p className='subtotal__title'>Subtotal ({basket.length} items) of : <strong>{value}</strong></p>
          </div>          
        )}
      />
      <button>Proceed to checkout</button>
    </div>
  )
}

// <h1 className='subtotal__title'>Subtotal</h1>
//     {basket && (
//       <div className='subtotal__info'>
//         <p>Subtotal {basket.length} items of: <strong></strong></p>
//       </div>

//     )}