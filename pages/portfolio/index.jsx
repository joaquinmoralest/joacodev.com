import Card from "../../components/Card"
import Layout from "../../components/Layout"
import { projects } from "../../data/projects"

function Portfolio() {
  return (
    <Layout>
      <h2 className="pt-16 text-center">Portfolio</h2>
      <section className="flex justify-center mt-12">
        <div className='max-w-6xl flex justify-center gap-16 flex-wrap mb-12'>
          {projects.map(project => {
            return(
              <Card 
                key={project.id}
                src={project.src} 
                url={project.url}
                title={project.title}
                description={project.description}
              />
            )
          })}
        </div>
      </section>
    </Layout>

  )
}

export default Portfolio