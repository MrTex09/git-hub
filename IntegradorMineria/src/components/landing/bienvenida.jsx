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
      backgroundColor: 'black'
    }}>
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h2>Bienvenido a Git Hub</h2>
        <p className='w-50'>Revolucionamos la manera en que los desarrolladores colaboran y organizan sus proyectos. Aloja tus proyectos, 
          colabora con otros desarrolladores y gestiona tu código de forma eficiente. Unete a Github y forma parte de nosotros ahora!.</p>
      </div>
    </div>
  );
}
