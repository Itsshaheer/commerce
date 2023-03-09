import './product-card.scss'
import Button from './button'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from './cart.context'

function ProductCard({product}) {
    const {name,price,imageUrl}= product
    const {addItemToCart}=useContext(CartContext)
    const addProductToCart = () => addItemToCart(product)
  return (
    <div className='product-card-container'>
        <img  src={imageUrl}/>
        <div className='footer'>
            <span className='name'>{name} </span> 
            <span className='price'> {price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add To Cart </Button>
    </div>
  )
}

export default ProductCard