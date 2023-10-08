import React from 'react' 
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './cart.context'
import Button from './button'
import './cart-dropdown.scss'
import CartItem from './routes/cart-items'
function CartDropdown() {
  const {cartItems}= useContext(CartContext)
  const navigate= useNavigate()
  const gotoCheckoutHandler = () =>{
    navigate('/checkout')
  }
  return (
    <div className='cart-dropdown-container'>
<div className='cart-items'>
{cartItems.map((item) =>(
<CartItem key={item.id}cartItem={item}/>
))}
</div>
<Button onClick={gotoCheckoutHandler}> CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown