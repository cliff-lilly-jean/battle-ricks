
import React, { useEffect, useState } from 'react';
// import Card from '../Card/Card';
import './Deck.scss';
import { createADeck, Card } from '../../Functions/Deck/createADeck';
import cardGenderIcons from '../../Data/Card/cardGenderIcons';


const Deck = ({ deckCards }) => {

    const [cards, setCards] = useState([]);

    let newCard = createADeck(deckCards);

    useEffect(() => {

    }, [cards]);

    return (
        <div>
            <div className='deck'>
                <button onClick={() => setCards(createADeck(deckCards))}>Button</button>
                {/* <Card /> */}
                {console.log(newCard)}
            </div>
        </div>

    );
};

export default Deck;