import Image from "next/image";

const projects = [
  {
    title: "Bruma / Café de especialidad",
    image: "/images/proyecto-bruma-completo.png",
    width: 1230,
    height: 1966,
    alt: "Concepto de web para Bruma, un café de especialidad",
    background: "#fac3ac",
  },
  {
    title: "Alma / Estudio de pilates",
    image: "/images/proyecto-alma.png",
    width: 1024,
    height: 1536,
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
          Estrategias digitales
          <br />
          a <strong>medida.</strong>
        </h2>
        <p className="max-w-[330px] py-[15px] text-[15px] leading-[22.5px]">
          Explora cómo el diseño puede ayudar a presentar tus servicios y
          facilitar que tus clientes den el siguiente paso.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.title}>
            <div
              className="relative aspect-[636/498] overflow-clip rounded"
              style={{ backgroundColor: project.background }}
            >
              <div className="pan-frame absolute inset-[10px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="pan-image h-auto w-full max-w-none"
                  style={{ animationDelay: `${index}s` }}
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
