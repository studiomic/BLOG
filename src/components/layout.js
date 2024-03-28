import React from 'react'
import '../styles/variables.scss'
import '../styles/global.scss'
import Navigation from './navigation'
import Footer from './footer'
import Head from './head'

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
      <Head />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}
export default Template
