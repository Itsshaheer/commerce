import Home from './routes/home';
import './index.css'
import {Route,Routes, Outlet} from 'react-router-dom'
import './App.css';
import Navigation from './routes/navigation';
import Auth from './routes/auth';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout';

import Signupform from './signupform';
import Signin from './signin';
const App =() =>{
 
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
   <Route  index  element={<Home/> }/>
    <Route path='shop/*' element={<Shop />}/>
    <Route path='auth' element={<Auth/>} />
    <Route path='signin' element={<Signin/>}/>
    <Route path='checkout' element={<Checkout/>} />
    </Route>
   </Routes>
  );
}

export default App;
