import './Products.css'
import { AddToCartIcon } from './Icons.jsx'
import { useState } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import { products as initialProducts } from '../mocks/products.json'

export function Products() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <main className="products">
      <ul>
        {filteredProducts.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

// products.slice(0, 10) para que no muestre todos
