"use client";

import "./globals.css";

export default function Home() {

  return (

    <main className="home-container">

      {/* HERO */}

      <section className="hero">

        <div className="hero-overlay">

          <h1>ÉTICA DIGITAL</h1>

          <p>
            Tecnología con responsabilidad para un futuro
            más seguro, justo e inclusivo.
          </p>

        </div>

      </section>


      {/* INFORMACIÓN */}

      <section className="info-section">

        <div className="info-card">

          <h2>¿Qué es la ética digital?</h2>

          <p>
          La ética digital es el conjunto de principios y valores que buscan garantizar
un uso responsable, seguro y justo de la tecnología en la vida diaria. Su objetivo
principal es proteger los derechos de las personas en los entornos digitales,
promoviendo la privacidad de los datos, la seguridad cibernética, la inclusión
digital y el acceso equitativo a la información.

Actualmente, las tecnologías como la inteligencia artificial, las redes sociales
y las plataformas digitales influyen en decisiones importantes relacionadas con
la educación, el trabajo, la comunicación y el entretenimiento. Por esta razón,
es fundamental que tanto usuarios como desarrolladores actúen de manera ética,
evitando prácticas como la desinformación, el robo de datos, la discriminación
digital y el uso irresponsable de la información personal.

La ética digital también busca crear tecnologías más transparentes, inclusivas
y sostenibles, capaces de beneficiar a la sociedad sin afectar la dignidad humana
ni el medio ambiente. Además, promueve valores como el respeto, la responsabilidad,
la honestidad y la seguridad en internet, ayudando a construir un entorno digital
más confiable y humano para todas las personas.
          </p>

        </div>

      </section>


{/* VIDEO YOUTUBE */}

<section className="video-section">

  <h2>Video Explicativo</h2>

  <a
    href="https://www.youtube.com/watch?v=77LUMZg5rD4"
    target="_blank"
    className="video-banner"
  >

    <img
      src="/banner-etica.png"
      alt="Video Ética Digital"
      className="video-image"
    />

    <div className="video-overlay">

      <h3>Ver Video en YouTube</h3>

      <p>
        Aprende más sobre ética digital, privacidad,
        seguridad e inteligencia artificial.
      </p>

      <button className="video-btn">
        ▶ Reproducir Video
      </button>

    </div>

  </a>

</section>

      {/* PDF */}

      <section className="pdf-section">

        <h2>Documento PDF</h2>

        <p>
          Consulta el reporte completo sobre ética digital.
        </p>

<a
  href="/pdf/etica-digital.pdf"
  target="_blank"
  className="pdf-btn"
>
  Ver PDF
</a>
      </section>


      {/* CRÉDITOS */}

      <section className="creditos-section">

        <h2>Creadores del Proyecto</h2>

        <div className="creditos-grid">

          <div className="credito-card">
            <h3>Crhistian Mendieta</h3>
            <p>Desarrollador</p>
          </div>

          <div className="credito-card">
            <h3>Juan Sanchez</h3>
            <p>Investigación y Diseño</p>
          </div>

          <div className="credito-card">
            <h3>Julian Garcias</h3>
            <p>Documentación y Desarrollo</p>
          </div>

        </div>

      </section>

    </main>
  );
}