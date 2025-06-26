import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/components/ws-nav.module.scss'

const wsMdn = () => (
<>
  <nav role="navigation" aria-label="Main" className={styles.wsNav}>
    <h3>Parent Properties</h3>
    <ul>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid'> - grid</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-columns'> - grid-template-columns</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-rows'> - grid-template-rows</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-areas'> - grid-template-areas</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-template'> - grid-template</Link></li>
    </ul>
    <ul>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/column-gap'> - column-gap</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/row-gap'> - row-gap</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/gap'> - gap</Link></li>
    </ul>
    <ul>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/justify-items'> - justify-items</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/align-items'> - align-items</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/place-items'> - place-items</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/justify-content'> - justify-content</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/align-content'> - align-content</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/place-content'> - place-content</Link></li>
    </ul>
    <ul>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-auto-columns'> - grid-auto-columns</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-auto-rows'> - grid-auto-rows</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-auto-flow'> - grid-auto-flow</Link></li>
    </ul>
  </nav>
</>
)
export default wsMdn
