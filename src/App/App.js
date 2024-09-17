import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "../UserContext.js";
import "./App.css";
import Signup from "../SignUp/Signup.js";
import ToggleGame from "../ToggleGame/ToggleGame.js";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>WHACK A MOLE</h1>
      </header>
      <BrowserRouter>
        {" "}
        <UserProvider>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/game" element={<ToggleGame />} />
          </Routes>
        </UserProvider>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
