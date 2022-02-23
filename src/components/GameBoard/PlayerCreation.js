import { useState, useEffect } from 'react';
import cpuPlayerNames from '../../data/cpuPlayerNames.json';

const PlayerCreation = () => {
 const [userPlayer, setUserPlayer] = useState('');
 const [cpuPlayer, setCpuPlayer] = useState('');

 // Add a new userPlayer on game load
 let addNewUserPlayer = () => {
  let newPlayer = prompt();
  setUserPlayer(newPlayer);
 };

 useEffect(() => {
  addNewUserPlayer();
 }, []);


 let addNewCpuPlayer = () => {
  let cpuPlayerValues = cpuPlayerNames;
  setCpuPlayer(cpuPlayerValues[Math.floor(Math.random() * getCpuPlayerNamesArrayLength())]);
 };

 let getCpuPlayerNamesArrayLength = () => {
  return cpuPlayerNames.length - 1;
 };

 useEffect(() => {
  addNewCpuPlayer();
 }, []);

 return { userPlayer, cpuPlayer };
};

export default PlayerCreation;
