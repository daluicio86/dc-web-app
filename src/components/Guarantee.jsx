import React from "react";
import { Check, MessageCircle, ShieldCheck } from "lucide-react";
import { whatsappUrl } from "../utils/whatsapp.js";

const visibleTerms = [
  "Reparación y repuesto que se utilizará",
  "Valor y tiempo estimado de entrega",
  "Duración de la garantía aplicable",
  "Cobertura y exclusiones explicadas"
];

export default function Guarantee() {
  return (
    <section className="guarantee" id="garantia">
      <div className="guarantee-content">
        <p className="eyebrow">Garantía DoctorCell</p>
        <h2>Tu garantía es visible antes de comprar.</h2>
        <p>
          Sin letra pequeña ni sorpresas. Antes de autorizar el trabajo conocerás por escrito
          qué cubre la reparación y durante cuánto tiempo.
        </p>
        <a className="guarantee-link" href={whatsappUrl("Hola DoctorCell, quiero conocer la garantía para mi reparación.")} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} /> Consultar la garantía de mi equipo
        </a>
      </div>
      <div className="guarantee-card">
        <div className="guarantee-seal"><ShieldCheck size={34} /></div>
        <div>
          <span>Antes de reparar recibirás:</span>
          {visibleTerms.map((term) => <p key={term}><Check size={17} /> {term}</p>)}
        </div>
      </div>
    </section>
  );
}
