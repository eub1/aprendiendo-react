//* useReducer

export const cartInitialState =
  JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

// update localStorage with state for cart
export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

// reducer siempre devuelve un nuevo estado, que en c/ caso el return siempre sea un estado nuevo
export const cartReducer = (state = cartInitialState, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload

      const productInCartIndex = state.findIndex((item) => item.id === id)

      if (productInCartIndex >= 0) {
        // una forma seria usando structuredClone
        // const newState = structuredClone(state)
        // newState[productInCartIndex].quantity += 1

        // usando el map
        // const newState = state.map((item) => {
        //   if (item.id === id) {
        //     return {
        //       ...item,
        //       quantity: item.quantity + 1
        //     }
        //   }
        //   return item
        // })

        // ⚡ usando el spread operator y slice
        // [1,2,3,4,5] -> cambiamos 3 -> [1, 2, *, 4, 5]
        const newState = [
          // se queda con [1,2]
          ...state.slice(0, productInCartIndex),
          // cambia el del medio
          {
            ...state[productInCartIndex],
            quantity: state[productInCartIndex].quantity + 1
          },
          // deja [4 y 5]
          ...state.slice(productInCartIndex + 1)
        ]

        updateLocalStorage(newState)
        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1
        }
      ]

      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload
      const newState = state.filter((item) => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([])
      return []
    }
  }
  return state
}

// alternativa refactor de reducer:
/*
const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { id } = actionPayload

    const productInCartIndex = state.findIndex((item) => item.id === id)

    if (productInCartIndex >= 0) {
      const newState = structuredClone(state)
      newState[productInCartIndex].quantity += 1
      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...actionPayload, // product
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action) => {
    const { id } = actionPayload
    const newState = state.filter((item) => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: (state, action) => {
    updateLocalStorage(cartInitialState)
    return cartInitialState
  }
}

export const cartReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state // es el default
}
 */
