import React, { useState } from 'react';

function Card({ typeOfCard, nameOfCard }) {

 // Current state/position of card
 const [cardPosition, setCardPosition] = useState();
 const [defensePosition, setDefensePosition] = useState(false);
 const [attackPosition, setAttackPosition] = useState(false);
 const [destroyed, setDestroyed] = useState(false);
 const [faceDown, setFaceDown] = useState(true);

 // All the states a card can be in
 cardState = {
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
  setCardPosition(mode);
 };



 return <div></div>;
}

export default Card;
