import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import { Header } from './components/Header.jsx'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      // de todo el array de productos
      // solo devolver los productos que cumplan 2 condiciones:
      // tengan un precio mayor o igual al minimo precio (por defecto es 0, todos son mayores a 0)
      // y ademas si filters.category es 'all' (mostramos ese)
      // pero si no es 'all', mostramos los productos cuya categoria sea la misma que filters.category

      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
