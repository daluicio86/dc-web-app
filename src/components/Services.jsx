import React from "react";
import { Clock3, MessageCircle, ShieldCheck } from "lucide-react";
import { services } from "../data/siteData.js";
import { whatsappUrl } from "../utils/whatsapp.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Services() {
  return (
    <section className="section services" id="servicios">
      <SectionHeading eyebrow="Servicios especializados" title="Reparamos todas las marcas.">
        iPhone, Samsung, Huawei, Xiaomi y otros modelos de celulares, tablets y smartwatch.
      </SectionHeading>
      <div className="service-grid">
        {services.map(({ icon: Icon, title, text, time, price, problem }) => (
          <article key={title}>
            <span className="icon"><Icon size={22} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
            <ul className="service-facts">
              <li><Clock3 size={16} /> {time}</li>
              <li><ShieldCheck size={16} /> Garantía por escrito según reparación</li>
            </ul>
            <div className="service-footer">
              <strong>{price}</strong>
              <a href={whatsappUrl(`Hola DoctorCell, quiero cotizar el servicio de ${title}. Problema: ${problem}. Mi equipo es:`)} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} /> Cotizar
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
