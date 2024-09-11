import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  function startTimer() {
    setIsActive(true);
  }



  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setSeconds(60);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="startpage">
      <div className="time">
        {seconds}s
      </div>
      <div className="btn-container">
        <button className="button-primary" onClick={startTimer} disabled={isActive}>
          Start New Game
        </button>
      </div>
    </div>
  );
};

export default Timer;