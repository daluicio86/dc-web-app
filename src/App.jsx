import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import PromoStrip from "./components/PromoStrip.jsx";
import QuoteFinder from "./components/QuoteFinder.jsx";
import BrandsStrip from "./components/BrandsStrip.jsx";
import Intro from "./components/Intro.jsx";
import Diagnostic from "./components/Diagnostic.jsx";
import Services from "./components/Services.jsx";
import Guarantee from "./components/Guarantee.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import Accessories from "./components/Accessories.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Branches from "./components/Branches.jsx";
import RepairTracking from "./components/RepairTracking.jsx";
import FinalCta from "./components/FinalCta.jsx";
import Footer from "./components/Footer.jsx";
import Chatbot from "./components/Chatbot.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main id="inicio">
        <Hero />
        <PromoStrip />
        <QuoteFinder />
        <BrandsStrip />
        <Intro />
        <Diagnostic />
        <Services />
        <Guarantee />
        <BeforeAfter />
        <Accessories />
        <Testimonials />
        <Branches />
        <RepairTracking />
        <FinalCta />
      </main>
      <Chatbot />
      <Footer />
    </>
  );
}
