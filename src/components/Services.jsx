import React from "react";
import { services } from "../data/siteData.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Services() {
  return (
    <section className="section services" id="servicios">
      <SectionHeading eyebrow="Servicios especializados" title="Reparamos todas las marcas.">
        iPhone, Samsung, Huawei, Xiaomi y otros modelos de celulares, tablets y smartwatch.
      </SectionHeading>
      <div className="service-grid">
        {services.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <span className="icon"><Icon size={22} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
