import React, { useState } from 'react';
import Deck from '../Deck/Deck';

function Player({ playerType }) {

 // Health Point stat
 let [hp, setHp] = useState(2000);

 // A player's deck
 let [deck, setDeck] = useState([]);
 console.log(deck);

 // Update the HP based off a card's ATK or DEF stats
 const updateHp = (damageDealt) => {
  /*
   - damageDelt equals Atk - Def or
   - damageDelt equals Atk - Atk
   - setHp to the currentHp - damageDelt
  */
 };


 return <div className="player w-80 bg-slate-500 p-5 rounded-lg text-orange-300">
  <h1 className='player__name'>{playerType}</h1>
  <span className='player__hp'>{hp}</span>
  <Deck />
 </div>;
}

export default Player;
