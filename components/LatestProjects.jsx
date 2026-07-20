import Link from "next/link";
import Card from "./Card";

function LatestProjects({ projects }) {
  const favorites = projects.filter((project) => project.isFavorite === true);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="orb right-0 top-20 h-64 w-64 bg-brand-500/10" aria-hidden="true" />
      <div className="section-shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Trabajo seleccionado</p>
          <h2 className="page-title mt-3">Proyectos destacados</h2>
          <p className="page-description mx-auto">
            Algunos de los proyectos que más me han gustado, donde pude usar una mayor variedad de tecnologías modernas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map(({ id, cover, title, description, stack, repoUrl, demoUrl }) => (
            <Card
              key={id}
              src={cover}
              title={title}
              description={description}
              tags={stack}
              repoUrl={repoUrl}
              demoUrl={demoUrl}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/portfolio" className="primary-button">
            Ver todos
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LatestProjects;
