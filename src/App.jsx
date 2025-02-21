import CartComponent from './Components/add-to-cart'
import ProductItemComponent from './Components/desert'
import './index.css'

function App() {

  return (
    <>
    <div className="App flex justify-center pt-15">
      <ProductItemComponent 
      name='Waffle'
      fullName='waffle with berries'
      price= '$6.50'
      image='./imgs/image-waffle-desktop.jpg'
      />
      <CartComponent />
    </div>
    </>
  )
}

export default App
