'use client';

import React from 'react';

const LoadingScreen = () => {
  return (
   <div style={{
     position: 'relative',
     width: '100%',
     height: '100svh',
     background: '#5928E5',
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     zIndex: 10
   }}>
    <div style={{
      width: '100%',
      height: '100%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}>
        <h1 style={{
          color: '#fff2f2',
          fontSize: '9rem',
          letterSpacing: '1.1px',
          lineHeight: '130%',
          marginBottom: '1rem'
        }}>
          Anrafa Agency
        </h1>
        <h3 style={{
          color: '#fff2f2',
          letterSpacing: '1px',
          fontSize: '1.5rem',
          fontWeight: 500,
          lineHeight: '160%'
        }}>
          Crafting the future
        </h3>
    </div>
   </div>
  )
}

export default LoadingScreen