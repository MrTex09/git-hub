import React from 'react';

export default function Bienvenida() {
  const gifUrl = 'https://media.giphy.com/media/Cc2lafq8xjgu4/giphy.gif'; // URL del GIF

  return (
    <div style={{ 
      backgroundImage: `url(${gifUrl})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      color: 'white', 
      textAlign: 'center',
      textDecoration: 'none',
      backgroundColor: 'black' // Fallback background color
    }}>
      <div style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        padding: '20px', 
        borderRadius: '10px'
      }}>
        <h2>Bienvenido a Git Hub</h2>
        <p>Aprende a manejar Git como un profesional y mejora tu flujo de trabajo de desarrollo.</p>
      </div>
    </div>
  );
}
