import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact() {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
    // el setFact se usa aqui, no se pasa al getRandomFact por parametro
    // el setFact recibe como parametro el valor que devuelve la promesa
  }

  // para recuperar la cita c/v q cargue la pagina
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
