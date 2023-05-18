import React from 'react'
import { Link } from 'gatsby'
import Mode from './ThemeToggler'


import '../styles/darkmord.scss'
import * as styles from '../styles/navigation.module.scss'
// import * as mode from '../styles/darkmord.module.scss'
import IMG from "../asset/img/logo-wt.png"
// import IMG2 from "../asset/svg/noun-sun-5718722.svg"
import IMG2 from "../asset/svg/iconmonstr-weather-2.svg"

import IMG3 from "../asset/svg/moon-solid.svg"
import IMG4 from "../asset/svg/iconmonstr-star-filled.svg"
// import IMG4 from "../asset/svg/iconmonstr-star-lined.svg"




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
      {/* <li className={styles.navigationItem}>
        <Link to="/contact/" activeClassName="active">
          Contact
        </Link>
      </li> */}
    </ul>

    <div class="switcher">
      <input type="radio" id="btn-mode" name="themes" />
      <label for="light-theme">
        <span><img src={IMG2} alt="" />Light</span>
      </label>

      <input type="radio" id="btn-mode" name="themes" />
      <label for="dark-theme">
        <span><img src={IMG3} alt="" />Dark</span>
      </label>

      <input type="radio" id="btn-mode" name="themes" />
      <label for="black-theme">
        <span><img src={IMG4} alt="" />Black</span>
      </label>
      <span class="slider"></span>
    </div>
  </nav>
)

export default Navigation
