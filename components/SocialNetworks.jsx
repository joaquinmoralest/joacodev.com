import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/SocialNetworks.module.css'

function SocialNetworks({ absolute, isMobile }) {
  return (
    <div className={`${styles.rrss} ${absolute && styles.absolute} ${isMobile && styles.hide}`}>
      <a href='#'>
        <Image src="/icons/instagram.svg" width={35} height={35} alt='logo instagram' />
      </a>
      <a href='#'>
        <Image src="/icons/youtube.svg" width={50} height={50} alt='logo youtube' />
      </a>
      <a href='#'>
        <Image src="/icons/twitter.svg" width={45} height={45} alt='logo twitter' />
      </a>
      <a href='#'>
        <Image src="/icons/linkedin.svg" width={32} height={32} alt='linkedin' />
      </a>
      <a href='#'>
        <Image src="/icons/github.svg" width={40} height={40} alt='logo github' />
      </a>
    </div>
  )
}

export default SocialNetworks