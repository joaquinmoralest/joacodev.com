import Link from "next/link"
import BurgerMenu from "./BurgerMenu"
import { useEffect, useState } from "react"

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
          <div className='w-72 flex justify-between'>
            <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/'>Inicio</Link>
            <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/about'>Sobre mi</Link>
            <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/portfolio'>Portafolio</Link>
            <Link className='hover:text-slate-200 transition ease-in-out duration-300' href='/blog'>Blog</Link>
          </div>
        </>
      : <BurgerMenu>
          <Link className='text-xl' href='/'>Inicio</Link>
          <Link className='text-xl' href='/about'>Sobre mi</Link>
          <Link className='text-xl' href='/portfolio'>Portafolio</Link>
          <Link className='text-xl' href='/blog'>Blog</Link>
        </BurgerMenu>
      }
    </nav>
  )
}

export default Navbar