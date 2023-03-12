import Image from 'next/image'
import styles from '../styles/SocialNetworks.module.css'

function SocialNetworks({ absolute }) {
  return (
    <div className={`${styles.rrss} ${absolute && styles.absolute}`}>
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
  )
}

export default SocialNetworks