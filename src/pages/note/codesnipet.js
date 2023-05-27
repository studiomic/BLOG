import React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

// import Hero from '../../components/hero'
// import { StaticImage } from 'gatsby-plugin-image'
// import Intoro from '../components/intoro'
// import * as styles from '../../styles/about.module.scss'
import * as hero from '../../styles/hero.module.scss'
import * as styles from '../../styles/blog-post.module.scss'


// import snippet from 'snippet/snippet'


export default function note() {
	return (
		<Layout>
			<Seo title="note" />
			<div className={hero.hero}>
				<StaticImage className={hero.image}
				src="../../asset/img/1123649.png"
				alt="Hero-image"
				placeholder="BLURRED"
				quality="40"
				/>
				<div className={hero.details}>
					<h1 className={hero.title}>note</h1>
				</div>
			</div>
			<div className={styles.container}>
			<div className={styles.article}>
            <div className={styles.body}>
			<h1>This is heading 1</h1>
			<p>The HTML <code>button</code> tag defines a clickable button.</p>
			<p>The CSS <code>background-color</code> property defines the background color of an element.</p>

			<h2>This is heading 2</h2>
			<p>
			Dictum sit amet justo donec enim diam vulputate. Sociis natoque penatibus et magnis dis parturient. Molestie ac feugiat sed lectus vestibulum mattis. Vitae congue mauris rhoncus aenean vel elit scelerisque. Consequat nisl vel pretium lectus quam id leo in vitae. Dictum sit amet justo donec enim diam vulputate. Sociis natoque penatibus et magnis dis parturient. Molestie ac feugiat sed lectus vestibulum mattis.
			</p>
			<h3>This is heading 3</h3>
			<pre>
				<code>yarn add react-syntax-highlighter</code>
			</pre>

			<h4>This is heading 4</h4>
			<pre>
				<code>
					
				</code>
			</pre>
			<h5>This is heading 5</h5>
			<h6>This is heading 6</h6>

			</div>	
			</div>
			</div>








		</Layout>
	)
}
