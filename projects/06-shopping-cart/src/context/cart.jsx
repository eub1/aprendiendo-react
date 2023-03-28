// necesitamos un estado global para el carrito

import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  // necesitamos el estado y el setState
  const [cart, setCart] = useState([])

  // necesita funcion para agregar al cart
  const addToCart = (product) => {
    // check if product is already in cart
    const productInCartIndex = cart.findIndex((item) => item.id === product.id)

    // si ya existe, incrementamos la cantidad en 1
    if (productInCartIndex >= 0) {
      // structuredClone hace copia profunda de [] y {}
      const newCart = structuredClone(cart)
      // usamos el indice e incrementamos la cantidad en 1
      newCart[productInCartIndex].quantity += 1
      setCart(newCart)
    }
  }

  // necesitamos limpiar el cart
  const clearCart = () => {
    setCart([])
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
