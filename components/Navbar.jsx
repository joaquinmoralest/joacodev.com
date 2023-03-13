import Link from "next/link"
import { useEffect, useState } from "react"
import { slide as Menu } from "react-burger-menu"

function Navbar() {
  const [screen, setScreen] = useState()

  useEffect(() => {
    const screenWidth = window.screen.width

    setScreen(screenWidth)
  }, [screen])

  return (
    <nav className='w-full p-5 flex justify-between bg-slate-900 border-b-zinc-100 text-slate-400 fixed z-10'>
      {screen > 720 
      ? <>
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
        </>
      : <Menu 
          right 
          customBurgerIcon={ 
            <svg width={30} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg> 
          }>
          <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/'>Inicio</Link>
          <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/about'>Sobre mi</Link>
          <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/portfolio'>Portafolio</Link>
          <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/blog'>Blog</Link>
          <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='#contact'>Contacto</Link>
        </Menu>
      }
    </nav>
  )
}

export default Navbar