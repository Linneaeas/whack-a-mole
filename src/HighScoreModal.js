// src/components/HighScoreModal.js
import React, { useEffect, useState } from "react";
import "./HighScoreModal.css";

function HighScoreModal({ show, onClose, onStartNewGame }) {
  const [highScores, setHighScores] = useState([]);
  const [reactionTimes, setReactionTimes] = useState([]);

  useEffect(() => {
    if (show) {
      const fetchData = async () => {
        await fetchHighScores();
        await fetchReactionTimes();
      };
      fetchData();

      // stäng modalen efter 10 sekunder (eller om man klickar X)
      const timer = setTimeout(() => {
        onClose();
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  // Fetch high scores from the backend
  const fetchHighScores = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/leaderboard/highest-scores"
      );
      console.log("High Scores Response:", response);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      console.log("Fetched High Scores Data:", data);

      setHighScores(data);
    } catch (error) {
      console.error("Error fetching high scores:", error);
    }
  };
  // Fetch fastest hit rates from the backend
  const fetchReactionTimes = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/leaderboard/fastest-hit-rates"
      );
      console.log("Reaction times  Response:", response);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      console.log("Fetched Reaction times Data:", data);

      setReactionTimes(data);
    } catch (error) {
      console.error("Error fetching reaction times:", error);
    }
  };

  return show ? (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Game Over</h2>
        <div className="your-score">
          <span>Player:</span>
          <span>Score:</span>
          <span>Reaction time:</span>
          <p>Simon</p>
          <p>1500</p>
          <p>0.6 ms</p>
        </div>
        <div className="list-container">
          <div className="high-score-section">
            <h3>
              Top 10 <br />
              Highest Scores
            </h3>
            <ul>
              {highScores.map((player, index) => (
                <li key={index} className="list-grid">
                  <span>{index + 1}.</span>
                  <span className="left">{player.playerName}:</span>
                  <span className="right">{player.score}p</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reaction-time-section">
            <h3>
              Top 10 <br />
              Fastest Players
            </h3>

            <ul>
              {reactionTimes.map((player, index) => (
                <li key={index} className="list-grid">
                  <span>{index + 1}.</span>
                  <span className="left">{player.playerName}:</span>
                  <span className="right">{player.hitRate} ms</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="modal-actions">
          <button onClick={onStartNewGame}>Start New Game</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  ) : null;
}

export default HighScoreModal;
