import Home from './routes/home';
import {Route,Routes, Outlet} from 'react-router-dom'
import './App.css';
import Navigation from './routes/navigation';
import Auth from './routes/auth';
const Shop= ()=>{
  return<h1>SHop page</h1>
}
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
