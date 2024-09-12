import { useState, useEffect } from "react";
import Timer from "./Timer";
import Board from "./Board";
import React from "react";

function ToggleGame() {
  const [isGameStarted, setGameStarted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleGameOver = () => {
    setShowModal(true);
    setGameStarted(false); // Stop the game when time runs out
  };

  const startGame = () => {
    setGameStarted(true);
    setShowModal(false); // Close modal when starting a new game
  };

  useEffect(() => {
    if (isGameStarted) {
      console.log("spelet startat"); //Sätt in de andra komponenterna?
    }
  }, [isGameStarted]);

  return (
    <div>
      {isGameStarted ? (
        <div>
          <Timer onGameOver={handleGameOver} />
          <Board />
        </div>
      ) : (
        <div>
          <button onClick={startGame}>Start Game</button>
          {showModal && <p>Game Over! Try again?</p>}
        </div>
      )}
    </div>
  );
}

export default ToggleGame;
