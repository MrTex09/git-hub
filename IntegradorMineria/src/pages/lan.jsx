import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar CSS de Bootstrap
import '../lan.css'; // Importar tu CSS personalizado
import Acc from '../components/lan/accordion';
import Plan from '../components/lan/plan';
import Car from '../components/lan/car';

export default function Lan() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Elige un plan</h1>
        <nav className="App-nav">
          <ul>
            <li><a href="#plan-simple">Plan Simple</a></li>
            <li><a href="#plan-avanzado">Plan Avanzado</a></li>
            <li><a href="#plan-premium">Plan Premium</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main className="App-main">
        <Car/>
        <Plan />
        <Acc/>
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
