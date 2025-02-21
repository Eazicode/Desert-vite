import CartComponent from './add-to-cart'
import ProductItemComponent from './desert'
import './index.css'

function App() {

  return (
    <>
    <div className="App flex bg-rose-50 justify-between px-30 pt-15">
      <ProductItemComponent />
      <CartComponent />
    </div>
    </>
  )
}

export default App
