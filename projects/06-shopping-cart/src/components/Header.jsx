import { Filters } from './Filters.jsx'
import './Filters.css'

export function Header({ changeFilters }) {
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <Filters changeFilters={changeFilters} />
    </header>
  )
}
