import { useState, useMemo } from "react";

export const WithuseMemo = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("line 12 console");
    for (let i = 0; i <= 100; i++) {}
    return num;
  };
  //added here useMemo hook 
  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);
  // const checkData=countNumber(myNum);
  return (
    <>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p>My new number:{checkData}</p>
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked button" : "Click Here"}
      </button>
    </>
  );
};
