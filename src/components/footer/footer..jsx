import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.socialMedia}>
          <p>Follow us on our social media!</p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook color="#fff" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter color="#fff" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram color="#fff" />
            </a>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <p>Email: dummy@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Dummy Street, Imaginary City</p>
        </div>
      </div>
      <p className={styles.finalNote}>
        developed with <span role="img" aria-label="heart">❤️</span> for a technical test
      </p>
    </footer>
  )
}