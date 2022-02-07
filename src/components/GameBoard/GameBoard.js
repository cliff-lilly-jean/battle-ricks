import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

function GameBoard() {

 // Todo: Prompt the user for a name on page load
 const COMPUTER = 'Dr. Robot_Nick';


 return <div className="gameboard">
  {/* Return the two players of the game. */}
  {/* Computer Player */}
  <Player playerType={COMPUTER} />
  {/* User Player */}
  < Player playerType={user} />
 </div>;
}

export default GameBoard;
