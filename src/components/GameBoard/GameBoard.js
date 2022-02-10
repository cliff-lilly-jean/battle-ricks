import React from 'react';
import ComputerPlayer from '../Player/ComputerPlayer';
import UserPlayer from '../Player/UserPlayer';
import Zone from './Zone';

function GameBoard() {

 // Create the game rules
 // Create the grid

 return <div className="gameboard">
  {/* TODO: Create a computer field */}
  <Zone />
  {/* Computer Player */}
  <ComputerPlayer />
  {/* User Player */}
  {/* TODO: Create a user field */}
  <UserPlayer />
 </div>;
}

export default GameBoard;
