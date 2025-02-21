import CartComponent from './Components/add-to-cart'
import ProductItemComponent from './Components/desert'
import './index.css'

function App() {

  return (
    <>
    <div className="App flex justify-center pt-15">
      <ProductItemComponent />
      <CartComponent />
    </div>
    </>
  )
}

export default App
