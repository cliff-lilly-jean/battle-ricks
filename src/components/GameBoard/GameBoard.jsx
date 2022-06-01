import React from 'react';
import { useState, useEffect } from 'react';
import Field from '../Field/Field';

const GameBoard = ({ deck }) => {

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

 // useEffect(() => {

 // }, []);

 return (
  <div>
   <Field />
   <button onClick={startGame}>
    Start Game
   </button>
  </div>

 );
};

export default GameBoard;