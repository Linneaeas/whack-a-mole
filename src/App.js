import React, { useState, useEffect } from "react";
import "./App.css";
<<<<<<< Updated upstream
import Timer from "./Timer";
import HighScoreModal from "./HighScoreModal";
import Board from "./Board";
=======
import Timer from './Timer';
import Signup from "./Signup";
>>>>>>> Stashed changes

function App() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleGameOver = () => {
    setShowModal(true);
    setGameStarted(false); // Stop the game when time runs out
  };

  const startGame = () => {
    setGameStarted(true);
    setShowModal(false); // Close modal when starting a new game
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>WHACK A MOLE</h1>
      </header>
<<<<<<< Updated upstream


      {isGameStarted ? (
        <div>
          <Timer onGameOver={handleGameOver} isGameStarted={isGameStarted} />
          <Board />
        </div>
      ) : (
        <div>
          <button onClick={startGame}>
            Start Game Temp button. write name page ska va har
          </button>
          <HighScoreModal
            show={showModal}
            onClose={() => setShowModal(false)}
            onStartNewGame={() => setShowModal(false)}
          />
        </div>
      )}
=======
      <Signup />
      <Timer />
>>>>>>> Stashed changes

    </div>
  );
}

export default App;
