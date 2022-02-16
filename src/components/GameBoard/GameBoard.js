import React, { useState, useEffect } from 'react';
import Player from '../Player/Player';
import computerPlayerNames from '../../data/ComputerPlayerNames.json';

function GameBoard() {

 const [gameOver, setGameOver] = useState(true);
 const [winner, setWinner] = useState('');
 const [gameDeck, setGameDeck] = useState([]);
 const [usersDeck, setUsersDeck] = useState(['Rick ', 'Morty']);
 const [computersDeck, setComputersDeck] = useState(['Summer ', 'Beth']);
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

 /*
 - dealCard()
 * Deals one card from the deck and returns it.
   - Create two new Decks
   - Pop the first card off
   - Push it to a Deck1
   - Pop the first card off
   - Push it to Deck2
   - Repeat until cardsLeft() equals 10

- shuffle()
 * Put the cards in the deck and shuffle them randomly.
   - Pull the data from the API for the cards
   - Use the card state to add 50 cards to the deck
   - Shuffle the cards
*/

 return <div className="gameboard flex items-center justify-between flex-col p-8 w-3/4 m-auto h-full">
  <Player playerType={computerPlayer} playerDeck={computersDeck} />
  <Player playerType={userPlayer} playerDeck={usersDeck} />
 </div>;
}

export default GameBoard;
