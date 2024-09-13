import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
import Signup from "./Signup";
import ToggleGame from "./ToggleGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/game" element={<ToggleGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
