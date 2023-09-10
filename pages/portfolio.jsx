import { useEffect, useState } from "react"
import Card from "../components/Card"
import Layout from "../components/Layout"
import { getCoverImage, getProjects } from "../services/projects"

function Portfolio() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects()
      .then(data => setProjects(data))
  }, [])

  return (
    <Layout>
      <h2 className="pt-16 text-center">Portfolio</h2>
      <section className="flex justify-center my-12 mx-auto w-10/12 max-w-6xl">
        <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row'>
          {projects.map(({ attributes, id }) => {
            return(
              <Card 
                key={id}
                src={getCoverImage({ attributes })}
                title={attributes.name}
                description={attributes.description}
                tags={attributes.stack}
              />
            )
          })}
        </div>
      </section>
    </Layout>

  )
}

export default Portfolio