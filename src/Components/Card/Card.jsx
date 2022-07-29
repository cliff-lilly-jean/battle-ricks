import React, { useEffect, useState } from 'react';
import cardSpeciesColors from '../../Data/Card/cardSpeciesColors';


const Card = ({ cardId, cardName, cardSpecies, cardAttackPoints, cardDefensePoints, cardHealthStatus, cardGenderIcon, cardImage, cardHomeLocation, cardFaceDownPosition, cardAttackPosition }) => {

  const [changeCardFaceDownPosition, setChangeCardFaceDownPosition] = useState(cardFaceDownPosition);
  const [changeCardAttackPosition, setChangeCardAttackPosition] = useState(cardAttackPosition);

  return (
    <div className='findCard-card ml-8' style={{ background: cardSpeciesColors[cardSpecies], padding: "1rem 1.5rem", maxWidth: "10000px", margin: "0 auto" }}>
      <div className="cardContent" style={{}}>
        <p>{`Name: ${cardName}`}</p>
        <p>{`Image:`} {cardImage}</p>
        <p>{`Species: ${cardSpecies}`}</p>
        <p>{`Attack: ${cardAttackPoints}`}</p>
        <p>{`Defense: ${cardDefensePoints}`}</p>
        <p>{`Status: ${cardHealthStatus}`}</p>
        <p>{`Gender:`} {cardGenderIcon}</p>
        <p>{`Home: ${cardHomeLocation}`}</p>
        <p>{`Face: ${changeCardFaceDownPosition ? "Face Down" : "Face Up"}`} </p>
        <p>{`Position: ${changeCardAttackPosition ? "Attack Position" : "Defense Position"}`}</p>
      </div>

      {/* Card Actions */}
      <button onClick={() => setChangeCardFaceDownPosition(!changeCardFaceDownPosition)} style={{ margin: "1rem auto", display: "block", background: "teal", padding: ".5rem 1.5rem", color: "white" }}>Change Face Position</button>
      <button onClick={() => setChangeCardAttackPosition(!changeCardAttackPosition)} style={{ margin: "1rem auto", display: "block", background: "olive", padding: ".5rem 1.5rem", color: "white" }}>Change Attack Position</button>
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
    </div >
  );
};

export default Card;
