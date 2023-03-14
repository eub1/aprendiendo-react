import { useState } from 'react'
import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'

function App() {
  const { movies } = useMovies()
  const [query, setQuery] = useState()
  const [error, setError] = useState()

  console.log('render')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }
  const handleChange = (event) => {
    // usamos newQuery p/ evitar problema de asincronia del estado.
    // lo evita, al NO usar el estado directamente.

    const newQuery = event.target.value
    setQuery(newQuery)
    if (newQuery === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (newQuery?.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }
    if (newQuery?.length < 3) {
      setError('La pelicula debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }}
            onChange={handleChange}
            value={query}
            name="query"
            placeholder="Avengers, Star Wars, The Matrix ..."
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
