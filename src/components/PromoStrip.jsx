import React from "react";
import { ArrowRight, Gift, Timer } from "lucide-react";
import { whatsappUrl } from "../utils/whatsapp.js";

export default function PromoStrip() {
  return (
    <section className="promo-strip" aria-label="Promoción DoctorCell">
      <div className="promo-icon"><Gift size={26} /></div>
      <div>
        <span><Timer size={14} /> Promoción por tiempo limitado</span>
        <strong>Pregunta por el beneficio disponible para tu reparación</strong>
        <small>Aplican condiciones según equipo, repuesto y sucursal.</small>
      </div>
      <a
        href={whatsappUrl("Hola DoctorCell, quiero conocer la promoción disponible para mi reparación.")}
        target="_blank"
        rel="noopener noreferrer"
      >
        Consultar promoción <ArrowRight size={17} />
      </a>
    </section>
  );
}
