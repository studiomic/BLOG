import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Intoro from '../components/intoro-notes'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import * as styles from '../styles/note.module.scss'

class NotesIndex extends React.Component {
	render() {
		const notes = get(this, 'props.data.allMarkdownRemark.edges')
		return (
			<Layout>
				<Intoro />
				<div class="wavervs">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path d="M0,64L80,85.3C160,107,320,149,480,144C640,139,800,85,960,58.7C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/></svg>
				</div>
				<section className={styles.container}>
					<article className={styles.article}>
					{notes.map((edge) => (
						<div key={edge.node.id} className={styles.top}>
							<h2>
								<Link to={`/notes/${edge.node.frontmatter.slug}`}>
									{edge.node.frontmatter.title}
								</Link>
							</h2>
							<dl>
								<dt>{edge.node.frontmatter.date}</dt>
								<dd>{edge.node.frontmatter.description}</dd>
							</dl>
						</div>
					))}
					</article>
				</section>
			</Layout>
		)
	}
}

export const pageQuery = graphql`
	query NotesIndexQuery {
	allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
		edges {
			node {
				html
				timeToRead
				frontmatter {
					title
					date(formatString: "YYYY/MM/DD")
					description
					slug
				}
			}
		}
	}
}
`

export const Head = () => <Seo title="Notes" />

export default NotesIndex;

