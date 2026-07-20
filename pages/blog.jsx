import Layout from "../components/Layout";
import Link from "next/link";

function Blog() {
  return (
    <Layout
      title="Blog — JoacoDev"
      description="Artículos sobre desarrollo, tecnologías y buenas prácticas."
    >
      <section className="relative py-20 sm:py-28">
        <div className="orb right-10 top-16 h-64 w-64 bg-accent-500/15" aria-hidden="true" />
        <div className="section-shell relative">
          <div className="mx-auto max-w-2xl text-center animate-enter-up">
            <p className="eyebrow">Blog</p>
            <h1 className="page-title mt-3 text-3xl sm:text-4xl">Próximamente</h1>
            <p className="page-description mx-auto">
              Quiero compartir conocimiento con la comunidad: tips, aprendizajes y buenas prácticas para quienes están empezando en programación.
            </p>
            <div className="mt-8 flex justify-center">
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

export default Blog;
