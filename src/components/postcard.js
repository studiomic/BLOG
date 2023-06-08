import React from "react"
import { Link} from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PostCard = ({ node }) => {
return (
	<Link to={`/blog/${node.frontmatter.slug}`}>
	<GatsbyImage
		image={node.frontmatter.featured.childImageSharp.gatsbyImageData}
		alt={node.frontmatter.title} />
		<div>{node.frontmatter.title}</div>
	</Link>
);
}
export default PostCard