import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { Check } from "./icons";

type Plan = {
  tag: string;
  name: string;
  price: string;
  currency?: string;
  note: string;
  description: string;
  features: { label: string; included: boolean }[];
  cta: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    tag: "Para empezar",
    name: "Web Esencial",
    price: "790",
    currency: "€",
    note: "+ IVA · pago único",
    description: "Para que sepan qué haces y cómo contactar contigo.",
    features: [
      { label: "1 página · hasta 6 secciones", included: true },
      { label: "Servicios, fotografías y ubicación", included: true },
      { label: "WhatsApp, teléfono y formulario", included: true },
      { label: "Diseño adaptado a móvil", included: true },
      { label: "Páginas adicionales o reservas", included: false },
      { label: "Tienda online o funciones propias", included: false },
    ],
    cta: "Este es mi plan",
  },
  {
    tag: "Recomendado",
    name: "Web Negocio",
    price: "1.490",
    currency: "€",
    note: "+ IVA · pago único",
    description: "Para explicar tus servicios y facilitar las reservas.",
    features: [
      { label: "Hasta 5 páginas", included: true },
      { label: "Servicios, equipo y galería", included: true },
      { label: "WhatsApp, teléfono y formulario", included: true },
      { label: "Diseño adaptado a móvil", included: true },
      { label: "Conexión con reservas existentes", included: true },
      { label: "Tienda online o funciones propias", included: false },
    ],
    cta: "Vamos a por ella",
    featured: true,
  },
  {
    tag: "Para ir más allá",
    name: "A medida",
    price: "Hablemos.",
    note: "Presupuesto personalizado",
    description: "Para vender online, crear una app o simplificar tu trabajo.",
    features: [
      { label: "Tienda online, según propuesta", included: true },
      { label: "Apps, funciones e integraciones", included: true },
      { label: "Diseño adaptado a móvil", included: true },
      { label: "Reservas o funciones específicas", included: true },
      { label: "Precio según complejidad", included: true },
      { label: "Mantenimiento específico", included: true },
    ],
    cta: "Cuéntanos tu idea",
  },
];

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <article
      className={`flex flex-col rounded-[7px] border p-[30px] lg:min-h-[695px] ${
        plan.featured
          ? "border-[#bba0e6] bg-[linear-gradient(134deg,#dbcaf6_0%,#c5a5ed_100%)]"
          : "border-[#d4cede] bg-cream/55"
      }`}
    >
      <div className="flex min-h-[25.5px] items-center justify-between font-mono text-[10px] font-light uppercase tracking-[1.5px]">
        <span>{String(index + 1).padStart(2, "0")}</span>
        {plan.featured ? (
          <span className="rounded-full bg-ink px-[10px] py-[7px] text-[9px] leading-[11.5px] tracking-[1px] text-white">
            {plan.tag}
          </span>
        ) : (
          <span>{plan.tag}</span>
        )}
      </div>
      <h3 className="pb-[19.5px] pt-[37px] font-display text-[23px] leading-[23px]">
        {plan.name}
      </h3>
      <p className="flex h-[65px] items-center gap-[9px] font-display">
        {plan.currency ? (
          <>
            <span className="text-[65px] leading-[65px] tracking-[-4px]">
              {plan.price}
            </span>
            <span className="mt-[14px] text-[35px] leading-[35px] tracking-[-2px]">
              {plan.currency}
            </span>
          </>
        ) : (
          <span className="text-[49px] leading-[49px] tracking-[-3px]">
            {plan.price}
          </span>
        )}
      </p>
      <p className="mt-[11px] text-xs leading-[15px] text-[#5d516b]">
        {plan.note}
      </p>
      <p className="min-h-[93px] pb-5 pt-7 text-[15px] leading-[22.5px] lg:min-h-[115.5px]">
        {plan.description}
      </p>
      <ul className="mb-6 border-t border-ink/[0.13] pb-[10px] pt-[19px] text-[13px] leading-[19.5px]">
        {plan.features.map((feature) => (
          <li
            key={feature.label}
            className={`relative py-2 pl-[23px] ${
              feature.included ? "" : "text-[#766b80]"
            }`}
          >
            <span className="absolute left-0 top-2 text-[#6028b4]">
              {feature.included ? (
                <Check className="mt-[5px] size-[10px]" />
              ) : (
                <span className="text-[#766b80]">−</span>
              )}
            </span>
            {feature.label}
            {feature.included ? null : (
              <span className="sr-only"> (no incluido)</span>
            )}
          </li>
        ))}
      </ul>
      <ButtonLink
        href={CONTACT_HREF}
        variant={plan.featured ? "solid" : "outline"}
        className="mt-auto w-full"
      >
        {plan.cta}
      </ButtonLink>
    </article>
  );
}

export function Pricing() {
  return (
    <section id="tarifas" className="bg-mist">
      <div className="shell pb-24 pt-24 lg:pb-[121px] lg:pt-[110px]">
        <h2 className="display-heading">
          Buen diseño.
          <br />
          Precios <strong>claros.</strong>
        </h2>
        <div className="mt-10 grid gap-[18px] lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PlanCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
        <p className="mt-5 max-w-[1060px] text-[11px] leading-[18.7px] text-[#706678]">
          Dominio, alojamiento, mantenimiento y herramientas externas aparte.
          Las reservas se conectan a una herramienta existente; una agenda
          propia se presupuesta a medida.
        </p>
      </div>
    </section>
  );
}
