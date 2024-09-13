import React, { useState, useEffect } from 'react';

function Signup() {

    const  [inputValue, setInputValue] =  useState('');

    const  handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return(
<form>
    <label>Name:
    <input  type="text"  value={inputValue} onChange={handleChange} />
    </label>

</form>);




}

export default Signup;