import React from 'react';
import KeyboardRow from './KeyboardRow';

const Keyboard = () => {
  const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ''],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
  ];

  return (
    <div
      className="max-w-xl grid grid-rows-3 mx-[8px]
    h-[200px] min-w-[359px]">
      {keys.map((row, i) => (
        <KeyboardRow row={row} key={i} />
      ))}
    </div>
  );
};

export default Keyboard;
