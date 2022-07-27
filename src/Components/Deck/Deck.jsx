
import React from 'react';
import Card from '../Card/Card';

const Deck = ({ typeOfDeck }) => {
    return (
        <div>
            <div className='cards'>
                <Card generateCards={typeOfDeck} />
            </div>
        </div>

    );
};

export default Deck;