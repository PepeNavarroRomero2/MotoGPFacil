"use client"
import { useState } from 'react';

export default function Pilotos() {
  const [pilotos] = useState([
    'Francesco Bagnaia', 'Marc Márquez', 'Fabio Quartararo', 'Jorge Martín'
  ]);
  const [busqueda, setBusqueda] = useState('');

  return (
    <div>
      <h1>Pilotos de MotoGP</h1>
      <input 
        type="text" 
        placeholder="Buscar piloto..." 
        value={busqueda} 
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ul>
        {pilotos.filter(piloto => piloto.toLowerCase().includes(busqueda.toLowerCase())).map((piloto, index) => (
          <li key={index}>{piloto}</li>
        ))}
      </ul>
    </div>
  );
}
