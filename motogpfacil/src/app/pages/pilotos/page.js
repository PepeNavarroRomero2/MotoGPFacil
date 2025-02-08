"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Pilotos() {
  const [pilotos, setPilotos] = useState([]);

  async function fetchPilotos() {
    const response = await fetch("/api/pilotos/");
    const data = await response.json();
    setPilotos(data);
  }

  useEffect(() => {
    fetchPilotos();
  }, []);

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
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

      {/* Título */}
      <div className="py-4 text-center">
        <h1>PILOTOS MOTOGP</h1>
      </div>

      {/* Grid de Pilotos */}
      <div className="container">
        <div className="row justify-content-center">
          {pilotos.map((piloto) => (
            <div key={piloto.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img
                  src={`/images/pilotos/${piloto.id}.png`}
                  className="card-img-top img-fluid"
                  alt={piloto.nombre}
                  style={{ maxHeight: "150px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">
                    {piloto.nombre} {piloto.apellidos}
                  </h5>
                  <p className="card-text">
                    <img
                      src={`/images/numeros/${piloto.numero}.png`}
                      alt={piloto.numero}
                      style={{ width: "30px", marginRight: "5px" }}
                    />
                    <img
                      src={`/images/banderas/${piloto.pais}.png`}
                      alt={piloto.pais}
                      style={{ width: "30px" }}
                    />
                  </p>
                  <p className="card-text">
                    Moto3: {piloto.titulos_moto3} | Moto2: {piloto.titulos_moto2} | MotoGP: {piloto.titulos_motogp}
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

export default Pilotos;
