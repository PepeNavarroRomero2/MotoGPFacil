"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Calendario() {
  const [eventos, setEventos] = useState([]);

  async function fetchContacts() {
    const response = await fetch("/api/calendario/");
    const body = await response.json();
    setEventos(body);
  }

  useEffect(() => {
    fetchContacts();
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

      {/* Eventos */}
      <div className="container">
        <div className="row">
          {eventos.map((evento) => (
            <div key={evento.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <img
                  src={evento.imageUrl}
                  alt={`Imagen del circuito ${evento.circuito}`}
                  className="card-img-top"
                />
                <div className="card-body text-dark">
                  <h5 className="card-title">{evento.circuito}</h5>
                  <p className="card-text mb-1">
                    <strong>Inicio:</strong> {evento.fecha_inicio}
                  </p>
                  <p className="card-text mb-1">
                    <strong>Fin:</strong> {evento.fecha_fin}
                  </p>
                  <p className="card-text mb-0">
                    <strong>País:</strong> {evento.pais}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendario;
