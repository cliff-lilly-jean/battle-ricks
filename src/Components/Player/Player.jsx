import React, { useState, useEffect } from 'react';
import createADeck from '../../Functions/Side/createADeck';
import createAHand from '../../Functions/Side/createAHand';
import Deck from '../Deck/Deck';

const Player = ({ player }) => {

   // The deck is an array of Card Components
   const [deck, setDeck] = useState([]);

   // The hand is an array of Card Components
   const [hand, setHand] = useState([]);

   const [lp, setLp] = useState(8000);

   // The fieldCards is an array of Card Components
   const [fieldCards, setFieldCards] = useState([]);

   // The graveYard is an array of Card Components
   const [graveYard, setGraveYard] = useState([]);

   let amountToCutForDeck = 5;
   let amountToCutForHand = 2;


   useEffect(() => {
      // let newDeck = createADeck(characters, amountToCutForDeck);
      // let newHand = createAHand(newDeck, amountToCutForHand);

      // setDeck(newDeck);
      // setHand(newHand);
   }, []);


   return (
      <div>
         {player.name}
         <p><span className="font-bold">LP:</span> {lp}</p>
         <div><span className="font-bold">Deck:</span> <Deck typeOfDeck={deck} /></div>
         <div><span className="font-bold">Field:</span> <Deck typeOfDeck={fieldCards} /></div>
         <div><span className="font-bold">Hand:</span> <Deck typeOfDeck={hand} /></div>
         <div><span className="font-bold">Graveyard:</span> <Deck typeOfDeck={graveYard} /></div>
      </div>
   );
};

export default Player;