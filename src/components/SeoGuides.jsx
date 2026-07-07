import React from "react";
import { ArrowRight, BatteryCharging, Cable, Droplets, Smartphone, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const guides = [
  { icon: Smartphone, title: "Cambio de pantalla iPhone", text: "Señales de daño, opciones de repuesto y qué revisar antes de autorizar.", href: "/guias/cambio-pantalla-iphone-quito/" },
  { icon: Smartphone, title: "Cambio de pantalla Samsung", text: "Qué cambia entre vidrio, táctil y módulo de pantalla.", href: "/guias/cambio-pantalla-samsung-quito/" },
  { icon: Droplets, title: "¿Tu celular se mojó?", text: "Qué hacer ahora y qué errores pueden empeorar el daño.", href: "/guias/celular-mojado-que-hacer/" },
  { icon: BatteryCharging, title: "Cambio de batería", text: "Cómo reconocer una batería degradada o potencialmente peligrosa.", href: "/guias/cambio-bateria-celular-quito/" },
  { icon: Cable, title: "El celular no carga", text: "Descarta cable, suciedad, batería y fallas del puerto.", href: "/guias/celular-no-carga-quito/" },
  { icon: Wrench, title: "Reparación Xiaomi", text: "Diagnóstico para pantallas, carga, batería y software Xiaomi.", href: "/guias/reparacion-xiaomi-quito/" }
];

export default function SeoGuides() {
  return (
    <section className="section seo-guides" aria-labelledby="guides-title">
      <SectionHeading eyebrow="Guías de reparación" title="Resuelve dudas antes de traer tu equipo." id="guides-title">
        Información práctica para entender la falla, cuidar tus datos y tomar una mejor decisión.
      </SectionHeading>
      <div className="seo-guide-grid">
        {guides.map(({ icon: Icon, title, text, href }) => (
          <article key={href}>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{text}</p>
            <a href={href}>Leer guía <ArrowRight size={16} /></a>
          </article>
        ))}
      </div>
      <a className="all-guides-link" href="/guias/">Ver todas las guías <ArrowRight size={17} /></a>
    </section>
  );
}

