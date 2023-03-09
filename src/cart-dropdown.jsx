import React from 'react' 
import { useContext } from 'react'
import { CartContext } from './cart.context'
import Button from './button'
import './cart-dropdown.scss'
import CartItem from './routes/cart-items'
function CartDropdown() {
  const {cartItems}= useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
<div className='cart-items'>
{cartItems.map((item) =>(
<CartItem key={item.id}cartItem={item}/>
))}
</div>
<Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown