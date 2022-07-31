import React from 'react';
import { useState, useEffect } from 'react';
import Field from '../Field/Field';
import init from '../../Functions/Gameboard/getInit';
import determineInitialTurn from '../../Functions/Gameboard/determineInitialTurn';

const GameBoard = () => {

    // Game states
    const [gameOver, setGameOver] = useState('');
    const [turn, setTurn] = useState('');
    const [winner, setWinner] = useState('');

    const run = () => {
        console.log('ran');
    };

    useEffect(() => {

        console.log(turn, gameOver);
        // To stop infinite re renders
    }, [turn, gameOver]);

    return (
        <div>
            {/* If gameOver is still true, hide the Field, else, show the Field and set the initial turn */}
            {/* {console.log(turn, gameOver)} */}
            <Field />
            <button className=' mx-auto block bg-gray-600 p-4 from-neutral-200 rounded-md' onClick={() => init(setGameOver, setTurn)}>Start Game</button>
        </div>

    );
};

export default GameBoard;