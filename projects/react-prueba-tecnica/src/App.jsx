import { ComponenteReutilizable } from './components/ComponenteReutilizable.jsx'
import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from './hooks/useCatImage.js'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact }) // fact es undefined la primera vez

  const handleClick = () => {
    refreshFact()
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
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  )
}
