import React from 'react';
import ComputerPlayer from '../Player/ComputerPlayer';
import Player from '../Player/Player';
import UserPlayer from '../Player/UserPlayer';
import Zone from '../Zone/Zone';

function GameBoard() {

 /* Create the game rules
     - Each player is given 20 cards (5 in Hand and 15 in Deck)
     - Every turn a player can put a card down on the gameboard in it's designated section (Spell cards in spell section etc.)
     - Monster cards can be placed face down in DEF position
     - Monster cards can be placed face up in attack position
 */
 /* Create the grid
     - 6 x 2 grid
     - bottom right for deck
     - top right for grave yard
     - bottom row for spell cards
     - top row for monster cards
 */

 return <div className="gameboard flex items-center justify-between p-8">
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
