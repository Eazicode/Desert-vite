// import { useState } from "react";

const ProductItemComponent = () => {

  const mockDesserts = [
    {
      id: 1,
      name: 'waffle',
      fullName: 'waffle with berries',
      price: '$6.50',
      image: './imgs/image-waffle-desktop.jpg'
    },

    // {
    // id: 2,
    // name: 'creme brulee',
    // fullName: 'vanilla bean creme brulee',
    // price: '$3.50',
    // image: './imgs/image-creme-brulee-desktop.jpg'
    // },

    // {
    //   id: 3,
    //   name: 'macaron',
    //   fullName: 'macaron mix of five',
    //   price: '$6.50',
    //   image: './imgs/image-macaron-desktop.jpg'
    //  },

    //  {
    //   id: 4,
    //   name: 'Tiramisu',
    //   fullName: 'classic tiramisu',
    //   price: '$6.50',
    //   image: './imgs/image-tiramisu-desktop.jpg'
    // },

    // {
    // id: 5,
    // name: 'bakalava',
    // fullName: 'Pistachio bakalava',
    // price: '$3.50',
    // image: './imgs/image-baklava-desktop.jpg'
    // },

    // {
    //   id: 6,
    //   name: 'Pie',
    //   fullName: 'rLemon meringue Pie',
    //   price: '$6.50',
    //   image: './imgs/image-meringue-desktop.jpg'
    //  },
    //  {
    //   id: 7,
    //   name: 'cake',
    //   fullName: 'Red velvet Cake',
    //   price: '$6.50',
    //   image: './imgs/image-cake-desktop.jpg'
    // },

    // {
    // id: 8,
    // name: 'Panna',
    // fullName: 'Panna Cotta',
    // price: '$3.50',
    // image: './imgs/image-panna-cotta-desktop.jpg'
    // },

    // {
    //   id: 9,
    //   name: 'Brownie',
    //   fullName: 'Dark Brownie',
    //   price: '$6.50',
    //   image: './imgs/image-brownie-desktop.jpg'
    //  }

  ]

  return (
    
    <div  className="">
      <p className="text-[#4c0519] text-4xl font-bold pb-5">Desserts</p>
      <div className="flex flex-wrap">
      {mockDesserts.map( (mockDessert) => (
        <div className="p-3">
          <div className='flex justify-center items-end w-63 h-60 rounded-2xl bg-cover bg-center'  style={{backgroundImage: `url(${mockDessert.image})`}} key={mockDessert.id}>

            <button><a href="">Add to Cart</a></button>
          </div>

          <div>
            <p>{mockDessert.name}</p>
            <p>{mockDessert.fullName}</p>
            <p>{mockDessert.price}</p>
          </div>
        </div>
      ))}
      </div>
    </div>

    // <div className='w-50 h-40 bg-cover bg-center' style={{backgroundImage: `url(${mockDessert.image})` }} key={mockDessert.id} >
    //   {/* <img src = {`${mockDessert.image}`} alt="" /> */}
    //   <button>
    //   <a href="">Add to Cart</a>
    //   </button>
    //   {/* <img src="/imgs/image-waffle-desktop.jpg" alt="" />
    //   <button><a href="">Add to Cart</a></button> */}
    // </div>

    

   );
}
 
export default ProductItemComponent;