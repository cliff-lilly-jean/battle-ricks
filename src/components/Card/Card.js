import React, { useState } from 'react';

function Card({ typeOfCard, nameOfCard }) {

 // Current state/position of card
 let [cardPosition, setCardPosition] = useState();
 let [defensePosition, setDefensePosition] = useState(false);
 let [attackPosition, setAttackPosition] = useState(false);
 let [destroyed, setDestroyed] = useState(false);
 let [faceDown, setFaceDown] = useState(true);

 // All the states a card can be in
 cardPosition = {
  'defensePosition': () => {
   setDefensePosition(true);
   setAttackPosition(false);
   setDestroyed(false);
  },
  'attackPosition': () => {
   setDefensePosition(false);
   setAttackPosition(true);
   setDestroyed(false);
  },
  'destroyed': () => {
   setDefensePosition(false);
   setAttackPosition(false);
   setDestroyed(true);
  },
 };

 // Update the card state
 let updateCardPosition = (position) => {
  setCardPosition(position);
 };

 // Update the card mode
 let updateCardMode = (mode) => {
  setFaceDown(mode);
 };

 /* TODO:
  - Get the data for one card from the API
 */

 return <div>
  <h1>I'm the Card</h1>
 </div>;
}

export default Card;
