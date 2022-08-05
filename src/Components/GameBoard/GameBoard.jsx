import React from 'react';
import { useState, useEffect } from 'react';
import Field from '../Field/Field';
import init from '../../Functions/Gameboard/getInit';

const GameBoard = () => {

    // Game states
    const [gameOver, setGameOver] = useState(true);
    const [turn, setTurn] = useState('');
    const [winner, setWinner] = useState('');


    useEffect(() => {

        // To stop infinite re renders
    }, [turn, gameOver]);

    return (
        <div>
            {/* If gameOver is still true, hide the Field, else, show the Field and set the initial turn */}
            {/* {console.log(turn, gameOver)} */}
            {gameOver === false ? <Field turn={turn} /> : null}
            {gameOver === false ? <button className=' mx-auto block bg-orange-400 p-4 from-neutral-200 rounded-md' onClick={() => init(setGameOver, setTurn)}>End Game</button> : <button className=' mx-auto block bg-orange-400 p-4 from-neutral-200 rounded-md' onClick={() => init(setGameOver, setTurn)}>Start Game</button>}
        </div>

    );
};

export default GameBoard;