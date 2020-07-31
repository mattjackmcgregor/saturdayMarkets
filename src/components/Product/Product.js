import React, {useContext}from 'react'

import './Product.css'
import { GlobalContext } from '../../context/GlobalState';


export const Product = ({id, title, price, image}) => {

  //ADD_ITEM action
  const {addItem} = useContext(GlobalContext)

  const handleSubmit = () => {
    console.log('adding to cart')
    const item = {
      id,
      title,
      price
    }
    console.log(item)
    addItem(item)
  }

  return (
    <div className='product'>
      <img src={image} alt='pineapple' />
      <div className='product__info'>
        <p className='product__title'>{title}</p>
        <div className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </div>
      </div>
      <button className='product__buyButton' onClick={handleSubmit} >add to cart</button>
    </div>
  )
}
