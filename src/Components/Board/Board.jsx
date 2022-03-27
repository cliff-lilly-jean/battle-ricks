import React, { useState, useEffect } from 'react';
import Player from '../Player/Player';

const Board = (startGame, endGame, setWinner) => {

 // The Board component contains an array, players of Player components.

 // ! Properties
 // The Board has an array of Cell components

 // The Board has an array of Player
 const [players, setPlayers] = useState([]);


 // ! Methods
 const handleStartGame = () => {
  startGame = true;
  endGame = false;

  // Run a function to  create the players
  const createPlayers = () => {
   // Creates a new User Player
   // Creates a new AI Player
   // Returns the players
  };

  // Run a function to create the board cell layout
  const createBoard = () => {
   // Uses the Cell to populate the board squares
  };

  console.log(startGame);
 };


 const handleEndGame = () => {
  startGame = false;
  endGame = true;

  console.log(endGame);
 };

 const handleWinner = () => {

 };


 return (
  <div className="board">
   {/* players array */}
   <button onClick={handleStartGame}>
    Start Game
   </button>
  </div>
 );
};

export default Board;