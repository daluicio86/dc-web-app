import React, { useRef, useState } from "react";
import { Bot, CheckCircle2, MessageCircle, RotateCcw, Send, Sparkles, X } from "lucide-react";
import { branches, diagnostics } from "../data/siteData.js";
import { whatsappUrl } from "../utils/whatsapp.js";
import "../styles/chatbot.css";

const choices = {
  problem: diagnostics.map(({ title }) => title),
  brand: ["Apple", "Samsung", "Xiaomi", "Huawei", "Motorola", "Otra marca"],
  urgency: ["Lo necesito hoy", "Esta semana", "Solo estoy consultando"]
};

const recommendations = {
  "Pantalla rota": ["Revisión y cambio de pantalla", "Evita presionar el vidrio si hay fragmentos sueltos."],
  "No carga": ["Diagnóstico de batería y sistema de carga", "No fuerces el cable ni introduzcas objetos en el puerto."],
  "Cámara o audio": ["Diagnóstico de cámara, audio o sensores", "Indícanos en qué aplicaciones aparece la falla."],
  "Se mojó": ["Limpieza técnica y diagnóstico por humedad", "Apágalo, no lo cargues y no uses arroz ni calor."],
  "Batería": ["Revisión y posible cambio de batería", "Si está hinchado o muy caliente, apágalo y no lo conectes."],
  "Software": ["Diagnóstico y servicio de software", "Si aún responde, respalda tus datos antes de restaurarlo."],
  "Tablet / iWatch": ["Diagnóstico para tablet o smartwatch", "Trae también el cargador que utilizas normalmente."],
  "Otro problema": ["Diagnóstico técnico completo", "Cuéntanos cuándo comenzó la falla y qué ocurrió antes."]
};

const welcome = [
  { id: 1, from: "bot", text: "¡Hola! Soy el asistente de DoctorCell. Te ayudaré a encontrar el servicio adecuado." },
  { id: 2, from: "bot", text: "¿Qué problema presenta tu equipo?" }
];

