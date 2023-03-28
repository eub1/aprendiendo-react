import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export const useCart = () => {
  const context = useContext(CartContext)

  // buena practica: chequear si el contexto es undefined
  // si es undefined, lo mas probable es que
  // se este usando el customHook donde no se pueda
  // q esa parte de la aplicacion NO este envuelta en un provider

  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
