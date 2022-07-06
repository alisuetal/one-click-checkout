export class User{
     name: string;
     surname: string;
     email: string;
     address: Address;

     constructor(){
          this.name = "";
          this.surname = "";
          this.email = "";
          this.address = new Address();
     }

     setName(name: string){
          this.name = name;
     }

     setSurname(surname: string){
          this.surname = surname;
     }
     
     setEmail(email: string){
          this.email = email;
     }
     
     setAddress(address: Address){
          this.address = address;
     }
}

export class Address{
     cep: string;
     street: string;
     number: string;
     city: string;
     state: string;

     constructor(){
          this.cep = "";
          this.street = "";
          this.number = "";
          this.city = "";
          this.state = "";
     }

     setCep(cep: string){
          this.cep = cep;
     }

     setStreet(street: string){
          this.street = street;
     }
     
     setNumber(number: string){
          this.number = number;
     }
     
     setCity(city: string){
          this.city = city;
     }

     setState(state: string){
          this.state = state;
     }
}

export class Product{
     name: string;
     price: number;
     description: string;
     image: string;
     
     constructor(name: string, price: number, description: string, image: string){
          this.name = name;
          this.price = price;
          this.description = description;
          this.image = image;
     }
}

export class Purchase{
     product: Product;
     quantity: number;
     
     constructor(product: Product, quantity: number){
          this.product = product;
          this.quantity = quantity;
     }

     setQuantity(quantity: number){
          this.quantity = quantity;
     }
}

export class Cart{
     products: Purchase[];
     fee: number;

     constructor(){
          this.products = [];
          this.fee = 0;
     }

     addProduct(product: Product){
          var index = -1;
          for(var x = 0; x < this.products.length; x++){
               if(this.products[x].product == product){
                    index = x;
               }
          }
          if(index == -1){
               this.products.push(new Purchase(product, 1));
          }
          else{
               this.products.at(index)!.quantity += 1;
          }
     }

     emptyCart(){
          this.products = [];
     }

     setFee(fee: number){
          this.fee = fee;
     }
}

export function Products(){
     return [
          new Product("Cafeteira", 340, "Cafeteira elétrica Pratic 17 da Mondial é ideal para você que aprecia o sabor e o aroma do café sem abrir mão da praticidade. Com sua placa de aquecimento, jarra térmica resistente a choque térmico que mantém o café aquecido por muito mais tempo e aliada ao seu reservatório com capacidade de 17 xícaras, indicador do nível de água ideal para dosar a quantidade desejada de xícaras de café, você e sua família desfrutará de um delicioso café fresquinho a qualquer hora do dia. Mondial, sua melhor escolha!", "https://images-americanas.b2w.io/produtos/01/00/item/133341/7/133341749_1GG.jpg"),
     ];
} 