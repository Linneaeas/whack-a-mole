import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.js";

function Signup() {
  const [inputValue, setInputValue] = useState("");
  const { setName } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNext = () => {
    if (inputValue.trim()) {
      setName(inputValue);
      navigate("/game");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          autoFocus
        />
      </label>

      <button type="submit" onClick={handleNext}>
        Next
      </button>
    </form>
  );
}

export default Signup;
