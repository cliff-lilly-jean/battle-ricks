import React from 'react';
import { useState } from 'react';
import Deck from '../deck/deck';

const Board = () => {

 const [gameOver, setGameOver] = useState(true);
 const [turn, setTurn] = useState('');
 const [winner, setWinner] = useState('');

 // Player states
 const [playersDeck, setPlayersDeck] = useState([]);
 const [playersHand, setPlayersHand] = useState([]);
 const [playersHealth, setPlayersHealth] = useState(8000);
 const [playersFieldCards, setPlayersFieldCards] = useState([]);
 const [playersGraveYard, setPlayersGraveYard] = useState([]);

 // Cpu states
 const [cpusDeck, setCpusDeck] = useState([]);
 const [cpusHand, setCpusHand] = useState([]);
 const [cpusHealth, setCpusHealth] = useState(8000);
 const [cpusFieldCards, setCpusFieldCards] = useState([]);
 const [cpusGraveYard, setCpusGraveYard] = useState([]);

 return (
  <div>Board</div>
 );
};

export default Board;