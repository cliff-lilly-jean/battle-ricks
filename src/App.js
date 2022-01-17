// COMPONENTS
import GameBoard from './components/GameBoard/GameBoard';
import './App.css';

function App() {

 return (
  <div className="App">
   {/* Full width full height game board that holds the decks, hands and scoreboard */}
   <GameBoard />
  </div>
 );
}

export default App;
