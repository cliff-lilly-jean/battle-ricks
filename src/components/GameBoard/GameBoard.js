import React from 'react';
import Card from '../Card/Card';
// REACT QUERY
import { useQuery } from '@apollo/client';
import { RICK_AND_MORTY_CHARACTERS } from '../../graphql/Queries';

// CSS
import './GameBoard.css';


function GameBoard() {

 // set the characters
 const { loading, error, data } = useQuery(RICK_AND_MORTY_CHARACTERS);

 console.log(data.characters.results);

 // pull the data from the API
 if (loading) {
  return <h1>Loading...</h1>;
 }

 if (error) {
  return <h1>Something went wrong</h1>;
 }
 return (
  <div className='game-board'>
   {data.characters.results.map(character => {
    return <Card id={character.id} image={character.image} name={character.name} species={character.species} status={character.status} gender={character.gender} location={character.location.name} />;
   })}
  </div>
 );
}

export default GameBoard;
