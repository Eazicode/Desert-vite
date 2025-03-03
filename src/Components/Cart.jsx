  const Cart = ({children, totalSum} ) => {
    return ( 
      <>
      {children ?
      
      <div className="mx-auto md:mx-0 bg-white w-72 h-fit rounded-2xl pt-8 px-5">
        <p className="text-3xl font-bold mb-5 text-[#C73A0F]" >Your Cart (0)</p>

        {children}

        <div className="flex justify-between my-5">
          <p>Order Total</p>
          <p>{`$${totalSum.toFixed(2)}`}</p>
        </div>

        <div className="w-42 mx-auto">
          <button className="py-3 w-full text-white font-semibold rounded-3xl bg-[#C73A0F]">Confirm Order</button>
        </div>
      </div> :

      <div className="bg-white w-72 h-fit rounded-2xl pt-8 px-5 mx-auto md:mx-0">
        <div className="w-full"> 
          <p className="text-3xl font-bold mb-5 ps-8" >Your Cart (0)</p>

          <div className="flex justify-center">
            <div>
            <img className="mx-auto" src="\imgs\SVGs\cake.svg" alt="" />
            <p  className="text-sm pb-3">Your added items will appear here</p>
            </div>
          </div>
        </div>
      </div>
      
    
      }
      </>
    );
  }
 
export default Cart;