import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/components/ws-nav.module.scss'

const wsNavigation = () => (
<>
  <nav role="navigation" aria-label="Main" className={styles.wsNav}>
    <h3>もくじ</h3>
    <ul>
      <li><Link to='/data/cssGrid#Basic9Grid'>Basic 9 Grid</Link></li>
      <li><Link to='/data/cssGrid#Empty9Grid3'>Empty 9 Grid : in 3 item</Link></li>
      <li><Link to='/data/cssGrid#Empty9Grid8'>Empty 9 Grid : in 8 item</Link></li>
      <li><Link to='/data/cssGrid#GridAxis'>Grid Axis (グリッド軸)</Link></li>
      <li><Link to='/data/cssGrid#GridLine'>Grid Line (グリッド線)</Link></li>
      <li><Link to='/data/cssGrid#auto-fill'>auto-fill</Link></li>
      <li><Link to='/data/cssGrid#auto-fit'>auto-fit</Link></li>
      <li><Link to='/data/cssGrid#auto-over'>auto-fill and fit over item</Link></li>
      <li><Link to='/data/cssGrid#'></Link></li>
      <li><Link to='/data/cssGrid#'></Link></li>
    </ul>
<br />



Basic 9 Grid<br />
fr 単位が優秀な件<br />
Empty 9 Grid<br />

    <ul>
      <li><Link to='/data/cssGrid#Empty-9Grid'>Empty 9 Grid</Link></li>
      <li>
        <Link to="/data/cssGrid/" activeClassName="active">cssGrid</Link>
      </li>
      <li>
        <Link to="/data/cssGrid-2/" activeClassName="active">cssGrid-2</Link>
      </li>
      <li>
        <Link to="/data/cssGrid-3/" activeClassName="active">cssGrid-3</Link>
      </li>
      <li></li>
      <li>Aspect Ratio 16 : 9</li>
      <li>まずここがFlexBoxと決定的に違うところ。</li>
      
      
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
