import { Header } from './components/Header.jsx'
import { Products } from './components/Products.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'

function App() {
  const { filters } = useFilters()

  return (
    <>
      <Header />
      <Products />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
