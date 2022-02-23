import React, { useState, useEffect } from 'react';
import Player from '../Player/Player';
import Button from '../Button/Button';

// test
import PlayerCreation from './PlayerCreation';
// import cpuPlayerNames from '../../data/cpuPlayerNames.json';
import axios from 'axios';

function GameBoard() {

 // Game properties
 const [gameOver, setGameOver] = useState(true);
 const [winner, setWinner] = useState('');
 const [gameDeck, setGameDeck] = useState([]);
 const [turn, setTurn] = useState('');
 const [charactersPageList, setCharactersPageList] = useState([]);
 const [randomCharacter, setRandomCharacter] = useState(() => Math.floor(Math.random() * 20));
 const [randomPage, setRandomPage] = useState();


 const { cpuPlayer, userPlayer } = PlayerCreation();

 // User properties
 const [usersDeck, setUsersDeck] = useState(['Rick ', 'Morty']);
 // const [userPlayer, setUserPlayer] = useState('');

 // CPU properties
 const [cpusDeck, setCpusDeck] = useState(['Summer ', 'Beth']);
 // const [cpuPlayer, setCpuPlayer] = useState('');


 // // Randomly choose a character from the  API
 let updateCharacterRandomly = () => {
  let num = Math.floor(Math.random() * 42) + 1;
  setRandomCharacter(() => Math.floor(Math.random() * 42) + 1);
 };

 // Rerender only if the charactersPageList is updated
 // useEffect(() => {
 //  setRandomCharacter(() => Math.floor(Math.random() * 20));
 // }, []);

 // Get a random character page
 const getAPIData = async () => {
  // Declare a variable to hold the API url string
  let apiUrl = 'https://rickandmortyapi.com/api/character/?page=';

  // Sn array to hold the URL endpoints
  let urlEndpoints = [];

  // An array to hold all the random character numbers
  let randomCharacterArr = [];

  // Loop through and add the data to the arrays
  for (let i = 0; i < 40; i++) {
   urlEndpoints.push(`${apiUrl}${Math.floor(Math.random() * 42) + 1}`);
   randomCharacterArr.push(Math.floor(Math.random() * 20));
  }

  // Use the all method on axios to get a new character page for all the endpoints in the urlEndpoints array
  axios.all(urlEndpoints).then(axios.spread((...allEndPoints) => {
   allEndPoints.forEach((url, index) => {
    axios.get(url).then((res) => {
     let charArrIndex = randomCharacterArr[index];
     console.log(res.data.results[charArrIndex].name);
     console.log("Random char number: ", charArrIndex);
    }).catch(error => {
     console.log(error);
    });
   });
  })
  );
 };


 useEffect(() => {
  // getAPIData();
  // setGameDeck();
  // setCharactersPageList(() => Math.floor(Math.random() * 42) + 1);
  // console.log(charactersPageList);
 }, []);


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
  <Button getAPIData={getAPIData} updateCharacterRandomly={updateCharacterRandomly} />
  {/* s */}
  <Player playerType={userPlayer} playerDeck={usersDeck} />
 </div>;
};

export default GameBoard;
