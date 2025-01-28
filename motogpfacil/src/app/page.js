import Image from "next/image";
import styles from "./page.module.css";

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a la Guía de MotoGP</h1>
      <nav>
        <ul>
          <li><Link href="/pages/calendario/">Calendario</Link></li>
          <li><Link href="/pages/contacto">Contacto</Link></li>
          <li><Link href="/pages/equipos">Equipos</Link></li>
          <li><Link href="/pages/pilotos">Pilotos</Link></li>
          <li><Link href="/pages/reglamento">Reglamento</Link></li>
        </ul>
      </nav>
    </div>
  );
}

