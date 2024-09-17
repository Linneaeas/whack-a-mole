import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./UserContext.js";
import "./App.css";
import Signup from "./Signup";
import ToggleGame from "./ToggleGame";

function App() {
  return (
    <div className="App">
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
