import Card from "../components/Card";
import Layout from "../components/Layout";
import { Client } from "@notionhq/client";

function Portfolio({ projects }) {
  return (
    <Layout>
      <h2 className="pt-16 text-center">Portfolio</h2>
      <section className="flex justify-center my-12 mx-auto w-10/12 max-w-6xl">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row">
          {projects.map(({ id, cover, title, description, stack, repoUrl, demoUrl }) => {
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
      data_source_id: '208c15a2-7237-48fa-ab1c-aee92b06b9ec',
    });
  } catch (error) {
    console.log("un error", error);
  }

  data.results.forEach((project) => {
    if (project.object === "page") {
      let mapData = null;

      mapData = {
        id: project.id,
        cover: project.cover?.file?.url ? project.cover?.file?.url : null,
        title: project.properties?.Name?.title[0]?.plain_text ? project.properties?.Name?.title[0]?.plain_text : null,
        description: project.properties?.Description?.rich_text[0]?.plain_text
          ? project.properties?.Description?.rich_text[0]?.plain_text
          : null,
        stack: project.properties?.Stack?.multi_select ? project.properties?.Stack?.multi_select : null,
        repoUrl: project.properties?.Repository?.url ? project.properties?.Repository?.url : null,
        demoUrl: project.properties?.Demo?.url ? project.properties?.Demo?.url : null,
      };

      projects.push(mapData);
    }
  });

  return {
    props: {
      projects,
    },
  };
}

export default Portfolio;
