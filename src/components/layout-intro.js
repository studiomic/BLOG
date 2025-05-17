import React from 'react'
import '../styles/variables.scss'
import '../styles/global.scss'
import Navigation from './navigation'
import Intoro from './intoro-index'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Navigation />
        <Intoro />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}
export default Template
