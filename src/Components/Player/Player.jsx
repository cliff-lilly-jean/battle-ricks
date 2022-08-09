import React, { useState, useEffect } from 'react';
import Deck from '../Deck/Deck';
import './Player.scss';

const Player = ({ player, playerDeck, playerHand, playerLp }) => {

   // The deck is an array of Card Components
   const [deck, setDeck] = useState([]);

   // The hand is an array of Card Components
   const [hand, setHand] = useState([]);

   // The fieldCards is an array of Card Components
   const [fieldCards, setFieldCards] = useState([]);

   // The graveYard is an array of Card Components
   const [graveYard, setGraveYard] = useState([]);


   useEffect(() => {

      const handCards = ["cold", "hot", "big", "warm", "mild"];
      const fieldDeckCards = ["big", "warm", "mild"];
      const graveYardCards = ["hot", "big", "warm", "mild"];


      setDeck(playerDeck);
      setHand(handCards);
      setFieldCards(fieldDeckCards);
      setGraveYard(graveYardCards);


   }, [deck, setHand, setGraveYard, setFieldCards]);


   return (

      <div className='player'>
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