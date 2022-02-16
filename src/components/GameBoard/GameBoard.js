import React, { useState, useEffect } from 'react';
import Player from '../Player/Player';
import computerPlayerNames from '../../data/ComputerPlayerNames.json';

function GameBoard() {

 const [gameOver, setGameOver] = useState(true);
 const [winner, setWinner] = useState('');
 const [gameDeck, setGameDeck] = useState();
 const [usersDeck, setUsersDeck] = useState([]);
 const [computersDeck, setComputersDeck] = useState([]);
 const [userPlayer, setUserPlayer] = useState('');
 const [computerPlayer, setComputerPlayer] = useState('');
 const [turn, setTurn] = useState('');

 // Add a new userPlayer on game load
 let addNewUserPlayer = () => {
  let newPlayer = prompt();
  setUserPlayer(newPlayer);
 };

 useEffect(() => {
  addNewUserPlayer();
 }, []);

 // Add a new computerPlayer on game load
 let addNewComputerPlayer = () => {
  let computerPlayerValues = computerPlayerNames;
  setComputerPlayer(computerPlayerValues[Math.floor(Math.random() * getComputerPlayerNamesLength())]);
 };

 let getComputerPlayerNamesLength = () => {
  return computerPlayerNames.length - 1;
 };

 useEffect(() => {
  addNewComputerPlayer();
 }, []);

 /* Create the game rules
     - Each player is given 20 cards (5 in Hand and 15 in Deck)
     - Every turn a player can put a card down on the gameboard in it's designated section (Spell cards in spell section etc.)
     - Monster cards can be placed face down in DEF position
     - Monster cards can be placed face up in attack position
 */
 /* Create the grid
     - 6 x 2 grid
     - bottom right for deck
     - top right for grave yard
     - bottom row for spell cards
     - top row for monster cards
 */

 return <div className="gameboard flex items-center justify-between flex-col p-8 w-3/4 m-auto h-full">
  <Player playerType={computerPlayer} />
  <Player playerType={userPlayer} />
 </div>;
}

export default GameBoard;
