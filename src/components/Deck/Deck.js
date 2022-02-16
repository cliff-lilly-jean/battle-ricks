import React, { useState } from 'react';
import Card from '../Card/Card';

function Deck({ playerDeck }) {

 /*


  - drawCard()
     * Pulls one card from the deck and returns it.
       - Return the first card in the Deck

  - cardsLeft()
     * As cards are dealt from the deck, reduce the number of cards left. Return the number of cards left in the deck.
       - Return cards.length
 */



 return <div className='deck-container'>
  <Card playerDeck={playerDeck} />
 </div>;
}

export default Deck;
