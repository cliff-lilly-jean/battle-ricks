import React from 'react';
import { useEffect, useState } from 'react/cjs/react.production.min';
import Board from '../Board/Board';

const Game = () => {

 // The Game component contains the Board.

 // * Properties
 // The Game has a start state
 const [startGame, setStartGame] = useState(false);

 // The Game has a end state
 const [endGame, setEndGame] = useState(true);

 // The Game has a win state
 const [winner, setWinner] = useState(null);

 return (
  <div className="game-container">
   <Board startGame={setStartGame} endGame={setEndGame} winner={setWinner} />
  </div>
 );
};

export default Game;