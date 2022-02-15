import React, { useState } from 'react';

// COMPONENTS
import GameBoard from '../GameBoard/GameBoard';

const Game = () => {

 const [gameOver, setGameOver] = useState(true);
 const [winner, setWinner] = useState('');
 const [usersDeck, setUsersDeck] = useState([]);
 const [computersDeck, setComputersDeck] = useState([]);
 const [turn, setTurn] = useState('');


 return (
  <GameBoard />
 );
};

export default Game;