const API_KEY = 'b89d738d'

export const searchMovies = async ({ search }) => {
  if (search === '') return null // si es vacio, ni hacemos el fetching

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    )
    const json = await response.json()

    // cuando hay peliculas? cuando tiene search y es un array (ver mock)
    const movies = json.Search

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
