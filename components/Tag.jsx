import styles from '../styles/Tag.module.css'

function Tag({ name }) {
  return (
    <div className={styles.tag}>
      <p>{name}</p>
    </div>
  )
}

export default Tag