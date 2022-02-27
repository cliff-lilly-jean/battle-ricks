import React from 'react';

import './Button.css';

const Button = ({ getNewDeck, updateCharactersRandomly }) => {
 return <button className='button' onClick={() => { getNewDeck(); }} > Start Game</button >;
};

export default Button;
