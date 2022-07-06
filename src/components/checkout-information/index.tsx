import "./index.scss";
import Input from '../../components/input';
import { Cart, User } from "../../core/user";

export default function CheckoutInformation (props: {user: User, cart: Cart}){
     return(
          <div>
               <div>
                    <p>Contact information</p>
                    <Input function={(e: string) => props.user.setEmail(e)} placeholder='E-mail' type='email'/>
               </div>
               <div>
                    <p>Shipping address</p>
                    <div>
                         <Input function={(e: string) => props.user.setName(e)} placeholder='Nome' type='text'/>
                         <Input function={(e: string) => props.user.setSurname(e)} placeholder='Sobrenome' type='text'/>
                    </div>
                    <Input function={() => {}} placeholder='CEP' type='text'/>
                    <div>
                         <Input function={(e: string) => props.user.address?.setStreet(e)} placeholder='Rua' type='text'/>
                         <Input function={(e: string) => props.user.address?.setNumber(e)} placeholder='Número' type='text'/>
                    </div>
                    <div>
                         <Input function={(e: string) => props.user.address?.setCity(e)} placeholder='Cidade' type='text'/>
                         <Input function={(e: string) => props.user.address?.setState(e)} placeholder='Estado' type='text'/>
                    </div>
               </div>
          </div>

     );
}
