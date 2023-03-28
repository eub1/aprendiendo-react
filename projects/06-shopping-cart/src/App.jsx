import { Header } from './components/Header.jsx'
import { Products } from './components/Products.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

function App() {
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
