import "../App/App.css";
import React from "react";
import "./ScorePanel.css";

function ScorePanel({ score, name }) {
  return (
    <div className="score-panel">
      <h3 className="name">{name}</h3>
      <h4 className="score">Score: {score}</h4>
    </div>
  );
}

export default ScorePanel;
