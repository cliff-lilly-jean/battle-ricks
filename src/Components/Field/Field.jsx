import React, { useEffect, useState } from 'react';
import Side from '../Side/Side';
import cpuUserNames from '../../Data/cpu-player-names-list.json';
import characters from "../../Data/rick-and-morty-characters.json";
import divideDeckInHalf from '../../Functions/Field/divideDeckInHalf';
import "./Field.scss";

const Field = ({ startTheGame, turn }) => {

    const [gameDeck, setGameDeck] = useState(characters);


    // User
    const [userPlayer, setUserPlayer] = useState([]);
    const [userDeck, setUserDeck] = useState([]);
    const [userHand, setUserHand] = useState([]);

    // AI
    const [aiPlayer, setAiPlayer] = useState([]);
    const [aiDeck, setAiDeck] = useState([]);
    const [aiHand, setAiHand] = useState([]);


    const randomCharacterNumberForCpu = Math.floor(Math.random() * 4900);
    const amountToRemoveForDeck = 5;
    // const amountToRemoveForHand = 2;



    useEffect(() => {


        let user = {
            name: 'Cliff', // TODO use prompt() when ready for production
            type: 'human'
        };

        let cpu = {
            name: cpuUserNames.names[randomCharacterNumberForCpu],
            type: 'cpu'
        };


        // DECKS
        let newUserDeck = divideDeckInHalf(gameDeck, amountToRemoveForDeck);
        let newAiDeck = divideDeckInHalf(gameDeck, amountToRemoveForDeck);


        // HANDS
        // let newPlayerHand = divideDeckInHalf(newUserDeck, amountToRemoveForHand);
        // let newAiHand = divideDeckInHalf(newAiDeck, amountToRemoveForHand);


        setUserDeck(newUserDeck);
        setAiDeck(newAiDeck);


        // setUserHand(newPlayerHand);
        // setAiHand(newAiHand);

        setUserPlayer(user);
        setAiPlayer(cpu);

    }, []);


    return (
        <div className='field'>
            <div className="field-top">
                <Side typeOfPlayer={aiPlayer} typeOfDeck={aiDeck} typeOfHand={aiHand} />
            </div>
            <div className="field-bottom">
                <Side typeOfPlayer={userPlayer} typeOfDeck={userDeck} typeOfHand={userHand} />
            </div>
            {/* {console.log("GameDeck: ", gameDeck, "\n\nUser: ", userPlayer, "\nUser Deck: ", userDeck, "\nUser hand: ", userHand, "\n\nAI: ", aiPlayer, "\nAI deck: ", aiDeck, "\nAI hand: ", aiHand)} */}
        </div>
    );
};

export default Field;