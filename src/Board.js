import hole from "./assets/hole.png"
import mole from './assets/mole.png';
import './App.css';
import { useState } from 'react';
import React from 'react';

function Board() {
  const [moles, setMoles] = useState(new Array(25).fill(true));
  const [score, setScore] = useState(0);

  const handleClick = (index) => {
    const newMoles = [...moles];
    if (newMoles[index]) {
      setScore(score + 1);
    }
    newMoles[index] = !newMoles[index];
    setMoles(newMoles);
  }

  return (
    <>
    <div className="score-panel">
      <h3 className="name">Elin</h3>
      <h4 className="score">Score: {score}</h4>
    </div>
    <div className="board">
      {moles.map((ismole, index) =>(
        <img
          key={index}
          src={ismole ? mole : hole}
          alt={ismole ? 'A mole' : 'A hole'}
          onClick={() => handleClick(index)}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </div>
    </>
  );
}

export default Board;