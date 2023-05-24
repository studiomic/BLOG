// import { Link, graphql } from 'gatsby'

import React from 'react'
import { Link } from 'gatsby';
// import kebabCase from 'lodash/kebabCase';



const Tags = ({ location, pageContext, data }) => {
const { tag } = pageContext;
const { edges, totalCount } = data.contentfulBlogPost;
const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;
const siteTitle = data.site.siteMetadata.title;

return (
	<Layout location={location} title={siteTitle}>
	<Seo title={tagHeader} />
	<h1>{tagHeader}</h1>
	<ul>
		{edges.map(({ node: { fields: { slug }, frontmatter: { title } } }) => (
		<li key={slug}>
			<Link to={slug}>{title}</Link>
		</li>
		))}
	</ul>
	<p>
		<Link to="/tags">All tags</Link>
	</p>
	</Layout>
);
};