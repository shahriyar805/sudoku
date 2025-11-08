import { useSudoku } from "../contexts/useSudoku";

function Title() {
  const { difficulty } = useSudoku();

  return (
    <div className="flex-center my-4 flex-col">
      <h1 className="text-[2rem] font-bold">The Ultimate Sudoku</h1>
      <p className="text-[1.25rem]">
        Difficulty: <span className="font-semibold">{difficulty}</span>
      </p>
    </div>
  );
}

export default Title;
