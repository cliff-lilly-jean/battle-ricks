import React from 'react';
import { useState, useEffect } from 'react';
import Field from '../Field/Field';

const GameBoard = () => {

 // Game states
 const [gameOver, setGameOver] = useState(true);
 const [turn, setTurn] = useState('');
 const [winner, setWinner] = useState('');

 const determineInitialTurn = () => {
  let randomNumberToDetermineInitialTurn = Math.floor(Math.random() * 4500);
  if (randomNumberToDetermineInitialTurn % 2 == 0) {
   setTurn('player');
  } else {
   setTurn('cpu');
  }
 };

 const startGame = () => {
  setGameOver(false);
  determineInitialTurn();
 };

 useEffect(() => {
  startGame();
 }, []);

 return (
  <div>
   {/* If gameOver is still true, hide the Field, else, show the Field and set the initial turn */}
   {/* {console.log(turn, gameOver)} */}
   <Field />
   <button className=' mx-auto block bg-gray-600 p-4 from-neutral-200 rounded-md' onClick={startGame}>
    Start Game
   </button>
  </div>

 );
};

export default GameBoard;