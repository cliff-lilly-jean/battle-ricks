import React, { useState } from 'react';
import Card from '../Card/Card';

function Deck() {

 // A player's cards
 const [card, setCards] = useState([]);
 console.log(card);

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

  - drawCard()
     * Pulls one card from the deck and returns it.
       - Return the first card in the Deck

  - cardsLeft()
     * As cards are dealt from the deck, reduce the number of cards left. Return the number of cards left in the deck.
       - Return cards.length
 */

 return <div>
  <p>I'm the Deck</p>
  <Card />
 </div>;
}

export default Deck;
