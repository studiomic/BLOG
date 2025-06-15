import React from 'react'
import get from 'lodash/get'
import { graphql } from 'gatsby';
import Layout from './../components/layout'
import Seo from './../components/seo'
import * as styles from './../styles/pages/workshop.module.scss'

class Workshop extends React.Component {
	render() {
		const post = get(this, 'props.data.markdownRemark')
		const html = get(this, 'props.data.markdownRemark.html')
		const name = get(this, 'props.data.markdownRemark.fields.name')



		return (
			<Layout>
					<section className={styles.wrapper}>
						<nav className={styles.navigation}>
							<ul>
								<li>Basic 9 Grid</li>
							</ul>
						</nav>
						<article className={styles.container}>
							<h1>Basic 9 Grid</h1>

<iframe src="/notes/code-syntaxHighlighter/" frameborder="0"></iframe>

<div>
</div>

{/* {md.map((edge) => (
    <div key={edge.id}>
        {edge.node.html}
    </div>
))} */}

{/* <article dangerouslySetInnerHTML={{ __html: test }} /> */}








						</article>
					</section>
			</Layout>
		)
	}
}
export default Workshop



export const Head = ({ data }) => {
	return (
		<Seo
			title={data.site.siteMetadata.title}
			description={data.site.siteMetadata.description}
		/>
	)
}

export const pageQuery = graphql`
query WorkshopQuery {
	site {
		siteMetadata {
			title
			description
		}
	}

	allMarkdownRemark(
		filter: {fields: {collection: {eq: "codes"}, base: {name: {eq: "snippet-1"}}}}
  ) {
    edges {
      node {
        html
				fields {
          base {
            name
          }
        }
      }
    }
  }




}	
`
