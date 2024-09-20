import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ onGameOver, isGameStarted }) => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    let interval = null;
    if (isGameStarted && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      onGameOver();
      setSeconds(10);
    }
    return () => clearInterval(interval);
  }, [isGameStarted, seconds, onGameOver]);

  return (
    <div className="time">
      <span className="label">Time left:</span>
      <span className="data">{seconds}s</span>
    </div>
  );
};

export default Timer;
