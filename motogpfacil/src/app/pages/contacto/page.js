"use client";
import React, { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../../navbar.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function validateForm() {
    let newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.correo.trim()) newErrors.correo = "El correo es obligatorio.";
    else if (!/\S+@\S+\.\S+/.test(formData.correo))
      newErrors.correo = "Correo inválido.";
    if (!formData.mensaje.trim())
      newErrors.mensaje = "El mensaje no puede estar vacío.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;
    alert("Mensaje enviado correctamente.");
    setFormData({ nombre: "", correo: "", mensaje: "" });
    setErrors({});
  }

  return (
    <div className="bg-dark min-vh-100 text-light">
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
      {/* Formulario de Contacto */}
      <div className="container py-4">
        <h2 className="mb-3">Contacto</h2>
        <form
          onSubmit={handleSubmit}
          className="shadow p-4 rounded bg-light text-dark"
        >
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && (
              <div className="invalid-feedback">{errors.nombre}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className={`form-control ${errors.correo ? "is-invalid" : ""}`}
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
            {errors.correo && (
              <div className="invalid-feedback">{errors.correo}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea
              className={`form-control ${errors.mensaje ? "is-invalid" : ""}`}
              name="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
            ></textarea>
            {errors.mensaje && (
              <div className="invalid-feedback">{errors.mensaje}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
