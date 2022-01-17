import React from 'react';
// REACT QUERY
import { useQuery, gql } from '@apollo/client';
import { RICK_AND_MORTY_CHARACTERS } from '../../graphql/Queries';


function GameBoard() {

 // set the characters
 const { loading, error, data } = useQuery(RICK_AND_MORTY_CHARACTERS);

 // pull the data from the API
 if (loading) {
  return <h1>Loading...</h1>;
 }

 if (error) {
  return <h1>Something went wrong</h1>;
 }

 console.log(error, data, loading);
 return (
  <div>
   {data.characters.results.map(character => {
    return <div className="card">
     <img src={character.image} alt="" />
     <h2>{character.name}</h2>
    </div>;
   })}
  </div>
 );
}

export default GameBoard;
