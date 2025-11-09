import { createContext, useEffect, useReducer } from "react";

const SudokuContext = createContext();

const initialState = {
  entries: Array(81).fill(0),
  solution: Array(81).fill(0),
  difficulty: "",
  isLoading: false,
  wrongNumIndex: -1,
};

function getNums(rawNums) {
  var arr = [];

  for (var i = 0; i < 9; i++) arr = arr.concat(rawNums[i]);

  return arr;
}

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "sudoku/loaded":
      return {
        ...state,
        isLoading: false,
        entries: getNums(action.payload.rawEntries),
        solution: getNums(action.payload.rawSolution),
        difficulty: action.payload.difficulty,
      };
    case "sudoku/enterValue":
      return {
        ...state,
        wrongNumIndex: state.solution[action.payload.index] === action.payload.input ? -1 : action.payload.index,
        entries: state.entries.map((num, i) => (i === action.payload.index ? action.payload.input : num)),
      };
    case "sudoku/clearWrongNum":
      return {
        ...state,
        wrongNumIndex: -1,
        entries: state.entries.map((num, i) => (i === action.payload ? 0 : num)),
      };
    case "rejected":
      return { ...state, isLoading: false };
    default:
      throw new Error("Invalid action type for SudokuContext reducer function.");
  }
}

function SudokuProvider({ children }) {
  const [{ entries, solution, difficulty, wrongNumIndex }, dispatch] = useReducer(reducer, initialState);

  const getPuzzle = function () {
    const fetchPuzzle = async function () {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(
          "https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value,solution,difficulty},results,message}}"
        );
        const data = await res.json();

        const rawEntries = data["newboard"]["grids"][0]["value"];
        const rawSolution = data["newboard"]["grids"][0]["solution"];
        const difficulty = data["newboard"]["grids"][0]["difficulty"];
        dispatch({ type: "sudoku/loaded", payload: { rawEntries, rawSolution, difficulty } });
      } catch {
        dispatch({ type: "rejected" });
      }
    };

    fetchPuzzle();
  };
  useEffect(getPuzzle, []);
  // useEffect(() => {
  //   console.log(entries);
  //   console.log(solution);
  //   console.log(difficulty);
  // }, [entries, solution, difficulty]);

  return (
    <SudokuContext.Provider value={{ entries, solution, difficulty, wrongNumIndex, dispatch }}>
      {children}
    </SudokuContext.Provider>
  );
}

export { SudokuProvider, SudokuContext };
