import Button from '../../components/button/button';
import GhostButton from '../../components/button/ghost-button';
import "./index.scss";
import { Link } from 'react-router-dom';
import { Purchase } from '../../core/user';

export default function CartProduct (props: {purchase: Purchase}){
     return(
          <div id='cart-product'>
               <div>
                    <span>{props.purchase.quantity}x</span>
                    <img src={props.purchase.product.image}/>
                    <span>{props.purchase.product.name}</span>
               </div>
               <span>R$ {props.purchase.product.price * props.purchase.quantity}</span>
          </div>
     );
}
