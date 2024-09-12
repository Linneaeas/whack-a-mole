import React, { useState } from "react";
import "./App.css";
import Timer from "./Timer";

import HighScoreModal from "./HighScoreModal";

import Board from "./Board";

function App() {
  const [showModal, setShowModal] = useState(false);

  // funktion som triggar när timer är 0
  const handleGameOver = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>WHACK A MOLE</h1>
      </header>

      {/* pass prop, timer */}
      <Timer onGameOver={handleGameOver} />

      {/* visar HighScoreModal när tiden är ute */}
      <HighScoreModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onStartNewGame={() => setShowModal(false)}
      />
      <Board />
    </div>
  );
}

export default App;
