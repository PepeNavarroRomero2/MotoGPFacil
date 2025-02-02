"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Home() {
  return (
    <div className="bg-dark min-vh-100 text-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            Guía MotoGP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavHome"
            aria-controls="navbarNavHome"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavHome">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/pages/calendario/" className="nav-link">
                  Calendario
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pages/contacto" className="nav-link">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pages/equipos" className="nav-link">
                  Equipos
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pages/pilotos" className="nav-link">
                  Pilotos
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pages/reglamento" className="nav-link">
                  Reglamento
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container text-center">
        <h1>Bienvenido a la Guía de MotoGP</h1>
      </div>
    </div>
  );
}
