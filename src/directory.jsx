import React from 'react'
import Directoryitem from './directory-item'
import './directory.scss'

const Directory =({categories})  =>{
  return (
    <div className="directory-container">
      {categories.map((category)=>(
        <Directoryitem key={category.id} category={category} />
        
      ))}

    </div>
  )
}

export default Directory