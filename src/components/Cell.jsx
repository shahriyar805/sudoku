import { useSudoku } from "../contexts/useSudoku";

function Cell({ index }) {
  const { entries, solution, wrongNumIndex, dispatch } = useSudoku();
  const value = entries[index];

  const handleChange = function (e) {
    const inputString = e.target.value;

    if (isNaN(inputString) || inputString === "0") return;

    if (e.target.value === "") {
      dispatch({ type: "sudoku/clearWrongNum", payload: index });
      return;
    }

    dispatch({ type: "sudoku/enterValue", payload: { index, input: Number(inputString) } });
  };

  return (
    <input
      type="text"
      value={value === 0 ? "" : value}
      onChange={handleChange}
      maxLength={1}
      disabled={value === solution[index] || (wrongNumIndex !== -1 && wrongNumIndex !== index)}
      className={`${wrongNumIndex === index ? "text-red-500" : "text-black"} flex-center h-12 w-12 border-[2px] bg-white text-center text-2xl font-semibold outline-none focus:outline-none focus:ring-0`}
    />
  );
}

export default Cell;
