import { useState } from 'react'
import { searchMovies } from '../services/moviesService'

export function useMovies({ search }) {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    // recordar que searchMovies es asincrono
    const newMovies = await searchMovies({ search })

    // una vez que tenemos movies, cambiamos el estado
    setMovies(newMovies)
  }

  return { movies, getMovies }
}
