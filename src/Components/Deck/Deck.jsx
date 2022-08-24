
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Deck.scss';




const Deck = ({ deckCards }) => {

    const [cards, setCards] = useState([]);

    // let newCard = createADeck(deckCards);

    useEffect(() => {

    }, [cards]);

    return (

        <div className='deck'>
            {/* {console.log(deckCards)} */}
            <Card />
        </div>

    );
};

export default Deck;