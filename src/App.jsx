import { useEffect } from 'react'
import CartComponent from './Components/Cart'
import ProductItemComponent from './Components/ProductItem'
// import Cart from './Components/Cart'
import data from './desert.json'
import './index.css'

function App() {
  useEffect( () => {
    console.log(data.desert)
  }, [])
  return (
    <>
    <div className="App flex justify-center pt-15">
      <ProductItemComponent 
      id = {1} 
      name='Waffle'
      Category='waffle with berries'
      price= '$6.50'
      image='/imgs/image-waffle-desktop.jpg'
      />
      <CartComponent />
    </div>
    </>
  )
}

export default App
