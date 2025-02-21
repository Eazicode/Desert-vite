// import { useState } from "react";
import App from "../App";

const ProductItemComponent = ({name, fullName, price,image}) => {

  return (

    <div>
      <p>Desserts</p>
      <div>
        <div className={`flex justify-center items-end w-63 h-60 rounded-2xl bg-cover bg-center`} style={{backgroundImage: `url(${image})`}}>

        <button>Add to Cart</button>
        </div>

        <div>
          <p>{name}</p>
          <p>{fullName}</p>
          <p>{price}</p>
          <p></p>
        </div>
      </div>
    </div>

   );
}
 
export default ProductItemComponent;