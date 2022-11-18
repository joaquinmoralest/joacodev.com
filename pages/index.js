import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Ubuntu } from '@next/font/google'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'], 
  subsets: ['latin'] 
})

export default function Home() {
  return (
    <div className={ubuntu.className}>
      <Head>
        <title>Joaquin Morales - Software developer</title>
        <meta name="description" content="Portfolio and blog about development, technologies and best practices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-slate-700 min-h-screen flex items-center flex-col">
        <nav className='w-full p-5 flex justify-between bg-slate-800 border-b-zinc-100 text-slate-400'>
          <div>
            <h2>Joaquin Morales</h2>
          </div>
          <div className='w-80 flex justify-between'>
            <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/'>Home</Link>
            <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/Portfolio'>Portfolio</Link>
            <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/Blog'>Blog</Link>
            <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='#contact'>Contact</Link>
          </div>
        </nav>
        <section className='w-full h-screen flex flex-col items-center justify-evenly p-5 '>
          <div className='w-full flex flex-col justify-center items-center'>
            <Image src="/images/profile-pic.png" width={200} height={200} alt="profile" />
            <p className='text-4xl font-medium mt-5 mb-1 text-center text-slate-200'>Hola! Mi nombre es Joaquin Morales</p>
            <p className='text-xl font-medium text-center text-slate-200'>Soy desarrollador Frontend de aplicaciones Web y Movil</p>
          </div>
          <div className='w-min p-4 flex bg-slate-100 rounded'>
            <div>
              Web
            </div>
            <div>
              Movil
            </div>
            <div>
              Desktop
            </div>
          </div>
        </section>
      </header>
      
      <main >
        <section>
          <h2>Ultimos proyectos</h2>
          <p>Carrussel ancho completo con video resumen del proyecto mostrado</p>
        </section>

        <section>
          <h2>Ultimas publicaciones</h2>
          <p>Cards de las ultimas 3 publicaciones</p>
        </section>

        <section id='contact'>
          <h2>Contacto</h2>
          <form></form>
        </section>
      </main>

      <footer className="">
      </footer>
    </div>
  )
}
