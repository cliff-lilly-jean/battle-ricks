import React, { useEffect, useState } from 'react';
import cardSpeciesColors from '../../Data/Card/cardSpeciesColors';




const Card = ({ cardId, cardName, cardSpecies, cardAttackPoints, cardDefensePoints, cardHealthStatus, cardGenderIcon, cardImage, cardHomeLocation, cardFaceDownPosition, cardAttackPosition, changeCardFace }) => {

  // const [faceDown, setFaceDown] = useState(cardFaceDownPosition);
  // // const [attackPosition, setAttackPosition] = useState(false);

  return (
    <div className='findCard-card ml-8' style={{ background: cardSpeciesColors[cardSpecies], padding: "1rem 1.5rem", maxWidth: "10000px", margin: "0 auto" }}>
      <div className="cardContent" style={{}}>
        <p>{`Card id: ${cardId}`}</p>
        <p>{`Card name: ${cardName}`}</p>
        <p>{`Card species: ${cardSpecies}`}</p>
        <p>{`Card attack: ${cardAttackPoints}`}</p>
        <p>{`Card defense: ${cardDefensePoints}`}</p>
        <p>{`Card status: ${cardHealthStatus}`}</p>
        <p>{`Card gender icon:`} {cardGenderIcon}</p>
        <p>{`Card image:`} {cardImage}</p>
        <p>{`Card location: ${cardHomeLocation}`}</p>
        <p>{`Card face down: ${cardFaceDownPosition}`}</p>
        <p>{`Card attack position:`} {cardAttackPosition}</p>
      </div>
      <button onClick={() => changeCardFace()} style={{ margin: "1rem auto", display: "block", background: "teal", padding: ".5rem 1.5rem", color: "white" }}>Attack</button>
    </div >
  );
};

export default Card;
