import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

import cardStrengthWeakness from '../../Data/Card/cardSpeciesStrengthAndWeakness';
import cardSpeciesColors from '../../Data/Card/cardSpeciesColors';
import cardGenderIcons from '../../Data/Card/cardGenderIcons';
import buildACard from '../../Functions/Card/buildACard';

const Cards = ({ generateCards }) => {

    const [faceDown, setFaceDown] = useState(true);
    const [attackPosition, setAttackPosition] = useState(false);

    let card = buildACard(generateCards, cardSpeciesColors, cardGenderIcons, faceDown, attackPosition, setFaceDown, setAttackPosition);

    return (
        <Card card={card} />
    );
};

export default Cards;