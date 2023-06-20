import React from 'react'
import Container from './container'
import * as styles from '../styles/layout/footer.module.scss'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <div className={styles.logoLink}>
      {/* <span className={styles.logo} /> */}
        <span class="logo" />
        <span>Built with <a href="https://contentful.com/">Contentful</a> and{' '}</span>
        <span><a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}</span>
        <span><a href="https://github.com/contentful/starter-gatsby-blog">Source</a></span>
      </div>
        © {new Date().getFullYear()} Studio Mic.
    </div>
  </Container>
)

export default Footer
