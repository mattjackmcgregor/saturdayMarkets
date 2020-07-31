import React, {useContext} from 'react'

import './CheckoutProduct.css'
import { GlobalContext } from '../../context/GlobalState';

export const CheckoutProduct = ({id, image, title, price}) => {
  const {removeItem} = useContext(GlobalContext)
  
  return (
    <div className='checkoutProduct'>
      <img src={image} alt='pineapple' className='checkoutProduct__image' />
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <div className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <button className='checkoutProduct__removeButton' onClick={() => removeItem(id)}>
          remove from cart
        </button>
      </div>
    </div>
  )
}
