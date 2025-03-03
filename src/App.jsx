import { useEffect, useState } from "react";
import Cart from "./Components/Cart";
import ProductItemComponent from "./Components/ProductItem";
import data from "./desert.json";
import CartItem from "./Components/CartItem";
import "./index.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [deserts, setDeserts] = useState([]);
  const [totalSum, setTotalSum] = useState(0)

  useEffect(() => {
    setDeserts(data.desert);
  }, [deserts]);

  useEffect(() => {
    setTotalSum(sumCart(cartItems));
  }, [cartItems])

  function sumCart(cartItems) {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.amount, 0);
    return total; // Round total to integer
  }

  function addToCart(obj) {
    setCartItems((prevCartItems) => {
      // Find the item in the cart
      const matchedObj = prevCartItems.find((item) => item.category === obj.category);
  
      if (matchedObj) {
        // Get the index of the matched item
        const myIndex = prevCartItems.findIndex((item) => item.category === obj.category);
  
        // Clone the matched item and update the amount
        const payLoad = { ...matchedObj, amount: matchedObj.amount + 1 };

        // Replace the old item with the updated one
              const newCartItems = prevCartItems.map((item, index) =>
                index === myIndex ? payLoad : item
              );
        
              return newCartItems; // Update state
            } else {
              // If item is not in cart, add it with quantity = 1
              return [...prevCartItems, { ...obj, amount: 1 }];
            }
          });
        }

  return (
    <>
      <div className="App md:flex justify-between md:px-15 pt-15">
        <div className="w-fit mx-auto">
          <p className=" text-3xl font-bold mb-5">Dessert</p>
          <div className=" grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
            {
              /* {map thru deserts here} */
              deserts.map((desert) => {
                // console.log(desert)
                return (
                  <ProductItemComponent
                    key={desert.id}
                    id={1}
                    name={desert.name}
                    category={desert.category}
                    price={desert.price}
                    image={desert.imageClass}
                    handleClick={addToCart}
                  />
                );
              })
            }
          </div>
        </div>

        <Cart totalSum={totalSum}  className="mx-auto" 
        > 
          {
          
            cartItems.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  category={item.category}
                  price={item.price}
                  amount={item.amount}
                />
              );
            })
          }
        </Cart>
      </div>
    </>
  );
}

export default App;
