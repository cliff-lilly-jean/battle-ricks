
import React from 'react';
import Cards from '../Cards/Cards';

const Deck = ({ typeOfDeck }) => {

    return (
        <div>
            <div className='cards' style={{ display: "flex", justifyContent: "space-evenly", maxWidth: "1400px", margin: "1rem auto" }}>
                {typeOfDeck.length}
                {/* <Cards generateCards={typeOfDeck} /> */}
            </div>
        </div>

    );
};

export default Deck;