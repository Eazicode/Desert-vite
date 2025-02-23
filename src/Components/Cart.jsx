import CartItem  from "./CartItem";
const CartComponent = (id, category, name, price, imageClass) => {
  return ( 
    <>
      <div className="w-1/3">
        <div className="flex w-90 h-72  items-center bg-white rounded-2xl">
          <div className="w-full">
            <p className="text-2xl font-bold mb-5 ps-8 text-[#c73a0f]" >Your Cart (0)</p>

            <div className="flex justify-center">
              <div>
              <img src="\imgs\SVGs\cake.svg" alt="" />
              <p  className="text-sm text-[#881337] font-bold opacity-50">Your added items will appear here</p>
              </div>
            </div>
          </div>
        </div>
      
      </div>

      {/* <CartItem />s */}
    </>
   );
}
 
export default CartComponent;