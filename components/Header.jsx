import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden">
      <div className="orb -left-24 top-10 h-72 w-72 bg-brand-500/20" aria-hidden="true" />
      <div className="orb -right-16 bottom-10 h-80 w-80 bg-accent-500/15" aria-hidden="true" />

      <div className="relative grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        <div className="section-shell flex flex-col justify-center py-16 lg:py-24 animate-enter-up">
          <p className="eyebrow mb-4">JoacoDev</p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Construyo productos web con foco en claridad y detalle
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ink-400 sm:text-lg">
            Soy Joaquín, desarrollador frontend. Diseño y desarrollo interfaces modernas, rápidas y con personalidad.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="primary-button">
              Ver proyectos
            </a>
            <Link href="/portfolio" className="secondary-button">
              Portafolio completo
            </Link>
          </div>
        </div>

        <div className="relative min-h-[320px] animate-fade-in lg:min-h-full">
          <Image
            src="/images/profile-pic.png"
            alt="Foto de Joaquín Morales"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent lg:bg-gradient-to-r lg:from-ink-950 lg:via-ink-950/30 lg:to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

export default Header;
