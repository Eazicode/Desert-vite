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
      <div className="App pt-15 grid md:grid-cols-2 lg:grid-cols-3 max-w-xl w-max px-10 mx-auto" >
        {
          
          /* {map thru deserts here} */
          deserts.map( (desert) => {
            console.log(desert)
            return     <ProductItemComponent  key={desert.id}
            id={1}
            name={desert.name}
            Category={desert.Category}
            price={(desert.price.toFixed(2))}
            image={desert.imageClass}
          />
          })
        }
        <Cart>
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
