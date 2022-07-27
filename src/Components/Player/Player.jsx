import React, { useState, useEffect } from 'react';
import Deck from '../Deck/Deck';

const Player = ({ player, playerDeck, playerHand }) => {

   // The deck is an array of Card Components
   const [deck, setDeck] = useState([]);

   // The hand is an array of Card Components
   const [hand, setHand] = useState([]);

   const [lp, setLp] = useState(8000);

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
      <div>
         {player.name}
         {/* {console.log(player, playerDeck, playerHand)} */}
         <p><span className="font-bold">LP:</span> {lp}</p>
         <div><span className="font-bold">Deck:</span> <Deck typeOfDeck={deck} /></div>
         <div><span className="font-bold">Field:</span> <Deck typeOfDeck={fieldCards} /></div>
         <div><span className="font-bold">Hand:</span> <Deck typeOfDeck={hand} /></div>
         <div><span className="font-bold">Graveyard:</span> <Deck typeOfDeck={graveYard} /></div>
      </div>
   );
};

export default Player;