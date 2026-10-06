const steps = [
  {
    title: "Entendemos tu negocio.",
    body: "Estudiamos tus servicios, tus clientes y tu forma de trabajar. Identificamos qué podemos optimizar en base a tus objetivos.",
  },
  {
    title: "Elegimos el camino.",
    body: "Definimos contigo si lo mejor es una web, una app o una solución a medida. Acordamos el alcance, el presupuesto y el calendario.",
  },
  {
    title: "Diseñamos y acompañamos.",
    body: "Damos forma a la solución, la revisamos contigo y la ponemos en marcha. Si lo necesitas, seguimos a tu lado con mantenimiento y mejoras.",
  },
];

export function Process() {
  return (
    <section className="border-t border-line">
      <div className="shell pb-20 pt-24 lg:pb-24 lg:pt-[152px]">
        <h2 className="display-heading">
          Entender. Diseñar.
          <br />
          <strong>Hacerlo realidad.</strong>
        </h2>
        <ol className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3 lg:mt-[97px]">
          {steps.map((step, index) => (
            <li key={step.title}>
              <p className="text-[65px] leading-[79px] tracking-[-4px] text-[#a494bf]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mt-5 h-0.5 max-w-[331px] bg-[#d9d9d9]" />
              <h3 className="mt-[52px] font-grotesk text-[23px] font-bold tracking-[-0.5px]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[327px] text-[15px] leading-6">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
