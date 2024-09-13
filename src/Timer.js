import React, { useState, useEffect } from "react";
import "./App.css";

// ändrade Timer.js så när 60 (10) sekunder har gått så dyker modalen upp och stängs efter 10 sekunder (3 ändringar)

const Timer = ({ onGameOver, isGameStarted }) => {
  // onGameOver as a prop ( för highScoreModal)
  const [seconds, setSeconds] = useState(10);
  // const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isGameStarted && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      onGameOver(); // Trigger game over when timer hits 0
      setSeconds(10); // Reset timer for the next game
    }
    return () => clearInterval(interval);
  }, [isGameStarted, seconds, onGameOver]);

  return (
    <div className="time">
      <span className="time-label">Time left</span>: {seconds}s
    </div>
  );
};

export default Timer;
