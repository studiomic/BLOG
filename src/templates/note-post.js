import React from "react"
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from '../styles/note.module.scss'
import '../styles/css/dracula-prism.css'
import '../styles/css/init.css'

class NotesPostTemplate extends React.Component {
	render() {
		const posts = get(this, 'props.data.markdownRemark')
		const html = get(this, 'props.data.markdownRemark.html')
		const pagenav = get(this, 'props.pageContext')
		let featuredImg = getImage(posts.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)

		return (
			<Layout>
				<div className={styles.container}>
					<div className={styles.article}>
						<header>
							<h1>{posts.frontmatter.title}</h1>
							<p>{posts.frontmatter.date}<span className={styles.meta}> –{' '}
							{posts.timeToRead} minute read</span></p>
							<p>{posts.frontmatter.description}</p>
						</header>

						{featuredImg && (
						<div className={styles.featuredImg}>
							<GatsbyImage image={featuredImg} />
						</div>
						)}

						<article className={styles.postBody} dangerouslySetInnerHTML={{ __html: html }} />
						<nav>
							<ul className={styles.articleNavigation}>
							{pagenav.previous && (
									<li>
										<Link to={`/notes/${pagenav.previous}`} rel="prev">
											← {pagenav.previousTitle}
										</Link>
									</li>
								)}
								{pagenav.next && (
									<li>
										<Link to={`/notes/${pagenav.next}`} rel="next">
											{pagenav.nextTitle} →
										</Link>
									</li>
								)}
							</ul>
						</nav>
					</div>
				</div>
			</Layout>
		)
	}
}
export default NotesPostTemplate

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

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
			featuredImage {
				childImageSharp {
					gatsbyImageData(width: 2000, placeholder: BLURRED)
				}
			}
		}
	}
}`