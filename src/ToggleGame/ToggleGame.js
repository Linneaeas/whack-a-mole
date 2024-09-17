import React, { useState, useEffect, useContext } from "react";
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
  const [score, setScore] = useState(0); //Score flyttad upp i hierarking for att kunna skucka ner till children: Board och ScorePanel.
  const { name } = useContext(UserContext); //Samma sak med user namnet

  const handleGameOver = () => {
    setShowModal(true);
    setGameStarted(false);
  };

  const startGame = () => {
    setGameStarted(true);
    setShowModal(false);
    setScore(0);
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
        <ScorePanel score={score} name={name} />{" "}
        {/* Skickar score (och set score) as prop */}
        <Board
          isGameStarted={isGameStarted}
          score={score}
          setScore={setScore}
        />
      </div>
      {showModal && (
        <HighScoreModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onStartNewGame={() => setShowModal(false)}
          score={score}
          name={name}
        />
      )}
    </div>
  );
}

export default ToggleGame;
