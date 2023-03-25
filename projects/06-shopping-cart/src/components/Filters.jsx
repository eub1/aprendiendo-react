import { useId, useState } from 'react'

export function Filters({ changeFilters }) {
  // estado para mostrar de cuanto es el rango
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (e) => {
    // aqui hay un ERROR
    // DOS FUENTES DE LA VERDAD
    setMinPrice(e.target.value)
    changeFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    changeFilters((prevState) => ({
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
        />
        <span>${minPrice}</span>{' '}
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
