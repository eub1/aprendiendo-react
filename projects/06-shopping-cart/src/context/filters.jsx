// 1. crear el Contexto
import { createContext } from 'react'

export const FiltersContext = createContext()
// console.log(FiltersContext)

// 2. crear el Provider, para proveer el contexto
export function FiltersProvider({ children }) {
  return (
    <FiltersContext.Provider value={{ category: 'all', minPrice: 0 }}>
      {children}
    </FiltersContext.Provider>
  )
}
