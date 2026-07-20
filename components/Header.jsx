import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-24">
      <div className="orb -left-24 top-10 h-72 w-72 bg-brand-500/20" aria-hidden="true" />
      <div className="orb -right-16 bottom-10 h-80 w-80 bg-accent-500/15" aria-hidden="true" />

      <div className="section-shell relative flex flex-col items-center text-center animate-enter-up">
        <div className="relative mb-8 h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full border border-white/10 shadow-glow animate-fade-in">
          <Image
            src="/images/profile-pic.png"
            alt="Foto de Joaquín Morales"
            width={180}
            height={180}
            priority
            className="h-full w-full object-cover object-top"
          />
        </div>

        <p className="eyebrow mb-4">Joaquín Morales</p>
        <h1 className="font-display max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Construyo productos digitales que resuelven problemas reales
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink-400 sm:text-lg">
          Desarrollador Full Stack especializado en aplicaciones web modernas. Diseño, desarrollo y despliego
          soluciones escalables utilizando tecnologías como Angular, NestJS, TypeScript y servicios cloud, siempre con
          foco en la experiencia de usuario y la calidad del producto.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#projects" className="primary-button">
            Ver proyectos
          </a>
          <Link href="/portfolio" className="secondary-button">
            Portafolio completo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Header;
