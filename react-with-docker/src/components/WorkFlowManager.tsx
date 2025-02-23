
// @ts-nocheck
import React from 'react';
const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position:'realative',
     top:'20%',
      margin: 0,
      overflow: 'hidden',
    },
    image: {
      position: 'relative',
      top: 1,
      left: '0',
      width: '100%',
      height: '80%',
      objectFit: 'cover', // Ensures the image covers the entire area
    },
  };
const FullPageImage = () => {
  return (
    <div style={styles.container}>
      <img src="workFlowManager.png" alt="Full Page" style={styles.image} />
    </div>
  );
};



export default FullPageImage;
