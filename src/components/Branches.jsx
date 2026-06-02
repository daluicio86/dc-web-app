import React from "react";
import { MessageCircle, Navigation } from "lucide-react";
import { branches } from "../data/siteData.js";
import { mapsUrl, whatsappUrl } from "../utils/whatsapp.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Branches() {
  return (
    <section className="section branches" id="sucursales">
      <SectionHeading eyebrow="Estamos cerca" title="Conoce nuestras sucursales.">
        Elige la más cómoda y llega directo con Google Maps.
      </SectionHeading>
      <div className="branch-grid">
        {branches.map(({ name, address, icon: Icon }, index) => (
          <article className="branch-card" key={address}>
            <span className="branch-number">{index + 1}</span>
            <Icon size={24} />
            <h3>{name}</h3>
            <p>{address}</p>
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
