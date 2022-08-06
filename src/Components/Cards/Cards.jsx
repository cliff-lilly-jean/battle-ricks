import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

import cardStrengthWeakness from '../../Data/Card/cardSpeciesStrengthAndWeakness';
import cardSpeciesColors from '../../Data/Card/cardSpeciesColors';
import cardGenderIcons from '../../Data/Card/cardGenderIcons';


const Cards = ({ generateCards }) => {

    const [faceDown, setFaceDown] = useState(true);
    const [attackPosition, setAttackPosition] = useState(false);


    return generateCards.map((card) => {
        return (
            // <div>
            //     {card.length}
            // </div>
            <Card key={card.id} cardId={card.id} cardName={card.name} cardSpecies={card.species} cardAttackPoints={card.attack} cardDefensePoints={card.defense} cardHealthStatus={card.status} cardGenderIcon={<img src={cardGenderIcons[card.gender]} alt="Gender icon" width="25" />} cardImage={<img src={card.image} alt="" width="100" />} cardHomeLocation={card.location} cardFaceDownPosition={faceDown} cardAttackPosition={attackPosition} />
        );
    });


};

export default Cards;