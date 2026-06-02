import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "../data/siteData.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <SectionHeading eyebrow="Clientes felices" title="Confianza que se gana en mostrador." />
      <div className="testimonial-track">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name}>
            <div className="stars" aria-label="Cinco estrellas">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            <p>{testimonial.text}</p>
            <strong>{testimonial.name}</strong>
            <small>{testimonial.branch}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
