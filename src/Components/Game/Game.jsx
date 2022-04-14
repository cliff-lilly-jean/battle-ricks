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
 const [cards, setCards] = useState([]);

 // Methods
 // Todo: Use callback functions to populate the data
 const getNewCharacterFromApi = async (randomCallback) => {

  const randomCharacterNumber = Math.floor(Math.random() * 820) + 1;

  const data = await axios.get(`https://rickandmortyapi.com/api/character/${randomCharacterNumber}`)
   .then(res => {
    let newCharacter = {
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
    randomCallback(newCharacter);
    // return newCharacter;
   });
  setCards(card => [...card, data]);
 };

 // const go = (data) => {
 //  console.log(data);
 // };

 const buildDeck = (data) => {
  let newCard = data;
  setCards(card => [...card, newCard]);
 };

 const startGame = () => {

  for (let i = 0; i < 5; i++) {
   getNewCharacterFromApi(buildDeck);
  }
  console.log(cards);

  // // Build the total deck
  // buildDeck();

  // // Divide the cards in half, 40 cards to each player
  // setPlayer1Deck(cards.splice(0, 40));
  // setPlayer2Deck(cards.splice(0, 40));

  // // Build each player's hand, 5 cards to each player
  // setPlayer1Hand(player1Deck.splice(0, 5));
  // setPlayer2Hand(player2Deck.splice(0, 5));

  // // Randomly set an initial player to start the initial turn
  // let randomPlayerTurnNumber = Math.floor(Math.random() * 2) + 1;
  // setTurn('Player' + randomPlayerTurnNumber);

  // // Change the gameOver state to false to start the game
  // setGameOver(false);
 };

 // console.log(`Turn: ${turn}\n\n\n Player 1:\n Deck: ${player1Deck}\n Hand: ${player1Hand}\n\n\n Player 2:\n Deck: ${player2Deck}\n Hand: ${player2Hand}`);

 useEffect(() => {

 }, [player1Deck, player2Deck, player1Hand, player2Hand]);


 return (
  <div className="game-container">
   <button onClick={() => startGame()}>
    Start Game
   </button>
   <Board player1Deck={player1Deck} player1Hand={player1Hand} player2Deck={player2Deck} player2Hand={player2Hand} turn={turn} />
  </div>
 );
};

export default Game;