import "../App/App.css";
import React from "react";
import "./ScorePanel.css";

function ScorePanel({ score, name }) {
  return (
    <div className="score-panel">
      <span className="label">
        Player: <span className="data">{name}</span>
      </span>
      <span className="label">
        Score: <span className="data">{score}</span>
      </span>
    </div>
  );
}

export default ScorePanel;
