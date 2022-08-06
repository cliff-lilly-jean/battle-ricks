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
      let decks = playerDeck;
      let hands = playerHand;

      setDeck(decks);
      setHand(hands);

   }, [deck, hand]);


   return (
      <div className='player'>
         {/* {console.log(player, playerDeck, playerHand)} */}
         <div className="player-wrapper">

            <div className='graveyard'>
               <span className="font-bold">Graveyard:</span>
               <Deck typeOfDeck={graveYard} />
            </div>

            <div className='field'>
               {/* <span className="font-bold">Field:</span>
               <Deck typeOfDeck={fieldCards} /> */}
               <div className='field-card-slot'>1</div>
               <div className='field-card-slot'>2</div>
               <div className='field-card-slot'>3</div>
               <div className='field-card-slot'>4</div>
               <div className='field-card-slot'>5</div>
            </div>
            <div className='deck'>
               <span className="font-bold">Deck:</span>
               <Deck typeOfDeck={deck} />
            </div>
         </div>
         <div className='hand'>
            <div className='hand-card-slot'>1</div>
            <div className='hand-card-slot'>2</div>
            <div className='hand-card-slot'>3</div>
            <div className='hand-card-slot'>4</div>
            <div className='hand-card-slot'>5</div>
            {/* <span className="font-bold">Hand:</span>
            <Deck typeOfDeck={hand} /> */}
         </div>
      </div>
   );
};

export default Player;