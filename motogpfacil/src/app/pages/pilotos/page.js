"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../../navbar.css";

export default function Pilotos() {
  const [pilotos] = useState([
    "Francesco Bagnaia",
    "Marc Márquez",
    "Fabio Quartararo",
    "Jorge Martín",
  ]);
  const [busqueda, setBusqueda] = useState("");

  return (
    <div>
      <div>
        <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
          <div className="container">
            {/* Botón para colapsar la barra en pantallas pequeñas */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavCentered"
              aria-controls="navbarNavCentered"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavCentered">
              <div className="row w-100 align-items-center">
                {/* Sección izquierda con algunos enlaces */}
                <div className="col-4 d-flex justify-content-start">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/pages/calendario/" className="nav-link fs-5">
                        Calendario
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/pages/contacto" className="nav-link fs-5">
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Sección central con el logo y el texto */}
                <div className="col-4 d-flex justify-content-center">
                  <Link
                    href="../"
                    className="navbar-brand d-flex flex-column align-items-center"
                  >
                    <img
                      src="/images/logoMotogpFacil.png"
                      alt="MotoGP Facil"
                      style={{ width: "50px", height: "auto" }}
                    />
                    <span className="fs-4">MotoGP Facil</span>
                  </Link>
                </div>

                {/* Sección derecha con el resto de enlaces */}
                <div className="col-4 d-flex justify-content-end">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/pages/equipos" className="nav-link fs-5">
                        Equipos
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/pages/pilotos" className="nav-link fs-5">
                        Pilotos
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/pages/reglamento" className="nav-link fs-5">
                        Reglamento
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
        {pilotos
          .filter((piloto) =>
            piloto.toLowerCase().includes(busqueda.toLowerCase())
          )
          .map((piloto, index) => (
            <li key={index}>{piloto}</li>
          ))}
      </ul>
    </div>
  );
}
