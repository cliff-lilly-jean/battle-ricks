import React, { useEffect, useState } from 'react';
import Side from '../Side/Side';
import characters from "../../Data/rick-and-morty-characters.json";
import divideDeckInHalf from '../../Functions/Field/divideDeckInHalf';
import "./Field.scss";

import { user, ai } from '../../Data/determinePlayers';
import { randomAiCharacter, amountToRemoveForDeck } from '../../Data/constants';

const Field = () => {

    // Game states
    const [gameOver, setGameOver] = useState(true);


    useEffect(() => {

    }, [gameOver]);




    const [gameDeck, setGameDeck] = useState(characters);


    // User
    const [userPlayer, setUserPlayer] = useState([]);
    const [userDeck, setUserDeck] = useState([]);
    const [userHand, setUserHand] = useState(["good", "bad", "ugly", "he", "man"]);
    const [userField, setUserField] = useState(["user", "field", "cards", "deck", "hu"]);
    const [userGraveyard, setUserGraveyard] = useState(["user", "graveyard", "cards", "in", "deck"]);


    // AI
    const [aiPlayer, setAiPlayer] = useState([]);
    const [aiDeck, setAiDeck] = useState([]);
    const [aiHand, setAiHand] = useState([{ "face": "good" }, { "face": "left" }, { "face": "right" }, { "face": "a" }, { "face": "c" },]);
    const [aiField, setAiField] = useState(["ai", "field", "cards", "deck"]);
    const [aiGraveyard, setAiGraveyard] = useState(["ai", "graveyard", "cards", "in", "deck"]);






    useEffect(() => {




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
        setAiPlayer(ai);

    }, []);


    return (
        <div className='field'>
            <div className="field-top">
                <Side typeOfPlayer={aiPlayer} typeOfDeck={aiDeck} typeOfHand={aiHand} typeOfField={userField} typeOfGraveyard={userGraveyard} />
            </div>
            <div className="field-bottom">
                <Side typeOfPlayer={userPlayer} typeOfDeck={userDeck} typeOfHand={userHand} typeOfField={aiField} typeOfGraveyard={aiGraveyard} />
            </div>
        </div>
    );
};

export default Field;