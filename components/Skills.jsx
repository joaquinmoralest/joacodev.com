import Stack from "./Stack";

function Skills() {
  return (
    <section className="relative border-t border-white/5 py-20 sm:py-28">
      <div className="orb left-10 top-10 h-56 w-56 bg-accent-500/10" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Herramientas</p>
          <h2 className="page-title mt-3">Stack con el que trabajo</h2>
          <p className="page-description mx-auto">
            Lenguajes y tecnologías donde más tengo experiencia construyendo productos web.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <Stack />
        </div>
      </div>
    </section>
  );
}

export default Skills;
