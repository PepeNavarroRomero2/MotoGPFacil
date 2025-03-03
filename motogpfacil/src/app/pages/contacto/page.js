"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
// Se elimina la importación estática de Bootstrap JS
import styles from "../../navbar.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.correo.trim())
      newErrors.correo = "El correo es obligatorio.";
    else if (!/\S+@\S+\.\S+/.test(formData.correo))
      newErrors.correo = "Correo inválido.";
    if (!formData.mensaje.trim())
      newErrors.mensaje = "El mensaje no puede estar vacío.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSending(true);
    const serviceID = "service_tvnz84o";
    const templateID = "template_59r5l2b";
    const userID = "ChmeFoDigJPW9kB9y";

    const templateParams = {
      nombre: formData.nombre,
      correo: formData.correo,
      mensaje: formData.mensaje,
    };

    try {
      const result = await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log("Mensaje enviado correctamente", result);
      alert("Mensaje enviado correctamente.");
      setFormData({ nombre: "", correo: "", mensaje: "" });
      setErrors({});
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      alert("Error al enviar el mensaje.");
    } finally {
      setSending(false);
    }
  };

  // Carga dinámica del JS de Bootstrap (solo en el cliente)
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
                    <Link href="/pages/calendario/">
                      <span className="nav-link fs-5">Calendario</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/pages/contacto">
                      <span className="nav-link fs-5">Contacto</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <Link href="../">
                  <span className="navbar-brand d-flex flex-column align-items-center">
                    <img
                      src="/images/logoMotogpFacil.png"
                      alt="MotoGP Facil"
                      style={{ width: "50px", height: "auto" }}
                    />
                    <span className="fs-4">MotoGP Facil</span>
                  </span>
                </Link>
              </div>
              <div className="col-4 d-flex justify-content-end">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/pages/equipos">
                      <span className="nav-link fs-5">Equipos</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/pages/pilotos">
                      <span className="nav-link fs-5">Pilotos</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/pages/reglamento">
                      <span className="nav-link fs-5">Reglamento</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container py-4">
        <h2 className="mb-3">Contacto</h2>
        <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light text-dark">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
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
            {errors.correo && <div className="invalid-feedback">{errors.correo}</div>}
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
            {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={sending}>
            {sending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
