import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price from: </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1600"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>{' '}
        {/* ponerlo despues del range, del input, no antes que da brincos */}
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Catergory</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  )
}
