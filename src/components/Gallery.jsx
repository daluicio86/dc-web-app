import React from "react";
import { Camera } from "lucide-react";
import { galleryItems } from "../data/siteData.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Gallery() {
  // Una galería vacía resta más confianza que omitirla.
  if (!galleryItems.length) return null;

  return (
    <section className="section gallery" id="galeria">
      <SectionHeading eyebrow="Así trabajamos" title="Nuestro trabajo, sin filtros.">
        Locales, reparaciones y el equipo técnico que cuida tu celular.
      </SectionHeading>
      <div className="gallery-grid">
        {galleryItems.map(({ src, alt, title, text, category }) => (
          <article key={src}>
            <img src={src} alt={alt} loading="lazy" width="720" height="540" />
            <div>
              <span className="gallery-category"><Camera size={15} /> {category}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
