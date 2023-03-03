/** @format */

export const saveGameToStorage = ({ board, turn }) => {
	window.localStorage.setItem("board", JSON.stringify(board));
	window.localStorage.setItem("turn", turn);
};
// 1r param, como se va a llamar
// 2do param, no podemos pasar un array, el localStorage va a guardar un string)
// usa metodo JSON.stringify para convertir en string lo que hay en el array

export const resetGameStorage = () => {
	window.localStorage.removeItem("board");
	window.localStorage.removeItem("turn");
};
