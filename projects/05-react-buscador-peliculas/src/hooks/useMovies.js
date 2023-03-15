import { useState } from 'react'
import { searchMovies } from '../services/moviesService'

export function useMovies({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = async () => {
    try {
      setLoading(true)
      setError(null)

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
