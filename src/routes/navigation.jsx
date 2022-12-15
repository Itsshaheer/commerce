import React,{useContext} from 'react'
import {Outlet,Link} from 'react-router-dom'
import { Usercontext } from '../context/user.context'
import {Fragment} from 'react'
import {ReactComponent as Crown} from '../assets/crown.svg'
import { signOutUser } from '../firebase'
import './navigation.scss'
import CartDropdown from '../cart-dropdown'
import CartIcon from './cart-icon'
import {CartContext} from '../cart.context'
function Navigation() {
  
  const {currentUser}= useContext(Usercontext)
  console.log(currentUser)
  const {isCartOpen}= useContext(CartContext)
  return (
    <Fragment>
    <div className='navigation'>
        <Link className='logo-container' to='/'>
    <Crown className='logo'/>
    </Link>
    <div className='nav-links-container'>
        <Link className='nav-link' to='/shop'>
            SHOP
        </Link>
        {
          currentUser ? (
            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
            : (<Link className='nav-link' to='/auth'>
            SIGN IN
        </Link>
          )
        }
        <CartIcon/>
       
    </div>
    {isCartOpen && <CartDropdown/>}
    </div>
   <Outlet/>
    </Fragment>
  )
}

export default Navigation