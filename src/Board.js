import hole from "./assets/hole.png"
import mole from './assets/mole.png';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';

function Board() {
  const [moles, setMoles] = useState(new Array(25).fill(true));

  const handleClick = (index) => {
    const newMoles = [...moles];
    newMoles[index] = !newMoles[index];
    setMoles(newMoles);
  }

  return (
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
  );
}

export default Board;