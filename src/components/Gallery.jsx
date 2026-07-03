import React from "react";
import { Camera, MapPin, ShieldCheck, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const items = [
  { icon: MapPin, title: "Locales en Quito", text: "Conoce el espacio donde recibimos tu equipo.", tone: "gallery-blue" },
  { icon: Wrench, title: "Reparaciones reales", text: "Procesos técnicos, diagnóstico y trabajo de precisión.", tone: "gallery-green" },
  { icon: ShieldCheck, title: "Equipo técnico", text: "Personas capacitadas detrás de cada reparación.", tone: "gallery-amber" }
];

export default function Gallery() {
  return (
    <section className="section gallery" id="galeria">
      <SectionHeading eyebrow="Así trabajamos" title="Nuestro trabajo, sin filtros.">
        Locales, reparaciones y el equipo técnico que cuida tu celular.
      </SectionHeading>
      <div className="gallery-grid">
        {items.map(({ icon: Icon, title, text, tone }) => (
          <article className={tone} key={title}>
            <div className="gallery-photo-placeholder"><Icon size={44} /><span><Camera size={15} /> Foto real próximamente</span></div>
            <div><h3>{title}</h3><p>{text}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
