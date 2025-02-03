"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import calendarioStyles from "../../Calendario.module.css";
import navbarStyles from "../../navbar.css";

function Calendario() {
  const [eventos, setEventos] = useState([]);
  const banderas = {
    Tailandia: "Tailandia.png",
    Argentina: "Argentina.png",
    "Estados Unidos": "EstadosUnidos.png",
    Qatar: "Qatar.png",
    España: "España.png",
    Francia: "France.png",
    "Reino Unido": "ReinoUnido.png",
    Italia: "Italia.png",
    "Países Bajos": "PaisesBajos.png",
    Alemania: "Alemania.png",
    "República Checa": "RepublicaCheca.png",
    Austria: "Austria.png",
    Hungría: "Hungria.png",
    Japón: "Japon.png",
    Indonesia: "Indonesia.png",
    Australia: "Australia.png",
    Malasia: "Malasia.png",
    Portugal: "Portugal.png",
  };

  async function fetchContacts() {
    const response = await fetch("/api/calendario/");
    const body = await response.json();
    setEventos(body);
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className={calendarioStyles.calendarioContainer}>
      {/* Navbar */}
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

      {/* Título */}
      <div className={calendarioStyles.tituloContainer}>
        <h1 className={calendarioStyles.titulo}>CALENDARIO 2024 MOTOGP</h1>
      </div>

      {/* Eventos */}
      <div className="container">
        <div className="row justify-content-center">
          {eventos.map((evento, index) => (
            <div key={evento.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className={calendarioStyles.eventoCard}>
                <div className={calendarioStyles.numero}>{index + 1}</div>
                <div className={calendarioStyles.info}>
                  <h5 className={calendarioStyles.nombre}>{evento.circuito}</h5>
                  <p className={calendarioStyles.fechas}>{evento.fecha_inicio} - {evento.fecha_fin}</p>
                  <p className={calendarioStyles.ubicacion}>
                    {evento.pais} <img src={`/images/banderas/${banderas[evento.pais]}`} alt={evento.pais} className={calendarioStyles.banderaPais} />
                  </p>
                </div>
                <img src={evento.imageUrl} alt={evento.pais} className={calendarioStyles.bandera} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendario;
