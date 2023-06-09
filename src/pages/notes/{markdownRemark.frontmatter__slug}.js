import * as React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout';
import Seo from '../../components/seo'

import * as styles from '../../styles/note.module.scss'
import '../../styles/css/dracula-prism.css'
import '../../styles/css/init.css'

export default function NotesPostTemplate({ data: { markdownRemark } }) {
const { frontmatter, html } = markdownRemark;
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
);
}

export const query = graphql`
query {
	allMarkdownRemark {
	nodes {
		html
		timeToRead
		frontmatter {
			title
			date(formatString: "YYYY/MM/DD")
			description
			slug
			book
		}
	}
	}
}
`;
