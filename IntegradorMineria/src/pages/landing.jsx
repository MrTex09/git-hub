import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../landing.css'; 
import Bienvenida from '../components/landing/bienvenida';
import Car from '../components/landing/carusel';
import Acc from '../components/landing/accordion';
import Plan from '../components/landing/card';
import Section from '../components/landing/section';
import Header from '../components/Header/Header';


export default function Lan() {
  return (
    <div className="App">
      <Header/>
      <main className="App-main">
        <Bienvenida />
        <Car />
        <Plan />
        <Acc />
        {/* <Section /> */}
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
