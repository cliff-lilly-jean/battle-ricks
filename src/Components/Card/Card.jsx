import React, { useState } from 'react';
import cardStrengthWeakness from '../../Data/Card/cardSpeciesStrengthAndWeakness';
import cardSpeciesColors from '../../Data/Card/cardSpeciesColors';
import cardGenderIcons from '../../Data/Card/cardGenderIcons';



const Card = ({ generateCards }) => {

  const [faceDown, setFaceDown] = useState(true);
  const [attackPosition, setAttackPosition] = useState(false);

  const attack = (charAtkVal) => {
    console.log(charAtkVal);
  };


  return (
    <div className='character-card ml-8' onClick={console.log('')}>
      {generateCards.map(character => (
        <div className='my-4' style={{ background: cardSpeciesColors[character.species] }} key={character.id}>
          <div>{`Name: ${character.name}`}</div>
          <div>{`Species: ${character.species}`}</div>
          <div>{`Attack: ${character.attack}`}</div>
          <div>{`Defense: ${character.defense}`}</div>
          <div>{`Status: ${character.status}`}</div>
          <div><img src={cardGenderIcons[character.gender]} alt="Gender icon" width="25" /></div>
          <div>{`Image: ${character.image}`}</div>
          <div>{`Location: ${character.location}`}</div>
          <div>{`Card Face: ${faceDown}`}</div>
          <div>{`Card Position: ${attackPosition}`}</div>
          <button onClick={() => attack(character.attack)}>ATK</button>
        </div>

      ))
      }
    </div >
  );
};

export default Card;