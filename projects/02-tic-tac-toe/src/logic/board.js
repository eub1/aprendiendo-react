/** @format */
import { WINNER_COMBOS } from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
	// revisar si hay un empate
	// newBoard = ['x', 'o', 'x', 'o', 'x', 'o', 'o', 'x', 'x']  --> empate
	// me dejo completar el tablero y no hay ningun null
	return newBoard.every((square) => square !== null);
};
