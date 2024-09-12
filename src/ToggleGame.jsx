import { useState, useEffect } from "react";
import Timer from "./Timer";
import Board from "./Board";
import React from 'react';

function ToggleGame(){

  const [isGameStarted, setGameStarted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleGameOver = () => {
    setShowModal(true);
  };

 

  useEffect(() => {
    if(isGameStarted){
      console.log("spelet startat")//Sätt in de andra komponenterna?
    }
  }, [isGameStarted])



  return (
    <div>
      {isGameStarted ? (
        <div>
          <Timer onGameOver={handleGameOver} />
          
        </div> 
      ):(
        <p> </p>// sätt in vad som händer om det inte är startat
      )}
    </div>
  );
}

export default ToggleGame
