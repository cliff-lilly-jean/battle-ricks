import React from 'react';

function Player({ playerType }) {

 // Create an HP (Health point) stat
 let hp = 2000;
 // Import the Deck


 return <div className='player'>
  <h1>{playerType}</h1>
  <span className='hp'>{hp}</span>
 </div>;
}

export default Player;
