import './product-card.scss'
import Button from './button'
import React from 'react'

function ProductCard({product}) {
    const {name,price,imageUrl}= product
  return (
    <div className='product-card-container'>
        <img  src={imageUrl}/>
        <div className='footer'>
            <span className='name'>{name} </span> 
            <span className='price'> {price}</span>
            </div>
            <Button buttonType='inverted'>Add To Cart</Button>
    </div>
  )
}

export default ProductCard