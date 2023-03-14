import './App.css'
import { Movies } from './components/Movies'
import responseMovies from './mocks/with-results.json'
// import withoutResults from './mocks/no-results.json'

function App() {
  // cuando hay peliculas? cuando tiene search y es un array (ver mock)
  const movies = responseMovies.Search

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input placeholder="Avengers, Star Wars, The Matrix ..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
