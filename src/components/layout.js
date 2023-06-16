import React from 'react'
import '../styles/variables.scss'
import '../styles/global.scss'
// import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        {/* <Seo /> */}
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
