import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import { CheckoutProduct } from '../CheckoutProduct/CheckoutProduct';

import './Checkout.css'
import { Subtotal } from '../Subtotal/Subtotal';

export const Checkout = () => {
const {basket} = useContext(GlobalContext)


  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <h1 className='checkout__title'>Your Shopping Cart</h1>
        {!basket.length ? (
          <p>your cart is empty. please add items to your cart to purchase</p>
        ) : (
          <>
            {basket.map(product => {
              console.log(product.image)
              return (
                <CheckoutProduct
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              )
            })}
          </>
        )}
      </div>
      {basket.length && (
        <div className='checkout__right'>
          <Subtotal />
        </div>
      )}
    </div>
  )
}
