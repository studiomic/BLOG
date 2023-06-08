import React from "react"
import { graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from '../styles/note.module.scss'
import '../styles/css/dracula-prism.css'
import '../styles/css/init.css'

const NotePostTemplate = ({data}) => {
const { markdownRemark } = data
const { frontmatter, html } = markdownRemark
return (
<Layout>
	<Seo
	title={frontmatter.title}
	description={frontmatter.description}
	/>
	<div className={styles.container}>
		<div className={styles.article}>
			<header>
				<h1>{frontmatter.title}</h1>
				<p>{frontmatter.date}</p>
				<p>{frontmatter.description}</p>
			</header>
			<article className={styles.postBody} dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	</div>
</Layout>
)
}
export default NotePostTemplate

export const pageQuery = graphql`
query($id: String!) {
markdownRemark(id: { eq: $id }) {
	html
	timeToRead
	frontmatter {
		title
		date(formatString: "YYYY/MM")
		slug
		description
		book
	}
}
}
`