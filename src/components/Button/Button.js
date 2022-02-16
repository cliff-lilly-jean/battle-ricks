import React from 'react';

import './Button.css';

const Button = ({ updateCharacterList, updateCharacterRandomly }) => {
 return <button className='button' onClick={() => { updateCharacterList(); updateCharacterRandomly(); }
 }> Draw a card</button >;
};

export default Button;
