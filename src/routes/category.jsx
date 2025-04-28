import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import './category.scss'
import { useContext } from 'react'
import { CategoriesContext } from '../context/categories.context'
import ProductCard from '../product-card'
function Category() {
    const {category}= useParams()
    const {categoriesMap}= useContext(CategoriesContext)
    const products = useMemo(() => categoriesMap[category] || [], [category, categoriesMap]);

    const [searchQuery, setSearchQuery] = useState(''); 
    
    const filteredProducts = useMemo(() => {
      return products?.filter(product =>
          product.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
  }, [products, searchQuery]);
  return (
    <>
    <h2 className='title'>{category.toLocaleUpperCase()}</h2>
    <input
                type='text'
                placeholder='Search products...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-1/2 mb-4 mx-auto block p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 '
            />
    <div className='category-container'>{filteredProducts && filteredProducts.map((product)=>
       <ProductCard key={product.id} product={product}/>)}
    </div>
    </>
  )
}

export default Category