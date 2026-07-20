import Layout from "../components/Layout";
import Header from "../components/Header";
import LatestProjects from "../components/LatestProjects";
import Skills from "../components/Skills";
import { Client } from "@notionhq/client";

export default function Home({ projects }) {
  return (
    <Layout
      title="JoacoDev — Joaquín Morales"
      description="Portfolio de Joaquín Morales, desarrollador frontend. Proyectos, stack y trabajo seleccionado."
    >
      <Header />
      <main>
        <LatestProjects projects={projects} />
        <Skills />
      </main>
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
        isFavorite: project.properties?.Favorite?.checkbox,
      });
    }
  });

  return {
    props: {
      projects,
    },
  };
}
