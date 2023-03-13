import Image from "next/image"
import styles from '../styles/Stack.module.css'

function Stack() {
  return (
    <div className={styles.stack}>
      <div className='drop-shadow-md hover:scale-110 transition ease-in duration-100'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width={60} height={60} alt='icono html' title='HTML' />
      </div>
      <div className='drop-shadow-md hover:scale-110 transition ease-in duration-100'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={60} height={60} alt='icono css' title='CSS' />
      </div>
      <div className='drop-shadow-md hover:scale-110 transition ease-in duration-100'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={60} height={60} alt='icono javascript' title='Javascript' />
      </div>
      <div className='drop-shadow-md hover:scale-110 transition ease-in duration-100'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={60} height={60} alt='icono react' title='React' />         
      </div>
      <div className='drop-shadow-md hover:scale-110 transition ease-in duration-100'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" width={60} height={60} alt='icono svelte' title='Svelte' />          
      </div>
      <div className='drop-shadow-md hover:scale-110 transition ease-in duration-100'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width={60} height={60} alt='icono bootstrap' title='Bootstrap' />          
      </div>
      <div className='drop-shadow-md hover:scale-110 transition ease-in duration-100'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" width={60} height={60} alt='icono tailwind' title='Tailwind' />
      </div>
      <div className='drop-shadow-md hover:scale-110 transition ease-in duration-100'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" width={60} height={60} alt='icono firebase' title='Firebase' />
      </div>
      <div className='drop-shadow-md hover:scale-110 transition ease-in duration-100'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width={60} height={60} alt='icono git' title='Git' />
      </div>
      <div className='drop-shadow-md hover:scale-110 transition ease-in duration-100'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width={60} height={60} alt='icono github' title='Github' />
      </div>
      <div className='drop-shadow-md hover:scale-110 transition ease-in duration-100'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width={60} height={60} alt='icono next js' title='Next Js' />
      </div>
      <div className='drop-shadow-md hover:scale-110 transition ease-in duration-100'>
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" width={60} height={60} alt='icono wordpress' title='Wordpress' />
      </div>
    </div>
  )
}

export default Stack