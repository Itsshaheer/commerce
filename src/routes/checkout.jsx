import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../cart.context'
import CartItem from './cart-items'
import './checkout.scss'
import Checkoutitem from './checkout-item'

function Checkout() {
const {cartItems, cartTotal}=useContext(CartContext)
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>

        <div className='header-block'>
        <span>Product</span>
         </div>
         <div className='header-block'>
         <span>Description</span>
         </div>
         <div className='header-block'>
         <span>quantity</span>
         </div>
         <div className='header-block'>
         <span>Price</span>
         </div>
         <div className='header-block'>
         <span>Remove</span>
         </div>
      </div>

        
            {cartItems.map((cartItem)=>
              
                (
                   <Checkoutitem key={cartItem.id}  cartItem={cartItem}/>
           ))}
           <span className='total'>Total: ${cartTotal}</span>
        </div>
 
  )
}

export default Checkout