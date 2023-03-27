import { Header } from './components/Header.jsx'
import { Products } from './components/Products.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { Cart } from './components/Cart.jsx'

function App() {
  return (
    <>
      <Header />
      <Cart />
      <Products />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
