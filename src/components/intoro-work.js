import React from 'react'
import * as styles from '../styles/components/intoro-work.module.scss'

const Introduction = () => (
  <div className={styles.intoro} loading="lazy">
    <div className={styles.grid}>
      <section className={styles.grid1}>
        {/* <p>in the trade name</p> */}
      </section>
      <section className={styles.grid2}>
        <article>
          <h1 className={styles.title}>Design Work</h1>
        </article>
      </section>
      <section className={styles.grid3}>
        {/* <p>Studio Mic</p> */}
      </section>
    </div>
  </div>
)

export default Introduction
