import React, { useEffect, useState } from 'react';
import Player from './Player';

const UserPlayer = () => {

 // State
 let [userPlayer, setUserPlayer] = useState('');

 // Methods
 let addNewUserPlayer = () => {
  let newPlayer = prompt();
  setUserPlayer(newPlayer);
 };

 // useEffect Hook
 useEffect(() => {
  addNewUserPlayer();
 }, []);

 return <div>
  <Player playerType={userPlayer} />
 </div>;
};

export default UserPlayer;
