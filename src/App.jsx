import StyledApp from "./components/StyledApp";
import SudokuChart from "./components/SudokuChart";
import Title from "./components/Title";
import { SudokuProvider } from "./contexts/SudokuContext";

function App() {
  return (
    <SudokuProvider>
      <StyledApp>
        <Title />
        <SudokuChart />
      </StyledApp>
    </SudokuProvider>
  );
}

export default App;
