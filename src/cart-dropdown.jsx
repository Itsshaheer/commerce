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
{cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <div className="text-center font-bold text-black  py-4">
            Your cart is empty!
          </div>
        )}
</div>
<Button onClick={gotoCheckoutHandler}> CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown