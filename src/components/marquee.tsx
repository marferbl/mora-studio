import { Asterisk } from "./icons";

const words = ["Estrategia", "Diseño", "Webs", "Apps", "Negocios"];

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-[47px] pr-[47px]"
    >
      {[...words, ...words].map((word, index) => (
        <li key={index} className="flex items-center gap-[47px]">
          {word}
          <Asterisk className="size-[0.72em] text-violet" strokeWidth={3} />
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <div className="mt-16 overflow-clip border-b border-line py-8 font-display text-[clamp(2.25rem,4vw,57.6px)] font-semibold uppercase leading-[1.35] lg:mt-[107px] lg:py-[38px]">
      <div className="marquee-track">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
