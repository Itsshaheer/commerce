import './directory-item.scss'
import { useNavigate } from 'react-router-dom'
const  Directoryitem= ({category}) =>{
    const {imageUrl, title,route}= category
    const navigate= useNavigate()
    const OnNavigateHandle= ()=>navigate(route)
    return(
      
        <div className='directory-item-container' onClick={OnNavigateHandle}>
          <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}/>
          <div className='body'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div> 
    )
}
export default Directoryitem
