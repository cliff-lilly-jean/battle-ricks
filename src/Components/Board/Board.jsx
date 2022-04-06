import React, { useState, useEffect } from 'react';
import Player from '../Player/Player';

const Board = ({ endGame, winner, player1Deck, player1Hand, player2Deck, player2Hand, turn }) => {

 // * Properties
 // The Board has an array of Cell components
 const [cells, setCells] = useState([]);

 // The Board component contains an array, players of Player components.
 const [players, setPlayers] = useState([]);


 // * Methods
 // const handleStartGame = () => {
 //  startGame = true;
 //  endGame = false;

 //  // Run a function to  create the players
 //  const createPlayers = () => {
 //   // Creates a new User Player
 //   // Creates a new AI Player
 //   // Returns the players
 //  };

 //  // Run a function to create the board cell layout
 //  const createBoard = () => {
 //   // Uses the Cell to populate the board squares
 //  };

 //  console.log(startGame);
 // };

 // const handleEndGame = () => {
 //  startGame = false;
 //  endGame = true;

 //  console.log(endGame);
 // };

 const handleWinner = (playerGameWinner) => {
  winner = playerGameWinner;
 };

 // const handlePlayerDeck = () => {
 //  console.log(player1Deck);
 //  console.log(player2Deck);
 // };

 useEffect(() => {

 }, [turn, player1Deck, player2Deck]);

 return (
  <div className="board">
   {/* TODO: insert the players array */}
   {/* <button onClick={handlePlayerDeck}>Log player deck</button> */}
  </div>
 );
};

export default Board;