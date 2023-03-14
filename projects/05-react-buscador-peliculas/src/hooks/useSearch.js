import { useRef, useState, useEffect } from 'react'

// creamos customHook para validar, y extraer logica del componente
export function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    // problema: primer input, valida que no se puede buscar peli vacia.
    // solucion con useRef, verificar que haya escrito aun

    if (isFirstInput.current) {
      // si es el primer input del usuario, cambiamos el search, en el caso que el valor sea un string vacio
      // de esta forma evitamos que siga por los otros if, y que re-renderice el componente la primera vez
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search?.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }
    if (search?.length < 3) {
      setError('La pelicula debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
