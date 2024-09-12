import { useState } from "react";

import React from 'react'

const ToggleGame = () => {

  const [isGameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  const stopGame = () => {
    setGameStarted(false);
  };

  return (
    <div>
      
    </div>
  )
}

export default ToggleGame
