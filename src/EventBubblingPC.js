import * as React from 'react';

export function EventBubblingPC() {
  
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
  const handleOuterClick = () => {
    alert("handleOuterClick")
  };
  const handleInnerClick = () => {
    alert("handleInnerClick")
  };

  return (
   
    <div style={styles} onClick={handleOuterClick}>handleOuterClick
      <div style={styles1} onClick={handleInnerClick}>handleInnerClick</div>
    </div>
    
  );
}

export default EventBubblingPC;