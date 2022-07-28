
import React from 'react';
import Cards from '../Cards/Cards';

const Deck = ({ typeOfDeck }) => {

 return (
  <div>
   <div className='cards'>
    <Cards generateCards={typeOfDeck} />
   </div>
  </div>

 );
};

export default Deck;