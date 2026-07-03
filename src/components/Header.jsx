import { CheckCircle2, Clock3, MapPin, Menu, MessageCircle, X } from "lucide-react";
import React, { useState } from "react";
import { navItems } from "../data/siteData.js";
import { whatsappUrl } from "../utils/whatsapp.js";
import Brand from "./Brand.jsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="header-topline">
        {/*<span><CheckCircle2 size={14} /> Diagnóstico inicial sin compromiso</span>*/}
        <div>
          <span><MapPin size={14} /> 4 sucursales en Quito</span>
          <span><Clock3 size={14} /> Respuesta rápida por WhatsApp</span>
        </div>
      </div>
      <div className="header-main">
        <Brand />
        <button
          className="menu-button"
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="site-nav"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`site-nav ${isOpen ? "is-open" : ""}`} id="site-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-cta"
            href={whatsappUrl("Hola DoctorCell, quiero cotizar una reparación.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            <MessageCircle size={17} />
            <span><small>Cotización rápida</small>WhatsApp</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
