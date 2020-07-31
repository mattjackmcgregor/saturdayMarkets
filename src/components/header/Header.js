import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import './Header.css'

import {GlobalContext} from '../../context/GlobalState'

const Header = () => {

  const {basket} = useContext(GlobalContext)

  return (
    <nav className='header'>
      <Link to='/'>
        <h1 className='header__logo'>saturdays</h1>
      </Link>
      <div className='header__search'>
        <input
          type='text'
          placeholder='search your favourite vendors'
          className='header__searchInput'
        ></input>
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <Link to='/login' className='header__link'>
          <div className='header__option'>
            <span className='header__option__upperText'> hello, matt</span>
            <span className='header__option__lowerText'> login</span>
          </div>
        </Link>
        <Link to='/orders' className='header__link'>
          <div className='header__option'>
            <span className='header__option__upperText'> orders,</span>
            <span className='header__option__lowerText'> stuff</span>
          </div>
        </Link>
        <Link to='checkout' className='header__link'>
          <ShoppingCartIcon className='header__cart__icon' />
          <span className='header__option__lowerText header__cart__total'>
            {basket.length}
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Header
