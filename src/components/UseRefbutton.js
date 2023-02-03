import { useState, useRef, useEffect } from "react";
export function UseRefbutton() {
  const [mydata, setData] = useState("");
  const inputElem = useRef("");
  const changeStyle = () => {
    // inputElem.current.focus();
    inputElem.current.style.background="lightgreen";
   

  };
  return (
    <div className="App">
      <br></br>
      <input
      ref={inputElem}
        type="text"
        value={mydata}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={()=>{
        changeStyle()
      }}>Submit</button>
    </div>
  );
}
