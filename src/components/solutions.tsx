"use client";

import { useRef, useState } from "react";
import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { ArrowUpRight } from "./icons";

const solutions = [
  {
    label: "Una web que conecta",
    lead: "De descubrirte",
    connector: "a",
    accent: "elegirte.",
    body: "Un diseño web que explique tus servicios con claridad y haga sencillo el siguiente paso: consultar, reservar o comprar. Cuidamos la experiencia móvil y la estructura básica para buscadores.",
  },
  {
    label: "Una app que acompaña",
    lead: "De visitarte",
    connector: "a",
    accent: "volver.",
    body: "Una app pensada para quienes ya te conocen: reservar, consultar o repetir en un par de toques. Diseñamos solo las funciones que tus clientes van a usar de verdad.",
  },
  {
    label: "Menos tareas, más negocio",
    lead: "De repetir tareas",
    connector: "a",
    accent: "avanzar.",
    body: "Herramientas a medida e integraciones que ordenan tu día a día: menos pasos manuales, menos errores y más tiempo para lo que verdaderamente importa.",
  },
];

export function Solutions() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = solutions[active];
  const number = String(active + 1).padStart(2, "0");

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
          La tecnología cambia.
          <br />
          El objetivo es <strong>crecer.</strong>
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
        <p
          key={`number-${active}`}
          aria-hidden="true"
          className="panel-enter flex items-center gap-[30px] font-grotesk text-[clamp(110px,13vw,190px)] font-bold leading-none tracking-[-12px] text-[#d9cdee]"
        >
          {number}
          <ArrowUpRight
            className="size-[0.32em] text-violet"
            strokeWidth={0.9}
          />
        </p>
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
            Contacta con nosotros
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
