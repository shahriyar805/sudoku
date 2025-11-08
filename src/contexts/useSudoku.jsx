import { useContext } from "react";
import { SudokuContext } from "./SudokuContext";

function useSudoku() {
  const contextValue = useContext(SudokuContext);

  if (contextValue === undefined) throw new Error("SudokuContext was used outside the SudokuProvider.");

  return contextValue;
}

export { useSudoku };
