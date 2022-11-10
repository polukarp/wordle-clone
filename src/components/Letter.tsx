import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAlmostLetters,
  setCorrectLetters,
  setDisabledLetters,
  setFlipIndex,
  turnShakeOff,
} from '../store';

interface LetterProps {
  letter: string;
  index: number;
  row: number;
}

const Letter = ({ letter, index, row }: LetterProps) => {
  const green = { backgroundColor: 'rgb(83, 141, 78)', border: 'none' };
  const yellow = { backgroundColor: 'rgb(181, 159, 59)', border: 'none' };
  const grey = { backgroundColor: 'rgb(58, 58, 60)', border: 'none' };

  const targetWord = useSelector((state: any) => state.matrix.targetWord);
  const currentRowIndex = useSelector((state: any) => state.matrix.currentRowIndex);
  const correct = targetWord[index] === letter;
  const almost = !correct && letter !== '' && targetWord.includes(letter);
  const letterState = correct ? green : almost ? yellow : grey;
  const dispatch = useDispatch();

  useEffect(() => {
    if (letter !== '' && !correct && !almost) {
      dispatch(setDisabledLetters(letter));
    } else if (letter !== '' && correct) {
      dispatch(setCorrectLetters(letter));
    } else if (letter !== '' && almost) {
      dispatch(setAlmostLetters(letter));
    }
  }, [currentRowIndex]);

  const isShaking = useSelector((state: any) => state.matrix.isShaking);
  const isFlipping = useSelector((state: any) => state.matrix.isFlipping);
  const flipIndex = useSelector((state: any) => state.matrix.currentFlipIndex);
  const currentAnimationRow = useSelector((state: any) => state.matrix.currentAnimationRow);
  const [isLetterFlipping, setIsLetterFlipping] = useState(false);

  return (
    <div
      style={currentRowIndex > row && isLetterFlipping ? letterState : {}}
      onAnimationEnd={() => {
        dispatch(turnShakeOff());
        dispatch(setFlipIndex());
      }}
      onAnimationStart={() => {
        setIsLetterFlipping(true);
        console.log(currentAnimationRow, currentRowIndex, row);
      }}
      className={`text-[2rem] leading-[2rem] uppercase font-bold p-4
      w-full max-w-[62px] h-[62px] border-2 text-[32px]
      border-[rgb(58,58,60)] flex items-center justify-center
      text-white
      ${isShaking && row === currentRowIndex ? 'animate-shaking-letters' : ''}
      ${
        currentRowIndex > row && flipIndex === index && currentAnimationRow === currentRowIndex
          ? 'animate-flipping-letters'
          : ''
      }
      `}>
      {letter}
    </div>
  );
};
export default Letter;
