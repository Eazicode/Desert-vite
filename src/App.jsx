import { useEffect, useState } from "react";
import Cart from "./Components/Cart";
import ProductItemComponent from "./Components/ProductItem";
import data from "./desert.json";
import CartItem from "./Components/CartItem"
import "./index.css";

function App() {
  const [CartItems, setCartItems] = useState([]);
  const [deserts, setDeserts] = useState([]);

  useEffect(() => {
    setDeserts(data.desert);
    // console.log(deserts);
  }, [deserts]);

  function addToCart (obj) {
    // console.log(obj)
    
    const matchedObj = CartItems.filter((item, index) => {
      if (item) {

      }
      return index
    }) 

    if (matchedObj[0] ) {
      console.log(matchedObj)
    }
    const payLoad = {...obj, amount:1}
    
    const newCartItems = [...CartItems, payLoad]
    setCartItems(newCartItems)

  }

  return (
    <>
      <div className="App md:flex justify-between md:px-15 pt-15" >
        <div className="w-fit mx-auto">
          <p className=" text-3xl font-bold mb-5">Dessert</p>
          <div className=" grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
            {
              /* {map thru deserts here} */
              deserts.map( (desert) => {
                // console.log(desert)
                return     <ProductItemComponent  key={desert.id}
                id={1}
                name={desert.name}
                category={desert.category}
                price={(desert.price)}
                image={desert.imageClass}
                handleClick = {addToCart}
              />
              })
            }
          </div>
        </div>
       
        <Cart className="mx-auto">  
          {/* <CartItem
            name="waffle with berries"
            price={6.5}
            amount={2} 
          /> */
          CartItems.map((item, index) => {
            return <CartItem key={index}
            category= {item.category}
            price={item.price}
            amount={item.amount}/>
          })
          }

          

        </Cart>
      </div>
    </>
  );
}

export default App;
