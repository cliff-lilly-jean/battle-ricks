import React, { useState } from 'react';
import Deck from '../Deck/Deck';

function Player({ playerType, playerDeck }) {

 // * Properties of a Player
 // Health of a player
 let [healthPoints, setHealthPoints] = useState(2000);

 // * Methods of a Player
 // Place card in ATK mode
 // Place card in DEF mode

 return <div className="player w-80 bg-slate-500 p-5 rounded-lg text-orange-300">
  <h1 className='player__name'>{playerType}</h1>
  <span className='player__hp'>{healthPoints}</span>
  <div className='player_deck'>
   <Deck playerDeck={playerDeck} />
  </div>
 </div>;
}

export default Player;
