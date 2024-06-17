import React from 'react';
import { Accordion } from 'react-bootstrap';
import '../../lan.css'; // Importa tu archivo CSS aquí

export default function Acc() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="accordion-header">Características Principales</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Control de versiones distribuido</li>
            <li>Ramas y fusiones eficientes</li>
            <li>Integración con múltiples servicios de CI/CD</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="accordion-header">Beneficios de Usar Git</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Historial de cambios detallado</li>
            <li>Colaboración mejorada</li>
            <li>Mejor manejo de conflictos</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="accordion-header">Planes de Capacitación</Accordion.Header>
        <Accordion.Body>
          Ofrecemos planes de capacitación para todos los niveles, desde principiantes hasta avanzados, 
          para ayudarte a dominar Git y mejorar tu flujo de trabajo.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}