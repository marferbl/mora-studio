"use client";

import { useState } from "react";

const questions = [
  {
    question: "¿Necesito una web o una app?",
    answer:
      "Depende de lo que quieras conseguir. Para que te encuentren y contacten contigo suele bastar una web; una app tiene sentido cuando tus clientes vuelven a menudo o necesitas funciones propias. Lo vemos contigo antes de proponerte nada.",
  },
  {
    question: "¿Podré recibir reservas?",
    answer:
      "Sí. Conectamos tu web con la herramienta de reservas que ya utilices. Si necesitas una agenda propia, la presupuestamos a medida.",
  },
  {
    question: "¿Tengo que contratar mantenimiento?",
    answer:
      "No es obligatorio. El dominio, el alojamiento y el mantenimiento van aparte; si lo necesitas, seguimos a tu lado con mantenimiento y mejoras.",
  },
  {
    question: "¿Cuánto tardará mi web?",
    answer:
      "Depende del alcance. Antes de empezar acordamos contigo el calendario junto con el presupuesto, para que sepas qué esperar en cada paso.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="shell grid gap-10 py-24 lg:grid-cols-[575fr_661fr] lg:gap-[60px] lg:py-[205px]">
      <h2 className="display-heading">
        Todo un poco
        <br />
        más <strong>fácil.</strong>
      </h2>
      <div>
        {questions.map((item, index) => {
          const expanded = open === index;
          return (
            <div key={item.question} className="border-b border-line">
              <h3>
                <button
                  type="button"
                  id={`faq-pregunta-${index}`}
                  aria-expanded={expanded}
                  aria-controls={`faq-respuesta-${index}`}
                  onClick={() => setOpen(expanded ? null : index)}
                  className="flex min-h-[79px] w-full cursor-pointer items-center justify-between gap-6 py-4 text-left text-[17px] transition-colors hover:text-violet"
                >
                  {item.question}
                  <span
                    aria-hidden="true"
                    className={`text-2xl leading-none text-violet transition-transform duration-300 ease-out motion-reduce:transition-none ${
                      expanded ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                id={`faq-respuesta-${index}`}
                role="region"
                aria-labelledby={`faq-pregunta-${index}`}
                className={`grid transition-[grid-template-rows,visibility] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  expanded ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p
                    className={`max-w-[560px] pb-7 text-[15px] leading-6 transition-opacity duration-300 motion-reduce:transition-none ${
                      expanded ? "opacity-100 delay-100" : "opacity-0"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
