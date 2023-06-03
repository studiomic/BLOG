import * as React from 'react';
import Layout from "../../components/layout"
import { graphql } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../../styles/blog-post.module.scss'
// import * as heros from '../../styles/hero.module.scss'


const Note2 = (props) => {
console.log(props)
return (
	<Layout>
		
		<div className={styles.container}>
			<div className={styles.article}>
				<h1>About page</h1>
				<h2>{props.data.site.siteMetadata.title}</h2>
				<p>{props.data.site.siteMetadata.description}</p>
				<p>{props.data.site.siteMetadata.author}</p>
				<p>{props.data.site.siteMetadata.developer}</p>
			</div>
		</div>
	</Layout>
);
};

export const query = graphql`
query {
	site {
	siteMetadata {
		title
		description
		author
		developer
	}
	}
}
`;
export default Note2;
