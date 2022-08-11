import React, { useState, useEffect } from 'react';
import Deck from '../Deck/Deck';
import './Player.scss';

const Player = ({ player, playerDeck, playerHand, playerField, playerGraveyard, playerLp }) => {

   // The deck is an array of Card Components
   const [deck, setDeck] = useState([]);

   // The hand is an array of Card Components
   const [hand, setHand] = useState([]);

   // The fieldCards is an array of Card Components
   const [fieldCards, setFieldCards] = useState([]);

   // The graveYard is an array of Card Components
   const [graveYard, setGraveYard] = useState([]);


   useEffect(() => {

      const handCards = [["hand", "cards", "in", "the", "deck"]];
      const fieldDeckCards = [["field", "cards", "deck"]];
      const graveYardCards = [["graveyard", "cards", "in", "deck"]];


      setDeck(playerDeck);
      setHand(playerHand);
      setFieldCards(playerField);
      setGraveYard(playerGraveyard);


   }, [deck, hand, graveYard, fieldCards]);


   return (

      <div className='player'>
         {player.name}
         <div className="player-wrapper">
            {/* Graveyard */}
            <div className='graveyard'>
               <span className='cards-in-deck'>{graveYard.length}</span>
               <Deck deckCards={graveYard} />
               {/* {console.log(playerDeck)} */}
            </div>
            {/* Field */}
            <div className='field'>
               <span className='cards-in-deck'>{fieldCards.length}</span>
               <Deck deckCards={fieldCards} />
            </div>
            {/* Deck */}
            <div className='deck'>
               <span className='cards-in-deck'>{deck.length}</span>
               <Deck deckCards={deck} />
            </div>
         </div>
         {/* Hand */}
         <div className='hand'>
            {/* <span className='cards-in-deck'>{hand.length}</span> */}
            <span className='cards-in-deck'>{hand.length}</span>
            <Deck deckCards={hand} />
         </div>
      </div>
   );
};

export default Player;