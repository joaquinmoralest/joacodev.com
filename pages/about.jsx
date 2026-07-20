import Layout from "../components/Layout";
import Link from "next/link";

function About() {
  return (
    <Layout
      title="Sobre mí — JoacoDev"
      description="Conoce a Joaquín Morales, desarrollador frontend."
    >
      <section className="relative py-20 sm:py-28">
        <div className="orb left-1/2 top-10 h-64 w-64 -translate-x-1/2 bg-brand-500/15" aria-hidden="true" />
        <div className="section-shell relative">
          <div className="mx-auto max-w-2xl text-center animate-enter-up">
            <p className="eyebrow">Sobre mí</p>
            <h1 className="page-title mt-3 text-3xl sm:text-4xl">Esta página está en camino</h1>
            <p className="page-description mx-auto">
              Pronto voy a compartir más sobre mi recorrido, cómo trabajo y lo que me motiva a construir productos digitales.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/portfolio" className="primary-button">
                Ver portafolio
              </Link>
              <Link href="/" className="secondary-button">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
