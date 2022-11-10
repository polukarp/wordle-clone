import { useEffect } from 'react';
import Letter from './Letter';

export interface RowProps {
  row: any;
  rowIndex: number;
}

const Row = ({ row, rowIndex }: RowProps) => {
  return (
    <div className="flex justify-center gap-1 mb-1">
      {row.map((letter: string, i: number) => (
        <Letter key={i} letter={letter} index={i} row={rowIndex} />
      ))}
    </div>
  );
};

export default Row;
