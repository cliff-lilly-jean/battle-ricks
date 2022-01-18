// CSS
import './App.css';

// COMPONENTS
import GameBoard from './components/GameBoard/GameBoard';



function App() {

 return (
  <div className="App bg-[#2a2b2b]">
   {/* Full width full height game board that holds the decks, hands and scoreboard */}
   <GameBoard />
  </div>
 );
}

export default App;
