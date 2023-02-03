import * as React from 'react';

export function EventBubbling() {
  
const styles={
  padding: '10px 30px',
  border: '1px solid black',
  width:"500px"

}
const styles1={
    padding: '10px 30px',
    border: '1px solid black',
    width:"350px"
  
  }
  const handleClick = () => {
    alert("clicked")
  };

  return (
   
    <div style={styles} onClick={handleClick}>
      <div style={styles1}>Click Here</div>
    </div>
    
  );
}

export default EventBubbling;