import React, { useState, useEffect } from 'react';
import Player from '../Player/Player';
import Button from '../Button/Button';
import computerPlayerNames from '../../data/ComputerPlayerNames.json';

// React Query
import { useQuery } from '@apollo/client';
import { RICK_AND_MORTY_CHARACTERS } from '../../graphql/Queries';

function GameBoard() {

 const [gameOver, setGameOver] = useState(true);
 const [winner, setWinner] = useState('');
 const [gameDeck, setGameDeck] = useState([]);
 const [usersDeck, setUsersDeck] = useState(['Rick ', 'Morty']);
 const [computersDeck, setComputersDeck] = useState(['Summer ', 'Beth']);
 const [userPlayer, setUserPlayer] = useState('');
 const [computerPlayer, setComputerPlayer] = useState('');
 const [turn, setTurn] = useState('');
 const [charactersPageList, setCharactersPageList] = useState(1);
 const [randomCharacter, setRandomCharacter] = useState(1);

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

 // Randomly chose a number to change the page of the GraphQl API
 let updateCharacterList = () => {
  let num = Math.floor(Math.random() * 42) + 1;
  setCharactersPageList(num);
  console.log("characters page: " + charactersPageList);
 };

 // Randomly choose a character from the GraphQl API
 let updateCharacterRandomly = () => {
  let num = Math.floor(Math.random() * 20);
  setRandomCharacter(num);
  console.log("character num: " + randomCharacter);
 };

 // Query the GraphQl API
 const { loading, error, data } = useQuery(RICK_AND_MORTY_CHARACTERS, { variables: { page: charactersPageList } });

 // Rerender only if the charactersPageList is updated
 useEffect(() => {
  // set random character on initial render
  setRandomCharacter(Math.floor(Math.random() * 20));
 }, [charactersPageList, randomCharacter]);

 // loading state
 if (loading) {
  return <h1 className='text-center mt-auto mb-auto flex justify-center items-center bold text-3xl'>Loading...</h1>;
 }

 // error state
 if (error) {
  return <h1 className='text-center mt-auto mb-auto flex justify-center items-center bold text-3xl'>Something went wrong</h1>;
 }

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
  <Button updateCharacterList={updateCharacterList} updateCharacterRandomly={updateCharacterRandomly} />
  <Player playerType={userPlayer} playerDeck={usersDeck} />
 </div>;
}

export default GameBoard;
