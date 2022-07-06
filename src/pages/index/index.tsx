import React, { useState } from 'react';
import Button from '../../components/button/button';
import GhostButton from '../../components/button/ghost-button';
import { FaReact, FaShoppingCart } from 'react-icons/fa';
import "./index.scss";
import { Link } from 'react-router-dom';
import { Cart, Product, Products } from '../../core/user';

export default function Index (props: {products: Product[], cart: Cart}){
     const [formMode, setFormMode] = useState(false);
     return(
          <div id="index-page" className='page'>
               <div id='header'>
                    <div>
                         <FaReact size={32} color={"#222222"}/>
                         <span>One click checkout</span>
                    </div>
                    <Link to={"/cart"}><FaShoppingCart size={20} color={"#222222"}/></Link>
               </div>
               <div id='product-section'>
                    <div>
                         <img src={props.products[0].image}/>
                         <div>
                              <div>
                                   <h1>{props.products[0].name}</h1>
                                   <h2>R$ {props.products[0].price}</h2>
                              </div>
                              <div>
                                   <p>{props.products[0].description}</p>
                              </div>
                              <div>
                                   <GhostButton function={() => {props.cart.addProduct(props.products[0])}} text={"Adicionar ao carrinho"}/>
                                   <Link to={"/checkout"}><Button function={() =>{
                                        props.cart.addProduct(props.products[0]);
                                        }} text={"Comprar"}/></Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
