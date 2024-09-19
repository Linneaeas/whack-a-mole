import React, { useState, useContext, useEffect } from "react";
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
  const [score, setScore] = useState(0);
  const [hitRate, setHitRate] = useState(0);
  const { name } = useContext(UserContext);

  useEffect(() => {
    if (showModal) {
      console.log("useEffect triggered");
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const handleGameOver = () => {
    setShowModal(true);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
    setShowModal(false);
    setScore(0);
    setHitRate(0);
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
          setHitRate={setHitRate}
        />
      </div>
      {showModal && (
        <HighScoreModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onStartNewGame={startGame}
          score={score}
          hitRate={hitRate}
          name={name}
        />
      )}
    </div>
  );
}

export default ToggleGame;
