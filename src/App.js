import "./App.css";
import Timer from './Timer';
import ToggleGame from './ToggleGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>WHACK A MOLE</h1>
      </header>

      <Timer />
      <ToggleGame />

    </div>
  );
}

export default App;
