import Image from "next/image";
import SocialNetworks from "./SocialNetworks";
import styles from "../styles/Home.module.css"
import { useEffect, useState } from "react";

function Header() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    let screenWidth = window.screen.width

    if (screenWidth < 420) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  return ( 
    <header className="flex items-center flex-col">
      <div className={styles.header}>
        <div className={styles.info}>
          <div className={styles.presentation}>
            <h1 className='mb-3'>¡Hola! Soy Joaquín</h1>
            <p>Desarrollador Frontend hace alrededor de 2 años. Comencé como autodidacta aprendiendo a hacer paginas web con html y css, hasta que me di cuenta que era algo que me apasionaba. Desde ese momento comence a aprender cada vez más realizando proyectos para pulir mis habilidades...</p>
            <a href='#projects' className={styles.btnPrimary}>Ver proyectos</a>
          </div>
          <div className={styles.avatar}>
            <Image src="/images/profile-pic.png" width={1000} height={1000} alt='Foto de Joaquin' />
          </div>
        </div>

        <SocialNetworks absolute isMobile={isMobile} />
      </div>
    </header>
  )
}

export default Header;