// import { useCart } from '../hooks/useCart.js'
// import { useFilters } from '../hooks/useFilters.js'

export function Footer() {
  // const { filters } = useFilters()
  // const { cart } = useCart()
  return (
    <footer className="footer">
      <p>debugger for developer mode - change on production!!</p>
      {/* {JSON.stringify(filters, null, 2)} */}
      <h4>Prueba tecnica de React</h4>
      <span>@midudev</span>
      <h5>Shopping cart con useContext & useReducer</h5>
      {/* {JSON.stringify(cart, null, 2)} */}
    </footer>
  )
}
