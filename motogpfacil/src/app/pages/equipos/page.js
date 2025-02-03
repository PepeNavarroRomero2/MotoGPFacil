"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import navbarStyles from "../../navbar.css";
import Link from "next/link";
import "../../Equipos.css"

function Equipos() {
  const [equipos, setEquipos] = useState([]);
  const [fabricanteSeleccionado, setFabricanteSeleccionado] = useState(null);
  const [equiposFiltrados, setEquiposFiltrados] = useState([]);

  const fabricantes = ["Ducati", "Yamaha", "Honda", "Aprilia", "KTM"];

  async function fetchEquipos() {
    const response = await fetch("/api/equipos");
    const body = await response.json();
    setEquipos(body);
  }

  useEffect(() => {
    fetchEquipos();
  }, []);

  useEffect(() => {
    if (fabricanteSeleccionado) {
      const filtrados = equipos.filter((equipo) => equipo.escuderia === fabricanteSeleccionado);
      setEquiposFiltrados(filtrados);
    } else {
      setEquiposFiltrados(equipos);
    }
  }, [fabricanteSeleccionado, equipos]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark ${navbarStyles.navbar}`}>
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
                <Link href="../" className="navbar-brand d-flex flex-column align-items-center">
                  <img src="/images/logoMotogpFacil.png" alt="MotoGP Facil" style={{ width: "50px", height: "auto" }} />
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
      
      <div className="container text-center my-5">
        <h1 className="mb-4">Equipos de MotoGP</h1>

        {/* Botones de fabricantes */}
        <div className="d-flex justify-content-center gap-2 mb-4">
          {fabricantes.map((fabricante, index) => (
            <button
              key={index}
              className={`btn ${fabricanteSeleccionado === fabricante ? "btn-danger" : "btn-secondary"}`}
              onClick={() => setFabricanteSeleccionado(fabricante)}
            >
              {fabricante}
            </button>
          ))}
          <button className="btn btn-dark" onClick={() => setFabricanteSeleccionado(null)}>
            Todos
          </button>
        </div>

        {/* Lista de equipos */}
        <div className="row">
          {equiposFiltrados.map((equipo) => (
            <div key={equipo.id} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{equipo.nombre}</h5>
                  <p className="card-text text-muted">Escudería: {equipo.escuderia}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {equiposFiltrados.length === 0 && (
          <p className="text-muted mt-3">No hay equipos para esta escudería.</p>
        )}
      </div>
    </>
  );
}

export default Equipos;
