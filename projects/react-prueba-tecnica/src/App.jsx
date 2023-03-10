import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts.js'
import { useCatImage } from './hooks/useCatImage.js'

// CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = `https://cataas.com`

export function App() {
  const [fact, setFact] = useState()
  const { imageUrl } = useCatImage({ fact }) // fact es undefined la primera vez

  // c/ vez q se monta el componente ([]), hacer fetching de datos
  // p/ recuperar la al cargar la pagina
  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact)) // el setFact se usa en este componente, no se pasa al getRandomFact por parametro // el setFact recibe como parametro el valor que devuelve la promesa
  }, [])

  const handleClick = async () => {
    //getRandomFact().then(setFact)
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '800px',
        margin: '0auto',
        fontFamily: 'system-ui'
      }}
    >
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>} {/* renderizado condicional */}
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  )
}
