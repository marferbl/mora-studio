import { ArrowUpRight } from "./icons";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

const variants = {
  solid: "bg-ink text-cream hover:border-violet hover:bg-violet",
  outline: "text-ink hover:bg-ink hover:text-cream",
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-between gap-[30px] rounded-full border border-ink px-6 py-[18px] text-sm leading-[18px] transition-colors ${variants[variant]} ${className}`}
    >
      {children}
      <ArrowUpRight className="size-[10px] shrink-0" />
    </a>
  );
}
