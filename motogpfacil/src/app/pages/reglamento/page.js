"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Reglamento() {
  const [reglamento, setReglamento] = useState([]);

  async function fetchReglamento() {
    const response = await fetch("/api/reglamento/");
    const body = await response.json();
    setReglamento(body);
  }

  useEffect(() => {
    fetchReglamento();
  }, []);

  return (
    <div className="bg-dark min-vh-100 text-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <Link href="../" className="navbar-brand">
            Inicio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
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

      {/* Reglamento */}
      <div className="container">
        <h2 className="mb-3">Reglamento</h2>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {reglamento.map((regla) => (
              <tr key={regla.id}>
                <td>{regla.nombre}</td>
                <td>{regla.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reglamento;
