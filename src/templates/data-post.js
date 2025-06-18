import React from "react"
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Navigation from '../components/workshop-nav'
import * as styles from '../styles/layout/workshop-grid.module.scss'

class NotesPostTemplate extends React.Component {
	render() {
		const html = get(this, 'props.data.markdownRemark.html')
		return (
			<Layout>
				<section className={styles.containerGrid}>
					<section className={styles.pagehead}>
						<h1>WORKSHOP : CSS Grid, Easy to confuse.</h1>
						<p>間違いやすいプロパティ集</p>
						</section>
					<aside className={styles.navigation}>
						<Navigation />
					</aside>
					<article className={styles.postWrap}>
						<div className={styles.postmain} dangerouslySetInnerHTML={{ __html: html }} />
					</article>
				</section>
			</Layout>
		)
	}
}
export default NotesPostTemplate


export const pageQuery = graphql`
query CodePostQuery ($id: String!){
	markdownRemark(id: { eq: $id }) {
		id
		html
		timeToRead
		frontmatter {
			title
			date(formatString: "YYYY/MM/DD")
			description
			slug
			featuredImage {
				childImageSharp {
					gatsbyImageData(width: 2000, placeholder: BLURRED)
				}
			}
		}
	}
}`