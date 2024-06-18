import React from 'react';
import { Accordion } from 'react-bootstrap';
import '../../landing.css';

export default function Acordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="accordion-header">Características Principales</Accordion.Header>
        <Accordion.Body>
          <p>
          Git es un sistema de control de versiones distribuido y
           gratuito diseñado para manejar todo tipo de proyectos, desde los más pequeños hasta los más grandes, con velocidad y eficiencia. Fue creado por Linus Torvalds en 2005 para el desarrollo del kernel de Linux y 
          desde entonces se ha convertido en la herramienta de control de versiones más popular en el mundo del desarrollo de software.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="accordion-header">Beneficios de Usar Git</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Historial de cambios detallado</li>
            <li>Colaboración mejorada</li>
            <li>Ramas y Fusiones Eficientes</li>
            <li>Reducción de Conflictos</li>
            <li>Trabajo Sin Conexión</li>
            <li>Facilidad de Integración</li>
            <li>Seguridad</li>
            <li>Colaboración Mejorada</li>
            <li>Gestión de Proyectos Complejos</li>
            <li>Automatización de Flujos de Trabajo</li>
            <li>Desarrollo de Código Abierto</li>
            <li>Documentación y Soporte Extensivo</li>
            <li>Copias de Seguridad y Recuperación</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header className="accordion-header">Planes de Capacitación</Accordion.Header>
        <Accordion.Body>
        <div>

        </div>
          <p>
          Con nuestro plan de capacitación lograrás una comprensión sólida y práctica del uso de Git y GitHub, 
          desde los conceptos básicos hasta las funcionalidades avanzadas. Al finalizar la capacitación, los participantes estarán equipados con las habilidades necesarias para gestionar el control de versiones y colaborar eficazmente en proyectos de desarrollo de software.
          </p>
          <br />
          <h5>
          ¿Qué aprenderás?
          </h5>
          <br />
          <h6>
          Nivel Básico: Fundamentos de Git 
          </h6>
          <br />
          <p>1. Introducción a Git</p>
          <ul>
            <li>¿Qué es Git?</li>
            <li>Historia y evolución de Git</li>
            <li>Instalación de Git en diferentes sistemas operativos</li>
          </ul>

          <p>2. Conceptos Básicos de Git</p>
          <br />
          <ul>
            <li>Repositorios (locales y remotos)</li>
            <li>Commits</li>
            <li>Ramas</li>
            <li>Fusionar ramas (Merge)</li>
          </ul>
          <br />

          <p>3. Primeros Pasos con Git</p>
          <ul>
            <li>Configuración inicial (nombre de usuario, correo electrónico)</li>
            <li>Crear un nuevo repositorio</li>
            <li>Clonar un repositorio existente</li>
            <li>Hacer commits y el flujo de trabajo básico (add, commit, push)</li>
          </ul>
          <br />

          <p>Control de Versiones</p>
          <br />
          <ul>
            <li>Deshacer cambios (checkout, reset)</li>
            <li>Navegar por el historial de commits (log, diff)</li>
            <li>Crear y eliminar ramas</li>
            <li>Trabajar con etiquetas (tags)</li>
          </ul>
          <br />
          
          <h6>Nivel Intermedio: GitHub y Colaboración</h6>
          <br />
          <p>1. Introducción a GitHub</p>
          <ul>
            <li>¿Qué es GitHub?</li>
            <li>Crear una cuenta en GitHub</li>
            <li>Explorar la interfaz de GitHub</li>
          </ul>
          <br />
          <p>2. Repositorios en GitHub</p>
          <br />
          <ul>
            <li>Crear y clonar repositorios desde GitHub</li>
            <li>GitHub Desktop vs. Línea de Comandos</li>
            <li>Administrar repositorios (públicos y privados)</li>
          </ul>
          <br />
          <p>3. Colaboración en GitHub</p>
          <br />
          <ul>
            <li>Forks y clones</li>
            <li>Pull Requests: creación, revisión y fusión</li>
            <li>Issues y gestión de proyectos</li>
            <li>Uso de GitHub Projects para organizar tareas</li>
          </ul>
          <br />
          <p>4. Integraciones Básicas</p>
          <br />
          <ul>
            <li>Configuración de GitHub Pages para documentación</li>
            <li>Conectar GitHub con otras herramientas (Slack, Trello, etc.)</li>
          </ul>
          <br />
          <h6>Nivel Avanzado: Funcionalidades Avanzadas y Buenas Prácticas</h6>
          <br />
          <p>1. Funciones Avanzadas de Git</p>
          <br />
          <ul>
            <li>Rebase vs. Merge</li>
            <li>Cherry-picking commits</li>
            <li>Stashing: guardar cambios temporales</li>
            <li>Submódulos: gestionar repositorios dentro de otros repositorios</li>
          </ul>
          <br />
          <p>2. Seguridad y Buenas Prácticas</p>
          <br />
          <ul>
            <li>Claves SSH para autenticación</li>
            <li>Git hooks: scripts automatizados para eventos de Git</li>
            <li>Firmar commits con GPG</li>
            <li>Políticas de ramas y estrategias de fusión</li>
          </ul>
          <br />
          <p>3. Automatización e Integración Continua</p>
          <br />
          <ul>
            <li>Introducción a GitHub Actions</li>
            <li>Crear y configurar flujos de trabajo (workflows)</li>
            <li>Automatizar pruebas y despliegues</li>
            <li>Integrar con servicios CI/CD (Jenkins, Travis CI)</li>
          </ul>
          <br />
          <p>4. Colaboración en Equipos Grandes</p>
          <br />
          <ul>
            <li>Estrategias de branching (Git Flow, GitHub Flow)</li>
            <li>Revisiones de código eficientes</li>
            <li>Gestión de grandes proyectos y monorepos</li>
            <li>Escalabilidad y rendimiento</li>
          </ul>

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}