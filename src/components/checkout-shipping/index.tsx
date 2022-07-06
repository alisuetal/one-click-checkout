import "./index.scss";
import Input from '../input';
import { Cart, User } from "../../core/user";

export default function CheckoutShipping (props: {user: User, cart: Cart, function: Function}){
     return(
          <div>
               <div>
                    <p>Contato</p>
                    <div id="contact-holder">
                         <p><span>E-mail</span>{props.user.email}</p>
                         <p><span>Destino</span>{props.user.address.street + ", " + props.user.address.number + " - " + props.user.address.city + "/" + props.user.address.state}</p>
                    </div>
               </div>
               <div>
                    <p>Meios de envio</p>
                    <div className="shipping-method" onClick={() => props.function(20)}>
                         <div>
                              <div>
                                   <input type="radio" name="shipping" value="Express"/>
                              </div>
                              <span>Expressa</span>
                         </div>
                         <span>R$20,00</span>
                    </div>
                    <div className="shipping-method" onClick={() => props.function(5)}>
                         <div>
                              <div>
                                   <input type="radio" name="shipping" value="Regular"/>
                              </div>
                              <span>Regular</span>
                         </div>
                         <span>R$5,00</span>
                    </div>
                    <div className="shipping-method" onClick={() => props.function(15)}>
                         <div>
                              <div>
                                   <input type="radio" name="shipping" value="Scheduled"/>
                              </div>
                              <span>Agendada</span>
                         </div>
                         <span>R$15,00</span>
                    </div>
               </div>
          </div>

     );
}
