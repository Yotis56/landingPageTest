import { useState } from 'react'
import Logo from '../../assets/sanofiLogo.png'
import { MenuToggle } from '../menuToggle/menuToggle'
import styles from './navbar.module.css'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <a href="#">
          <img src={Logo} alt="Sanofi logo" />
        </a>
      </div>
      <ul className={`${styles.navbarLinks} ${isOpen ? styles.open : ''}` } >
        <li>
          <a href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/about">
            About
          </a>
        </li>
        <li>
          <a href="/contact">
            Contact
          </a>
        </li>
        
      </ul>
      <div className={styles.toggleContainer}>
        <MenuToggle isOpen={isOpen} toggle={toggle} />
      </div>
    </nav>
  )
}