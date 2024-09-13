import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

function Signup() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <Link to="/game">
        <button type="button">Next</button>
      </Link>
    </form>
  );
}

export default Signup;
