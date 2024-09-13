import React, { useState, useEffect } from "react";
import "./App.css";
import Timer from "./Timer";
import HighScoreModal from "./HighScoreModal";
import Board from "./Board";

function ToggleGame() {
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
    <div className="toggle-game">
      <header className="toggle-game-header">
        <h1>WHACK A MOLE</h1>
      </header>

      {isGameStarted ? (
        <div>
          <Timer onGameOver={handleGameOver} isGameStarted={isGameStarted} />
          <Board isGameStarted={isGameStarted} />
        </div>
      ) : (
        <div>
          <button onClick={startGame}>Start New Game</button>
          <HighScoreModal
            show={showModal}
            onClose={() => setShowModal(false)}
            onStartNewGame={() => setShowModal(false)}
          />
        </div>
      )}
    </div>
  );
}

export default ToggleGame;
