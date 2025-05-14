import React from 'react'
import get from 'lodash/get'
import { graphql, Link } from 'gatsby';
import Layout from './../components/layout'
import Seo from '../components/seo'
import * as styles from '../styles/pages/index.module.scss'
// import Intoro from './../components/intoro-work'
// import Loop from './../components/workloop'
// import * as styles from './../styles/work.module.scss'
// export default function work() {

class RootIndex extends React.Component {
	render() {
		const notes = get(this, 'props.data.allMarkdownRemark.edges')
	return (
		<Layout>
				<section className={styles.container}>
					<div className={styles.layoutGrid}>
						<article className={styles.headers}>
							<header>
								<h1>Design Deeply</h1>
								<h2>Web designer.</h2>
								<p>Development 26th</p>
							</header>
							<section>
								<h3>Studio Mic</h3>
								<p>スタジオミック</p>
							</section>
						</article>
						<div className={styles.rowline1}></div>
						<div className={styles.rowline2}></div>
						<div className={styles.rowline3}></div>
						<div className={styles.free5}></div>
						{/* <div className={styles.grid}></div>
						<div className={styles.grid}></div>
						<div className={styles.grid}></div> */}
					</div>

					<div className={styles.wrapper}>
						<div className={styles.notepost}>
							<h1 className={styles.title}>Notes</h1>
								{notes.map((edge) => (
								<div key={edge.id} className={styles.top}>
									<h2>
										<Link to={`/notes/${edge.node?.frontmatter.slug}`}>
											{edge.node.frontmatter.title}
										</Link>
									</h2>
									<dl>
										<dt>{edge.node.frontmatter.date}</dt>
										<dd>{edge.node.frontmatter.description}</dd>
									</dl>
								</div>
							))}
						</div>
						
						{/* <div className={styles.grid}>2</div>
						<div className={styles.grid}>2</div>  
						<div className={styles.grid}>2</div>
						<div className={styles.grid}>3</div>
						<div className={styles.grid}>3</div>
						<div className={styles.grid}>3</div>
						<div className={styles.grid}>4</div>
						
						<div className={styles.grid}>1</div>
						<div className={styles.grid}>2</div>
						<div className={styles.grid}>3</div> */}

					</div>
				</section>




			{/* <Intoro /> */}
			{/* <div className={styles.wrapper}>
				<div className={styles.item1}>
					

				</div>
				
			</div> */}
		</Layout>
	)
	}
}

export const Head = () => {
  return (
    <Seo
			title={'Studio Mic - Nakano - '}
      description={'WEB DEGIGN'}
    />
  )
}
export default RootIndex

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

