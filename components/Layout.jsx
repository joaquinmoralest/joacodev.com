import Head from "next/head"
import Link from "next/link"
import Footer from "./Footer"

function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className='w-full p-5 flex justify-between bg-slate-800 border-b-zinc-100 text-slate-400 fixed'>
        <div>
          <h2>Joaquin Morales</h2>
        </div>
        <div className='w-80 flex justify-between'>
          <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/'>Home</Link>
          <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/portfolio'>Portfolio</Link>
          <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/blog'>Blog</Link>
          <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='#contact'>Contact</Link>
        </div>
      </nav>
      
      {children}

      <Footer />
    </>
  )
}

export default Layout