// CSS
import './App.css';

// COMPONENTS
import Gameboard from './components/Gameboard/Gameboard';


function App() {

 return (
  <div className="App bg-[#f8f8f8] h-screen">
   {/* Full width full height game board that holds the decks, hands and scoreboard */}
   <Gameboard />
  </div>
 );
}

export default App;
