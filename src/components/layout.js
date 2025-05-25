import React from 'react'
import '../styles/variables.scss'
import '../styles/global.scss'
import Progressbar from './progressbar'
import Navigation from './navigation'
import Footer from './footer'

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Progressbar />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}
export default Template
