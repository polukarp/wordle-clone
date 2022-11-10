import { useSelector } from 'react-redux';

const Navbar = () => {
  const targetWord = useSelector((state: any) => state.matrix.targetWord);
  return (
    <header
      className="flex items-center justify-center
    border-b border-[rgb(58,58,60)] sm:h-[40px] md:h-[65px]
    px-[16px]">
      <span className=" cursor-default normal-case font-helveticaBold font-bold text-[28px] md:text-[36px] text-text-main">
        Wordle
      </span>
    </header>
  );
};

export default Navbar;
