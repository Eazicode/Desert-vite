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
      <div className="App md:flex md:px-25 pt-15" >
        <div className="w-62 mx-auto md:grid md:grid-cols-3 md:w-2/3 ">
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
        <Cart className="md:w-1/3 " >
          {/* <CartItem
            name="waffle with berries"
            price={6.5}
            amount={2}
          /> */}
        </Cart>
      </div>
    </>
  );
}

export default App;
