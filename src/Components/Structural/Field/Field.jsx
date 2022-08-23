import React, { useEffect, useState } from 'react';
import Side from '../Side/Side';
import characters from "../../../Data/rick-and-morty-characters";
import divideDeckInHalf from '../../../Functions/Field/divideDeckInHalf';
import "./Field.scss";

import { user, ai } from '../../../Data/determinePlayers';
import { randomAiCharacter, amountToRemoveForDeck } from '../../../Data/constants';

const Field = () => {

    // !Properties
    const gameDeck = characters;

    // !State
    const [gameOver, setGameOver] = useState(true);
    // Deck
    const [deck, setDeck] = useState([]);
    // Hand
    // Field 
    // GraveYard

    // !Methods
    const startGame = () => {
        setGameOver((prevGameOverState => setGameOver(!prevGameOverState)));
        let userDeck = createDeck();
        let aiDeck = createDeck();
    };

    const createDeck = () => {
        let newDeck = divideDeckInHalf(gameDeck, 5);
        setDeck((prevDeck) => newDeck);
        console.log(deck);
    };



    useEffect(() => {

    }, [gameOver, deck]);


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






        // HANDS
        // let newPlayerHand = divideDeckInHalf(newUserDeck, amountToRemoveForHand);
        // let newAiHand = divideDeckInHalf(newAiDeck, amountToRemoveForHand);


        // setUserDeck(newUserDeck);
        // setAiDeck(newAiDeck);


        // setUserHand(newPlayerHand);
        // setAiHand(newAiHand);

        setUserPlayer(user);
        setAiPlayer(ai);

    }, []);


    return (
        <div className='field'>
            <div className="field-top">
                <Side typeOfPlayer={aiPlayer} typeOfDeck={gameDeck} typeOfHand={aiHand} typeOfField={userField} typeOfGraveyard={userGraveyard} />
            </div>
            <div className="field-bottom">
                <Side typeOfPlayer={userPlayer} typeOfDeck={gameDeck} typeOfHand={userHand} typeOfField={aiField} typeOfGraveyard={aiGraveyard} />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={() => startGame()}>Start</button>
        </div>
    );
};

export default Field;