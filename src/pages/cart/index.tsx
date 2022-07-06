import React, { useState } from 'react';
import Button from '../../components/button/button';
import GhostButton from '../../components/button/ghost-button';
import { FaReact, FaShoppingCart } from 'react-icons/fa';
import "./index.scss";
import { Link } from 'react-router-dom';
import CartProduct from '../../components/cart-item';
import { Cart } from '../../core/user';

export default function CartPage (props: {cart: Cart}){
     var products = [];
     for(var x = 0; x < props.cart.products.length; x++){
          products.push(<CartProduct purchase={props.cart.products[x]}/>);
     }
     var total = 0;
     for(var x = 0; x < props.cart.products.length; x++){
          total += props.cart.products[x].product.price * props.cart.products[x].quantity;
     }
     
     return(
          <div id="cart-page" className='page'>
               <div id='header'>
                    <div>
                         <Link to={"/"}><FaReact size={32} color={"#222222"}/></Link>
                         <span>One click checkout</span>
                    </div>
               </div>
               <div id='cart-product-section'>
                    <h1>Carrinho</h1>
                    <div>
                         {products}
                    </div>
                    <div>
                         <p><span>Subtotal</span>R$ {total}</p>
                         <p><span>Frete</span>R$ {props.cart.fee}</p>
                    </div>
                    <div>
                         <p><span>Total</span>R$ {total + props.cart.fee}</p>
                    </div>
                    <Link to={"/checkout"}>
                         <Button text='Checkout' function={()=>{}}/>
                    </Link>
               </div>
          </div>
     );
}
