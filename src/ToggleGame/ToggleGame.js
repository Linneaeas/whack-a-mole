import React, { useState, useContext } from "react";
import "../App/App";
import "./ToggleGame.css";
import Timer from "../Timer/Timer";
import HighScoreModal from "../HighScoreModal/HighScoreModal";
import Board from "../Board/Board";
import ScorePanel from "../ScorePanel/ScorePanel";
import { UserContext } from "../UserContext.js";

function ToggleGame() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0); // Score
  const [hitRate, setHitRate] = useState(0); // Average hit rate
  const { name } = useContext(UserContext); // User name

  const handleGameOver = () => {
    setShowModal(true);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
    setShowModal(false);
    setScore(0);
    setHitRate(0); // Reset hit rate for new game
  };

  return (
    <div className="toggle-game">
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
        <ScorePanel score={score} name={name} />
        <Board
          isGameStarted={isGameStarted}
          score={score}
          setScore={setScore}
          setHitRate={setHitRate} // Pass setHitRate to Board
        />
      </div>
      {showModal && (
        <HighScoreModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onStartNewGame={startGame}
          score={score}
          hitRate={hitRate} // Pass hit rate to the modal
          name={name}
        />
      )}
    </div>
  );
}

export default ToggleGame;
