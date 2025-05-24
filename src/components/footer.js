import React from 'react'
import Container from './container'
import * as styles from '../styles/layout/footer.module.scss'

const Footer = () => (
  <Container as="footer">
    <div className={styles.footcontainer}>
      <div className={styles.footlogo}>
        <span class="logo" />
        <span>Built with <a href="https://gatsbyjs.com">Gatsby.js</a> and{' '} <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a></span>
      </div>
      <div>
        © {new Date().getFullYear()} <a href="/">Studio Mic.</a>
      </div>
    </div>
  </Container>
)

export default Footer
