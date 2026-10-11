import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Berri Studio, inicio"
      className={`block shrink-0 ${className}`}
    >
      <Image
        src="/logo.svg"
        alt=""
        width={167}
        height={41}
        priority
        className="h-full w-auto"
      />
    </Link>
  );
}
