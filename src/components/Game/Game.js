import React, { useLayoutEffect } from 'react';

// COMPONENTS
import GameBoard from '../GameBoard/GameBoard';

const Game = () => {
 useLayoutEffect(() => {
  const canvas = document.getElementById('game-canvas');
  const context = canvas.getContext("2d");

  context.fillRect(10, 10, 150, 100);
 });

 return (
  <canvas id='game-canvas'
   width={window.innerWidth}
   height={window.innerHeight}>
   <GameBoard />
  </canvas >
 );
};

export default Game;