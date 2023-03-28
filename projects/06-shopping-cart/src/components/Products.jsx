import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'

import { useFilters } from '../hooks/useFilters.js'
import { products as initialProducts } from '../mocks/products.json'
import { useCart } from '../hooks/useCart'

export function Products() {
  const { filterProducts } = useFilters()
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  const filteredProducts = filterProducts(initialProducts)
  return (
    <main className="products">
      <ul>
        {filteredProducts.slice(0, 10).map((product) => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

// products.slice(0, 10) para que no muestre todos
