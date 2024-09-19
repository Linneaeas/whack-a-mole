import React, { useState, useEffect } from "react";
import "./HighScoreModal.css";

function HighScoreModal({ show, onClose, name, score, hitRate }) {
  const [highScores] = useState([]);
  const [reactionTimes] = useState([]);

  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Game Over</h2>
        <div className="your-score">
          <span>Player:</span>
          <span>Score:</span>
          <span>Reaction time:</span>
          <p>{name}</p>
          <p>{score}</p>
          <p>{hitRate.toFixed(2)} ms</p>
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
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default HighScoreModal;
