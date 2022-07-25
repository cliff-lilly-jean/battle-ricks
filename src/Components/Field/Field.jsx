import React, { useEffect, useState } from 'react';
import Side from '../Side/Side';
import cpuUserNames from '../../Data/cpu-player-names-list.json';
import characters from "../../Data/rick-and-morty-characters.json";

const Field = ({ startTheGame }) => {

    // TODO: Setup Players
    // TODO: Bring in character data

    const [gameDeck, setGameDeck] = useState(characters);
    const [aiPlayer, setAiPlayer] = useState('');
    const [userPlayer, setUserPlayer] = useState('');


    const createADeck = (deck, amountToCutForDeck) => {
        let cutDeck = deck.splice(0, amountToCutForDeck);
        return cutDeck;
    };

    // const user = prompt();
    // const user = {
    //     name: 'Cliff',
    //     type: 'human'
    // };

    const randomCharacterNumberForCpu = Math.floor(Math.random() * 4900);
    // const cpu = {
    //     name: cpuUserNames.names[randomCharacterNumberForCpu],
    //     type: 'cpu'
    // };


    useEffect(() => {
        let user = {
            name: 'Cliff',
            type: 'human'
        };

        let cpu = {
            name: cpuUserNames.names[randomCharacterNumberForCpu],
            type: 'cpu'
        };
        setUserPlayer(user);
        setAiPlayer(cpu);
    }, []);


    return (
        <div>

            <Side typeOfPlayer={userPlayer} />
            <Side typeOfPlayer={aiPlayer} />
            {console.log("GameDeck: ", gameDeck, "user: ", userPlayer, "AI: ", aiPlayer)}
            <button className=' mx-auto block bg-gray-600 p-4 from-neutral-200 rounded-md' onClick={() => startTheGame()}>Start Game</button>
        </div>
    );
};

export default Field;