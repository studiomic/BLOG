import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/components/ws-nav.module.scss'

const wsLink = () => (
<>
  <nav role="navigation" aria-label="Main" className={styles.wsNav}>
    <h3>CheatsheetsLink</h3>
    <ul>
      <li><Link to='https://grid.malven.co/'> - GRID: simple cheatsheet+clipboard</Link></li>
      <li><Link to='https://gridbyexample.com/examples/'> - Grid by Example</Link></li>
      <li><Link to='https://css-tricks.com/snippets/css/complete-guide-grid/'> - CSS Grid Layout Guide</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-row-end'> - grid-row-end</Link></li>
      <li><Link to='https://www.webcreatorbox.com/blog/css-grid-layout'> - CSSグリッドレイアウトで、サイズが違う複数のボックスをタイル状に配置する</Link></li>
    </ul>
  </nav>
</>
)
export default wsLink
