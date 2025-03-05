import PharmaImage from '../../assets/pharma.jpg';
import styles from './content.module.css';

export const Content = () => {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.cardTitle} >Pharma Dummy card</h1>
        <p className={styles.cardText} >
          This is a dummy text intended solely for demonstration purposes. It provides a glimpse into how pharma-related content could be structured in a card format.
        </p>
      </div>
      <img className={styles.cardImage} src={PharmaImage} alt="Some pharma image from stock images" />
    </article>
  )
}