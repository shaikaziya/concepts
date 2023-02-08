import { Child } from "./Child";

export function Parent1() {
  function parentAlert(data) {
    alert(data);
  }
  return (
    <div>
      <h1>Parent to Child </h1>
      <h3>Lifting the State Up </h3>
      <Child alert1={parentAlert}></Child>
    </div>
  );
}
