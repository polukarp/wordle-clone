import { useSelector } from 'react-redux';
import { RowProps } from './Row';
import Row from './Row';

const Board = () => {
  const board: [] = useSelector((state: any) => state.matrix.matrix);

  return (
    <div
      className="board-container flex items-center
    justify-center overflow-hidden flex-grow">
      <div
        className={`grid grid-rows-6 grid-cols-1 p-[10px] flex-grow-1
          w-[350px] h-[420px] gap-[5px]`}>
        {board.map((row: RowProps, i) => (
          <Row key={i} row={row} rowIndex={i} />
        ))}
        {/* <span className=" text-center text-3xl">{word}</span> */}
      </div>
    </div>
  );
};

export default Board;
