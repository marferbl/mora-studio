import { Cta } from "@/components/cta";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Marquee } from "@/components/marquee";
import { Pricing } from "@/components/pricing";
import { Process } from "@/components/process";
import { Solutions } from "@/components/solutions";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-50 bg-white px-[15px] py-[16.5px] focus:not-sr-only focus:fixed focus:left-0 focus:top-0"
      >
        Saltar al contenido
      </a>
      <div
        aria-hidden="true"
        className="scroll-progress fixed inset-x-0 top-0 z-40 h-[3px] bg-violet"
      />
      <Header />
      <main id="contenido">
        <Hero />
        <Marquee />
        <Intro />
        <Process />
        <Work />
        <Solutions />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
