import Directory from '../directory';
import {Outlet} from 'react-router-dom'
const Home =() =>{
  
  return (
    <div>  
    <Directory/>
    <Outlet/></div>
   
  );
}
export default Home