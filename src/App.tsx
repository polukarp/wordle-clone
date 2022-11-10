import { useSelector } from 'react-redux';
import Board from './components/Board';
import GameOver from './components/GameOver';
import Keyboard from './components/Keyboard';
import Navbar from './components/Navbar';
import useKey from './hooks/useKey';

function App() {
  const gameOver = useSelector((state: any) => state.matrix.gameOver);
  useKey();

  return (
    <div className="App bg-bg-main h-screen relative overflow-hidden">
      <Navbar />
      <div
        className="game-container w-full
        overflow-hidden h-full bg-inherit">
        <div
          className="game w-full mx-auto flex flex-col
          h-[calc(100%-40px)] max-w-[500px] md:h-[calc(100%-65px)]">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </div>
    </div>
  );
}

export default App;
