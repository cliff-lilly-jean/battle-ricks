import React, { useState } from 'react';
import Deck from '../Deck/Deck';

function Player({ playerType }) {

 // Health Point stat
 let [hp, setHp] = useState(2000);

 // A player's deck
 let [deck, setDeck] = useState(<Deck />);
 console.log(deck);

 // Update the HP based off a card's ATK or DEF stats
 const updateHp = (damageDealt) => {
  /*
   - damageDelt equals Atk - Def or
   - damageDelt equals Atk - Atk
   - setHp to the currentHp - damageDelt
  */
 };


 return <div className='player'>
  <h1>{playerType}</h1>
  <span className='hp'>{hp}</span>
  <span>{deck}</span>
 </div>;
}

export default Player;
