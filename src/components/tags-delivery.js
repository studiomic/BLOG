import * as React from "react"
import { graphql } from "gatsby"
import * as tagstyles from '../styles/tags.module.scss'


// const ArticlePreview = ({ posts }) => {

const Tags = ({ tags }) => {
	if (!tags) return null
	if (!Array.isArray(tags)) return null
	return (
		<small className={tagstyles.tags}>
			{/* {posts.map((post) => { */}



			{tags.map(tag => (
				<div key={tag.contentful_id} className={tagstyles.tag}>
				{tag.name}
				</div>
			))}
		</small>
	)
}

export const query = graphql`
	query {
		allContentfulBlogPost {
		nodes {
			metadata {
			tags {
				contentful_id
				name
			}
			}
		}
		}
	}
`

export default Tags


