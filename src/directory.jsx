import React from 'react'
import Categoryitem from './category-item'
import './categories.scss'

const Directory =({categories})  =>{
  return (
    <div className="categories-container">
      {categories.map((category)=>(
        <Categoryitem key={category.id} category={category} />
        
      ))}

    </div>
  )
}

export default Directory