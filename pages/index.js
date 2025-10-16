import Layout from "../components/Layout";
import Header from "../components/Header";
import LatestProjects from "../components/LatestProjects";
import Skills from "../components/Skills";
import { Client } from "@notionhq/client";

export default function Home({ projects }) {
  return (
    <Layout
      title="Joaquín Morales - Software developer"
      description="Portfolio and blog about development, technologies and best practices"
    >
      <Header />
      <main>
        <LatestProjects projects={projects} />
        {/* SECCION ULTIMAS PUBLICACIONES DEL BLOG */}
        {/* <section className='p-10 min-h-screen flex justify-center items-center'>
          <div className='w-full flex flex-col items-center'>
            <h2 className='text-center'>Ultimas publicaciones</h2>
            <p className='max-w-2xl text-center mb-16'>Quiero comenzar a entregar conocimiento a la comunidad, sobre todo a quienes estan recien empezando en el mundo de la programación</p>
            <div className='max-w-7xl flex justify-center gap-16 flex-wrap mb-12'>
              <Card 
                src="/images/expense-tracker.png" 
                url="https://expenses-tracker-three-sooty.vercel.app/"
                title="Expenses Tracker" 
                description="Aplicacion de seguimiento de gastos, que integra firebase para guardar los datos y librerias para mostrar reportes."
              />
              <Card
                src="/images/calculator.png"
                url="https://trusting-heisenberg-37a0f2.netlify.app/" 
                title="Calculadora"
                description="Tipica app de calculadora con un diseño moderno."
              />
              <Card 
                src="/images/pokedex.png" 
                url="https://new-pokedex-cyan.vercel.app/"
                title="Pokedex"
                description="Aplicacion del clima construida con Svelte que nos trae la informacion relevante a traves de una api publica."
              />
            </div>
            <Link href='portfolio' className={styles.btnPrimary}>Ver todos</Link>
          </div>
        </section> */}
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
      data_source_id: '208c15a2-7237-48fa-ab1c-aee92b06b9ec',
    });
  } catch (error) {
    console.log("un error", error);
  }

  data.results?.forEach((project) => {
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
        isFavorite: project.properties?.Favorite?.checkbox,
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
