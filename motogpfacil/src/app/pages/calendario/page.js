"use client";
import { useState } from "react";
import Link from "next/link";

export default function Calendario() {
  const [carreras] = useState([
    { fecha: "10/03/2025", circuito: "Losail" },
    { fecha: "24/03/2025", circuito: "Termas de Río Hondo" },
    { fecha: "07/04/2025", circuito: "COTA" },
  ]);

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
      <h1>Calendario de MotoGP</h1>
      <ul>
        {carreras.map((carrera, index) => (
          <li key={index}>
            {carrera.fecha} - {carrera.circuito}
          </li>
        ))}
      </ul>
    </div>
  );
}
