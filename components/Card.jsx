import Image from "next/image"
import styles from '../styles/Card.module.css'
import Tag from "./Tag"

function Card({ src, url, title, description }) {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.container}>
          <img className={styles.image} src={src} alt={`previsualizacion del proyecto ${title}`} />
        </div>
        <div className='my-7'>
          <a className="text-2xl text-white" href={url} target="_blank" rel="noreferrer">{title}</a>
          <p className="mt-2 text-white">{description}</p>
        </div>
      </div>
      <div className={styles.tags}>
        <Tag />
        <Tag />
        <Tag />
      </div>
    </div>
  )
}

export default Card