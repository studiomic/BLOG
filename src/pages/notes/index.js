import * as React from 'react';
import Layout from '../../components/layout';
import Seo from '../../components/seo'
import Intoro from '../../components/intoro'
import { graphql, Link } from 'gatsby';
import * as styles from '../../styles/note.module.scss'

const IndexPage = ({ data }) => {
return (
<Layout>
	<Seo title="Notes" />
	<Intoro />






	<div className={styles.container}>
		<div className={styles.article}>
		<h1>Gatsby Blog Site Notes:Index</h1>
	{data.allMarkdownRemark.edges.map((edge) => (
	<div key={edge.node.id}>
		<h2>
		<Link to={`/notes/${edge.node.frontmatter.slug}`}>
			{edge.node.frontmatter.title}
		</Link>
			</h2>
		<p>{edge.node.frontmatter.date}</p>
		<p>{edge.node.frontmatter.description}</p>
		{/* <div dangerouslySetInnerHTML={{ __html: edge.node.html }} /> */}
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
		slug
		}
	}
	}
}
}
`;

export default IndexPage;