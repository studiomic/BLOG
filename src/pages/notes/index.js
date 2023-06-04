import * as React from 'react';
import Layout from '../../components/layout';
import { graphql } from 'gatsby';
import * as styles from '../../styles/blog-post.module.scss'


const IndexPage = ({ data }) => {
return (
<Layout>
	<div className={styles.container}>
		<div className={styles.article}>
	<h1>Gatsby Blog Site Notes:Index</h1>
	{data.allMarkdownRemark.edges.map((edge) => (
	<div key={edge.node.id}>
		<h2>{edge.node.frontmatter.title}</h2>
		<p>{edge.node.frontmatter.date}</p>
		<p>{edge.node.frontmatter.description}</p>
		<div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
	</div>
	
	))}
	</div>
	</div>
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
		date
		description
		}
	}
	}
}
}
`;

export default IndexPage;