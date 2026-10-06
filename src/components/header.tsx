import { CONTACT_HREF } from "@/lib/site";
import { ArrowUpRight } from "./icons";
import { Logo } from "./logo";

const links = [
  { href: "#estudio", label: "El estudio" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#tarifas", label: "Tarifas" },
];

export function Header() {
  return (
    <header className="mx-auto flex h-[106px] w-full max-w-[1600px] items-center justify-between px-5 md:px-10 xl:px-[72px]">
      <Logo />
      <nav aria-label="Principal" className="hidden gap-[35px] text-sm md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-violet"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href={CONTACT_HREF}
        className="flex items-center gap-[30px] border-b border-ink pb-[12.5px] pt-[11.5px] text-sm transition-colors hover:border-violet hover:text-violet"
      >
        Hablemos
        <ArrowUpRight className="size-[10px]" />
      </a>
    </header>
  );
}
