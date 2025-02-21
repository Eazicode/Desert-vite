import { useEffect, useState } from "react";
import CartComponent from "./Components/Cart";
import ProductItemComponent from "./Components/ProductItem";
// import Cart from './Components/Cart'
import data from "./desert.json";
import "./index.css";

function App() {
  const [deserts, setDeserts] = useState([]);

  useEffect(() => {
    setDeserts(data.desert);
    console.log(deserts);
  }, [deserts]);
  return (
    <>
      <div className="App flex justify-center pt-15">
        <ProductItemComponent
          id={1}
          name="Waffle"
          Category="waffle with berries"
          price="$6.50"
          image="/imgs/image-waffle-desktop.jpg"
        />
        {
          /* {map thru deserts here} */
          // deserts.map()
        }
        <CartComponent />
      </div>
    </>
  );
}

export default App;
