import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="shell mt-10 flex flex-col items-start justify-between gap-8 py-[55px] text-[8px] uppercase tracking-[1.5px] md:flex-row md:items-center lg:mt-[61px]">
      <Logo />
      <p className="font-display font-light">
        Diseño con intención. Tecnología con cercanía.
      </p>
      <p>© 2026 Mora Studio</p>
    </footer>
  );
}
