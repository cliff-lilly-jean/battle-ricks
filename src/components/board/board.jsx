import React from 'react';
import { useState, useEffect } from 'react';
import cards from '../cards/cards';

import Deck from '../deck/deck';

const Board = ({ deck }) => {

 // Game states
 const [gameOver, setGameOver] = useState(true);
 const [turn, setTurn] = useState('');
 const [winner, setWinner] = useState('');

 // Player states
 const [playersDeck, setPlayersDeck] = useState([]);
 const [playersHand, setPlayersHand] = useState([]);
 const [playersHealth, setPlayersHealth] = useState(8000);
 const [playersFieldCards, setPlayersFieldCards] = useState([]);
 const [playersGraveYard, setPlayersGraveYard] = useState([]);

 // Cpu states
 const [cpusDeck, setCpusDeck] = useState([]);
 const [cpusHand, setCpusHand] = useState([]);
 const [cpusHealth, setCpusHealth] = useState(8000);
 const [cpusFieldCards, setCpusFieldCards] = useState([]);
 const [cpusGraveYard, setCpusGraveYard] = useState([]);


 const splitGameDeck = (deckToSplit) => {
  let splitDeck1 = [];
  let splitDeck2 = [];

  // for each card in the deck, push every other card into the opposite deck
  for (let i = 0; i < deckToSplit.length; i++) {
   if (i % 2 == 0) {
    splitDeck1.push(deckToSplit[i]);
   } else {
    splitDeck2.push(deckToSplit[i]);
   }
  }
  return { splitDeck1, splitDeck2 };
 };

 const splitHand = (deckToCreateHand) => {
  let splitDeckIntoHand = [];
  let cardToAddToHand = '';
  let numberOfCardsToAddToHand = 5;


  for (let i = 0; i < numberOfCardsToAddToHand; i++) {
   cardToAddToHand = deckToCreateHand.shift();
   splitDeckIntoHand.push(cardToAddToHand);
  }

  return splitDeckIntoHand;
 };

 const initialGameStartTurn = () => {
  let randomNumberToDetermineInitialTurn = Math.floor(Math.random() * 4500);
  if (randomNumberToDetermineInitialTurn % 2 == 0) {
   setTurn('player');
  } else {
   setTurn('cpu');
  }
 };

 const startGame = () => {
  // set the gameOver state to false
  setGameOver(false);

  let splitDeck = splitGameDeck(deck);
  setPlayersDeck(splitDeck.splitDeck1);
  setCpusDeck(splitDeck.splitDeck2);


  setPlayersHand(splitHand(playersDeck));
  setCpusHand(splitHand(cpusDeck));

  initialGameStartTurn();

 };

 useEffect(() => {
  startGame();
 }, []);

 return (
  <div>
   <button onClick={startGame}>
    Start Game
   </button>
  </div>

 );
};

export default Board;