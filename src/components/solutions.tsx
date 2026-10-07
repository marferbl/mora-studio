"use client";

import { useRef, useState } from "react";
import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { ArrowUpRight } from "./icons";

const solutions = [
  {
    label: "Una web que conecta",
    lead: "Que te encuentren,",
    connector: "que te",
    accent: "elijan.",
    body: "Un diseño web que explique tus servicios con claridad y haga sencillo el siguiente paso: consultar, reservar o comprar. Cuidamos la experiencia móvil y la estructura básica para buscadores.",
    cta: "Contacta con nosotros",
  },
  {
    label: "Una app que acompaña",
    lead: "Ahorra tiempo sin",
    connector: "perder",
    accent: "resultados.",
    body: "Si tus clientes son recurrentes o necesitan gestionar citas, pedidos o servicios, estudiamos si una app puede ayudarte. Definimos sus funciones, el formato y el presupuesto a partir del uso real que tendrá.",
    cta: "Contacta con nosotros",
  },
  {
    label: "Menos tareas, más negocio",
    lead: "Lo repetitivo,",
    connector: "más",
    accent: "simple.",
    body: "Revisamos cómo recibes consultas, gestionas reservas y organizas tu trabajo. Detectamos qué procesos conviene simplificar y qué herramientas o integraciones pueden ahorrarte pasos.",
    cta: "Estudiar mis necesidades",
  },
];

export function Solutions() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = solutions[active];

  function onKeyDown(event: React.KeyboardEvent) {
    const step =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    const next = (active + step + solutions.length) % solutions.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <section
      id="soluciones"
      className="shell pb-24 pt-24 lg:pb-[235px] lg:pt-[169px]"
    >
      <div className="flex flex-col justify-between gap-6 pb-10 md:flex-row md:items-end">
        <h2 className="display-heading">
          Soluciones digitales
          <br />
          para necesidades <strong>reales.</strong>
        </h2>
        <p className="max-w-[330px] py-[15px] text-[15px] leading-[22.5px] md:whitespace-nowrap">
          Más fácil para tus clientes.
          <br />
          Más tiempo y orden para ti.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Soluciones digitales"
        onKeyDown={onKeyDown}
        className="flex flex-col border-b border-line md:flex-row"
      >
        {solutions.map((solution, index) => {
          const selected = index === active;
          return (
            <button
              key={solution.label}
              ref={(node) => {
                tabs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`solucion-tab-${index}`}
              aria-selected={selected}
              aria-controls="solucion-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={`-mb-px flex flex-1 cursor-pointer items-center gap-[18px] border-b-2 pb-[26px] pr-[15px] pt-6 text-left transition-colors ${
                selected
                  ? "border-violet text-violet"
                  : "border-transparent text-[#80718d] hover:text-ink"
              }`}
            >
              <span className="text-[10px]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base leading-[19px]">{solution.label}</span>
              <ArrowUpRight className="ml-auto size-[15px]" />
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="solucion-panel"
        aria-labelledby={`solucion-tab-${active}`}
        className="mt-[42px] grid items-center gap-10 md:min-h-[400px] md:grid-cols-[49fr_51fr] md:gap-0"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none -ml-16 hidden h-[424px] max-w-[600px] blur-[10px] md:block"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 200px 230px at 69.6% 53%, rgba(113,55,232,0.24), rgba(113,55,232,0)), radial-gradient(ellipse 172px 228px at 31.7% 38%, rgba(239,191,168,0.42), rgba(239,191,168,0))",
          }}
        />
        <div
          key={`content-${active}`}
          className="panel-enter flex flex-col items-start gap-[25px] [animation-delay:80ms]"
        >
          <h3 className="font-display text-[clamp(2rem,3.2vw,45px)] font-light leading-[1.14] tracking-[-0.03em]">
            {current.lead}
            <br />
            {current.connector}{" "}
            <strong className="font-medium text-violet">
              {current.accent}
            </strong>
          </h3>
          <p className="max-w-[520px] text-[17px] leading-[27.2px]">
            {current.body}
          </p>
          <ButtonLink href={CONTACT_HREF} className="font-display">
            {current.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
