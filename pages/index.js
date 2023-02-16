import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { getDocs, collection } from 'firebase/firestore'
import { db } from './_app'

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout
      title="Joaquin Morales - Software developer" 
      description="Portfolio and blog about development, technologies and best practices"
    >
      <header className="bg-slate-700 flex items-center flex-col">
        <section className='w-full h-screen flex flex-col items-center justify-evenly p-5 '>
          <div className='w-full flex flex-col justify-center items-center'>
            <Image src="/images/profile-pic.png" width={200} height={200} alt="profile" />
            <p className='text-4xl font-medium mt-5 mb-1 text-center text-slate-200'>¡Hola! Mi nombre es Joaquin</p>
            <p className='text-xl font-medium text-center text-slate-200'>Soy desarrollador Frontend</p>
          </div>
        </section>
      </header>
      
      <main>
        <section className='mt-14 m-auto max-w-2xl p-10'>
          <h2 className='text-3xl text-center mb-10'>Stack</h2>
          <div className='grid grid-cols-6 gap-8 place-items-center'>
            <div className='drop-shadow-md'>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width={60} height={60} alt='icono html' title='HTML' />
            </div>
            <div className='drop-shadow-md'>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={60} height={60} alt='icono css' title='CSS' />
            </div>
            <div className='drop-shadow-md'>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={60} height={60} alt='icono javascript' title='Javascript' />
            </div>
            <div className='drop-shadow-md'>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={60} height={60} alt='icono react' title='React' />         
            </div>
            <div className='drop-shadow-md'>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" width={60} height={60} alt='icono svelte' title='Svelte' />          
            </div>
            <div className='drop-shadow-md'>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width={60} height={60} alt='icono bootstrap' title='Bootstrap' />          
            </div>
            <div className='drop-shadow-md'>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" width={60} height={60} alt='icono tailwind' title='Tailwind' />
            </div>
            <div className='drop-shadow-md'>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" width={60} height={60} alt='icono firebase' title='Firebase' />
            </div>
            <div className='drop-shadow-md'>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width={60} height={60} alt='icono git' title='Git' />
            </div>
            <div className='drop-shadow-md'>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={60} height={60} alt='icono github' title='Github' />
            </div>
            <div className='drop-shadow-md'>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width={60} height={60} alt='icono next js' title='Next Js' />
            </div>
            <div className='drop-shadow-md'>
              <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" width={60} height={60} alt='icono wordpress' title='Wordpress' />
            </div>
          </div>
        </section>

        <section className='mt-14 bg-slate-700 text-slate-200 p-10'>
          <h2 className='text-3xl text-center mb-10'>Ultimos proyectos</h2>
          <p>Carrussel ancho completo con video resumen del proyecto mostrado</p>
        </section>

        <section className='mt-14 bg-slate-700 text-slate-200 p-10'>
          <h2 className='text-3xl text-center mb-10'>Ultimas publicaciones</h2>
          <p>Cards de las ultimas 3 publicaciones</p>
        </section>

        <section className='mt-14' id='contact'>
          <h2 className='text-3xl text-center'>Contacto</h2>
          <form></form>
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
