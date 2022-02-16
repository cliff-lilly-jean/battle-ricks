import React, { useState } from 'react';

function Card({ typeOfCard, nameOfCard }) {

 // * Properties of a Card
 let [defensePosition, setDefensePosition] = useState(false);
 let [attackPosition, setAttackPosition] = useState(false);
 let [destroyed, setDestroyed] = useState(false);
 let [faceDown, setFaceDown] = useState(true);
 // Name
 // HP
 // ATK
 // DEF
 // Image
 // Card type

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

 // * Methods of a Card
 let updateCardPosition = (position) => {
  setCardPosition(position);
 };

 let updateCardMode = (mode) => {
  setFaceDown(mode);
 };

 return <div>
  <h1>I'm the Card</h1>
 </div>;
}

export default Card;
