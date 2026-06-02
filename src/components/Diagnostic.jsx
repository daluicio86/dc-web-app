import React from "react";
import { diagnostics } from "../data/siteData.js";
import { whatsappUrl } from "../utils/whatsapp.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Diagnostic() {
  const handleProblem = (problem) => {
    const message = `Hola DoctorCell, quiero cotizar una reparación. Problema: ${problem}. Mi equipo es:`;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section diagnostic" id="diagnostico">
      <SectionHeading eyebrow="Diagnóstico rápido" title="¿Qué le pasa a tu equipo?">
        Selecciona una opción y abre WhatsApp con el mensaje listo para cotizar.
      </SectionHeading>
      <div className="diagnostic-grid">
        {diagnostics.map(({ icon: Icon, title, text }) => (
          <button className="diagnostic-card" type="button" key={title} onClick={() => handleProblem(title)}>
            <span><Icon size={22} /></span>
            <strong>{title}</strong>
            <small>{text}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
