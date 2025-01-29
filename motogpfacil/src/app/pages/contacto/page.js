"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Contacto() {
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado: ${mensaje}`);
    setMensaje('');
  };

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
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={mensaje} 
          onChange={(e) => setMensaje(e.target.value)} 
          placeholder="Escribe tu mensaje aquí"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
