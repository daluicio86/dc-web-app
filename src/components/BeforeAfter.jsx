import React from "react";
import SectionHeading from "./SectionHeading.jsx";

const comparisons = [
  { label: "Antes", title: "Pantalla rota", className: "cracked-screen" },
  { label: "Después", title: "Equipo listo", className: "clean-screen" },
  { label: "Prueba", title: "Funcionamiento OK", className: "test-screen" }
];

export default function BeforeAfter() {
  return (
    <section className="section before-after">
      <SectionHeading eyebrow="Antes y después" title="Reparaciones que se notan.">
        Galería preparada para mostrar trabajos reales del taller y aumentar confianza desde el primer vistazo.
      </SectionHeading>
      <div className="comparison-grid">
        {comparisons.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <div className={item.className} />
            <strong>{item.title}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
