// CSS
import './App.css';

// COMPONENTS
import Game from './components/Game/Game';


function App() {

 return (
  <div className="App bg-[#f8f8f8] h-screen">
   {/* Full width full height game board that holds the decks, hands and scoreboard */}
   <Game />
  </div>
 );
}

export default App;
