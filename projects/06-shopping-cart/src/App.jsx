import { Header } from './components/Header.jsx'
import { Products } from './components/Products.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'

function App() {
  return (
    <>
      <Header />
      <Products />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
