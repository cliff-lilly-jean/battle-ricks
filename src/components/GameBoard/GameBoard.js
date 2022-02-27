import React, { useState, useEffect } from 'react';
import Player from '../Player/Player';
import Button from '../Button/Button';

import getPlayers from './GetPlayers';
import getDeck from '../Deck/GetDeck';


function GameBoard() {

 // Game properties
 const [gameOver, setGameOver] = useState(true);
 const [winner, setWinner] = useState('');
 const [gameDeck, setGameDeck] = useState([]);
 const [turn, setTurn] = useState('');


 const { cpuPlayer, userPlayer } = getPlayers();
 const { getNewDeck, randomCharacters } = getDeck();

 // User properties
 const [usersDeck, setUsersDeck] = useState(['Rick ', 'Morty']);

 // CPU properties
 const [cpusDeck, setCpusDeck] = useState(['Summer ', 'Beth']);


 /*
 - startGame()
 * Begins a new game
    - Pull data from the API to generate 40 random cards
    - Add the cards to the gameDeck
    - Shuffle the gameDeck
    - Divide the gameDeck into 2 newDecks
    - Add 1 newDecks to the userDeck
    - Add 1 newDecks to the cpuDeck


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
  <Player playerType={cpuPlayer} playerDeck={cpusDeck} />
  <Button getNewDeck={getNewDeck} />
  <Player playerType={userPlayer} playerDeck={usersDeck} />
 </div>;
};

export default GameBoard;
