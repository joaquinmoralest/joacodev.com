import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { getDocs, collection } from 'firebase/firestore'
import { db } from './_app'
import Card from '../components/Card'
import Stack from '../components/Stack'

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout
      title="Joaquin Morales - Software developer" 
      description="Portfolio and blog about development, technologies and best practices"
    >
      <header className="bg-slate-900 flex items-center flex-col">
        <div className={styles.header}>
          <div className={styles.info}>
            <div className={styles.presentation}>
              <h1>¡Hola! Soy Joaquín</h1>
              <p>Desarrollador Frontend hace alrededor de 2 años. Comencé como autodidacta aprendiendo a hacer paginas web con html y css, hasta que me di cuenta que era algo que me apasionaba. Desde ese momento comence a aprender cada vez más realizando proyectos para pulir mis habilidades...</p>
              <button className={styles.btnPrimary}>Ver proyectos</button>
            </div>
            <div className={styles.avatar}>
              <Image src="/images/profile-pic.png" width={1000} height={1000} />
            </div>
          </div>

          <div className={styles.rrss}>
            <a href='#'>
              <Image src="/icons/instagram.svg" width={35} height={35} />
            </a>
            <a href='#'>
              <Image src="/icons/youtube.svg" width={50} height={50} />
            </a>
            <a href='#'>
              <Image src="/icons/twitter.svg" width={45} height={45} />
            </a>
            <a href='#'>
              <Image src="/icons/linkedin.svg" width={32} height={32} />
            </a>
            <a href='#'>
              <Image src="/icons/github.svg" width={40} height={40} />
            </a>
            
          </div>
        </div>
        
      </header>
      
      <main className='bg-slate-900'>
        <section className='m-auto h-screen flex flex-col justify-center items-center max-w-2xl p-10'>
          <h2 className='text-center mb-10'>Stack</h2>
          <Stack />
        </section>

        <section className='mt-14 min-h-screen flex justify-center items-center p-10'>
          <div className='w-full'>
            <h2 className='text-center mb-10'>Proyectos destacados</h2>
            <div className='flex justify-evenly flex-wrap'>
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
          </div>
        </section>

        <section className='mt-14 p-10'>
          <h2 className='text-center mb-10'>Ultimas publicaciones</h2>
          <p>Cards de las ultimas 3 publicaciones</p>
        </section>

        <section className='mt-14' id='contact'>
          <h2 className='text-center'>Contacto</h2>
        </section>
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
