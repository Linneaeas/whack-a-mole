import React, { useState, useContext, useEffect } from "react";
import "../App/App";
import "./ToggleGame.css";
import Timer from "../Timer/Timer";
import HighScoreModal from "../HighScoreModal/HighScoreModal";
import Board from "../Board/Board";
import ScorePanel from "../ScorePanel/ScorePanel";
import { UserContext } from "../UserContext.js";
import { fetchHighScores } from "../API/fetchHighScores.js";
import { fetchReactionTimes } from "../API/fetchReactionTimes.js";
import { submitPlayerData } from "../API/submitPlayerData.js";

function ToggleGame() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [hitRate, setHitRate] = useState(0);
  const [highScores, setHighScores] = useState([]);
  const [reactionTimes, setReactionTimes] = useState([]);
  const { name } = useContext(UserContext);

  useEffect(() => {
    if (showModal) {
      console.log("useEffect fetch triggered");
      const fetchData = async () => {
        try {
          const scoreData = await fetchHighScores();
          setHighScores(scoreData);
          const hitRateData = await fetchReactionTimes();
          setReactionTimes(hitRateData);
        } catch (error) {
          console.error("Error fetching:", error);
        }
      };

      fetchData();
    }
  }, [showModal]);

  useEffect(() => {
    if (showModal) {
      console.log("useEffect timer triggered");
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const handleGameOver = async () => {
    try {
      await submitPlayerData(name, score, hitRate);
    } catch (error) {
      console.error("Error submitting player data:", error);
    }
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
          highScores={highScores}
          reactionTimes={reactionTimes}
        />
      )}
    </div>
  );
}

export default ToggleGame;
