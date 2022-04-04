import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Board from '../Board/Board';

const Game = () => {

 // Properties
 const [gameOver, setGameOver] = useState(true);
 const [player1Deck, setPlayer1Deck] = useState([]);
 const [player2Deck, setPlayer2Deck] = useState([]);
 const [player1PlayedCards, setPlayer1PlayedCards] = useState([]);
 const [player2PlayedCards, setPlayer2PlayedCards] = useState([]);
 const [player1Hand, setPlayer1Hand] = useState([]);
 const [player2Hand, setPlayer2Hand] = useState([]);
 const [player1Graveyard, setPlayer1Graveyard] = useState([]);
 const [player2Graveyard, setPlayer2Graveyard] = useState([]);
 const [player1LP, setPlayer1LP] = useState(8000);
 const [player2LP, setPlayer2LP] = useState(8000);
 const [turn, setTurn] = useState('');
 const [winner, setWinner] = useState('');
 let [cards, setCards] = useState([]);

 // Methods

 const getNewCharacterFromApi = async () => {

  const randomCharacterNumber = Math.floor(Math.random() * 820) + 1;
  let newCharacter;
  await axios.get(`https://rickandmortyapi.com/api/character/${randomCharacterNumber}`)
   .then(res => {
    // console.log(res.data);
    newCharacter = {
     id: res.data.id,
     name: res.data.name,
     gender: res.data.gender,
     image: res.data.image,
     origin: res.data.location.name,
     species: res.data.species,
     status: res.data.status,
     type: res.data.type,
     ATK: Math.floor(Math.random() * 3000) + 1,
     DEF: Math.floor(Math.random() * 3000) + 1,
    };
    setCards(card => [...card, newCharacter]);
   });
  return newCharacter;
 };

 const buildDeck = () => {
  for (let i = 0; i < 80; i++) {
   getNewCharacterFromApi();
  }
 };

 const startGame = async () => {
  // Build the deck
  buildDeck();

  // Shuffle the cards
  // Take the first 40 cards from cards and give them to player1Deck
  // Take the second 40 cards from cards and give them to player2Deck
  // Take the first 5 cards from player1Deck and ad them to player1Hand
  // Take the first 5 cards from player2Deck and ad them to player2Hand

  // Set turn to 'Player 1'
  setTurn('Player 1');
  // Set gameOver to false
  setGameOver(false);

 };


 useEffect(async () => {

 }, []);

 return (
  <div className="game-container">
   <button onClick={startGame}>
    Start Game
   </button>
   <ul className='text-center font-bold m-4'>
    {cards.map((card, index) => <li className='m-2' key={index} >{card.name}</li>)}
   </ul>
   {console.log('This is the cards array: ', cards, 'Player turn: ', turn, 'Game State: ', gameOver)}
   <Board />
  </div>
 );
};

export default Game;