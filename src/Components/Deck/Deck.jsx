
import React from 'react';
import Cards from '../Cards/Cards';
import Card from '../Card/Card';

const Deck = ({ typeOfDeck }) => {

    return (
        <div>
            <div className='cards' style={{ display: "flex", justifyContent: "space-evenly", maxWidth: "1400px", margin: "1rem auto" }}>
                {typeOfDeck.length}
                <Card className="single-card" generateCards={typeOfDeck} />
            </div>
        </div>

    );
};

export default Deck;