"use client"
import { useState } from 'react';

export default function Contacto() {
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado: ${mensaje}`);
    setMensaje('');
  };

  return (
    <div>
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
