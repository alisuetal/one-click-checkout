import React, { useEffect, useState } from 'react';
import Button from '../../components/button/button';
import GhostButton from '../../components/button/ghost-button';
import { FaReact, FaShoppingCart } from 'react-icons/fa';
import "./index.scss";
import { Link } from 'react-router-dom';
import Input from '../../components/input';
import CheckoutInformation from '../../components/checkout-information';
import CheckoutShipping from '../../components/checkout-shipping';
import CheckoutPayment from '../../components/checkout-payment';
import CartProduct from '../../components/cart-item';
import { Cart, User } from '../../core/user';

export default function CheckoutPage (props: {cart: Cart, user: User}){
     var products = [];
     for(var x = 0; x < props.cart.products.length; x++){
          products.push(<CartProduct purchase={props.cart.products[x]}/>);
     }
     var total = 0;
     for(var x = 0; x < props.cart.products.length; x++){
          total += props.cart.products[x].product.price * props.cart.products[x].quantity;
     }
     var [fee, setFee] = useState(0);
     useEffect(() => {
          props.cart.setFee(fee);
     }, [fee]);
     const [panelState, setPanelState] = useState(0);
     return(
          <div id="checkout-page" className='page'>
               <div id="user-info">
                    <div>
                         <div>
                              <h1>One click checkout</h1>
                              <h2><span><Link to={"/cart"}>Cart</Link></span>&gt;<span>Information</span>&gt;<span>Shipping</span>&gt;<span>Payment</span></h2>
                         </div>
                         {panelState == 0 ? <CheckoutInformation cart={props.cart} user={props.user}/> : null}
                         {panelState == 1 ? <CheckoutShipping function={(e: number) => setFee(e)} cart={props.cart} user={props.user}/> : null}
                         {panelState == 2 ? <CheckoutPayment cart={props.cart} user={props.user}/> : null}
                         <div>
                              <span><Link to={"/cart"}>&lt; Carrinho</Link></span>
                              <Button function={() => {
                                   if(panelState != 2){
                                        setPanelState(panelState + 1);
                                   }
                                   else{
                                        window.location.href = "/";
                                   }
                                   
                                   }} text={"Prosseguir"}/>
                         </div>
                    </div>
               </div>
               <div id="cart-info">
                    <div>
                         {products}
                    </div>
                    <div>
                         <p><span>Subtotal</span>R$ {total}</p>
                         <p><span>Frete</span>R$ {fee}</p>
                    </div>
                    <div>
                         <p><span>Total</span>R$ {total + fee}</p>
                    </div>
               </div>
          </div>
     );
}
