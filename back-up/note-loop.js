import React from 'react'
// import get from 'lodash/get'
import { Link } from 'gatsby'

import * as styles from '../styles/pages/index.module.scss'
// import { graphql, Link } from 'gatsby';
// import Pagination from '../components/pagination'
// import Seo from '../components/seo'
// import Layout from './../components/layout'
// import Intoro from './../components/intoro-index'
// import Loop from './../components/workloop'
// import * as styles from './../styles/work.module.scss'
// export default function work() {

// class NotesPegerTemplate extends React.Component {
const NoteLoopPreview = ({ notes }) => {
	
	const notes = get(this, 'props.data.allMarkdownRemark.edges')
	// render() {
		// const pageContext = get(this, 'props.pageContext')
		return (
			{notes.map((edge) => (
			<div key={edge.id} className={styles.postloop}>
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
		)
	// }
}
export default NoteLoopPreview



// export const Head = ({ data }) => {
//   return (
//     <Seo
// 			title={data.site.siteMetadata.title}
//       description={data.site.siteMetadata.description}
//     />
//   )
// }
// export default NotesPegerTemplate

// export const pageQuery = graphql`
// query HomeQuery ($skip: Int!, $limit: Int!){
// 	site {
// 		siteMetadata {
// 			title
// 			description
// 		}
// 	}
// 	allMarkdownRemark(
// 		sort: {frontmatter: {date: DESC}}
// 		limit: $limit
// 		skip: $skip
// 		) {
// 		edges {
// 			node {
// 				html
// 				timeToRead
// 				frontmatter {
// 					title
// 					date(formatString: "YYYY/MM/DD")
// 					description
// 					slug
// 				}
// 			}
// 		}
// 	}	
// }	
// `

// <Pagination pageContext={pageContext} />