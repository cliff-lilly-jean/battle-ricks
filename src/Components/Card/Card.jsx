import React, { useState } from 'react';
import cardStrengthWeakness from '../../Data/Card/cardSpeciesStrengthAndWeakness';
import cardSpeciesColors from '../../Data/Card/cardSpeciesColors';
import cardGenderIcons from '../../Data/Card/cardGenderIcons';
import characters from '../../Data/rick-and-morty-characters.json';



const Card = ({ generateCards }) => {

  const [faceDown, setFaceDown] = useState(true);
  const [attackPosition, setAttackPosition] = useState(false);

  const attack = (charAtkVal) => {
    console.log(charAtkVal);
  };


  return (
    <div className='findCard-card ml-8' >
      {generateCards.map(card => {
        return (
          <div onClick={() => console.log(`Card: ${card.name}`)} className='my-4' style={{ background: cardSpeciesColors[card.species] }} key={card.id}>
            <div>{`Name: ${card.name}`}</div>
            <div>{`Species: ${card.species}`}</div>
            <div>{`Attack: ${card.attack}`}</div>
            <div>{`Defense: ${card.defense}`}</div>
            <div>{`Status: ${card.status}`}</div>
            <div><img src={cardGenderIcons[card.gender]} alt="Gender icon" width="25" /></div>
            <div>{`Image: ${card.image}`}</div>
            <div>{`Location: ${card.location}`}</div>
            <div>{`Card Face: ${faceDown}`}</div>
            <div>{`Card Position: ${attackPosition}`}</div>
            <button style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} onClick={() => attack(card.attack)}>ATK</button>
            <button style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} onClick={() => { setAttackPosition(!attackPosition); console.log(card.id); }}>Set Attack position</button>
            <button style={{ margin: "5px auto", display: "block", padding: "15px", background: "#44acba" }} onClick={() => { setFaceDown(!faceDown); console.log(card.id); }}>Set Face</button>
          </div>
        );
      })}
    </div >
  );
};

export default Card;
