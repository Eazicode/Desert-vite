import { useEffect, useState } from "react";
import CartComponent from "./Components/Cart";
import ProductItemComponent from "./Components/ProductItem";
import data from "./desert.json";
import "./index.css";
import CartItem from "./Components/CartItem";

function App() {
  const [deserts, setDeserts] = useState([]);

  useEffect(() => {
    setDeserts(data.desert);
  }, [deserts]);
  return (
    <>
      <div className="App flex justify-center pt-15 px-15">
        {
         <div className="w-2/3">
          <p className="text-4xl text-[#4c0519] font-bold mb-8">Desserts</p>
            <div  className="flex flex-wrap">
              {deserts.map((desert) => (
                <div className="w-65 me-3" key={desert.id}>
                  <div className="flex justify-center items-end w-63 h-60 rounded-2xl bg-cover bg-center" style={{backgroundImage: `url(${desert.imageClass})`}}>
                  <button><a className="text-[#c73a0f] font-semibold flex bg-white py-2 px-4 -mb-5 rounded-3xl" href=""><img className="me-2" src="\imgs\SVGs\cart.svg" alt="" /> <span>Add to Cart</span></a></button>
                  </div>

                  <p className="mt-8 text-sm text-[#78350f]">{desert.category}</p>
                  <p className="font-bold text-lg text-[#4c0519]">{desert.name}</p>
                  <p className="mb-12 text-[#c73a0f] font-bold">${desert.price.toFixed(2)}</p>
                </div>
              
              ))}
            </div>
         </div>
        }
        <CartComponent />
        <CartItem />
      </div>
    </>
  );
}

export default App;

