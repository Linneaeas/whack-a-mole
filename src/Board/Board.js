import hole from "../assets/hole.png";
import mole from "../assets/mole.png";
import "../App/App.css";
import { useState, useEffect } from "react";
import "./Board.css";

function Board({ isGameStarted, score, setScore, setHitRate }) {
  const [moles, setMoles] = useState(new Array(25).fill(false));
  const [moleAppearTime, setMoleAppearTime] = useState(
    new Array(25).fill(null)
  ); // Track when each mole appears
  const [reactionTimes, setReactionTimes] = useState([]); // Store reaction times

  // Reset score, reaction times, and mole appearance times when the game starts
  useEffect(() => {
    if (isGameStarted) {
      setScore(0);
      setReactionTimes([]);
      setMoleAppearTime(new Array(25).fill(null)); // Reset mole appearance times
    }
  }, [isGameStarted, setScore]);

  const activateRandomMole = () => {
    const activeMolesCount = moles.filter((isMole) => isMole).length;

    if (activeMolesCount < 3) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * moles.length);
      } while (moles[randomIndex]);

      const newMoles = [...moles];
      newMoles[randomIndex] = true;
      setMoles(newMoles);

      const newMoleAppearTime = [...moleAppearTime];
      newMoleAppearTime[randomIndex] = Date.now(); // Record the time mole appears
      setMoleAppearTime(newMoleAppearTime);

      const hideTime = Math.random() * 3000 + 1000;

      setTimeout(() => {
        hideMole(randomIndex);
      }, hideTime);
    }
  };

  const hideMole = (index) => {
    setMoles((prevMoles) => {
      const newMoles = [...prevMoles];
      newMoles[index] = false;
      return newMoles;
    });

    const newMoleAppearTime = [...moleAppearTime];
    newMoleAppearTime[index] = null; // Reset mole appearance time
    setMoleAppearTime(newMoleAppearTime);
  };

  // Randomize mole appearance during the game
  useEffect(() => {
    if (isGameStarted) {
      const moleInterval = setInterval(() => {
        activateRandomMole();
      }, Math.random() * 2000 + 1000);

      return () => clearInterval(moleInterval);
    }
  }, [isGameStarted]);

  // Handle mole clicks
  const handleClick = (index) => {
    const newMoles = [...moles];
    if (newMoles[index]) {
      setScore(score + 1);

      const currentTime = Date.now();
      const appearTime = moleAppearTime[index];

      if (appearTime) {
        const reactionTime = currentTime - appearTime; // Calculate reaction time
        setReactionTimes((prevTimes) => [...prevTimes, reactionTime]);
      }
    }
    newMoles[index] = false;
    setMoles(newMoles);
  };

  // Calculate the average hit rate (average reaction time) whenever reaction times update
  useEffect(() => {
    if (reactionTimes.length > 0) {
      const totalReactionTime = reactionTimes.reduce(
        (acc, time) => acc + time,
        0
      );
      const averageReactionTime = totalReactionTime / reactionTimes.length;
      setHitRate(averageReactionTime);
    }
  }, [reactionTimes, setHitRate]);

  return (
    <div className="Board-container">
      <div className="board">
        {moles.map((ismole, index) => (
          <img
            key={index}
            src={ismole ? mole : hole}
            alt={ismole ? "A mole" : "A hole"}
            onClick={() => handleClick(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
