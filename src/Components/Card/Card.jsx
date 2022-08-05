import React, { useEffect, useState } from 'react';
import cardSpeciesColors from '../../Data/Card/cardSpeciesColors';
import cardStrengthsAndWeaknesses from '../../Data/Card/cardSpeciesStrengthAndWeakness';
import attack from '../../Functions/Card/attack';
import "./Card.scss";


const Card = ({ cardName, cardSpecies, cardAttackPoints, cardDefensePoints, cardHealthStatus, cardGenderIcon, cardImage, cardHomeLocation, cardFaceDownPosition, cardAttackPosition }) => {

  const [changeCardFaceDownPosition, setChangeCardFaceDownPosition] = useState(cardFaceDownPosition);

  // If a card is in attack position and hasAttacked === false; Add it to a canAttack array;
  // Allow the player to select only from the canAttack array to attack 
  const [changeCardAttackPosition, setChangeCardAttackPosition] = useState(cardAttackPosition);
  const [hasAttacked, setHasAttacked] = useState(false);


  return (
    <div className="card-wrapper">
      <div className='card' style={{ background: cardSpeciesColors[cardSpecies] }}>
        <div className="front"></div>
        <div className="back">
          <div className="card-content">
            <p>{cardName}</p>
            <div className='card-image'>{cardImage}</div>
            <p>{cardSpecies}</p>
            <p>{`Attack: ${cardAttackPoints}`}</p>
            <p>{`Defense: ${cardDefensePoints}`}</p>
            <p>{cardHealthStatus}</p>
            <div className='card-image'>{cardGenderIcon}</div>
            <p>{cardHomeLocation}</p>
            {/* TODO: these are states and don't need to be shown on the card */}
            {/* <p>{`Face: ${changeCardFaceDownPosition ? "Face Down" : "Face Up"}`} </p>
          <p>{`Position: ${changeCardAttackPosition ? "Attack Position" : "Defense Position"}`}</p> */}
          </div>
        </div>


        {/* Card Actions */}
        {/* <button onClick={() => setChangeCardFaceDownPosition(!changeCardFaceDownPosition)} style={{ margin: "1rem auto", display: "block", background: "teal", padding: ".5rem 1.5rem", color: "white" }}>Change Face Position</button>
        <button onClick={() => setChangeCardAttackPosition(!changeCardAttackPosition)} style={{ margin: "1rem auto", display: "block", background: "olive", padding: ".5rem 1.5rem", color: "white" }}>Change Attack Position</button>
        <button onClick={() => console.log(`Card attack: ${attack(cardSpecies, cardAttackPoints, "Human", changeCardFaceDownPosition, changeCardAttackPosition, cardDefensePoints, cardStrengthsAndWeaknesses)}`)} style={{ margin: "1rem auto", display: "block", background: "navy", padding: ".5rem 1.5rem", color: "white" }}>Attack</button> */}
        {/*

      TODO: Create attack functionality

        - allow the user to select a card on the opponent field
        - allow the user to chose a card (in attack mode) on their field
        - subtract the values
          - if the opponent card wins, destroy the attackers card
            - add the card to the attackers graveyard
          - if the opponent loses,
            - if the card is in defense position  and face down, the card is destroyed
            - if the card is defense position and face up, subtract the attackers attack value against the opponent defense value
              - if the defense value is larger, the attackers card is destroyed and LP reflect the difference
              - if the defense value is smaller, the defense card is destroyed and the opponent LP reflects the difference
            - if the card is in attack position (face up or face down),
              - the attack values are subtracted and the lower attack value card is destroyed and the LP of the loser is reflected


      */}
      </div>
    </div>
  );
};

export default Card;
