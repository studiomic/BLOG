import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/components/ws-nav.module.scss'

const wsMdnGolden = () => (
<>
  <nav role="navigation" aria-label="Main" className={styles.wsNav}>
    <h3>About Grid</h3>
    <ul>
      <li><Link to='https://developer.mozilla.org/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout'>グリッドレイアウトの基本概念</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Glossary/Grid'>Grid (グリッド)</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Glossary/Grid_Areas'>Grid Areas (グリッド領域)</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Glossary/Grid_Axis'>Grid Axis (グリッド軸)</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Glossary/Grid_Cell'>Grid Cell (グリッドセル)</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Glossary/Grid_Column'>Grid Column (グリッド列)</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Glossary/Grid_Container'>Grid container(グリッドコンテナ)</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Glossary/Grid_Lines'>Grid Line (グリッド線)</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Glossary/Grid_Row'>Grid Row (グリッド行)</Link></li>
      <li><Link to='https://developer.mozilla.org/ja/docs/Glossary/Grid_Tracks'>Grid Track (グリッドトラック)</Link></li>
    </ul>
  </nav>
</>
)
export default wsMdnGolden
