import { Route,Routes } from 'react-router-dom'
import './shop.scss'
import CategoriesPreview from './categories-preview'
import Category from '../category'


function Shop() {
    
  return (
   <Routes>

    <Route index element={<CategoriesPreview/>}></Route>
    <Route path=':category' element={<Category/>}></Route>
   </Routes>
  )
}

export default Shop