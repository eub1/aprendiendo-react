import './App.css'
// import withResults from './mocks/with-results.json'
// import withoutResults from './mocks/no-results.json'

function App() {
  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input placeholder="Avengers, Star Wars, The Matrix ..." />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <main>
        <h2>Aqui iran los resultados</h2>
      </main>
    </div>
  )
}

export default App
