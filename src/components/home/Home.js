import React from 'react'
import banner from '../../img/banner.jpg'

import './Home.css'

function Home() {
  return (
    <div className='home'>
      <img src={banner} className='home__bannerImg' alt='vendor and customer' />
    </div>
  )
}

export default Home
