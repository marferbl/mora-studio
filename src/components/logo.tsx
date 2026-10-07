import Link from "next/link";
import { Asterisk } from "./icons";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Mora Studio, inicio"
      className={`relative flex shrink-0 items-start gap-[7px] pb-[6px] text-ink ${className}`}
    >
      <span className="font-display text-[46px] font-semibold normal-case leading-[34.5px] tracking-[-3.1px]">
        mora
      </span>
      <Asterisk className="size-[18px] text-violet" />
      <span className="absolute bottom-0 left-[2px] font-display text-[8px] leading-[6px] tracking-[1.5px]">
        STUDIO
      </span>
    </Link>
  );
}
