import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <button onClick={goToHome} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Ir al Inicio
      </button>
    </div>
  );
};

export default NotFound;
