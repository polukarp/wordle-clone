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
  const currentFlipIndex = useSelector((state: any) => state.matrix.currentFlipIndex);
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

  return (
    <div
      style={currentRowIndex > row ? letterState : {}}
      onAnimationEnd={() => {
        dispatch(turnShakeOff());
        dispatch(setFlipIndex());
      }}
      className={`letter
      ${isShaking && row === currentRowIndex ? 'animate-shaking-letters' : ''}
`}>
      {letter}
    </div>
  );
};
export default Letter;
