const CartComponent = () => {
  return ( 
    <div className="w-80 h-60 flex items-center bg-white rounded-2xl">
      <div className="w-full">
        <p className="text-3xl font-bold mb-5 ps-8" >Your Cart (0)</p>

        <div className="flex justify-center">
          <div>
          <img src="\imgs\SVGs\cake.svg" alt="" />
          <p  className="text-sm">Your added items will appear here</p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default CartComponent;