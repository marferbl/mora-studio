import Link from "next/link";
import { CONTACT_HREF } from "@/lib/site";
import { ArrowUpRight } from "./icons";
import { Logo } from "./logo";

const links = [
  { href: "/#estudio", label: "El estudio" },
  { href: "/#soluciones", label: "Soluciones" },
  { href: "/#tarifas", label: "Tarifas" },
];

export function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-4 md:h-[106px] md:px-10 xl:px-[72px]">
          <Logo className="origin-left scale-[0.67] md:scale-100" />
          <nav
            aria-label="Principal"
            className="hidden gap-[35px] text-sm md:flex"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-violet"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href={CONTACT_HREF}
            className="flex h-9 items-center gap-1 rounded-full border border-ink px-[17px] text-sm font-semibold transition-colors hover:bg-ink hover:text-cream md:hidden"
          >
            Hablemos
            <ArrowUpRight className="size-[10px]" />
          </Link>
          <Link
            href={CONTACT_HREF}
            className="hidden items-center gap-[30px] border-b border-ink pb-[12.5px] pt-[11.5px] text-sm transition-colors hover:border-violet hover:text-violet md:flex"
          >
            Hablemos
            <ArrowUpRight className="size-[10px]" />
          </Link>
        </div>
      </header>
      <div aria-hidden="true" className="h-16 md:h-[106px]" />
    </>
  );
}
