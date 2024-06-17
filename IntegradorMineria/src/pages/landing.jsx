import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar CSS de Bootstrap
import '../lan.css'; // Importar tu CSS personalizado
import Bienvenida from '../components/landing/bienvenida';
import Car from '../components/landing/carusel';
import Acc from '../components/landing/accordion';
import Plan from '../components/landing/card';
import Section from '../components/landing/section';



export default function Lan() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GIT HUB</h1>
        <nav className="App-nav">
          <ul>
            <li><a href="#intruduccion">Intruducion</a></li>
            <li><a href="#ramas">ramas</a></li>
            <li><a href="#colaboracion">colaboracion</a></li>
          </ul>
        </nav>
      </header>

      <main className="App-main">
        <Bienvenida />
        <Car />
        <Plan />
        <Acc />
        <Section />
      </main>

      <footer className="App-footer">
        <p>Contacto:</p>
        <ul>
          <li>Email: contacto@ejemplo.com</li>
          <li>Teléfono: 123-456-7890</li>
        </ul>
      </footer>
    </div>
  );
}
