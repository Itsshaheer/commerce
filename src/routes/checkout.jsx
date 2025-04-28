import React, { useContext } from 'react'
import { CartContext } from '../cart.context'
import CheckoutItem from './checkout-item'
import './checkout.scss'

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext)

  const isCartEmpty = cartItems.length === 0

  return (
    <div className='checkout-container'>
      {isCartEmpty ? (
       <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
       <div className="text-6xl mb-6">🛒</div>
       <h2 className="text-4xl font-semibold mb-2">Your Cart Is Empty</h2>
        </div>
      ) : (
        <>
          <div className='checkout-header'>
            <div className='header-block'><span>Product</span></div>
            <div className='header-block'><span>Description</span></div>
            <div className='header-block'><span>Quantity</span></div>
            <div className='header-block'><span>Price</span></div>
            <div className='header-block'><span>Remove</span></div>
          </div>

          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}

          <span className='total'>Total: ${cartTotal}</span>
        </>
      )}
    </div>
  )
}

export default Checkout
