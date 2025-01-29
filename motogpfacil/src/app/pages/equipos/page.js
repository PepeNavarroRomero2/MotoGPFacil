"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Equipos() {
  const [equipos] = useState(['Ducati Lenovo', 'Yamaha Factory', 'Repsol Honda', 'Aprilia Racing']);

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
      <h1>Equipos de MotoGP</h1>
      <ul>
        {equipos.map((equipo, index) => (
          <li key={index}>{equipo}</li>
        ))}
      </ul>
    </div>
  );
}
