// exceeding the count without entering value in input field---->entering to infinte loop

import { useState, useEffect } from "react";

export function WithoutuseRef() {
  const [mydata, setData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  });
  return (
    <div>
      <input
        type="text"
        value={mydata}
        onChange={(e) => setData(e.target.value)}
      />
      <p>The number of times render: {count}</p>
    </div>
  );
}
