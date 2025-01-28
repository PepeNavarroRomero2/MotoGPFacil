"use client"
import { useState } from 'react';

export default function Calendario() {
  const [carreras] = useState([
    { fecha: '10/03/2025', circuito: 'Losail' },
    { fecha: '24/03/2025', circuito: 'Termas de Río Hondo' },
    { fecha: '07/04/2025', circuito: 'COTA' }
  ]);

  return (
    <div>
      <h1>Calendario de MotoGP</h1>
      <ul>
        {carreras.map((carrera, index) => (
          <li key={index}>{carrera.fecha} - {carrera.circuito}</li>
        ))}
      </ul>
    </div>
  );
}
