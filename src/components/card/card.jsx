import React, { useState } from 'react';
import maleIcon from '../../assets/imgs/male-icon.png';
import femaleIcon from '../../assets/imgs/female-icon.png';
const Card = ({ generatedCard }) => {

 const [faceDown, setFaceDown] = useState(true);
 const [attackPosition, setAttackPosition] = useState(false);

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

 return (
  <div className='character-card ml-8' >
   {generatedCard.map(character => (
    <div className='my-4' style={{ background: cardSpeciesColors[character.species] }} key={character.id}>
     <div>{`Name: ${character.name}`}</div>
     <div>{`Species: ${character.species}`}</div>
     <div>{`Attack: ${character.attack}`}</div>
     <div>{`Defense: ${character.defense}`}</div>
     <div>{`Status: ${character.status}`}</div>
     <div><img src={cardGenderIcons[character.gender]} alt="Gender icon" width="25" /></div>
     <div>{`Image: ${character.image}`}</div>
     <div>{`Location: ${character.location}`}</div>
    </div>

   ))

   }

  </div >
 );
};

export default Card;