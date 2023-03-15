import { useState } from 'react'
import { searchMovies } from '../services/moviesService'

let previousSerch = ''

export function useMovies({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = async () => {
    if (search === previousSerch) return

    try {
      setLoading(true)
      setError(null)

      previousSerch = search

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

  return { movies, getMovies, loading }
}

// uso la referencia, para verificar que no vuelva a llamar a la api
// por la misma busqueda

// entonces no hace nada, solo return
