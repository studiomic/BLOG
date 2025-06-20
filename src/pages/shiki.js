import React from 'react'
// import get from 'lodash/get'
import { graphql } from 'gatsby';
import Layout from './../components/layout'
import Seo from '../components/seo'
import * as iop from '../styles/components/iop.module.scss'

class ShikiPage extends React.Component {
    // content =
	render() {
		return (
		<Layout>
            <section className={iop.container}>
                <article className={iop.layoutGrid}>
                    <header>
                        <h1>Design Deeply</h1>
                    </header>
                    <section className={iop.desc}>
                        <h2>Web designer.</h2>
                        <p>Development 26th</p>
                    </section>
                    
                    <section className={iop.dev}>
                        <h3>©Studio Mic</h3>
                        <p>スタジオミック</p>
                    </section>
                    <div className={iop.rowline1}></div>
                    <div className={iop.rowline2}></div>
                    <div className={iop.rowline3}></div>
                </article>


                

            </section>
		</Layout>
	    )
	}
}

export const Head = ({ data }) => {
  return (
    <Seo
			title={data.site.siteMetadata.title}
      description={data.site.siteMetadata.description}
    />
  )
}
export default ShikiPage

export const pageQuery = graphql`
query Grid3 {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "src/pages/data/"}, frontmatter: {slug: {eq: "cssGrid-3"}}}
  ) {
    edges {
      node {
        fileAbsolutePath
        timeToRead
        html
        frontmatter {
          title
          date(formatString: "YYYY/MM/DD")
          slug
        }
      }
    }
  }
}
`
