import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLetter } from '../store';

export default function useKey() {
  const gameOver = useSelector((state: any) => state.matrix.gameOver.gameOver);
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (!gameOver ? e.key.toLowerCase().match(regExpForKeyboard) : '') {
        dispatch(setLetter(e.key.toLowerCase()));
      }
    };
    document.addEventListener('keydown', handleKeyDown, true);
    return () => document.removeEventListener('keydown', handleKeyDown, true);
  }, [gameOver]);
  const dispatch = useDispatch();
  const regExpForKeyboard = /enter|delete|backspace|\b([a-zA-z])\b/;
}
