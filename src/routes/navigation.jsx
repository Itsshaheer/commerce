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
      { currentUser? (
    <h2 className='font-bold'>Welcome, {currentUser?.displayName}!</h2>)
    : (
      <h2 className='font-bold'>Welcome, Guest!</h2>
    )
      }
        <Link className='nav-link hover:text-blue-600' to='/shop'>
            SHOP
        </Link>
        {
          currentUser ? (
            <span className='nav-link hover:text-blue-600' onClick={signOutUser}>SIGN OUT</span>)
            : (<Link className='nav-link' to='/signin'>
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