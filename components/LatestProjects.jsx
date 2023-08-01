import Link from "next/link";
import Card from "./Card";
import styles from "../styles/Home.module.css"
import { projects } from '../data/projects'

function LatestProjects() {
  return (
    <section id='projects' className='min-h-screen flex justify-center items-center p-10'>
      <div className='w-full flex flex-col items-center mt-2'>
        <h2 className='text-center'>Proyectos destacados</h2>
        <p className='mb-16 max-w-2xl text-center'>Algunos de los proyectos que más me han gustado, en donde he podido utilizar mayor variedad de tecnologias  modernas</p>
        <div className='max-w-7xl flex justify-center gap-16 flex-wrap mb-12'>
          {projects
            .filter((project) => project.isFavorite === true)
            .map((project) => {
              return(
                <Card
                  key={project.id}
                  src={project.src} 
                  url={project.url}
                  title={project.title}
                  description={project.description}
                  tags={project.stack}
                />
            )
          })}
        </div>
        <Link href='portfolio' className={styles.btnPrimary}>Ver todos</Link>
      </div>
    </section>
  );
}

export default LatestProjects;