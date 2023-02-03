// it create a mutable variable which will not re-render the components
import {useState,useRef, useEffect} from "react"
export function UseRef() {
  const [mydata,setData]=useState("")
  const count=useRef(0)
  useEffect(()=>
  {count.current=count.current+1}
  )
  return (
    <div className="App">
      <br></br>
      <input
      type="text"
      value={mydata}
      onChange={(e)=>setData(e.target.value)}
      />
     <p>{count.current}</p>
    </div>
  );
}