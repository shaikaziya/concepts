import { useState } from "react";

export function HigherOrderC(props) {
  return <props.cmp></props.cmp>;
}

export function Counter() {
  const [like, Setlike] = useState(0);
  const [dislike, Setdislike] = useState(0);
  return (
    <>
      <button onClick={() => Setlike(like + 1)}>{like} LikeButton</button>
      <br></br>
      <br></br>
      <button onClick={() => Setdislike(dislike - 1)}>
        {dislike} DislikeButton
      </button>
    </>
  );
}
