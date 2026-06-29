import React from "react";
import { Clock3, Landmark, MessageCircle, Navigation } from "lucide-react";
import { branches } from "../data/siteData.js";
import { mapsUrl, whatsappUrl } from "../utils/whatsapp.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Branches() {
  return (
    <section className="section branches" id="sucursales">
      <SectionHeading eyebrow="Estamos cerca" title="Conoce nuestras sucursales.">
        Elige la más cómoda y llega directo con Google Maps.
      </SectionHeading>
      <nav className="branch-shortcuts" aria-label="Accesos rápidos a sucursales">
        {branches.map(({ name }, index) => (
          <a key={name} href={`#sucursal-${index + 1}`}>{name.replace("Sucursal ", "")}</a>
        ))}
      </nav>
      <div className="branch-grid">
        {branches.map(({ name, address, reference, hours, icon: Icon }, index) => (
          <article className="branch-card" id={`sucursal-${index + 1}`} key={address}>
            <span className="branch-number">{index + 1}</span>
            <Icon size={24} />
            <h3>{name}</h3>
            <p>{address}</p>
            <p className="branch-meta"><Landmark size={15} /> {reference}</p>
            <p className="branch-meta"><Clock3 size={15} /> {hours}</p>
            <div className="branch-actions">
              <a href={mapsUrl(`DoctorCell ${address} Quito Ecuador`)} target="_blank" rel="noopener noreferrer">
                <Navigation size={15} />
                Cómo llegar
              </a>
              <a href={whatsappUrl(`Hola DoctorCell, quiero atención en ${name} (${address}).`)} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
