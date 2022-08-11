import React, { useEffect, useState } from 'react';
import cardSpeciesColors from '../../Data/Card/cardSpeciesColors';
import cardStrengthsAndWeaknesses from '../../Data/Card/cardSpeciesStrengthAndWeakness';
import attack from '../../Functions/Card/attack';
import "./Card.scss";


const Card = ({ cardId, cardName, cardSpecies, cardAttackPoints, cardDefensePoints, cardStatus, cardIcon, cardImage, cardHome }) => {

  const [name, setName] = useState(cardName);
  const [species, setSpecies] = useState(cardSpecies);
  const [attackPoints, setAttackPoints] = useState(cardAttackPoints);
  const [defensePoints, setDefensePoints] = useState(cardDefensePoints);
  const [status, setStatus] = useState(cardStatus);
  const [healthPoints, setHealthPoints] = useState('');
  const [icon, setIcon] = useState(cardIcon);
  const [image, setImage] = useState(cardImage);
  const [origin, setOrigin] = useState(cardHome);
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
      <div className='card single-card' style={{ background: cardSpeciesColors[species] }}>
        <div className="front"></div>
        <div className="back">
          <div className="card-content">
            <p>{name}</p>
            <div className='card-image'>{image}</div>
            <p>{species}</p>
            <p>{`Attack: ${attackPoints}`}</p>
            <p>{`Defense: ${defensePoints}`}</p>
            <p>{status}</p>
            <div className='card-image'>{icon}</div>
            <p>{origin}</p>
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
