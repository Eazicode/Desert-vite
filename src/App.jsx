import { useEffect, useState } from "react";
import Cart from "./Components/Cart";
import ProductItemComponent from "./Components/ProductItem";
import data from "./desert.json";
import CartItem from "./Components/CartItem";
import "./index.css";

function App() {
  const [CartItems, setCartItems] = useState([]);
  const [deserts, setDeserts] = useState([]);

  useEffect(() => {
    setDeserts(data.desert);
    // console.log(deserts);
  }, [deserts]);

  function addToCart(obj) {
    // get a matching object and it's index
    // filter method returns an array of items that satisfy a given condition
    const matchedObj = CartItems.filter((item) => {
      //the condition here is a matching category
      if (item.category === obj.category) {
        return item;
      }
    });

    // if a match is found that'll be the first element in the array
    if (matchedObj[0]) {
      //gets the index of the match
      const myIndex = CartItems.indexOf(matchedObj[0]);
      //clones the match
      const myObj = CartItems[myIndex];
      console.log(myObj);
      //clones the clone but updates the amount
      const payLoad = { ...myObj, amount: myObj.amount + 1 };
      // remove the match from CartItems and inserts payLoad
      const newCartItems = CartItems.filter((item) => {
        if (item != CartItems[myIndex]) {
          return item;
        }
      });
      //set the new cart item state
      setCartItems([...newCartItems, payLoad]);
    } else {
      // if  a match is not found it just
      // adds a new item to the list of cart items
      const payLoad = { ...obj, amount: 1 };
      const newCartItems = [...CartItems, payLoad];
      setCartItems(newCartItems);
    }
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

        <Cart className="mx-auto">
          {
            /* <CartItem
            name="waffle with berries"
            price={6.5}
            amount={2} 
          /> */
            CartItems.map((item, index) => {
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
