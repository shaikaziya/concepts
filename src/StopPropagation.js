import * as React from "react";

export function StopPropagation() {
  const styles = {
    padding: "10px 30px",
    border: "1px solid black",
    width: "500px",
  };
  const styles1 = {
    padding: "10px 30px",
    border: "1px solid black",
    width: "350px",
  };
  const handleOuterClick = () => {
    alert("handleOuterClick");
  };
  const handleInnerClick = (event) => {
    alert("handleInnerClick");
    event.stopPropagation();
  };

  return (
    <div style={styles} onClick={handleOuterClick}>
      handleOuterClick
      <div style={styles1} onClick={handleInnerClick}>
        handleInnerClick-----------Here Iam stopping the operation
      </div>
    </div>
  );
}

export default StopPropagation;
