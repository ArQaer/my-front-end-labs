import React, { useState } from "react";
import Board from "../Board/Board";
import './Game.css';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = defineWinner(board);
    const squareClick = (index) => {
        const boardValue = [...board];
        //перевірка чи є переможець або чи зайнята комірка
        if (winner || boardValue[index]) {
          return null
        }
        // визначаєм чий хід
        boardValue[index] = xIsNext ? 'X' : 'O';
        // обновляєм стейт
        setBoard(boardValue);
        setXIsNext(!xIsNext);
    }

    const startNewGame = () => {
      return (
        <button className="start__btn" onClick={() => setBoard(Array(9).fill(null))}>New game</button>
      )
    }
    
    return (
        <div className="wrapper">
            { startNewGame() }
            <Board squares={board} click={squareClick}/>
            <p className="game__info">
              { winner ? "Winner is: " + winner : "Who's next: " + (xIsNext ? 'X' : 'O')}
            </p>
        </div>
    )
}


export default Game;

const defineWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null
}