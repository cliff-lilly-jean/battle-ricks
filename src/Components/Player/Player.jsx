import React from 'react';
import Deck from '../Deck/Deck';

const Player = ({ player, playerDeck, playerHealth, playerFieldCards, playerGraveYard, playerHand }) => {
    return (
        <div>
            {player}
            <p><span className="font-bold">LP:</span> {playerHealth}</p>
            <div><span className="font-bold">Deck:</span> <Deck typeOfDeck={playerDeck} /></div>
            <div><span className="font-bold">Field:</span> <Deck typeOfDeck={playerFieldCards} /></div>
            <div><span className="font-bold">Hand:</span> <Deck typeOfDeck={playerHand} /></div>
            <div><span className="font-bold">Graveyard:</span> <Deck typeOfDeck={playerGraveYard} /></div>
        </div>
    );
};

export default Player;