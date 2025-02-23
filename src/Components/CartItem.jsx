import { useEffect, useState } from "react";

const  CartItem= () => {
  const [desertsItems, setdesertsItems] = useState([
    {
      "id": 3,
      "category": "Macaron",
      "name": "Macaron Mix of Five",
      "price": 8.00,
      "imageClass": "./imgs/image-macaron-desktop.jpg"
    }
  ])

  useEffect(() => {
    setdesertsItems(desertsItems)
    // console.log(desertsItems)
  }, [desertsItems])

  return ( 
    <>
    <div className=" bg-white w-90 h-72 rounded-2xl">
      <div>
        <p className="text-2xl font-bold mb-5 mt-10 ps-8 text-[#c73a0f]">Your Cart{` (${1})`}</p>
        { <div className="ps-3">
            {desertsItems.map( ( desertsItem)=> (
            
              <div key={desertsItem.id}>
                <p className="text-lg font-semibold text-[#4c0519]">{desertsItem.name}</p>
                <p className="mb-5">
                  <span className="pe-3 text-sm text-[#881337] font-bold opacity-50">{`${1}x`}</span>
                  <span className="pe-3 text-sm text-[#881337] font-bold opacity-50">{`@${desertsItem.price.toFixed(2)}`}</span>
                  <span className="text-sm text-[#881337] font-bold opacity-50">{desertsItem.price.toFixed(2)}</span>
                </p>

                <p className="text-center">
                <button className="bg-[#c73a0f] text-lg p-5 text-white font-bold rounded-4xl"><a href="">Confirm Order</a></button>
                </p>
              </div>
            
            ))}
        </div>
        }
      </div>
    </div>
    </>
   );
}
 
export default CartItem;