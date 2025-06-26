import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/components/ws-nav.module.scss'

const wsMdnChildren = () => (
<>
  <nav role="navigation" aria-label="Main" className={styles.wsNav}>
    <h3>Children Properties</h3>
    <ul>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-column-start'> - grid-column-start</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-column-end'> - grid-column-end</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-row-start'> - grid-row-start</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-row-end'> - grid-row-end</Link></li>
    </ul>
    <ul>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-column'> - grid-column</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-row'> - grid-row</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-area'> - grid-area</Link></li>
    </ul>
    <ul>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/justify-self'> - justify-self</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/align-self'> - align-self</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/place-self'> - place-self</Link></li>
    </ul>
  </nav>
</>
)
export default wsMdnChildren
