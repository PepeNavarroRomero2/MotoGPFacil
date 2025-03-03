"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
// Se elimina la importación estática de Bootstrap JS
import styles from "./navbar.css";

export default function Home() {
  // Carga dinámica de Bootstrap JS solo en el cliente
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="bg-dark min-vh-100 text-light">
      <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
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
                <Link href="" className="navbar-brand d-flex flex-column align-items-center">
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

      <div className="container text-center my-5">
        <h1>Bienvenido a la Guía de MotoGP</h1>
      </div>

      {/* Carrusel con cinco imágenes */}
      <div className="container my-4">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <div key={num} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  src={`/images/carousel/foto${num}.jpg`}
                  className="d-block w-100 img-fluid rounded"
                  style={{ height: "500px", objectFit: "cover" }}
                  alt={`Carrusel ${num}`}
                />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
