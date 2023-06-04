import React from 'react'
import { Link } from 'gatsby'
// import DarkModeToggle from './DarkModeToggle';
import * as styles from '../styles/navigation.module.scss'
import IMG from "../asset/img/logo-wt.png"
// import IMG2 from "../asset/svg/iconmonstr-weather-2.svg"
// import IMG3 from "../asset/svg/moon-solid.svg"
// import IMG4 from "../asset/svg/iconmonstr-star-filled.svg"
// import IMG4 from "../asset/svg/iconmonstr-star-lined.svg"
// import IMG2 from "../asset/svg/noun-sun-5718722.svg"
// import * as mode from '../styles/darkmord.module.scss'
// import '../styles/darkmord.scss'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <img src={IMG} alt="Style de Cerise" />
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
        {/* <DarkModeToggle /> */}
      </li>
    </ul>
  </nav>
)

export default Navigation
