import React from 'react';

import './Button.css';

const Button = ({ getAPIData, updateCharacterRandomly }) => {
 return <button className='button' onClick={() => { getAPIData(); updateCharacterRandomly(); }} > Start Game</button >;
};

export default Button;
