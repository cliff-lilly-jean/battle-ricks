
import './App.css';
import GameBoard from './Components/GameBoard/GameBoard';

function App() {



   return (
      <div className="App bg-[#f8f8f8] h-screen">
         <h1 className='text-center mx-auto pt-6 text-6xl'>Battle Ricks</h1>
         <GameBoard />
      </div>
   );
}

export default App;
