import { useSelector } from 'react-redux';

const GameOver = () => {
  const gameOver = useSelector((state: any) => state.matrix.gameOver);
  const targetWord = useSelector((state: any) => state.matrix.targetWord);
  const currAttempt = useSelector((state: any) => state.matrix.currentRowIndex);

  return (
    <div
      className="modal-overlay fixed top-0 left-0 w-full
    h-full bg-black opacity-60 flex items-center justify-center">
      <div className="modal-no-padding p-0 flex justify-center items-center">
        <div
          className="modal-content relative border rounded-lg
        border-[#1a1a1b] w-[90%] max-h-full overflow-y-auto
        max-w-[500px] box-border bg-[#121213] text-white">
          <button>EXIT</button>
          <div>
            <div className="game-stats">
              <h1>STATISTICS</h1>
              <div className="statictics"></div>
              <h1>GUESS DISTRIBUTION</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
