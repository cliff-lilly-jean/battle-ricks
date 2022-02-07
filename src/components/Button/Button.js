import React from 'react';

import './Button.css';

function Button({ updateCharacterList, updateCharacterRandomly }) {
 // Todo: retrieve a random battle rick card on each button click
 // Todo: increment the players deck by one per click up to a max of 5
 return <button className='button' onClick={() => { updateCharacterList(); updateCharacterRandomly(); }
 }> Draw a card</button >;
}

export default Button;
