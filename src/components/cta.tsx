import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { ArrowUpRight } from "./icons";

export function Cta() {
  return (
    <section
      id="contacto"
      className="relative mx-3 overflow-clip rounded-[5px] px-5 py-12 md:mx-[22px] md:px-10 lg:py-[65px] xl:px-[72px]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 1066px 310px at 90% 80%, rgba(237,205,183,0.5), rgba(237,205,183,0)), linear-gradient(112.44deg, #e0d2f5 0%, #c6aae9 100%)",
      }}
    >
      <div className="flex items-start justify-between gap-6">
        <h2 className="display-heading text-[clamp(2.5rem,6vw,86.4px)] leading-[1.08]">
          Más tiempo para ti,
          <br />
          <strong>más éxito para tu negocio.</strong>
        </h2>
        <ArrowUpRight
          className="hidden size-[60px] shrink-0 md:block"
          strokeWidth={0.3}
        />
      </div>
      <div className="mt-[44.4px] flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="max-w-[570px] py-[17px] text-[17px] leading-[25.5px]">
          No hace falta que sepas por dónde empezar. Estudiamos juntos cómo la
          digitalización puede ayudarte y definimos soluciones a medida.
        </p>
        <ButtonLink href={CONTACT_HREF} className="shrink-0">
          ¿Charlamos?
        </ButtonLink>
      </div>
    </section>
  );
}
