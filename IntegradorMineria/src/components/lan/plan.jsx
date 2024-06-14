import React from 'react';

export default function Plan() {
  return (
    <div class="d-flex p-2" className='plan'>
      <section id="plan-simple" className="Plan">
        <h2>Plan Simple</h2>
        <ul>
          <li>Característica 1</li>
          <li>Característica 2</li>
          <li>Característica 3</li>
        </ul>
        <button className="Plan-button">Elegir plan</button>
      </section>

      <section id="plan-avanzado" className="Plan">
        <h2>Plan Avanzado</h2>
        <ul>
          <li>Característica 1</li>
          <li>Característica 2</li>
          <li>Característica 3</li>
          <li>Característica 4</li>
          <li>Característica 5</li>
        </ul>
        <button className="Plan-button">Elegir plan</button>
      </section>

      <section id="plan-premium" className="Plan">
        <h2>Plan Premium</h2>
        <ul>
          <li>Característica 1</li>
          <li>Característica 2</li>
          <li>Característica 3</li>
          <li>Característica 4</li>
          <li>Característica 5</li>
          <li>Característica 6</li>
        </ul>
        <button className="Plan-button">Elegir plan</button>
      </section>
    </div>
  );
}
