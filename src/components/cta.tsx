import Image from "next/image";
import { Suspense } from "react";
import {
  ContactForm,
  ContactFormWithPlanParam,
} from "@/app/contacto/contact-form";

export function Cta() {
  return (
    <section
      id="contacto"
      className="relative mx-3 grid gap-12 overflow-clip rounded-[5px] px-5 py-12 md:mx-[22px] md:px-10 lg:grid-cols-[566fr_594fr] lg:gap-[92px] lg:pb-20 lg:pt-[65px] xl:px-[72px]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 1066px 498px at 90% 80%, rgba(237,205,183,0.5), rgba(237,205,183,0)), linear-gradient(104.41deg, #e0d2f5 0%, #c6aae9 100%)",
      }}
    >
      <div className="flex flex-col">
        <h2 className="display-heading text-[clamp(2.5rem,6vw,86.4px)] leading-[1.08]">
          Escríbenos sin
          <br />
          <strong>compromiso.</strong>
        </h2>
        <p className="mt-7 max-w-[570px] py-[17px] text-[17px] leading-[25.5px] lg:mt-11">
          No hace falta que sepas por dónde empezar. Estudiamos juntos cómo la
          digitalización puede ayudarte y definimos soluciones a medida.
        </p>
        <div className="mt-10 flex flex-wrap justify-between gap-x-10 gap-y-5 font-display text-base font-medium leading-[18px] tracking-[1px] lg:mt-auto">
          <a
            href="mailto:morastudio@gmail.com"
            className="flex items-center gap-[15px] transition-colors hover:text-violet"
          >
            <Image src="/icons/email.svg" alt="" width={18} height={18} />
            morastudio@gmail.com
          </a>
          <a
            href="tel:+34685591340"
            className="flex items-center gap-[15px] transition-colors hover:text-violet"
          >
            <Image src="/icons/phone.svg" alt="" width={17} height={17} />
            685 59 13 40
          </a>
        </div>
      </div>
      <div className="relative rounded-[7px] border border-white/60 bg-cream/70 p-6 sm:p-[41px]">
        <Suspense fallback={<ContactForm />}>
          <ContactFormWithPlanParam />
        </Suspense>
      </div>
    </section>
  );
}
