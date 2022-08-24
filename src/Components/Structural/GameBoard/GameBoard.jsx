import React from 'react';
import Field from '../Field/Field';
import init from '../../../Functions/Gameboard/getInit';
import './Gameboard.scss';

const GameBoard = () => {

    return (
        <div className='gameboard'>
            <Field />
        </div>

    );
};

export default GameBoard;