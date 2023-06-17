import React from 'react'
import get from 'lodash/get'
import { Link, graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Container from '../components/container'
import ArticlePreview from '../components/article-preview'
import * as styles from '../styles/hero.module.scss'
import * as tagstyles from '../styles/tags.module.scss'
// import { StaticImage } from 'gatsby-plugin-image'

class TagIndex extends React.Component {
	render() {
		const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
		const tags = get(this, 'props.data.allContentfulTag.nodes')
		const tagname = get(this, 'props.pageContext')
		
		return (
		<Layout location={this.props.location}>
			<div className={styles.hero}>
				<div className={styles.details}>
					<h1 className={styles.title}>TAGS : {tagname.name}</h1>
				</div>
			</div>
			<ArticlePreview posts={posts} />
			<Container>
				<h2 class="hero-title">TAG Cloud</h2>
				<small className={tagstyles.center}>
				{tags.map(tag => (
					<div key={tag} className={tagstyles.tag}>
						<Link to={`/tags/${tag.contentful_id}`} activeClassName="active">{tag.name}</Link>
					</div>
				))}_
					<div key="tag" className={tagstyles.tag}>
						<Link to="/tags/">ALL Tags</Link>
					</div>
				</small>
			</Container>
		</Layout>
		)
	}
}
export default TagIndex

export const Head =  ({ pageContext }) => {
	const names = 'Tags:' + pageContext.name;
  return (
    <Seo
      title={names}
    />
  )
}

export const pageQuery = graphql`
query TagIndexQuery ($slug: String!){
	allContentfulTag {
		nodes {
			contentful_id
			name
		}
	}
	allContentfulBlogPost(
		sort: { publishDate: DESC }
		filter: {metadata: {tags: {elemMatch: {contentful_id: {eq: $slug }}}}}
	){
		nodes {
			title
			slug
			publishDate(formatString: "YYYY/MM/DD")
			metadata {
				tags {
					contentful_id
					name
				}
			}
			heroImage {
				gatsbyImage(
					layout: FULL_WIDTH
					placeholder: BLURRED
					width: 424
					height: 212
				)
			}
			description {
			raw
			}
		}
	}
}
`