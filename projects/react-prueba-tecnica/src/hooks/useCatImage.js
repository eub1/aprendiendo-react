import { useState, useEffect } from 'react'

//* CUSTOME HOOK
// para trabajar la logica para recuperar la imagen, necesitamos el estado, y el efecto

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  // p/ recuperar la imagen con c/ cita nueva
  useEffect(() => {
    if (!fact) return // xq al primer renderizado no tiene fact, el estado es null
    const threeFirstWords = fact.split(' ', 3).join(' ')
    // console.log('threeFirstWords: ', threeFirstWords)
    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        // console.log(response) // p/ ver q tiene response
        const { url } = response // recupera url de response
        setImageUrl(url) // en el estado siempre tener lo minimo necesario
      })
  }, [fact])

  return { imageUrl } // este hook devuelve un objeto con el imageUrl
}
