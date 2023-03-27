import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

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
  return { filters, filterProducts, setFilters }
}
