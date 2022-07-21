import React, { useState } from 'react';
import cardStrengthWeakness from '../../Data/Card/cardSpeciesStrengthAndWeakness';
import cardSpeciesColors from '../../Data/Card/cardSpeciesColors';
import cardGenderIcons from '../../Data/Card/cardGenderIcons';


const Card = ({ generatedCard }) => {

  const [faceDown, setFaceDown] = useState(true);
  const [attackPosition, setAttackPosition] = useState(false);



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
      {console.log(cardStrengthWeakness.Human.resistantAgainst.Poopybutthole())}
    </div >
  );
};

export default Card;