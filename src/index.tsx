import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Cart, Products, User } from './core/user';
import './index.css';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkout';
import Index from './pages/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const cart = new Cart();
const user = new User();

root.render(
     <BrowserRouter>
          <Routes>
               <Route path="/" element={<Index products={Products()} cart={cart}/>}/>
               <Route path="/checkout" element={<CheckoutPage cart={cart} user={user}/>}/>
               <Route path="/cart" element={<CartPage cart={cart}/>}/>
          </Routes>
     </BrowserRouter>
);
