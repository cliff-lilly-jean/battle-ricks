
import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Deck.scss';
import createADeck from '../../Functions/Deck/createADeck';


const Deck = ({ deckCards }) => {

    const [cards, setCards] = useState([]);


    useEffect(() => {
        setCards(createADeck(deckCards, Deck));
    }, []);

    return (
        <div>
            <div className='deck'>
                {/* {console.log(deckCards)} */}
                {/* <Cards generateCards={typeOfDeck} /> */}
            </div>
        </div>

    );
};

export default Deck;