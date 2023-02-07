//In a controlled component, form data is handled by a React component
// handeled through react js state 
                                //Vs
//uncontrolled components directly handled through DOM
//where form data is handled by the DOM itself

import React, { useState, useRef } from "react";
export function UnControlled() {
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("plz fill the data") : setShow(true);
    console.log(name);
  };
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="luckyName">enter your luckyname</label>
          <input type="text" id="luckyName" ref={luckyName}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{show ? `Your name is ${luckyName.current.value}`:""}</p>
    </div>
  );
}
