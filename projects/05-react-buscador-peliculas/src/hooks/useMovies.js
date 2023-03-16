import { useRef, useState } from 'react'
import { searchMovies } from '../services/moviesService'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSerch = useRef(search)

  const getMovies = async () => {
    // uso la referencia, para verificar que no vuelva a llamar a la api
    // por la misma busqueda

    // entonces no hace nada, solo return
    if (search === previousSerch.current) return

    try {
      setLoading(true)
      setError(null)

      previousSerch.current = search
      // recordar que searchMovies es asincrono
      const newMovies = await searchMovies({ search })

      // una vez que tenemos movies, cambiamos el estado
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  // sort by title
  // usando sort, importante hacer copia del estado.
  // locale compare, compara por ej los acentos tambien, como a
  // si sort es true, lo ordenamos, sino pasamos movies asi como esta
  const sortedMovies = sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies

  // console.log('render', sortedMovies)
  // vemos q al buscar, cambiar el search y se renderiza todo y se vuelve a hacer el mismo sort

  return { movies: sortedMovies, getMovies, loading }
}
