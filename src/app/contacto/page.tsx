import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PLANS } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contacto — Mora Studio",
  description:
    "Cuéntanos qué te gustaría mejorar. Encontraremos contigo el siguiente paso digital.",
};

const steps = [
  "Leemos tu mensaje y te respondemos por correo.",
  "Hablamos contigo para entender tu negocio.",
  "Te proponemos alcance, presupuesto y calendario.",
];

export default async function ContactPage({
  searchParams,
}: PageProps<"/contacto">) {
  const { plan } = await searchParams;
  const defaultPlan = PLANS.find((option) => option.value === plan)?.value;

  return (
    <>
      <Header />
      <main>
        <section
          className="relative mx-3 overflow-clip rounded-[5px] md:mx-[22px]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 900px 420px at 95% 100%, rgba(237,205,183,0.5), rgba(237,205,183,0)), linear-gradient(112.44deg, #e0d2f5 0%, #d3bdf0 100%)",
          }}
        >
          <div className="grid gap-14 px-5 py-14 md:px-10 lg:grid-cols-[575fr_661fr] lg:gap-[60px] lg:py-[90px] xl:px-[72px]">
            <div>
              <p className="flex items-center gap-2 text-[10px] uppercase tracking-[1.5px]">
                <span className="size-[7px] rounded-full bg-violet" />
                Contacto
              </p>
              <h1 className="display-heading mt-8">
                Cuéntanos
                <br />
                tu <strong>idea.</strong>
              </h1>
              <p className="mt-8 max-w-[440px] text-[17px] leading-[27.2px]">
                Cuéntanos qué te gustaría mejorar. Encontraremos contigo el
                siguiente paso digital.
              </p>
              <ol className="mt-12 max-w-[440px] border-t border-ink/[0.13]">
                {steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-5 border-b border-ink/[0.13] py-4 text-[15px] leading-6"
                  >
                    <span className="pt-[5px] text-[10px] leading-[14px] tracking-[1.5px] text-violet">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative rounded-[7px] border border-white/60 bg-cream/70 p-6 sm:p-10">
              <ContactForm defaultPlan={defaultPlan} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
