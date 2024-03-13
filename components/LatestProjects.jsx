import Link from "next/link";
import Card from "./Card";
import styles from "../styles/LatestProjects.module.css";

function LatestProjects({ projects }) {
  return (
    <section id="projects" className="min-h-screen flex justify-center items-center p-10">
      <div className={styles.container}>
        <h2 className="text-center">Proyectos destacados</h2>
        <p className="mb-16 max-w-2xl text-center">
          Algunos de los proyectos que más me han gustado, en donde he podido utilizar mayor variedad de tecnologias
          modernas
        </p>
        <div className={styles.gridContainer}>
          {projects
            .filter((project) => project.isFavorite === true)
            .map(({ id, cover, title, description, stack, repoUrl, demoUrl }) => {
              return (
                <Card
                  key={id}
                  src={cover}
                  title={title}
                  description={description}
                  tags={stack}
                  repoUrl={repoUrl}
                  demoUrl={demoUrl}
                />
              );
            })}
        </div>
        <Link href="portfolio" className={styles.btnPrimary}>
          Ver todos
        </Link>
      </div>
    </section>
  );
}

export default LatestProjects;
