/** @format */
import { Square } from "./Square.jsx";

export function WinnerModal({ winner, resetGame }) {
	if (winner === null) return null; //*1

	const winnerText = winner === false ? "Empate" : "Ganador:";

	return (
		<section className="winner">
			<div className="text">
				<h2>{winnerText}</h2>
				<header className="win">{winner && <Square>{winner}</Square>}</header>
				<footer>
					<button onClick={resetGame}>Empezar de nuevo</button>
				</footer>
			</div>
		</section>
	);
}

//*1 antes era un renderizado condicional:
// winner !== null && {<section className="winner">...}
// al factorizar este componente, deja el condicional fuera, asi lo descarta mas facilmente y se lee mejor
