import React, { useState, useEffect } from "react";
import "../App/App";
import "./ToggleGame.css";
import Timer from "../Timer/Timer";
import HighScoreModal from "../HighScoreModal/HighScoreModal";
import Board from "../Board/Board";

function ToggleGame() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleGameOver = () => {
    setShowModal(true);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
    setShowModal(false);
  };
  return (
    <div className="toggle-game">
      <header className="toggle-game-header">
        <h1>WHACK A MOLE</h1>
      </header>
      <div className="components-container">
        <div className="btn-container">
          <button
            className="button-startnewgame"
            onClick={startGame}
            disabled={isGameStarted}
          >
            Start New Game
          </button>
        </div>
        <Timer onGameOver={handleGameOver} isGameStarted={isGameStarted} />
        <Board isGameStarted={isGameStarted} />
      </div>
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
