import React from 'react'
import { Link } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/components/ws-nav.module.scss'
// import ModeButton from './mode'

const wsNavigation = () => (
<>
  <nav role="navigation" aria-label="Main" className={styles.wsNav}>
    <h3>もくじ</h3>
    <ul>
      <li><Link to='/data/cssGrid#Basic-9Grid'>Basic 9 Grid</Link></li>
      <li><Link to='/data/cssGrid#Empty-9Grid'>Empty 9 Grid</Link></li>
      
      
      
      <li>auto-track-list</li>


      
      <li>Resources</li>
      <li>格子窓・マス目・方眼紙・gutter・Garter・側溝・ガーター</li>
      <li>Pickup</li>
      <li>Column</li>
    </ul>
  </nav>
</>
)
export default wsNavigation
