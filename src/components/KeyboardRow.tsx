import Key from './Key';

interface KeyboardRowProps {
  row: string[];
}

const KeyboardRow = ({ row }: KeyboardRowProps) => {
  return (
    <div className="flex w-full mx-auto mb-[8px]">
      {row.map((letter, i) => (
        <Key key={i} keyVal={letter} />
      ))}
    </div>
  );
};

export default KeyboardRow;
