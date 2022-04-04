import React, { useState, useEffect } from 'react';
import Player from '../Player/Player';

const Board = (startGame, endGame, winner) => {

 // * Properties
 // The Board has an array of Cell components
 const [cells, setCells] = useState([]);

 // The Board component contains an array, players of Player components.
 const [players, setPlayers] = useState([]);


 // * Methods
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

 const handleWinner = (playerGameWinner) => {
  winner = playerGameWinner;
 };


 return (
  <div className="board">
   {/* TODO: insert the players array */}
   {/* <button onClick={handleStartGame}>
    Start Game
   </button> */}
  </div>
 );
};

export default Board;