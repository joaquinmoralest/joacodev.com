import Link from "next/link"

function Navbar() {
  return (
    <nav className='w-full p-5 flex justify-between bg-slate-900 border-b-zinc-100 text-slate-400 fixed z-10'>
      <div>
        <p>JoacoDev</p>
      </div>
      <div className='w-96 flex justify-between'>
        <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/'>Inicio</Link>
        <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/about'>Sobre mi</Link>
        <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/portfolio'>Portafolio</Link>
        <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/blog'>Blog</Link>
        <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='#contact'>Contacto</Link>
      </div>
    </nav>
  )
}

export default Navbar