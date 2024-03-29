import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './category.scss'
import { useContext } from 'react'
import { CategoriesContext } from '../context/categories.context'
import ProductCard from '../product-card'
function Category() {
    const {category}= useParams()
    const {categoriesMap}= useContext(CategoriesContext)
    const [products,setProducts]= useState(categoriesMap[category])
    useEffect(()=>{
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
  return (
    <>
    <h2 className='title'>{category.toLocaleUpperCase()}</h2>
    <div className='category-container'>{products && products.map((product)=> <ProductCard key={product.id} product={product}/>)
    }</div> </>
  )
}

export default Category