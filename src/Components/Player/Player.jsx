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
      const fieldDeckCards = [["cold", "hot", "big", "warm", "mild"]];
      // let decks = playerDeck;
      // let hands = playerHand;

      setDeck(playerDeck);


   }, [deck, hand, graveYard, fieldCards]);


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
            <Deck deckCards={hand} />
         </div>
      </div>
   );
};

export default Player;