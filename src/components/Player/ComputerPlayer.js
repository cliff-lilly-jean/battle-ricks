import React, { useEffect, useState } from 'react';
import Player from './Player';
import ComputerPlayerNames from '../../data/ComputerPlayerNames.json';

const ComputerPlayer = () => {

 // STATE
 let [computerPlayer, setComputerPlayer] = useState();

 // METHODS
 let addNewComputerPlayer = () => {
  let computerPlayerValues = ComputerPlayerNames;
  setComputerPlayer(computerPlayerValues[Math.floor(Math.random() * getComputerPlayerNamesLength())]);
 };

 let getComputerPlayerNamesLength = () => {
  return ComputerPlayerNames.length - 1;
 };

 // useEffect Hook
 useEffect(() => {
  addNewComputerPlayer();
 }, []);

 return <div>
  <Player playerType={computerPlayer} />
 </div>;
};

export default ComputerPlayer;
