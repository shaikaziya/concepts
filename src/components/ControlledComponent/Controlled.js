//In a controlled component, form data is handled by a React component
// handeled through react js state 
                                //Vs
//uncontrolled components directly handled through DOM
//where form data is handled by the DOM itself


import React, { useState } from "react";
export function Controlled() {
  const [val, setVal] = useState("");
  return (
    <div>
      <form action="" >
        <div>
 
          <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
        </div>
      <p>Value of input:    {val}</p>
      </form>
      
    </div>
  );
}
