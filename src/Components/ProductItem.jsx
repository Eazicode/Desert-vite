// import { useState } from "react";
import App from "../App";

const ProductItemComponent = ({name, category, price,image}) => {

  return (

    <div>
      
      <div className="w-63 ">
        <div className={`flex justify-center items-end h-60 w-full rounded-2xl bg-cover bg-center`} style={{backgroundImage: `url(${image})`}}>

        <button>Add to Cart</button>
        </div>

        <div>
          <p>{name}</p>
          <p>{category}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>

   );
}
 
export default ProductItemComponent;