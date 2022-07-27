import React, { useState, useEffect } from 'react';
import maleIcon from '../../assets/imgs/male-icon.png';
import femaleIcon from '../../assets/imgs/female-icon.png';
import genderlessIcon from '../../assets/imgs/genderless-icon.png';
import unknownIcon from '../../assets/imgs/unknown.png';

const Card = ({ generatedCard }) => {

 const [faceDown, setFaceDown] = useState('');
 const [cardPosition, setCardPosition] = useState('');


 const cardSpeciesColors = {
  'Human': '#2ec4b6',
  'Alien': '#a2d2ff',
  'Humanoid': '#023e8a',
  'Poopybutthole': '#e63946',
  'Mythological Creature': '#7209b7',
  'Animal': '#fca311',
  'Robot': '#f1faee',
  'Cronenberg': '#fe6d73',
  'Disease': '#22223b',
  'unknown': '#112aac'
 };

 const cardGenderIcons = {
  "Male": maleIcon,
  "Female": femaleIcon,
  "Genderless": genderlessIcon,
  "unknown": unknownIcon
 };

 const cardSpeciesStrengthWeakness = {
  'Human': {
   strongAgainst: ['Animal', 'Robot'],
   weakAgainst: ['Disease', 'Humanoid', 'Alien'],
   resistantAgainst: ''
  },
  'Alien': {
   strongAgainst: ['Human', 'Disease'],
   weakAgainst: ['Poopybutthole', 'Mythological Creature', 'Cronenberg'],
   resistantAgainst: ['unknown']
  }
  // Todo: Finish cardSpeciesStrengthWeakness object
  /*
  !Try computed properties in javascript to use the type ex.
  ex1.
  let human = prompt("Which fruit to buy?", "apple");
  let bag = {
    [human]: 5, // the name of the property is taken from the variable fruit
  };
  alert( bag.human ); // 5 if

  ex2.
  let type = 'human';
  let bag = {
    [human + '-']: 5 // bag.human- = 5
  };

  */
 };

 /*

 TODO: add an object, cardMode that holds the keys: attackMode and defenseMode which will be used to change the design and positioning of the card

 TODO: add an object, cardFace that holds the keys: faceDown and faceUp which will be used to change the design and positioning of the card

 */

 const updateCardFace = (faceVal, cardId) => {
  if (cardId) {
   setFaceDown(faceVal);
  } else {
   return;
  }
 };

 const updateCardPosition = (positionVal, cardId) => {
  if (cardId) {
   setCardPosition(positionVal);
  } else {
   return;
  }

 };

 useEffect(() => {

 }, [cardPosition, faceDown]);



 return (
  <div className='character-card ml-8'>
   {generatedCard.map(character => (
    <div className='my-4' style={{ background: cardSpeciesColors[character.species] }} key={character.id}>
     <div>
      {`Id: ${character.id}`}
     </div>
     <div>
      {`Name: ${character.name}`}
     </div>
     <div>
      {`Species: ${character.species}`}
     </div>
     <div>
      {`Attack: ${character.attack}`}
     </div>
     <div>
      {`Defense: ${character.defense}`}
     </div>
     <div>
      {`Status: ${character.status}`}
     </div>
     <div>
      <img src={cardGenderIcons[character.gender]} alt="Gender icon" width="25" />
     </div>
     <div>
      <img src={character.image} alt="Character" width="150" />
     </div>
     <div>
      {`Location: ${character.location}`}
     </div>
     <div>
      <button onClick={() => updateCardFace('faceDown', character.id)}>change card face</button>
      {faceDown}
     </div>
     <div>
      <button onClick={() => updateCardPosition('attackMode', character.id)}>change card position</button>
      {cardPosition}
     </div>
    </div>
   ))
   }
  </div>
 );
};

export default Card;