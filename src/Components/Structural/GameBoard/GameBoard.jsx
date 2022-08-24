import React, { useEffect, useState } from 'react';
import Field from '../Field/Field';
import './Gameboard.scss';

const GameBoard = () => {

    const [winner, setWinner] = useState('');
    const [turn, setTurn] = useState('');
    const [isGameOver, setIsGameOver] = useState(true);
    const [gameDeck, setGameDeck] = useState([{}]);
    const [player, setPlayer] = useState({
        name: '',
        type: '',
        deck: [],
        hand: [],
        field: [],
        grave: []
    });

    let player1;
    let player2;

    const gameStart = (player1) => {
        setIsGameOver(prevState => !prevState);
        createAPlayer(player1);
        console.log(player1);
    };

    const createAPlayer = (newPlayer) => {
        setPlayer(prevPlayer => ({ ...player, name: 'Cliff', type: 'Human' }));
        newPlayer = player;
        return newPlayer;
    };

    // useEffect(() => {

    // }, [player]);
    /*
        Game needs to:
            - determine a winner
            - determine who's turn
            - determine is the game over
            - create the initial deck
            - create the initial players
            - give half of initial deck to each player
    */

    return (
        <div className='gameboard'>
            <Field />

            <button onClick={() => gameStart(player1)}>Start</button>
            {console.log(player1)}
        </div>

    );
};

export default GameBoard;