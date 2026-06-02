import React from "react";
import { accessories } from "../data/siteData.js";
import { whatsappUrl } from "../utils/whatsapp.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Accessories() {
  return (
    <section className="section accessories" id="accesorios">
      <SectionHeading eyebrow="Accesorios" title="Protege y mejora tus dispositivos.">
        Catálogo rápido para consultar disponibilidad por WhatsApp.
      </SectionHeading>
      <div className="accessory-grid">
        {accessories.map(({ icon: Icon, title, text, artClass }) => (
          <article className="accessory-card" key={title}>
            <div className={`accessory-art ${artClass}`}>
              <Icon size={42} />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={whatsappUrl(`Hola DoctorCell, quiero consultar disponibilidad de ${title}.`)} target="_blank" rel="noopener noreferrer">
                Consultar disponibilidad
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
