import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'
import { useSearch } from './hooks/useSearch.js'
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log('search: ', search)
      getMovies({ search })
    }, 300),
    []
  )

  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  // *1 haz que la busqueda se haga automaticamente al escribir
  // *2 evita que se la busqueda continuamente al escribir - debounce

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)

    // *1 p/q con c/cambio del input busque la peli
    // *2 necesitamos hacer debounce de este getMovies, no del handleChange
    // lo que queremos evitar es que se haga la busqueda, si aplicamos el debounce al handleChange:
    //  el usuario no puede ver cada input que quita o agrega
    debouncedGetMovies(newSearch)
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
            value={search}
            name="search"
            placeholder="Avengers, Star Wars, The Matrix ..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  )
}

export default App
