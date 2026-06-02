import React from "react";
import { guaranteeItems } from "../data/siteData.js";

export default function Guarantee() {
  return (
    <section className="guarantee">
      <div className="guarantee-content">
        <p className="eyebrow">Garantía DoctorCell</p>
        <h2>Reparar con expertos no cuesta más.</h2>
        <p>
          Cada reparación pasa por diagnóstico, instalación cuidadosa, pruebas de funcionamiento
          y respaldo de garantía para que salgas tranquilo.
        </p>
      </div>
      <div className="guarantee-list">
        {guaranteeItems.map(({ label, icon: Icon }) => (
          <span key={label}>
            <Icon size={22} />
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
