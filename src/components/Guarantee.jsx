import React from "react";
import { guaranteeItems } from "../data/siteData.js";

export default function Guarantee() {
  return (
    <section className="guarantee">
      <div className="guarantee-content">
        <p className="eyebrow">Garantía DoctorCell</p>
        <h2>Una garantía clara, antes de reparar.</h2>
        <p>
          El plazo depende del repuesto y del tipo de reparación. Antes de autorizar el trabajo te
          entregamos por escrito la duración, la cobertura y las exclusiones aplicables a tu caso.
        </p>
        <div className="guarantee-note">
          <strong>¿Cómo se reclama?</strong>
          <span>Presenta el equipo y el comprobante en una sucursal. Revisaremos que la falla corresponda al trabajo realizado.</span>
        </div>
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
