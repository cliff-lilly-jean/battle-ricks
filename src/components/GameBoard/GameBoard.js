import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
// REACT QUERY
import { useQuery } from '@apollo/client';
import { RICK_AND_MORTY_CHARACTERS } from '../../graphql/Queries';

// CSS
import './GameBoard.css';
import Button from '../Button/Button';
import Deck from '../Deck/Deck';


function GameBoard() {

 let [charactersPageList, setCharactersPageList] = useState(1);
 let [randomCharacter, setRandomCharacter] = useState(1);
 let [deck, setDeck] = useState([]);

 // create an updateCharacterList function to randomly pick a number,
 // pass that number into a variable and change the state of the
 // charactersPageList using setCharactersPageList
 let updateCharacterList = () => {
  let num = Math.floor(Math.random() * 42) + 1;
  setCharactersPageList(num);
 };

 let updateCharacterRandomly = () => {
  let num = Math.floor(Math.random() * 20);
  setRandomCharacter(num);
 };


 // Todo:create an updateTotalHealth function to update the HP after damage is taken, if the card is in attack position if the card is in defense position then subtract the difference of the attack from the defense and have the totalHP reflect that number if it's positive


 // get the loading, error and data
 // add variables to the query to help with pagination/choose random pages using setCharactersPageList
 const { loading, error, data } = useQuery(RICK_AND_MORTY_CHARACTERS, { variables: { page: charactersPageList } });


 // rerender only if the charactersPageList is updated
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

 return (
  <div className="game-board">
   <div className='game-board__container p-4'>
    <Card className="card" key={data.characters.results[randomCharacter].id} image={data.characters.results[randomCharacter].image} name={data.characters.results[randomCharacter].name} species={data.characters.results[randomCharacter].species} status={data.characters.results[randomCharacter].status} gender={data.characters.results[randomCharacter].gender} location={data.characters.results[randomCharacter].location.name} />
   </div>
   {/* Deck generator button */}
   <Button updateCharacterList={updateCharacterList} updateCharacterRandomly={updateCharacterRandomly} />
   <Deck />
  </div>
 );
}

export default GameBoard;
