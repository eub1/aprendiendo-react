import { useState, useEffect } from 'react'

function FollowMouse() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  //* pointer cursor
  useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    // nos hemos suscripto al evento, y aunque enabled = false, igualmente sigue el mouse.
    // en consola: getEventeListeners(window) ->
    // muestra cuantos se han suscripto al evento.
    // si no lo limpio, con cada click se acumulan las suscripciones y es mas lento
    // hay que limpiar los eventos en react

    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    } // se ejecuta cuando se desmonta y cada vez que cambie la dependencia.
  }, [enabled])

  //* change body className
  // cuando cambia enabled, cambian las clases de css del body, y tiene otro efecto.
  // ver body.no-cursor en index.css

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <h3>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivate' : 'Activate'} mouse follower
      </button>
    </>
  )
}

// toggle component: de forma condicional renderiza el componente.
// Se puede usar para ventanas modales por ej.

function App() {
  const [mounted, setMounted] = useState(true)

  return (
    <main>
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>
        Toggle mounted FollowMouse component
      </button>
    </main>
  )
}

export default App
