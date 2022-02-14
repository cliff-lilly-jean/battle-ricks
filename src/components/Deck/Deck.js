import React, { useState } from 'react';
import Card from '../Card/Card';

function Deck() {

 // A player's cards
 const [card, setCards] = useState(['card1', 'card2', 'card3']);
 console.log(card);

 /*
  - dealCard()
     - Deals one card from the deck and returns it.

  - shuffle()
     - Put the cards in the deck and shuffle them randomly.

  - drawCard()
     - Pulls one card from the deck and returns it.

  - cardsLeft()
     - As cards are dealt from the deck, reduce the number of cards left.
     Return the number of cards left in the deck.
 */

 return <div>
  {/* TODO: Loop through an array for cards to create the Deck */}
  <p>I'm the Deck</p>
  <Card />
 </div>;
}

export default Deck;
