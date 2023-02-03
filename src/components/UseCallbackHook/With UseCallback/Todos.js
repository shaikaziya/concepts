import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log("child");
  return (
    <>
      <h3>My Todos</h3>
      {todos.map((todo, index) => {
        return <p key={index}>{todo + index}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};
export default memo(Todos);
