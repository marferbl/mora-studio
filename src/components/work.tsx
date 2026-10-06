import Image from "next/image";

const projects = [
  {
    title: "Bruma / Café de barrio",
    image: "/images/proyecto-bruma.png",
    alt: "Concepto de web para Bruma, un café de barrio",
    background: "#e3d2bd",
  },
  {
    title: "Alma / Estudio de pilates",
    image: "/images/proyecto-alma.png",
    alt: "Concepto de web para Alma, un estudio de pilates",
    background: "#e2eadc",
  },
];

export function Work() {
  return (
    <section
      id="proyectos"
      className="shell pb-20 pt-24 lg:pb-[110px] lg:pt-[300px]"
    >
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="display-heading">
          Tu negocio es único.
          <br />
          Que se <strong>note.</strong>
        </h2>
        <p className="max-w-[330px] py-[15px] text-[15px] leading-[22.5px] text-[#8b8a8d] md:whitespace-nowrap">
          Dos exploraciones de diseño.
          <br />
          Así podría verse tu siguiente paso.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title}>
            <div
              className="relative aspect-[636/498] overflow-clip rounded"
              style={{ backgroundColor: project.background }}
            >
              <div className="absolute inset-[10px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="mt-[18px] flex items-center justify-between gap-4">
              <h3 className="text-[15px] leading-[21px]">{project.title}</h3>
              <p className="text-[9px] uppercase tracking-[1.5px] text-[#858388]">
                Concepto de diseño
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
