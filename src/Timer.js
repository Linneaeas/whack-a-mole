import React, { useState, useEffect } from "react";

// ändrade Timer.js så när 60 (10) sekunder har gått så dyker modalen upp och stängs efter 10 sekunder (3 ändringar)

const Timer = ({ onGameOver, isGameStarted }) => {
  // onGameOver as a prop ( för highScoreModal)
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);

  function startTimer() {
    setIsActive(true);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setSeconds(10);
      setIsActive(false);

      onGameOver(); // (highscore) when timer reaches 0
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, onGameOver]); // Pass onGameOver

  return (
    <div className="startpage">
      <div className="btn-container">
        <button
          className="button-startnewgame"
          onClick={startTimer}
          disabled={isActive}
        >
          Start New Game
        </button>
      </div>
      <div className="time">
        <span className="time-label">Time left</span>: {seconds}s
      </div>
    </div>
  );
};

export default Timer;
