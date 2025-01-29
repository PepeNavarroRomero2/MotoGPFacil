"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Pilotos() {
  const [pilotos] = useState([
    'Francesco Bagnaia', 'Marc Márquez', 'Fabio Quartararo', 'Jorge Martín'
  ]);
  const [busqueda, setBusqueda] = useState('');

  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="../">Inicio</Link>
            </li>
            <li>
              <Link href="/pages/calendario/">Calendario</Link>
            </li>
            <li>
              <Link href="/pages/contacto">Contacto</Link>
            </li>
            <li>
              <Link href="/pages/equipos">Equipos</Link>
            </li>
            <li>
              <Link href="/pages/pilotos">Pilotos</Link>
            </li>
            <li>
              <Link href="/pages/reglamento">Reglamento</Link>
            </li>
          </ul>
        </nav>
      </div>
      <br></br>
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
