import "./App.css";
import Timer from './Timer';
import Board from './Board'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WHACK A MOLE</h1>
      </header>

      <Timer />
      <Board />

    </div>
  );
}

export default App;
