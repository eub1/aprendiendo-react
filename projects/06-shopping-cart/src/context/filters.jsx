// 1. crear el Contexto
import { createContext, useState } from 'react'

// este es el contexto que vamos a consumir
export const FiltersContext = createContext()
// console.log(FiltersContext)

// 2. crear el Provider, para proveer el contexto
// este nos provee de acceso a los datos
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
