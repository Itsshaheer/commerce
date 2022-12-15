import React from 'react'
import './shop.scss'
import {useContext} from 'react'
import {ProductsContext} from '../../context/products.context'
import ProductCard from '../../product-card'
function Shop() {
    const {products}= useContext(ProductsContext)
  return (
    <div className='products-container'>{products.map((product)=>(
        <ProductCard key={product.id} product={product}/>
    ))}

    </div>
  )
}

export default Shop