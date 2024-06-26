import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/layout/navigation.module.scss'
import ModeButton from './mode'
// import ModeToggleButton from './modetoggleButton'
// import ModeToggle from './modeToggle'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
    <StaticImage
      src="../asset/img/Logo640.png"
      alt="LOGO"
      placeholder="blurred"
      layout="fixed"
      width={128}
      height={75}
    />
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/about/" activeClassName="active">
          About
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/notes/" activeClassName="active">
          Notes
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <ModeButton />
      </li>
    </ul>
  </nav>
)
export default Navigation


