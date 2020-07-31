import React from 'react'
import banner from '../../img/banner.jpg'
import pineapple from '../../img/pineapple.jpg'
import './Home.css'
import { Product } from '../Product/Product';

function Home() {
  return (
    <div className='home'>
      <img src={banner} className='home__bannerImg' alt='vendor and customer' />
      <div className='product__row'>
        <Product id='1234' title='pineapple' price={35} image={pineapple} />
        <Product id='1234' title='apple' price={43} image={pineapple} />
      </div>
      <div className='product__row'>
        <Product id='1234' title='pear' price={34} image={pineapple} />
        <Product id='1234' title='drink' price={666} image={pineapple} />
        <Product id='1234' title='brocolii' price={11} image={pineapple} />
        <Product id='1234' title='nuts' price={3534.54} image={pineapple} />
      </div>
      <div className='product__row'>
        <Product id='1234' title='radish' price={35} image={pineapple} />
      </div>
    </div>
  )
}

export default Home
