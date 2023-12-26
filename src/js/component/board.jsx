import React from "react";
import { useState, useEffect } from "react";
import Square from './square.jsx';
import { Patterns } from "./patterns.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Board = () => {
	const [board, setBoard] = useState(["", "", "", "", "", "", "", "", "",])
	const [player, setPlayer] = useState("O");
	const [result, setResult] = useState ({winner: "none", state: "none" })

	useEffect(() => {
		winner();
		checkIfTie();
		if (player == "X") {
			setPlayer ("O");
		} else {
			setPlayer ("X");
		}
	}, [board]);

	useEffect (() => {
		if(result.state != "none") {
		alert(`Game finished! Winning Player: ${result.winner}`);
		restartGame();
		}
	}, [result])

	const changeSquare = (square) => {
		setBoard(board.map((game, idx) => {
			if (idx == square && game == "") {
				return player;
			}
			return game;
		})
		);

		
	};

	const winner =() => {
		Patterns.forEach((currPattern) => {
			const firstPlayer = board [currPattern [0]];
			if(firstPlayer == "") return;
			let foundWinningPattern = true
			currPattern.forEach((idx) => {
				if (board[idx] != firstPlayer) {
					foundWinningPattern = false
				}
			})
			if (foundWinningPattern) {
				setResult ({winner: player, state: "won"});
			}
		});
	};

	const checkIfTie = () => {
		let filled = true;
		board.forEach((square) => {
			if (square =="") {
				filled = false
			}
		})

		if (filled) {
			setResult({winner: "No One", state: "Tie"});
		}
	};

	const restartGame =() => {
		setBoard(["", "", "", "", "", "", "", "", "",])
		setPlayer("O");
	}

	return (
		<div className="ticTacToe">
			<div className="board">
				<div className="row">
					<Square game={board [0]} chooseSquare={() => {changeSquare (0)}} />
					<Square game={board [1]} chooseSquare={() => {changeSquare (1)}} />
					<Square game={board [2]} chooseSquare={() => {changeSquare (2)}} />
				</div>
				<div className="row">
				<Square game={board [3]} chooseSquare={() => {changeSquare (3)}} />
				<Square game={board [4]} chooseSquare={() => {changeSquare (4)}} />
				<Square game={board [5]} chooseSquare={() => {changeSquare (5)}} />
				</div>
				<div className="row">
				<Square game={board [6]} chooseSquare={() => {changeSquare (6)}} />
				<Square game={board [7]} chooseSquare={() => {changeSquare (7)}} />
				<Square game={board [8]} chooseSquare={() => {changeSquare (8)}} />
				</div>
			</div>
		</div>
	);
};

export default Board;
