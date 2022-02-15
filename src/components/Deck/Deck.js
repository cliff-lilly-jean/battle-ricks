import React, { useState } from 'react';
import Card from '../Card/Card';

function Deck() {

 // A player's cards
 const [usersCards, setUsersCards] = useState(['Morty', 'Rick']);
 const [computersCards, setComputersCards] = useState([]);

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

 return <div className='deck-container'>
  <p>{usersCards}</p>
  <p>{computersCards}</p>
 </div>;
}

export default Deck;
