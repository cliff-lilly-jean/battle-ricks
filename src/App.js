import './App.css';
import GameBoard from './Components/GameBoard/GameBoard';
import react, { useState } from 'react';

function App() {
   const [gameEnd, setGameEnd] = useState(true);


   return (
      <div className="App bg-[#f8f8f8]" style={{ minHeight: "100vh", height: "100%", width: "100%" }}>
         <GameBoard gameEnd={gameEnd} />
      </div>
   );
}

export default App;
