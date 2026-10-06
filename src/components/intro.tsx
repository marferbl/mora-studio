import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "./button-link";

export function Intro() {
  return (
    <section id="estudio" className="relative overflow-clip">
      <div
        aria-hidden="true"
        className="absolute inset-0 blur-[10px]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 346px 331px at 36.5% 49%, rgba(113,55,232,0.24), rgba(113,55,232,0)), radial-gradient(ellipse 300px 361px at 14% 52%, rgba(239,191,168,0.42), rgba(239,191,168,0))",
        }}
      />
      <div className="shell relative py-24 lg:pb-[202px] lg:pt-[253px]">
        <div className="flex flex-col items-start gap-[35px] lg:ml-[34.9%]">
          <h2 className="display-heading text-[clamp(2.5rem,4.8vw,69.1px)]">
            Primero, entenderte.
            <br />
            Después, <strong>ayudarte.</strong>
          </h2>
          <p className="max-w-[679px] text-[17px] leading-[27.2px]">
            Antes de diseñar, queremos entender qué haces, quiénes son tus
            clientes y qué te quita tiempo. Definimos contigo una presencia
            digital que facilite encontrarte, contactar y contratar tus
            servicios. Una web, una app o una herramienta a medida: elegimos lo
            que tenga sentido para tu negocio.
          </p>
          <ButtonLink
            href={CONTACT_HREF}
            variant="outline"
            className="font-display"
          >
            Contacta con nosotros
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
