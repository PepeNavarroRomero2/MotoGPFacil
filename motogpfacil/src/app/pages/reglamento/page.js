"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Link from "next/link"; // Asegúrate de importar Link de Next.js
import "../../Reglamento.css"; // Mantén el archivo CSS del navbar como está
import "../../navbar.css"; // Mantén el archivo CSS del navbar como está

function MotoGPQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Obtiene las preguntas del reglamento desde la API
  async function fetchReglamento() {
    try {
      const response = await fetch("/api/reglamento/");
      if (!response.ok) throw new Error("Error al obtener el reglamento");
      const data = await response.json();
      generateQuiz(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // Genera el cuestionario con las preguntas y respuestas formateadas
  function generateQuiz(data) {
    const formattedQuestions = data.map((regla) => {
      const incorrectAnswers = data
        .filter((r) => r.id !== regla.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((r) => r.descripcion);

      const options = [...incorrectAnswers, regla.descripcion].sort(() => 0.5 - Math.random());

      return {
        question: regla.nombre,
        correctAnswer: regla.descripcion,
        options,
      };
    });
    setQuestions(formattedQuestions);
  }

  useEffect(() => {
    fetchReglamento(); // Llama a la función para obtener las preguntas al cargar el componente
  }, []);

  // Maneja la respuesta seleccionada por el usuario
  function handleAnswer(option) {
    if (option === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
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
                  href="/"
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

      {/* Contenido del cuestionario */}
      <div className="container mt-5 text-light">
        {!showResult ? (
          questions.length > 0 && (
            <div className="quiz-container">
              <h2>{questions[currentQuestion].question}</h2>
              <div className="options mt-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="btn btn-primary me-2 mb-2"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <p>
                Pregunta {currentQuestion + 1} de {questions.length}
              </p>
            </div>
          )
        ) : (
          <div className="result">
            <h2>Juego terminado</h2>
            <p>
              Puntuación: {score} / {questions.length}
            </p>
            <button
              className="btn btn-success"
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowResult(false);
              }}
            >
              Reiniciar Juego
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MotoGPQuiz;
