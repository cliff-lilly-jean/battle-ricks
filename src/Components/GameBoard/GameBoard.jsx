import React from 'react';
import { useState, useEffect } from 'react';
import Field from '../Field/Field';
import determineInitialTurn from '../../Functions/Gameboard/determineInitialTurn';

const GameBoard = () => {

    // Game states
    const [gameOver, setGameOver] = useState('');
    const [turn, setTurn] = useState('');
    const [winner, setWinner] = useState('');


    const init = () => {
        setGameOver(false);
        determineInitialTurn(setTurn);
    };

    return (
        <div>
            {/* If gameOver is still true, hide the Field, else, show the Field and set the initial turn */}
            {console.log(turn, gameOver)}
            <Field startTheGame={init} />
        </div>

    );
};

export default GameBoard;