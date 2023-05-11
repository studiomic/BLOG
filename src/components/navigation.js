import React from 'react'
import { Link } from 'gatsby'

import * as styles from '../styles/navigation.module.scss'
import IMG from "../asset/img/logo-wt.png"

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <img src={IMG} alt="" />
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
        <Link to="/" activeClassName="active">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
