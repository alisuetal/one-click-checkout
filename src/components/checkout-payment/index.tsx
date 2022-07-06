import "./index.scss";
import { MdError } from 'react-icons/md';
import Input from '../input';
import { Cart, User } from "../../core/user";

export default function CheckoutPayment (props: {user: User, cart: Cart}){
     return(
          <div>
               <div>
                    <p>Contato</p>
                    <div id="contact-holder">
                         <p><span>E-mail</span>{props.user.email}</p>
                         <p><span>Destino</span>{props.user.address.street + ", " + props.user.address.number + " - " + props.user.address.city + "/" + props.user.address.state}</p>
                         <p><span>Preço de envio</span>{props.cart.fee}</p>
                    </div>
               </div>
               <div>
                    <p>Pagamento</p>
                    <div id="payment">
                         <MdError color="#666666" size={24}/>
                         <span>Pagamentos indisponíveis</span>
                    </div>
               </div>
          </div>

     );
}
