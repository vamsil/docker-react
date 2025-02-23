
// @ts-nocheck
import React from 'react';
const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 0,
      overflow: 'hidden',
    },
    image: {
      position: 'relative',
      top: 0,
      left: '0',
      width: '100%',
      height: '80%',
      objectFit: 'cover', // Ensures the image covers the entire area
    },
  };
const FullPageImage = () => {
  return (
    <div style={styles.container}>
      <img src="inqueryManager.png" alt="Full Page" style={styles.image} />
    </div>
  );
};



export default FullPageImage;
