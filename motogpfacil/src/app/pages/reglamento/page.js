"use client"
import Link from "next/link";
export default function Reglamento() {
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
        <h1>Reglamento de MotoGP</h1>
        <ul>
          <li>Las carreras tienen un mínimo de 20 vueltas.</li>
          <li>Está prohibido el contacto intencionado entre pilotos.</li>
          <li>El peso mínimo de la moto es de 157 kg.</li>
        </ul>
      </div>
    );
  }
  