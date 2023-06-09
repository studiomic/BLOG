import React from "react"
import get from 'lodash/get'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from '../styles/note.module.scss'
import '../styles/css/dracula-prism.css'
import '../styles/css/init.css'

class NotesPostTemplate extends React.Component {
	render() {
		const posts = get(this, 'props.data.markdownRemark')
		const html = get(this, 'props.data.markdownRemark.html')
		return (
			<Layout>
				<Seo
          title={posts.frontmatter.title}
          description={posts.frontmatter.description}
        />
				<div className={styles.container}>
					<div className={styles.article}>
						<header>
							<h1>{posts.frontmatter.title}</h1>
							<p>{posts.frontmatter.date}</p>
							<p>{posts.frontmatter.description}</p>
						</header>
						<article className={styles.postBody} dangerouslySetInnerHTML={{ __html: html }} />
					</div>
				</div>
			</Layout>
		)
	}
}
export default NotesPostTemplate



export const pageQuery = graphql`
query NotesPostQuery ($id: String!){
	markdownRemark(id: { eq: $id }) {
		id
		html
		timeToRead
		frontmatter {
			title
			date(formatString: "YYYY/MM/DD")
			description
			slug
		}
	}
}`