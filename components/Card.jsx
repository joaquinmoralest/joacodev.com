import styles from '../styles/Card.module.css'

function Card({ src, title, repoUrl, demoUrl }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={src} alt={`previsualizacion del proyecto ${title}`} />
      <h3 className="text-xl text-center text-white">{title}</h3>
      <div className={styles.buttons}>
        <a className={styles.button} href={repoUrl} target='_blank' rel='noreferrer'>
          <ion-icon name="logo-github"></ion-icon>
          Repositorio
        </a>
        <a className={styles.button} href={demoUrl} target='_blank' rel='noreferrer'>
          <ion-icon name="eye"></ion-icon>
          Demo
        </a>
      </div>
    </div>
  )
}

export default Card