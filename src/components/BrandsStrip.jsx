import React from "react";
import { brands } from "../data/siteData.js";

export default function BrandsStrip() {
  const visibleBrands = brands.filter((brand) => brand !== "Otra");

  return (
    <section className="brands-strip" aria-labelledby="brands-title">
      <div>
        <p className="eyebrow">Todas las marcas principales</p>
        <h2 id="brands-title">Reparamos tu marca.</h2>
      </div>
      <div className="brand-list">
        {visibleBrands.map((brand) => <span key={brand}>{brand}</span>)}
      </div>
    </section>
  );
}
