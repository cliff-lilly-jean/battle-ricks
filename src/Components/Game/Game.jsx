import React from 'react';
import { useState } from 'react/cjs/react.production.min';
import Board from '../Board/Board';

const Game = () => {

 // The Game component contains the Board.

 // * Attributes
 // The Game has a start state
 const [gameStart, setGameStart] = useState(false);

 // The Game has a win state
 const [winner, setWinner] = useState(null);

 // The Game can pick a winner
 let determineWinner = () => {
  // If a Player's HP is 0, he lost
 };

 // The Game can start
 let start = () => {
  // Change the gameStart state to true
  // Create a new Board
  // Create 2 new Player
  // Create 2 new Deck
 };

 return (
  <Board />
 );
};

export default Game;