import React from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const questions = [
  ["¿Cuánto cuesta reparar la pantalla de un celular en Quito?", "Depende de la marca, el modelo y el tipo de repuesto. En DoctorCell tenemos cambios de pantalla desde $35; confirma el valor exacto con el cotizador."],
  ["¿Cuánto tarda un cambio de pantalla de iPhone?", "Muchos cambios se realizan el mismo día. El tiempo definitivo depende del modelo, la disponibilidad del repuesto y las pruebas finales."],
  ["¿La reparación tiene garantía?", "Sí. La cobertura y vigencia se indican por escrito según el servicio y repuesto instalados."],
  ["¿Debo agendar antes de visitar una sucursal?", "No es obligatorio, pero agendar te ayuda a reducir la espera y permite confirmar disponibilidad en la sucursal elegida."],
  ["¿Reparan celulares mojados o que no encienden?", "Sí. Primero realizamos un diagnóstico técnico. No intentes cargar el equipo mojado; apágalo y tráelo cuanto antes."],
  ["¿Trabajan con iPhone, Samsung y Xiaomi?", "Sí. Atendemos Apple, Samsung, Xiaomi, Huawei, Motorola, Honor, Oppo y otras marcas, sujeto a disponibilidad de repuestos."]
];

export default function Faq() {
  return (
    <section className="section faq" id="preguntas">
      <SectionHeading eyebrow="Respuestas claras" title="Preguntas frecuentes sobre reparación de celulares.">
        Lo esencial antes de traer tu equipo a una sucursal DoctorCell en Quito.
      </SectionHeading>
      <div className="faq-list">{questions.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<ChevronDown size={20} /></summary><p>{answer}</p></details>)}</div>
    </section>
  );
}
