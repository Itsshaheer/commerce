import Home from './routes/home';
import {Route,Routes, Outlet} from 'react-router-dom'
import './App.css';
import Navigation from './routes/navigation';
import Auth from './routes/auth';
import Shop from './routes/shop/shop';
const App =() =>{
 
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
   <Route  index  element={<Home/> }/>
    <Route path='shop' element={<Shop />}/>
    <Route path='auth' element={<Auth/>} />
    </Route>
   </Routes>
  );
}

export default App;
