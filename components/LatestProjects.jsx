import Link from "next/link";
import Card from "./Card";
import styles from "../styles/LatestProjects.module.css"
import { useEffect, useState } from "react";
import { getCoverImage, getProjects } from "../services/projects";

function LatestProjects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects()
      .then(data => setProjects(data))
  }, [])
  
  return (
    <section id='projects' className='min-h-screen flex justify-center items-center p-10'>
      <div className={styles.container}>
        <h2 className='text-center'>Proyectos destacados</h2>
        <p className='mb-16 max-w-2xl text-center'>Algunos de los proyectos que más me han gustado, en donde he podido utilizar mayor variedad de tecnologias  modernas</p>
        <div className={styles.gridContainer}>
          {projects
            .filter((project) => project.attributes.isFavorite === true)
            .map(({ attributes, id }) => {
              return(
                <Card
                  key={id}
                  src={getCoverImage({ attributes })} 
                  title={attributes.name}
                  repoUrl={attributes.repository}
                  demoUrl={attributes.url}
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