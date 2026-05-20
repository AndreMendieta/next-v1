import Image from "next/image";
import Props from "./props";
import "./style.css";

const cards = [
  {
    titulo: "PRIVACIDAD DE DATOS",
    descripcion: "Protección de la información personal de los usuarios.",
    imagen: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
    items: [
      "Evita robos de identidad.",
      "Protege datos personales.",
      "Reduce filtraciones de información.",
    ],
    prop: "Seguridad y protección digital",
  },
  {
    titulo: "DISCRIMINACIÓN DIGITAL",
    descripcion: "Algunas tecnologías pueden generar desigualdad y exclusión.",
    imagen: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
    items: [
      "Sesgos en inteligencia artificial.",
      "Problemas de reconocimiento facial.",
      "Desigualdad tecnológica.",
    ],
    prop: "Inclusión y respeto digital",
  },
  {
    titulo: "INTELIGENCIA ARTIFICIAL",
    descripcion: "Tecnología capaz de aprender y tomar decisiones.",
    imagen: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    items: [
      "Automatización de tareas.",
      "Análisis de información.",
      "Riesgo de decisiones injustas.",
    ],
    prop: "IA ética y responsable",
  },
  {
    titulo: "PROPIEDAD INTELECTUAL",
    descripcion: "Protección legal de contenido y creaciones digitales.",
    imagen: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    items: [
      "Derechos de autor.",
      "Contenido generado por IA.",
      "Protección de creadores.",
    ],
    prop: "Creatividad y derechos digitales",
  },
  {
    titulo: "INTEGRIDAD DE LA INFORMACIÓN",
    descripcion: "Garantizar información verdadera y confiable.",
    imagen: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
    items: [
      "Evitar noticias falsas.",
      "Verificar fuentes.",
      "Combatir desinformación.",
    ],
    prop: "Información segura y confiable",
  },
  {
    titulo: "SEGURIDAD CIBERNÉTICA",
    descripcion: "Protección de sistemas y redes digitales.",
    imagen: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    items: [
      "Contraseñas seguras.",
      "Autenticación en dos pasos.",
      "Actualizaciones constantes.",
    ],
    prop: "Protección contra ataques digitales",
  },
  {
    titulo: "SOSTENIBILIDAD AMBIENTAL",
    descripcion: "Reducir el impacto ambiental de la tecnología.",
    imagen: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
    items: [
      "Reciclaje electrónico.",
      "Uso eficiente de energía.",
      "Tecnología sostenible.",
    ],
    prop: "Tecnología y medio ambiente",
  },
  {
    titulo: "PRINCIPIOS ÉTICOS DIGITALES",
    descripcion: null,
    imagen: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    items: [
      "Transparencia",
      "Privacidad",
      "Inclusión",
      "Responsabilidad",
      "Seguridad",
      "Equidad",
    ],
    prop: "Valores en el entorno digital",
  },
  {
    titulo: "RECOMENDACIONES",
    descripcion: null,
    imagen: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=600&q=80",
    items: [
      "Proteger datos personales.",
      "Verificar información.",
      "Usar tecnología responsablemente.",
      "Respetar a otros usuarios.",
    ],
    prop: "Buenas prácticas digitales",
  },
];

export default function Uno() {
  return (
    <div className="banner-container">

      <div className="banner-header">
        <h1>ÉTICA DIGITAL</h1>
        <p>Tecnología con responsabilidad para un futuro mejor.</p>
        <Props nombre="Uso responsable de la tecnología" />
      </div>

      {cards.map((card) => (
        <div key={card.titulo} className="card">
          <div className="card-image">
            <Image
              src={card.imagen}
              alt={card.titulo}
              width={600}
              height={200}
            />
          </div>
          <h2>{card.titulo}</h2>
          {card.descripcion && <p>{card.descripcion}</p>}
          <ul>
            {card.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Props nombre={card.prop} />
        </div>
      ))}

      <div className="banner-footer">
        <h2>CONCLUSIÓN</h2>
        <p>
          La ética digital busca que la tecnología sea justa,
          segura, inclusiva y beneficiosa para toda la sociedad.
        </p>
        <Props nombre="Futuro digital responsable" />
      </div>

    </div>
  );
}