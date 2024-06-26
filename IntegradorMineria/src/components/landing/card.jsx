import React from 'react';

export default function Card() {
  return (
    <div className="d-flex p-2 plan">
      <section id="intruduccion" className="Plan">
        <h2>Introducción a Git</h2>
        <ul>
          <li>¿Qué es Git y por qué usarlo?</li>
          <li>Configuración inicial</li>
          <li>Comandos básicos</li>
        </ul>
        <a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" target="_blank" rel="noopener noreferrer">
          <button className="Plan-button">Aprender más</button>
        </a>
      </section>

      <section id="ramas" className="Plan">
        <h2>Ramas</h2>
        <ul>
          <li>Ramas y fusiones</li>
          <li>Resolución de conflictos</li>
          <li>Flujos de trabajo colaborativos</li>
        </ul>
        <a href="https://www.atlassian.com/git/tutorials/using-branches" target="_blank" rel="noopener noreferrer">
          <button className="Plan-button">Más información</button>
        </a>
      </section>

      <section id="colaboracion" className="Plan">
        <h2>Colaboración</h2>
        <ul>
          <li>Integración continua</li>
          <li>Despliegue continuo</li>
          <li>Automatización de tareas</li>
        </ul>
        <a href="https://docs.github.com/es/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository" target="_blank" rel="noopener noreferrer">
          <button className="Plan-button">Descubre más</button>
        </a>
      </section>
    </div>
  );
}
