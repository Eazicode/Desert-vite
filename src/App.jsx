import { useEffect, useState } from "react";
import Cart from "./Components/Cart";
import ProductItemComponent from "./Components/ProductItem";
import CartItem from "./Components/CartItem";
import data from "./desert.json";
import "./index.css";

function App() {
  const [deserts, setDeserts] = useState([]);

  useEffect(() => {
    setDeserts(data.desert);
    // console.log(deserts);
  }, [deserts]);
  return (
    <>
      <div className="App md:flex justify-between md:px-15 pt-15" >
        <div className="w-fit mx-auto">
          <p className=" text-3xl font-bold mb-5">Dessert</p>
          <div className=" grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
            {
              /* {map thru deserts here} */
              deserts.map( (desert) => {
                console.log(desert)
                return     <ProductItemComponent  key={desert.id}
                id={1}
                name={desert.name}
                category={desert.category}
                price={(desert.price.toFixed(2))}
                image={desert.imageClass}
              />
              })
            }
          </div>
        </div>
       
        <Cart className="mx-auto" >
          <CartItem
            name="waffle with berries"
            price={6.5}
            amount={2}
          />
        </Cart>
      </div>
    </>
  );
}

export default App;
