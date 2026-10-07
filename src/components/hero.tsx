import Image from "next/image";
import { CONTACT_HREF } from "@/lib/site";
import { ButtonLink } from "./button-link";
import { ArrowDown, ArrowUpRight, Asterisk } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-clip rounded-[2px] bg-lilac md:mx-[22px] md:rounded-[5px]">
      <div className="relative z-10 mx-[25px] flex justify-between border-b border-ink/[0.09] pb-[11.5px] pt-[11px] text-[8px] uppercase tracking-[0.67px] lg:mx-14 lg:pb-[26px] lg:pt-[25px] lg:text-[10px] lg:tracking-[1.5px]">
        <p className="flex items-center gap-1 lg:gap-2">
          <span className="size-[3px] rounded-full bg-violet lg:size-[7px]" />
          Diseño web &amp; digitalización
        </p>
        <p className="hidden sm:block">
          Valencia · Para negocios con personalidad
        </p>
      </div>

      <div className="relative z-10 px-5 pb-11 pt-[38px] lg:px-14 lg:pb-20 lg:pt-[70px]">
        <h1 className="font-display text-[clamp(2.75rem,6.7vw,96.5px)] font-light leading-[0.99] tracking-[-0.055em] lg:whitespace-nowrap">
          Digitaliza tu negocio,
          <br />
          <strong className="text-[1.12em] font-semibold leading-[1.04] tracking-[-0.046em] text-violet">
            hazlo crecer.
          </strong>
        </h1>
        <p className="mt-10 hidden font-display text-[21px] leading-[28.35px] tracking-[-0.2px] lg:block">
          De la estrategia a la implementación
        </p>
        <p className="mt-7 max-w-[494px] text-base leading-[18px] lg:mt-3 lg:text-[17px] lg:leading-[27.2px]">
          Llevamos tu negocio al mundo digital para que puedas vender más,
          trabajar mejor, y dedicar tu tiempo a lo que verdaderamente importa.
        </p>
        <ButtonLink
          href={CONTACT_HREF}
          className="mt-10 font-display max-lg:gap-4 max-lg:px-[21px] max-lg:py-[15.5px] max-lg:text-base lg:mt-9"
        >
          Descubre tu siguiente paso
        </ButtonLink>
      </div>

      <div className="absolute inset-0 lg:left-auto lg:w-1/2">
        <div
          aria-hidden="true"
          className="absolute -inset-x-20 -top-6 bottom-0 blur-[10px]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 372px 384px at 55% 37%, rgba(113,55,232,0.24), rgba(113,55,232,0)), radial-gradient(ellipse 558px 406px at 90% 77%, rgba(239,191,168,0.42), rgba(239,191,168,0))",
          }}
        />
        <div className="absolute left-[29.5%] top-[91px] aspect-square w-[105.6%] -scale-y-100 opacity-30 lg:left-[4.3%] lg:top-[6%] lg:w-[101.7%] lg:scale-y-100 lg:opacity-100">
          <Image
            src="/images/hero-knot.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 105vw"
            className="object-contain"
          />
        </div>
        <a
          href="#proyectos"
          className="absolute bottom-[132px] left-0 hidden items-center gap-[30px] rounded-xl border border-white/60 bg-white/[0.33] px-[26px] py-[21px] shadow-[0_10px_40px_0_rgba(83,37,148,0.07)] backdrop-blur-[9px] transition-colors hover:bg-white/50 lg:flex"
        >
          <Asterisk className="size-6 text-violet" strokeWidth={1.6} />
          <span className="text-[13px] leading-[18.2px]">
            Ideas nuevas.
            <br />
            Diseño con intención.
          </span>
          <ArrowUpRight className="ml-[15px] size-4" strokeWidth={1} />
        </a>
      </div>

      <div className="relative z-10 mx-14 hidden justify-between border-t border-ink/[0.09] pb-[22px] pt-[23px] lg:flex">
        <p className="text-[10px] uppercase leading-[17px] tracking-[1.5px]">
          Una nueva forma de estar online.
        </p>
        <a
          href="#estudio"
          className="flex items-center gap-5 text-xs transition-colors hover:text-violet"
        >
          Sigue explorando
          <ArrowDown className="size-[10px]" />
        </a>
      </div>
    </section>
  );
}
