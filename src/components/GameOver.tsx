import { useSelector } from 'react-redux';

const GameOver = () => {
  const gameOver = useSelector((state: any) => state.matrix.gameOver);
  const targetWord = useSelector((state: any) => state.matrix.targetWord);
  const currAttempt = useSelector((state: any) => state.matrix.currentRowIndex);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen grid place-items-center text-center">
      <div
        className="absolute z-10 w-1/3 h-3/4 bg-black rounded-md
      opacity-90 text-white p-10">
        <h2 className=" font-bold text-4xl mb-4">Game Over!</h2>
        <p className="text-lg">
          {gameOver.guessedWord
            ? `You guessed correct in ${currAttempt} attempts`
            : 'You guessed wrong'}
        </p>
        <p className="text-xl">
          Correct word is: <span className="underline hover:text-green-400">{targetWord}</span>
        </p>

        <span className="bg-yellow-500">TODO: Statistics</span>
      </div>
    </div>
  );
};

export default GameOver;
