import hole from "./assets/hole.png"
import mole from './assets/mole.png';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';

function Board() {

  const [moles, setMoles] = useState(new Array(25).fill(false)); //ändrat true = false


  const activateRandomMole = () => {
    const activeMolesCount = moles.filter(isMole => isMole).length;

    // Kolla så det inte ör mer än 3 moles uppe samtidigt
    if (activeMolesCount < 3) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * moles.length); // välj slumppmassig "mole"
      } while (moles[randomIndex]);

      const newMoles = [...moles];
      newMoles[randomIndex] = true;
      setMoles(newMoles);

      // mole uppe mellan 1 and 4 sekunder
      const hideTime = Math.random() * 3000 + 1000;

      // efter en viss tid så försvinner den. 
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
  };

  // random när dem en mole dyker upp
  useEffect(() => {
    const moleInterval = setInterval(() => {
      activateRandomMole();
    }, Math.random() * 2000 + 1000); // 1-3 sekunder ( kan ta bort? )

    return () => clearInterval(moleInterval);
  }, [moles]);

  // klick för att dölja
  const handleClick = (index) => {
    hideMole(index);
  };

  // const handleClick = (index) => {
  //   const newMoles = [...moles];
  //   newMoles[index] = !newMoles[index];
  //   setMoles(newMoles);
  // }

  return (
    <div className="board">
      {moles.map((ismole, index) => (
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