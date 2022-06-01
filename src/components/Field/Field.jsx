import React from 'react';
import Side from '../Side/Side';
import cpuUserNames from '../../data/cpu-player-names-list.json';

const Field = () => {

 // Get input from the user to ad their name to the game
 const user = prompt();

 const randomCharacterNumberForCpu = Math.floor(Math.random() * 4900);
 const cpu = cpuUserNames.names[randomCharacterNumberForCpu];

 return (
  <div>
   <Side typeOfPlayer={cpu} />
   <Side typeOfPlayer={user} />
  </div>
 );
};

export default Field;