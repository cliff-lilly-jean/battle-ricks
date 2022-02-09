import React from 'react';
import ComputerPlayer from '../Player/ComputerPlayer';
import UserPlayer from '../Player/UserPlayer';

function GameBoard() {

 return <div className="gameboard">
  {/* Return the two players of the game. */}
  {/* Computer Player */}
  <ComputerPlayer />
  {/* User Player */}
  <UserPlayer />
 </div>;
}

export default GameBoard;
