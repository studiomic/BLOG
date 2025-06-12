// import React from 'react'
// import get from 'lodash/get'
// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Layout from './../components/layout'
import Seo from './../components/seo'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css';
import 'highlight.js/styles/lioshi.css';

import './../styles/css/dracula-prism.css' //CSS
import './../styles/css/init.css' //CSS



import * as styles from './../styles/pages/workshop.module.scss'
import File from './../pages/data/snippet-1.md'


// import logo from "./logo.png" // Tell webpack this JS file uses this image
// 


// export default function Workshop() {
class Workshop extends React.Component {
	render() {
		// const html = get(this, 'props.data.markdownRemark.html')
		const html = `
	<h3>parse1234</h3>
	console.log(logo) // /logo.84287d09.png	
		`
		const htmlp = `<p>parse1234</p>`

		
		// const readFile = {__html: "File"};
		// const readFile ='<div dangerouslySetInnerHTML={{ __html: File }} />'

		// const csv = get(this, "readFileAsText")



		return (
			<Layout>
					<section className={styles.wrapper}>
						<nav className={styles.navigation}>
							<ul>
								<li>Basic 9 Grid</li>
							</ul>
						</nav>
						<article className={styles.container}>
							<h1>Basic 9 Grid</h1>
							<p>どこでsnippetを渡すか</p>

<hljscode File={html} />

<h1>koko</h1>

<pre>
	<code>
		{html}
	</code>
</pre>

<article dangerouslySetInnerHTML={{ __html: html }} />

<article dangerouslySetInnerHTML={{ __html: htmlp }} />
{/* <div dangerouslySetInnerHTML={readFile} /> */}

{/* <article dangerouslySetInnerHTML={{ __html: csv }} /> */}



<hljs />










						</article>
					</section>
			</Layout>
		)
	}
}
export default Workshop




export const Head = ({ data }) => {
	return (
		<Seo
			title={data.site.siteMetadata.title}
			description={data.site.siteMetadata.description}
		/>
	)
}


export const pageQuery = graphql`
query WorkshopQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
	allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
		edges {
			node {
				html
				timeToRead
				frontmatter {
					title
					date(formatString: "YYYY/MM/DD")
					description
					slug
				}
			}
		}
	}	
}	
`


// import '../styles/css/dracula-prism.css' //CSS
// import '../styles/css/init.css' //CSS

// import snippet from '../pages/data/snippet-1.txt'

// import snippet1 from '../pages/data/snippet-1.txt'
// import hljs from 'highlight.js/lib/core';
// import 'highlight.js/styles/lioshi.css';
// import '../styles/css/dracula-prism.css' //CSS
// import '../styles/css/init.css' //CSS

/**
highlight.js を import する
*/
// import javascript from 'highlight.js/lib/languages/javascript';
// import 'highlight.js/styles/lioshi.css';
// hljs.registerLanguage('js', javascript);
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
