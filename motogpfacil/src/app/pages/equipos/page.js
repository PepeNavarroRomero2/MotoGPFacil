"use client"
import { useState } from 'react';

export default function Equipos() {
  const [equipos] = useState(['Ducati Lenovo', 'Yamaha Factory', 'Repsol Honda', 'Aprilia Racing']);

  return (
    <div>
      <h1>Equipos de MotoGP</h1>
      <ul>
        {equipos.map((equipo, index) => (
          <li key={index}>{equipo}</li>
        ))}
      </ul>
    </div>
  );
}
