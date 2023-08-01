import Image from "next/image"
import styles from '../styles/Card.module.css'
import Tag from "./Tag"

function Card({ src, url, title, description, tags }) {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.container}>
          <Image className={styles.image} src={src} width={500} height={500} alt={`previsualizacion del proyecto ${title}`} />
        </div>
        <div className='my-7'>
          <a className="text-xl text-white" href={url} target="_blank" rel="noreferrer">{title}</a>
          <p className="mt-2 text-white text-xs">{description}</p>
        </div>
      </div>
      <div className={styles.tags}>
        {tags?.map((tag) => {
          return(
            <Tag 
              key={tag}
              name={tag}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Card