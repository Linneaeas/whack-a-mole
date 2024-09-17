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
    setName(inputValue);
    navigate("/game");
  };

  return (
    <form>
      <label>
        Name:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>

      <button type="button" onClick={handleNext}>
        Next
      </button>
    </form>
  );
}

export default Signup;
