import './App.css';
import GameBoard from './Components/GameBoard/GameBoard';
import { useState } from 'react';

function App() {
   const [gameEnd, setGameEnd] = useState(true);


   return (
      <div className="app">
         <GameBoard gameEnd={gameEnd} />
      </div>
   );
}

export default App;
