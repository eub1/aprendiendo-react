/** @format */

import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { resetGameStorage, saveGameToStorage } from './logic/storage/index.js'

function App() {
  // console.log("render");
  // necesitamos un estado para guardar cuando el usuario hace click en cada posicion

  //* si hay una partida guardada
  // queremos saber si hay algo en el localStorage, si hay, entonces lo tomamos como valor inicial cada vez que se renderiza, monta el componente.
  // le pasamos una funcion a useState, para poder usar un condicional y verificar que estado toma.
  // recuperamos board del localStorage.
  // si hay algo en el storage, hacemos un json parse y lo recuperamos, sino el valor inicial sera el otro.

  const [board, setBoard] = useState(() => {
    // console.log("inicializar estado del board");
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  // console.log("board", board);

  // necesito saber de quien es el turno, para cada vez que juegue, evaluar si gano o no
  // El turno lo empieza la x. (estado inicial)
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X // si tengo algo en el storage, uso ese, sino, si es null o undefine, uso turns.x
  })

  // para saber cuando hay un ganador
  const [winner, setWinner] = useState(null) // null -> no hay ganador ; false -> empate

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    // para evitar sobreescribir - no actualiza la posicion si:
    // ya tiene algo
    // ya hay un ganador, no seguimos jugando
    if (board[index] || winner) return

    // cuando el usuario hace click,le pasamos el indice, para saber en cual ha hecho click y asi actualizar el board con esa info
    const newBoard = [...board]
    // en esa posicion, ha guardado el turno
    // NUNCA mutar las props ni los estados, por eso lo copia y usa la variable new...
    // no hacerlo puede dar discrepancias en el renderizado, por eso es importante que los datos sean nuevos.
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // guardar la partida
    saveGameToStorage({ board: newBoard, turn: newTurn })

    // chequear si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner) // la acutalizacion de los estados en React, son asincronos.
      // alert(`El ganador es ${newWinner}`); //* Por eso primero sale el alert, y despues se completa la x
      // console.log('winner', winner); //* podemos ver que aun tiene el estado viejo, no cambio
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>TicTacToe</h1>
      <button onClick={resetGame}>Reset del Juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
