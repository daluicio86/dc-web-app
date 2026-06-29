import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Sparkles,
  Wrench
} from "lucide-react";
import { quickStats, trustItems } from "../data/siteData.js";
import ButtonLink from "./ButtonLink.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-livebar">
          <span><Sparkles size={15} /> Atención inmediata</span>
          <span><Clock3 size={15} /> Diagnóstico ágil</span>
        </div>
        <p className="eyebrow">Más de 15 años reparando tecnología en Quito</p>
        <h1>Reparamos tu celular hoy en Quito.</h1>
        <p className="hero-copy">
          Reparaciones profesionales para celulares, tablets y smartwatch con repuestos de calidad,
          garantía real y atención inmediata en cualquiera de nuestras sucursales.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#cotizador" icon={MessageCircle}>Cotizar reparación</ButtonLink>
          <ButtonLink href="#sucursales" variant="ghost" icon={MapPin}>Ver sucursal cercana</ButtonLink>
        </div>
        <div className="trust-strip" aria-label="Beneficios principales">
          {trustItems.map(({ label, icon: Icon }) => (
            <span key={label}>
              <Icon size={16} />
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-media" aria-hidden="true">
        <div className="workbench-panel">
          <span>Servicio técnico certificado</span>
          <strong>Revisión + repuesto + garantía</strong>
        </div>
        <div className="phone phone-front">
          <div className="phone-speaker" />
          <div className="screen">
            <span>Diagnóstico</span>
            <strong>Listo en minutos</strong>
            <div className="screen-steps">
              <b>1</b><em>Prueba</em>
              <b>2</b><em>Repuesto</em>
              <b>3</b><em>Entrega</em>
            </div>
            <div className="pulse-row"><i /><i /><i /></div>
          </div>
        </div>
        <div className="phone phone-back">
          <div className="camera" />
          <div className="shield"><CheckCircle2 size={16} /> Garantía</div>
        </div>
        <div className="repair-chip chip-top"><Wrench size={17} /> Cambio de pantalla</div>
        <div className="repair-chip chip-mid"><Sparkles size={17} /> Equipo probado</div>
        <div className="repair-chip chip-bottom"><MessageCircle size={17} /> Cotiza por WhatsApp</div>
        <div className="hero-stats">
          {quickStats.map((item) => (
            <span key={item.label}>
              <strong>{item.value}</strong>
              {item.label}
            </span>
          ))}
          <ArrowRight className="stats-arrow" size={20} />
        </div>
      </div>
    </section>
  );
}
