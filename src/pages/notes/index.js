import * as React from 'react';
import Layout from '../../components/layout';
import { graphql, Link } from 'gatsby';

const IndexPage = ({ data }) => {
return (
	<Layout>
	<h1>Gatsby Blog Site</h1>
	{data.allMarkdownRemark.edges.map((edge) => (
		<div key={edge.node.id}>
		<h2><Link to={`/notes/${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link></h2>
		<p>{edge.node.frontmatter.date}</p>
		<p>{edge.node.frontmatter.description}</p>
		
		</div>
	))}
	</Layout>
);
};

export const query = graphql`
query {
	allMarkdownRemark {
	edges {
		node {
		html
		timeToRead
		frontmatter {
			title
			date(formatString: "YYYY/MM")
			description
			slug
			book
		}
		}
	}
	}
}
`;

export default IndexPage;

//<div dangerouslySetInnerHTML={{ __html: edge.node.html }} />