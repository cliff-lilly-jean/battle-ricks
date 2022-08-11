
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Deck.scss';
// import { createADeck, Deck } from '../../Functions/Deck/createADeck';
import cardGenderIcons from '../../Data/Card/cardGenderIcons';


const Deck = ({ deckCards }) => {

    const [cards, setCards] = useState([]);

    // let newCard = createADeck(deckCards);

    useEffect(() => {

    }, [cards]);

    return (

        <div className='deck'>
            {deckCards.map(card => {
                { console.log(card); }
                return <Card cardId={card.id} cardName={card.name} cardSpecies={card.species} cardAttackPoints={card.attack} cardDefensePoints={card.defense} cardStatus={card.status} cardIcon={<img src={cardGenderIcons[card.gender]} alt="Gender icon" width="25" />} cardImage={<img src={card.image} alt={card.name} cardHome={card.location} />} />;
            })}
        </div>

    );
};

export default Deck;