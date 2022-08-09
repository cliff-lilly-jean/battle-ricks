import React, { useEffect, useState } from 'react';
import cardSpeciesColors from '../../Data/Card/cardSpeciesColors';
import cardStrengthsAndWeaknesses from '../../Data/Card/cardSpeciesStrengthAndWeakness';
import attack from '../../Functions/Card/attack';
import "./Card.scss";


const Card = ({ cardId, cardName, cardSpecies, cardAttackPoints, cardDefensePoints, cardStatus, cardIcon, cardImage, cardHome }) => {

  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [attackPoints, setAttackPoints] = useState('');
  const [defensePoints, setDefensePoints] = useState('');
  const [healthPoints, setHealthPoints] = useState('');
  const [icon, setIcon] = useState('');
  const [image, setImage] = useState('');
  const [origin, setOrigin] = useState('');
  const [facePosition, setFacePosition] = useState({
    positions: {
      "faceDown": true,
      "faceUp": false
    }
  });
  const [attackPosition, setAttackPosition] = useState({
    positions: {
      "defenseMode": true,
      "attackMode": false
    }
  });

  return (
    <div className="card-wrapper">
      <div className='card single-card' style={{ background: cardSpeciesColors[cardSpecies] }}>
        <div className="front"></div>
        <div className="back">
          <div className="card-content">
            <p>{cardName}</p>
            <div className='card-image'>{cardImage}</div>
            <p>{cardSpecies}</p>
            <p>{`Attack: ${cardAttackPoints}`}</p>
            <p>{`Defense: ${cardDefensePoints}`}</p>
            <p>{cardStatus}</p>
            <div className='card-image'>{cardIcon}</div>
            <p>{cardHome}</p>
            {/* TODO: these are states and don't need to be shown on the card */}
            {/* <p>{`Face: ${changeCardFaceDownPosition ? "Face Down" : "Face Up"}`} </p>
          <p>{`Position: ${changeCardAttackPosition ? "Attack Position" : "Defense Position"}`}</p> */}

          </div>
        </div>


        {/* Card Actions */}
        {/* <button onClick={() => setChangeCardFaceDownPosition(!changeCardFaceDownPosition)} style={{ margin: "1rem auto", display: "block", background: "teal", padding: ".5rem 1.5rem", color: "white" }}>Change Face Position</button>
        <button onClick={() => setChangeCardAttackPosition(!changeCardAttackPosition)} style={{ margin: "1rem auto", display: "block", background: "olive", padding: ".5rem 1.5rem", color: "white" }}>Change Attack Position</button>
        <button onClick={() => console.log(`Card attack: ${attack(cardSpecies, cardAttackPoints, "Human", changeCardFaceDownPosition, changeCardAttackPosition, cardDefensePoints, cardStrengthsAndWeaknesses)}`)} style={{ margin: "1rem auto", display: "block", background: "navy", padding: ".5rem 1.5rem", color: "white" }}>Attack</button> */}

      </div>
    </div>
  );
};

export default Card;
