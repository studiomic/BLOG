import React from 'react'
import { Link } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../styles/components/ws-nav.module.scss'
// import ModeButton from './mode'

const Navigation = () => (
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
    
    <h3>Parent Properties</h3>
    <ul>
      <li>
        <Link to='/data/cssGrid-2#display'>Grid</Link>
      </li>
        
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid'> - grid</Link>
      </li>  
        
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-columns'> - grid-template-columns</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-rows'> - grid-template-rows</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-template-areas'> - grid-template-areas</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-template'> - grid-template</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/column-gap'> - column-gap</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/row-gap'> - row-gap</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/gap'> - gap</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/justify-items'> - justify-items</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/align-items'> - align-items</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/place-items'> - place-items</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/justify-content'> - justify-content</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/align-content'> - align-content</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/place-content'> - place-content</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-auto-columns'> - grid-auto-columns</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-auto-rows'> - grid-auto-rows</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-auto-flow'> - grid-auto-flow</Link>
      </li>
      
    </ul>


    <h3>Children</h3>
    <ul>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-column-start'> - grid-column-start</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-column-end'> - grid-column-end</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-row-start'> - grid-row-start</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-row-end'> - grid-row-end</Link>
      </li>
      
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-column'> - grid-column</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-row'> - grid-row</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/grid-area'> - grid-area</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/justify-self'> - justify-self</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/align-self'> - align-self(align-items)</Link>
      </li>
      <li>
        <Link to='https://developer.mozilla.org/ja/docs/Web/CSS/place-self'> - place-self</Link>
      </li>
    </ul>
  </nav>
</>
)
export default Navigation
