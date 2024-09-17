import "../App/App.css";
import React, { useContext } from "react";
import "./ScorePanel.css";
import { UserContext } from "../UserContext.js";

function ScorePanel({ score }) {
  const { name } = useContext(UserContext);

  return (
    <div className="score-panel">
      <h3 className="name">{name}</h3>
      <h4 className="score">Score: {score}</h4>
    </div>
  );
}

export default ScorePanel;
