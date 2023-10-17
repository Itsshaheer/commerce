import React from 'react';
import  ReactDOM  from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

import App from './App';
import { UserProvider } from './context/user.context';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';

import { CartProvider } from './cart.context';
import { CategoriesProvider } from './context/categories.context';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
      <CategoriesProvider>
      <CartProvider>
         <App />
       </CartProvider>
       </CategoriesProvider>
     </UserProvider>
     
   
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
