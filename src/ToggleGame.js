import React, { useState, useEffect } from "react";
import "./App.css";
import "./ToggleGame.css";
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

      {/* Game UI - Always Visible */}
      <div className="components-container">
        {/* Start New Game Button - Visible, but disabled when the game is started */}
        <div className="btn-container">
          <button
            className="button-startnewgame"
            onClick={startGame}
            disabled={isGameStarted} // Disable button during game
          >
            Start New Game
          </button>
        </div>
        <Timer onGameOver={handleGameOver} isGameStarted={isGameStarted} />
        <Board isGameStarted={isGameStarted} />
      </div>

      {/* Show High Score Modal when the game ends */}
      {showModal && (
        <HighScoreModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onStartNewGame={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default ToggleGame;
