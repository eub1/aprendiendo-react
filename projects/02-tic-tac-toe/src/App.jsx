import { useState } from "react";

const TURNS = {
	X: "x",
	O: "o"
};

const Square = ({ children, isSelected, updateBoard, index }) => {
	const className = `square ${isSelected ? "is-selected" : ""}`;

	const handleClick = () => {
		updateBoard(index);
	};
	return (
		<div className={className} onClick={handleClick}>
			{children}
		</div>
	);
};

const WINNER_COMBOS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

function App() {
	// necesitamos un estado para guardar cuando el usuario hace click en cada posicion
	const [board, setBoard] = useState(Array(9).fill(null));
	console.log("board", board);

	// necesito saber de quien es el turno, para cada vez que juegue, evaluar si gano o no
	// El turno lo empieza la x. (estado inicial)
	const [turn, setTurn] = useState(TURNS.X);

	// para saber cuando hay un ganador
	const [winner, setWinner] = useState(null); // null -> no hay ganador ; false -> empate

	const checkWinner = (boardToCheck) => {
		for (const combo of WINNER_COMBOS) {
			// revisamos todas las combinaciones ganadoras
			// para ver si x u o gano
			const [a, b, c] = combo; // recuperar lo que hay en las posiciones de combo
			if (
				boardToCheck[a] &&
				boardToCheck[a] === boardToCheck[b] &&
				boardToCheck[a] === boardToCheck[c]
			) {
				return boardToCheck[a];
			}
		}
		// Si no hay ganador.
		return null;
	};

	const updateBoard = (index) => {
		// para evitar sobreescribir - no actualiza la posicion si:
		// ya tiene algo
		// ya hay un ganador, no seguimos jugando
		if (board[index] || winner) return;

		// cuando el usuario hace click,le pasamos el indice, para saber en cual ha hecho click y asi actualizar el board con esa info
		const newBoard = [...board];
		// en esa posicion, ha guardado el turno
		// NUNCA mutar las props ni los estados, por eso lo copia y usa la variable new...
		// no hacerlo puede dar discrepancias en el renderizado, por eso es importante que los datos sean nuevos.
		newBoard[index] = turn;
		setBoard(newBoard);

		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
		setTurn(newTurn);

		// chequear si hay ganador
		const newWinner = checkWinner(newBoard);
		// si hay ganador, renderizar el componente, para poder verlo
		if (newWinner) {
			setWinner(newWinner); // la acutalizacion de los estados en React, son asincronos. Por eso primero sale el alert, y despues se completa la x
			alert(`El ganador es ${newWinner}`);
		}
	};

	return (
		<main className="board">
			<h1>TicTacToe</h1>
			<section className="game">
				{board.map((_, index) => {
					return (
						<Square key={index} index={index} updateBoard={updateBoard}>
							{board[index]}
						</Square>
					);
				})}
			</section>
			<section className="turn">
				<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
				<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
			</section>
		</main>
	);
}

export default App;
