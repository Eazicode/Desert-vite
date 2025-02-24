
// const CartComponent = (props) => {
//   return ( 
//     <div className="w-80 h-60 flex items-center bg-white rounded-2xl">
//       <div className="w-full"> {props.children}
//         <p className="text-3xl font-bold mb-5 ps-8" >Your Cart (0)</p>

//         <div className="flex justify-center">
//           <div>
//           <img src="\imgs\SVGs\cake.svg" alt="" />
//           <p  className="text-sm">Your added items will appear here</p>
//           </div>
//         </div>
//       </div>
//     </div>
//    );
// }
  const Cart = ({children}) => {
    return ( 
      <>
      {children ?
      
      <div className="bg-white mx-auto w-68 h-60 rounded-2xl pt-8 px-5">
       <p className="text-3xl font-bold mb-5 text-[#C73A0F]" >Your Cart (0)</p>

        {children}

        <div className="flex justify-between my-3 ">
          <p>Order Total</p>
          <p>$45.00</p>
        </div>

        <div className="w-42 mx-auto">
          <button className="py-3 w-full text-white font-semibold rounded-3xl bg-[#C73A0F]">Confirm Order</button>
        </div>
      </div> :

      <div className="bg-white mx-auto w-68 h-60 rounded-2xl pt-8 px-5">
        <div className="w-full"> 
          <p className="text-3xl font-bold mb-5 ps-8" >Your Cart (0)</p>

          <div className="flex justify-center">
            <div>
            <img className="mx-auto" src="\imgs\SVGs\cake.svg" alt="" />
            <p  className="text-sm">Your added items will appear here</p>
            </div>
          </div>
        </div>
      </div>
      
    
      }
      </>
    );
  }
 
export default Cart;