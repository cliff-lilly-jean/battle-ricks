import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

function GameBoard() {

 // STATE
 let [userPlayer, setUserPlayer] = useState('');
 let [computerPlayer, setComputerPlayer] = useState();

 // PROPERTIES
 const computerPlayerNames = {
  1: 'Dr.Robot_Nick',
  2: '010110',
  3: 'Process Sir',
  4: 'Reboot'
 };

 // METHODS
 let addNewComputerPlayer = () => {
  let computerPlayerValues = Object.values(computerPlayerNames);
  setComputerPlayer(computerPlayerValues[Math.floor(Math.random() * 3)]);
 };

 let addNewUserPlayer = () => {
  let newPlayer = prompt();
  setUserPlayer(newPlayer);
 };


 // useEffect Hook
 useEffect(() => {
  addNewUserPlayer();
  addNewComputerPlayer();
 }, []);

 return <div className="gameboard">
  {/* Return the two players of the game. */}
  {/* Computer Player */}
  <Player playerType={computerPlayer} />
  {/* User Player */}
  < Player playerType={userPlayer} />
 </div>;
}

export default GameBoard;
