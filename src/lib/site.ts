// Every "contact" call to action points here.
export const CONTACT_HREF = "/contacto";

export const PLANS = [
  { value: "web-esencial", label: "Web Esencial" },
  { value: "web-negocio", label: "Web Negocio" },
  { value: "a-medida", label: "A medida" },
  { value: "no-lo-se", label: "Aún no lo sé" },
] as const;

export type PlanValue = (typeof PLANS)[number]["value"];
