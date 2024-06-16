import React from 'react';

export default function Bienvenida() {
  const imageUrl = '../../../public/images/images.jpg'; // Ruta de la imagen en el directorio public

  return (
    <div style={{ 
      backgroundImage: `url(${imageUrl})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      color: 'white', 
      textAlign: 'center',
      textDecoration:"none"
    }}>
      <h1>Bienvenida</h1>
    </div>
  );
}
