const  CartItem= ({name, price, amount,}) => {
  return ( 
    <>
      <div>
        <p>{name}</p>
        <p>
          <span className="pr-3">{`${amount}x`}</span>
          <span className="pr-3">{`@${price.toFixed(2)}`}</span>
          <span>{`${(amount*price).toFixed(2)}`}</span>
        </p>
      </div>
    </>
   );
}
 
export default CartItem;