import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/moviesService'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSerch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSerch.current) return

    try {
      setLoading(true)
      setError(null)

      previousSerch.current = search

      const newMovies = await searchMovies({ search })

      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  // useMeMo ... queremos que calcule esto, solo cuando cambie el sort
  const sortedMovies = useMemo(() => {
    // console.log('memoSortedMovies')
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}

// Al estar en el cuerpo de la funcion, se renderiza y ejecuta con cada render

// sort by title
// usando sort, importante hacer copia del estado.
// locale compare, compara por ej los acentos tambien, como a
// si sort es true, lo ordenamos, sino pasamos movies asi como esta

// const getSortedMovies = (movies) => {
//   const sortedMovies = sort
//     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
//     : movies

//   console.log('render1')
//   return sortedMovies
// }

// cuando estaba suelto en el cuerpo de la funcion pasaba lo mismo
//   console.log('render')
// vemos q al buscar, cambiar el search y se renderiza todo y se vuelve a hacer el mismo sort
