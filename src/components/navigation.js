import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/layout/navigation.module.scss'
import ModeButton from './mode'

const Navigation = () => (
  <nav role="navigation" className={styles.navcontainer} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <StaticImage
        src="../asset/img/Logo.avif"
        alt="Stylo de Cerise"
        placeholder="blurred"
        layout="fixed"
        width={128}
        height={75}
      />
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <ModeButton />
      </li>
    </ul>
  </nav>
)
export default Navigation

// <li className={styles.navigationItem}>
// <Link to="/new-index/" activeClassName="active">
//           index
//         </Link>
//       </li> */}
// {/* <li className={styles.navigationItem}>
//   <Link to="/work/" activeClassName="active">
//     Work
//   </Link>
// </li> */}
// {/* <li className={styles.navigationItem}>
//   <Link to="/blog/" activeClassName="active">
//     Blog
//   </Link>
// </li> */}
