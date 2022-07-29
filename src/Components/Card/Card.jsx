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
      {/* TODO: Create a button and function for attack */}
    </div >
  );
};

export default Card;