const normalize = (value) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function detectProblem(message) {
  const text = normalize(message);
  if (/agua|moj|humedad|liquido/.test(text)) return "Se mojó";
  if (/pantalla|vidrio|touch|tactil|display|linea|mancha|quebr/.test(text)) return "Pantalla rota";
  if (/bateria|descarga|calienta|hinch|apaga/.test(text)) return "Batería";
  if (/carga|cargador|puerto|conector|no prende|no enciende/.test(text)) return "No carga";
  if (/camara|audio|parlante|microfono|sensor/.test(text)) return "Cámara o audio";
  if (/software|lento|bloque|reinicia|actualiza|virus/.test(text)) return "Software";
  if (/tablet|ipad|watch|reloj/.test(text)) return "Tablet / iWatch";
  return "Otro problema";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(welcome);
  const [step, setStep] = useState("problem");
  const [answers, setAnswers] = useState({ problem: "", brand: "", urgency: "" });
  const [input, setInput] = useState("");
  const nextId = useRef(3);

  const add = (...items) => setMessages((current) => [
    ...current,
    ...items.map((item) => ({ id: nextId.current++, ...item }))
  ]);

  const finish = (urgency, current = answers) => {
    const completed = { ...current, urgency };
    const [service, advice] = recommendations[completed.problem] || recommendations["Otro problema"];
    setAnswers(completed);
    setStep("complete");
    add({ from: "bot", text: `Te recomendamos: ${service}. ${advice}`, result: true });
  };

  const select = (value) => {
    add({ from: "user", text: value });
    if (step === "problem") {
      setAnswers((current) => ({ ...current, problem: value }));
      setStep("brand");
      add({ from: "bot", text: "¿De qué marca es el equipo?" });
    } else if (step === "brand") {
      setAnswers((current) => ({ ...current, brand: value }));
      setStep("urgency");
      add({ from: "bot", text: "¿Qué tan urgente es la reparación?" });
    } else if (step === "urgency") finish(value);
  };

  const faqAnswer = (message) => {
    const text = normalize(message);
    if (/precio|cuanto|costo|valor/.test(text)) return "El valor depende del modelo y repuesto. Confirmamos el precio después del diagnóstico y antes de reparar.";
    if (/garantia/.test(text)) return "Sí, las reparaciones incluyen garantía por escrito según el servicio y el repuesto.";
    if (/donde|direccion|ubicacion|sucursal/.test(text)) return `Tenemos ${branches.length} puntos de atención en Quito. Sus direcciones están en la sección Sucursales.`;
    if (/tiempo|demora|tarda|cuando/.test(text)) return "El tiempo depende de la falla y del repuesto. Después del diagnóstico te damos un plazo claro.";
    return "Puedo orientarte sobre pantallas, carga, batería, humedad, cámara, audio y software. Cuéntame qué ocurre.";
  };

  const submit = (event) => {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    add({ from: "user", text });

    if (step === "problem") {
      const problem = detectProblem(text);
      setAnswers((current) => ({ ...current, problem }));
      setStep("brand");
      add({ from: "bot", text: `Parece un caso de ${problem.toLowerCase()}. ¿De qué marca es el equipo?` });
    } else if (step === "brand") {
      setAnswers((current) => ({ ...current, brand: text }));
      setStep("urgency");
      add({ from: "bot", text: "Perfecto. ¿Qué tan urgente es para ti?" });
    } else if (step === "urgency") {
      finish(text);
    } else {
      add({ from: "bot", text: faqAnswer(text) });
    }
  };

  const restart = () => {
    setMessages(welcome);
    setStep("problem");
    setAnswers({ problem: "", brand: "", urgency: "" });
    setInput("");
    nextId.current = 3;
  };

  const whatsappMessage = `Hola DoctorCell, completé el diagnóstico web. Equipo: ${answers.brand}. Problema: ${answers.problem}. Urgencia: ${answers.urgency}. Quisiera confirmar disponibilidad y precio.`;
  const progress = { problem: "25%", brand: "50%", urgency: "75%", complete: "100%" }[step];

  return (
    <>
      <button className="chatbot-launcher" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="doctorcell-chatbot">
        <Sparkles size={22} aria-hidden="true" /><span>Diagnosticar mi equipo</span>
      </button>

      {open ? (
        <aside className="chatbot-panel" id="doctorcell-chatbot" aria-label="Asistente de diagnóstico">
          <header className="chatbot-header">
            <span className="chatbot-avatar"><Bot size={22} /></span>
            <div><strong>Asistente DoctorCell</strong><small><i /> En línea · diagnóstico guiado</small></div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar asistente"><X size={21} /></button>
          </header>
          <div className="chatbot-progress" aria-hidden="true"><span style={{ width: progress }} /></div>

          <div className="chatbot-messages" role="log" aria-live="polite">
            {messages.map((message) => (
              <div className={`chatbot-message is-${message.from}`} key={message.id}>
                <div className={message.result ? "is-result" : ""}>
                  {message.result ? <CheckCircle2 size={18} aria-hidden="true" /> : null}<span>{message.text}</span>
                </div>
              </div>
            ))}
          </div>

          {choices[step] ? (
            <div className="chatbot-options" aria-label="Respuestas rápidas">
              {choices[step].map((choice) => <button type="button" key={choice} onClick={() => select(choice)}>{choice}</button>)}
            </div>
          ) : null}

          {step === "complete" ? (
            <div className="chatbot-result-actions">
              <a href={whatsappUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> Continuar por WhatsApp</a>
              <button type="button" onClick={restart}><RotateCcw size={15} /> Nuevo diagnóstico</button>
            </div>
          ) : null}

          <form className="chatbot-input" onSubmit={submit}>
            <label className="sr-only" htmlFor="chatbot-message">Escribe tu mensaje</label>
            <input id="chatbot-message" value={input} onChange={(event) => setInput(event.target.value)} placeholder={step === "complete" ? "Haz otra pregunta…" : "Escribe tu respuesta…"} autoComplete="off" maxLength={280} />
            <button type="submit" aria-label="Enviar mensaje"><Send size={18} /></button>
          </form>
        </aside>
      ) : null}
    </>
  );
}
