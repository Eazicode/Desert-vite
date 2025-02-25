const ProductItemComponent = ({name, category, price, image, handleClick}) => {  
 
  function runHandleClick() {
    console.log(typeof (price))
    handleClick({category, 
      price: Number(price)})
  }
  return (

    <div>
      <div className="w-63">
        <div className={`flex justify-center items-end h-60 w-full rounded-2xl bg-cover bg-center mb-5`} style={{backgroundImage: `url(${image})`}}>

          <div className="flex items-center gap-2 -mb-5 bg-white px-5 py-3 rounded-3xl ">
          <i className="fa-solid fa-cart-plus text-[#c73a0f]"></i>
          <button onClick={runHandleClick} className="text-[#c73a0f] font-bold text-xs cursor-pointer">Add to Cart</button>

          </div>
        </div>

        <div className="mb-8">
          <p className="text-[#4c0519] opacity-50 text-sm">{category}</p>
          <p className="text-[#78350f] text-lg font-bold">{name}</p>
          <p className="text-[#c73a0f] font-bold">{`$${price.toFixed(2)}`}</p>
        </div>
      </div>
    </div>

   );
}
 
export default ProductItemComponent;

