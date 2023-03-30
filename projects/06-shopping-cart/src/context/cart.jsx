// necesitamos un estado global para el carrito

import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cart.js'

export const CartContext = createContext()

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState) // se puede sacar como un custom Hook

  const addToCart = (product) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })

  const removeFromCart = (product) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })

  const clearCart = () =>
    dispatch({
      type: 'CLEAR_CART'
    })

  return { state, addToCart, clearCart, removeFromCart }
}

export function CartProvider({ children }) {
  // * v. sin reducer, uncomment
  // // necesitamos el estado y el setState
  // const [cart, setCart] = useState([])

  // // necesita funcion para agregar al cart
  // const addToCart = (product) => {
  //   // check if product is already in cart
  //   const productInCartIndex = cart.findIndex((item) => item.id === product.id)

  //   // si ya existe, incrementamos la cantidad en 1
  //   if (productInCartIndex >= 0) {
  //     // structuredClone hace copia profunda de [] y {}
  //     const newCart = structuredClone(cart)
  //     // usamos el indice e incrementamos la cantidad en 1
  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }

  //   // si producto no esta en el carrito
  //   setCart((prevState) => [
  //     ...prevState,
  //     {
  //       ...product,
  //       quantity: 1
  //     }
  //   ])
  // }

  // const removeFromCart = (product) => {
  //   setCart((prevState) => prevState.filter((item) => item.id !== product.id))
  // }

  // // necesitamos limpiar el cart
  // const clearCart = () => {
  //   setCart([])
  // }

  const { state, addToCart, clearCart, removeFromCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
