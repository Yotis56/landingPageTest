import styles from './menuToggle.module.css'

export const MenuToggle = ({ toggle, isOpen }) => {

  return (
    <button onClick={toggle} className={styles.button}>
      <svg viewBox="0 0 23 23" width="23" height="23">
        <line
          className={`${styles.line} ${isOpen ? styles.openLine1 : ''}`}
          x1="2"
          y1="2.5"
          x2="20"
          y2="2.5"
        />
        <line
          className={`${styles.line} ${isOpen ? styles.openLine2 : ''}`}
          x1="2"
          y1="9.423"
          x2="20"
          y2="9.423"
        />
        <line
          className={`${styles.line} ${isOpen ? styles.openLine3 : ''}`}
          x1="2"
          y1="16.346"
          x2="20"
          y2="16.346"
        />
      </svg>
    </button>
  )
}