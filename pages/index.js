import Layout from '../components/Layout'
import { getDocs, collection } from 'firebase/firestore'
import { db } from './_app'
import Header from '../components/Header'
import LatestProjects from '../components/LatestProjects'
import Skills from '../components/Skills'

export default function Home({ data }) {
  return (
    <Layout
      title="Joaquín Morales - Software developer" 
      description="Portfolio and blog about development, technologies and best practices"
    >
      <Header />
      <main>
        <LatestProjects />
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
  )
}

export async function getServerSideProps() {
  const querySnapshot = await getDocs(collection(db, "projects"))
  let data = []

  querySnapshot.forEach((doc) => {
    data = [...data, doc.data()]
  })

  return {
    props: {
      data,
    }
  }
}
