import Card from "../components/Card";
import Layout from "../components/Layout";
import { Client } from "@notionhq/client";

function Portfolio({ projects }) {
  return (
    <Layout
      title="Portafolio — JoacoDev"
      description="Proyectos de desarrollo web de Joaquín Morales."
    >
      <section className="relative py-16 sm:py-24">
        <div className="orb -left-10 top-0 h-64 w-64 bg-brand-500/15" aria-hidden="true" />
        <div className="orb right-0 top-40 h-72 w-72 bg-accent-500/10" aria-hidden="true" />

        <div className="section-shell relative">
          <div className="mx-auto max-w-2xl text-center animate-enter-up">
            <p className="eyebrow">Portafolio</p>
            <h1 className="page-title mt-3 text-3xl sm:text-4xl">Proyectos que he construido</h1>
            <p className="page-description mx-auto">
              Una selección de trabajos personales y experimentales, desde apps interactivas hasta interfaces de producto.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ id, cover, title, description, stack, repoUrl, demoUrl }) => (
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

          {projects.length === 0 && (
            <div className="surface-card mx-auto mt-14 max-w-lg text-center">
              <p className="text-ink-300">Todavía no hay proyectos para mostrar.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const notion = new Client({ auth: process.env.NOTION_KEY });

  let data = null;
  let projects = [];

  try {
    data = await notion.dataSources.query({
      data_source_id: "208c15a2-7237-48fa-ab1c-aee92b06b9ec",
    });
  } catch (error) {
    console.log("un error", error);
  }

  data?.results?.forEach((project) => {
    if (project.object === "page") {
      projects.push({
        id: project.id,
        cover: project.cover?.file?.url ? project.cover?.file?.url : null,
        title: project.properties?.Name?.title[0]?.plain_text
          ? project.properties?.Name?.title[0]?.plain_text
          : null,
        description: project.properties?.Description?.rich_text[0]?.plain_text
          ? project.properties?.Description?.rich_text[0]?.plain_text
          : null,
        stack: project.properties?.Stack?.multi_select ? project.properties?.Stack?.multi_select : null,
        repoUrl: project.properties?.Repository?.url ? project.properties?.Repository?.url : null,
        demoUrl: project.properties?.Demo?.url ? project.properties?.Demo?.url : null,
      });
    }
  });

  return {
    props: {
      projects,
    },
  };
}

export default Portfolio;
