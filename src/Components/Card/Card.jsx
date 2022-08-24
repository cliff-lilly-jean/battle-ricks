import React, { useEffect, useState } from 'react';
import cardSpeciesColors from '../../Data/Card/cardSpeciesColors';
import cardStrengthsAndWeaknesses from '../../Data/Card/cardSpeciesStrengthAndWeakness';
import attack from '../../Functions/Card/attack';
import "./Card.scss";


const Card = ({ cardId, cardName, cardSpecies, cardAttackPoints, cardDefensePoints, cardStatus, cardIcon, cardImage, cardHome }) => {

  // !Properties

  let name = cardName;
  let species = cardSpecies;
  let attack;
  let defense;
  let status;
  let lifePoints;
  let gender;
  let image;
  let home;

  // !States

  const [cardFace, setCardFace] = [{
    "Up": "Card is face up",
    "Down": "Card is face down"
  }];

  const [cardPosition, setCardPosition] = [{
    "Attack": "Card is in attack",
    "Defense": "Card is in defense"
  }];

  // !Methods
  // Attack
  // Change face 
  // Change position

  return (
    <div className="card-wrapper">
      <div className='card single-card' style={{ background: cardSpeciesColors[species] }}>
        <div className="front"></div>
        <div className="back">
          <div className="card-content">
            <p>{name}</p>
            <div className='card-image'>{image}</div>
            <p>{species}</p>
            <p>{`Attack: ${attack}`}</p>
            <p>{`Defense: ${defense}`}</p>
            <p>{status}</p>
            <div className='card-image'>{gender}</div>
            <p>{home}</p>
            {/* TODO: these are states and don't need to be shown on the card */}
            {/* <p>{`Face: ${changeCardFaceDownPosition ? "Face Down" : "Face Up"}`} </p>
          <p>{`Position: ${changeCardAttackPosition ? "Attack Position" : "Defense Position"}`}</p> */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
