import React, { useState } from 'react';
import Card from '../Card/Card';

const Deck = () => {

 // * Properties
 // The Deck has an array, cards of Card components.
 const [cards, setCards] = useState([]);

 // The Deck has a total state
 const [cardsInDeck, setCardsInDeck] = useState(0);


 // * Methods
 // The Deck total can be subtracted from

 return (
  <div className="cards">
   {/* cards array */}
  </div>
 );
};

export default Deck;